import { z } from 'zod';
import { ApplicationStatusSchema } from './enums';

export const ApplicationSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  opportunity_id: z.string().uuid(),
  attempt_number: z.number().int().positive().default(1),
  status: ApplicationStatusSchema.default('saved'),
  applied_date: z.string().optional(),
  cv_version_name: z.string().optional(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
});

export const CreateApplicationSchema = ApplicationSchema.omit({
  id: true,
  user_id: true,
  created_at: true,
  updated_at: true,
});
