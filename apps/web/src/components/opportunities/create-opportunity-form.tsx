"use client";

import { useActionState } from "react";
import {
  createOpportunityAction,
  type ActionState,
} from "@/app/opportunities/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Opportunity } from "@job-hunt-os/shared";

const initialState: ActionState<Opportunity> = {
  success: false,
};

export function CreateOpportunityForm() {
  const [state, formAction, isPending] = useActionState(
    createOpportunityAction,
    initialState
  );

  return (
    <Card className="w-full max-w-lg mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Thêm Cơ hội Tuyển dụng Mới</CardTitle>
        <CardDescription>
          Xác thực dữ liệu trực tiếp qua Zod schema của @job-hunt-os/shared
        </CardDescription>
      </CardHeader>

      <form action={formAction}>
        <CardContent className="space-y-4">
          {state.message && (
            <div
              className={`p-3 rounded-md text-sm border ${
                state.success
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800"
                  : "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950 dark:text-rose-200 dark:border-rose-800"
              }`}
            >
              {state.message}
            </div>
          )}

          <div className="space-y-1.5">
            <label
              htmlFor="company_name"
              className="text-sm font-medium leading-none"
            >
              Tên công ty *
            </label>
            <Input
              id="company_name"
              name="company_name"
              placeholder="Ví dụ: Google, Shopee, VNG..."
              required
            />
            {state.fieldErrors?.company_name && (
              <p className="text-xs text-rose-600 font-medium">
                {state.fieldErrors.company_name[0]}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="role_title"
              className="text-sm font-medium leading-none"
            >
              Vị trí ứng tuyển *
            </label>
            <Input
              id="role_title"
              name="role_title"
              placeholder="Ví dụ: Senior Backend Engineer..."
              required
            />
            {state.fieldErrors?.role_title && (
              <p className="text-xs text-rose-600 font-medium">
                {state.fieldErrors.role_title[0]}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="original_url"
              className="text-sm font-medium leading-none"
            >
              Đường dẫn bài tuyển dụng (URL)
            </label>
            <Input
              id="original_url"
              name="original_url"
              type="url"
              placeholder="https://..."
            />
            {state.fieldErrors?.original_url && (
              <p className="text-xs text-rose-600 font-medium">
                {state.fieldErrors.original_url[0]}
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-2">
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Đang xử lý..." : "Lưu Cơ hội"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
