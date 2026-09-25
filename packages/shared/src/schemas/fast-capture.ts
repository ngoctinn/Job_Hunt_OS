import { z } from 'zod';
import { ApplicationStatusSchema } from './enums';

export const FastCaptureSchema = z.object({
  company_name: z.string().trim().min(1, 'Tên công ty không được để trống'),
  role_title: z.string().trim().min(1, 'Vị trí ứng tuyển không được để trống'),
  source: z.string().default('direct'),
  original_url: z.string().url('URL không đúng định dạng').optional().or(z.literal('')),
  raw_jd_text: z.string().min(10, 'Nội dung JD tối thiểu 10 ký tự'),
  cv_version_name: z.string().optional(),
  status: ApplicationStatusSchema.default('saved'),
});
