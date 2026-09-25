import { z } from 'zod';
import { EventTypeSchema } from './enums';

export const EventSchema = z.object({
  id: z.string().uuid().optional(),
  application_id: z.string().uuid(),
  user_id: z.string().uuid().optional(),
  event_type: EventTypeSchema,
  event_date: z.string(), // YYYY-MM-DD
  title: z.string().min(1, 'Tiêu đề sự kiện không được để trống'),
  notes: z.string().optional(),
  created_at: z.string().datetime().optional(),
});

export const CreateEventSchema = EventSchema.omit({
  id: true,
  user_id: true,
  created_at: true,
});
