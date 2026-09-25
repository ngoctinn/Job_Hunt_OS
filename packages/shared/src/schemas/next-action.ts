import { z } from 'zod';

export const NextActionSchema = z.object({
  id: z.string().uuid().optional(),
  application_id: z.string().uuid(),
  user_id: z.string().uuid().optional(),
  title: z.string().min(1, 'Nội dung hành động không được để trống'),
  due_date: z.string().optional(), // YYYY-MM-DD
  is_completed: z.boolean().default(false),
  created_at: z.string().datetime().optional(),
  completed_at: z.string().datetime().optional(),
});

export const CreateNextActionSchema = NextActionSchema.omit({
  id: true,
  user_id: true,
  created_at: true,
  completed_at: true,
});
