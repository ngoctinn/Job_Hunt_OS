import { z } from 'zod';
import * as schemas from '../schemas';

export type ApplicationStatus = z.infer<typeof schemas.ApplicationStatusSchema>;
export type EventType = z.infer<typeof schemas.EventTypeSchema>;
export type SnapshotSource = z.infer<typeof schemas.SnapshotSourceSchema>;

export type FastCaptureInput = z.infer<typeof schemas.FastCaptureSchema>;

export type Opportunity = z.infer<typeof schemas.OpportunitySchema>;
export type CreateOpportunityInput = z.infer<typeof schemas.CreateOpportunitySchema>;

export type Application = z.infer<typeof schemas.ApplicationSchema>;
export type CreateApplicationInput = z.infer<typeof schemas.CreateApplicationSchema>;

export type JDSnapshot = z.infer<typeof schemas.JDSnapshotSchema>;
export type CreateJDSnapshotInput = z.infer<typeof schemas.CreateJDSnapshotSchema>;

export type EventLog = z.infer<typeof schemas.EventSchema>;
export type CreateEventInput = z.infer<typeof schemas.CreateEventSchema>;

export type NextAction = z.infer<typeof schemas.NextActionSchema>;
export type CreateNextActionInput = z.infer<typeof schemas.CreateNextActionSchema>;

export type CVVersion = z.infer<typeof schemas.CVVersionSchema>;
export type CreateCVVersionInput = z.infer<typeof schemas.CreateCVVersionSchema>;
