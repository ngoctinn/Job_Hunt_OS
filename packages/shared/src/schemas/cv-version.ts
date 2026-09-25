import { z } from 'zod';

export const CVVersionSchema = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid().optional(),
  version_name: z.string().trim().min(1, 'Tên phiên bản CV không được để trống'),
  file_path: z.string().min(1, 'Đường dẫn file không được để trống'),
  storage_bucket: z.string().default('cv_files'),
  is_active: z.boolean().default(true),
  created_at: z.string().datetime().optional(),
});

export const CreateCVVersionSchema = CVVersionSchema.omit({
  id: true,
  user_id: true,
  created_at: true,
});
