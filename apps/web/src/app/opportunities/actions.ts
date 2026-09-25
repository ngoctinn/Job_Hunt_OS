"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import {
  CreateOpportunitySchema,
  type Opportunity,
} from "@job-hunt-os/shared";

export type ActionState<T = unknown> = {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
  data?: T;
};

export async function createOpportunityAction(
  prevState: ActionState<Opportunity>,
  formData: FormData
): Promise<ActionState<Opportunity>> {
  const rawUrl = formData.get("original_url");
  const rawData = {
    company_name: String(formData.get("company_name") ?? "").trim(),
    role_title: String(formData.get("role_title") ?? "").trim(),
    source: String(formData.get("source") ?? "").trim() || "direct",
    original_url:
      rawUrl && String(rawUrl).trim() !== "" ? String(rawUrl).trim() : null,
  };

  const validation = CreateOpportunitySchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Dữ liệu nhập không hợp lệ.",
      fieldErrors: validation.error.flatten().fieldErrors,
    };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    if (process.env.NODE_ENV === "development") {
      // Chế độ demo an toàn trong môi trường phát triển khi chưa kết nối Mac Mini
      return {
        success: true,
        message: `Đã xác thực hợp lệ cơ hội: ${validation.data.role_title} tại ${validation.data.company_name} (chế độ demo).`,
        data: {
          id: "00000000-0000-0000-0000-000000000000",
          user_id: "00000000-0000-0000-0000-000000000000",
          company_name: validation.data.company_name,
          role_title: validation.data.role_title,
          source: validation.data.source || "direct",
          original_url: validation.data.original_url || null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      };
    }

    return {
      success: false,
      message: "Yêu cầu đăng nhập để lưu cơ hội việc làm.",
    };
  }

  const { data, error } = await supabase
    .from("opportunities")
    .insert({
      company_name: validation.data.company_name,
      role_title: validation.data.role_title,
      source: validation.data.source || "direct",
      original_url: validation.data.original_url || null,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    return {
      success: false,
      message: `Lỗi cơ sở dữ liệu: ${error.message}`,
    };
  }

  revalidatePath("/");

  return {
    success: true,
    message: "Tạo cơ hội việc làm thành công!",
    data: data as Opportunity,
  };
}
