import { z } from 'zod';

export const OpportunitySchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  company_name: z.string().trim().min(1, 'Tên công ty không được để trống'),
  role_title: z.string().trim().min(1, 'Vị trí ứng tuyển không được để trống'),
  source: z.string().default('direct'),
  original_url: z.string().url('URL không đúng định dạng').nullable().optional(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
});

export const CreateOpportunitySchema = OpportunitySchema.omit({
  id: true,
  user_id: true,
  created_at: true,
  updated_at: true,
});
