import { z } from 'zod';

export const ApplicationStatusSchema = z.enum([
  'saved',
  'applied',
  'interviewing',
  'offered',
  'rejected',
  'withdrawn',
  'closed',
]);

export const EventTypeSchema = z.enum([
  'applied',
  'hr_screen',
  'technical_test',
  'tech_interview',
  'culture_interview',
  'final_interview',
  'offer_received',
  'rejected',
  'custom',
]);

export const SnapshotSourceSchema = z.enum(['extension', 'paste', 'manual']);
