import { describe, it, expect } from 'vitest';
import { ApplicationStatusSchema, EventTypeSchema, SnapshotSourceSchema } from '../src/schemas/enums';

describe('Enums Schemas', () => {
  describe('ApplicationStatusSchema', () => {
    it('should accept valid status values', () => {
      const validStatuses = ['saved', 'applied', 'interviewing', 'offered', 'rejected', 'withdrawn', 'closed'];
      validStatuses.forEach((status) => {
        expect(ApplicationStatusSchema.parse(status)).toBe(status);
      });
    });

    it('should reject invalid status values', () => {
      const invalidStatuses = ['in_progress', 'done', 'pending', '', 123];
      invalidStatuses.forEach((status) => {
        expect(() => ApplicationStatusSchema.parse(status)).toThrow();
      });
    });
  });

  describe('EventTypeSchema', () => {
    it('should accept valid event types', () => {
      const validTypes = [
        'applied',
        'hr_screen',
        'technical_test',
        'tech_interview',
        'culture_interview',
        'final_interview',
        'offer_received',
        'rejected',
        'custom',
      ];
      validTypes.forEach((type) => {
        expect(EventTypeSchema.parse(type)).toBe(type);
      });
    });

    it('should reject invalid event types', () => {
      expect(() => EventTypeSchema.parse('invalid_event')).toThrow();
    });
  });

  describe('SnapshotSourceSchema', () => {
    it('should accept valid snapshot sources', () => {
      ['extension', 'paste', 'manual'].forEach((source) => {
        expect(SnapshotSourceSchema.parse(source)).toBe(source);
      });
    });

    it('should reject invalid snapshot sources', () => {
      expect(() => SnapshotSourceSchema.parse('api')).toThrow();
    });
  });
});
