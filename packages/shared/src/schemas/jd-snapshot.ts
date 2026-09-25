import { z } from 'zod';
import { SnapshotSourceSchema } from './enums';

export const JDSnapshotSchema = z.object({
  id: z.string().uuid(),
  application_id: z.string().uuid(),
  user_id: z.string().uuid(),
  raw_text: z.string().min(10, 'Nội dung JD tối thiểu 10 ký tự'),
  snapshot_source: SnapshotSourceSchema.default('extension'),
  created_at: z.string().datetime().optional(),
});

export const CreateJDSnapshotSchema = JDSnapshotSchema.omit({
  id: true,
  user_id: true,
  created_at: true,
});
