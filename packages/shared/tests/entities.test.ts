import { describe, it, expect } from 'vitest';
import { OpportunitySchema, CreateOpportunitySchema } from '../src/schemas/opportunity';
import { NextActionSchema } from '../src/schemas/next-action';
import { EventSchema } from '../src/schemas/event';

describe('Entity Schemas', () => {
  describe('OpportunitySchema', () => {
    it('should validate UUIDs for id and user_id', () => {
      const valid = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        user_id: '123e4567-e89b-12d3-a456-426614174001',
        company_name: 'Acme Inc',
        role_title: 'Fullstack Dev',
      };
      const result = OpportunitySchema.parse(valid);
      expect(result.id).toBe(valid.id);
      expect(result.source).toBe('direct');

      expect(() =>
        OpportunitySchema.parse({
          ...valid,
          id: 'invalid-uuid',
        })
      ).toThrow();
    });

    it('should omit system fields in CreateOpportunitySchema', () => {
      const input = {
        company_name: 'Acme Inc',
        role_title: 'Fullstack Dev',
        source: 'linkedin',
      };
      const result = CreateOpportunitySchema.parse(input);
      expect(result.company_name).toBe('Acme Inc');
      expect(result.source).toBe('linkedin');
    });
  });

  describe('NextActionSchema', () => {
    it('should enforce application_id and title', () => {
      const valid = {
        application_id: '123e4567-e89b-12d3-a456-426614174000',
        title: 'Gửi email follow-up HR',
      };
      const result = NextActionSchema.parse(valid);
      expect(result.title).toBe('Gửi email follow-up HR');
      expect(result.is_completed).toBe(false);

      expect(() =>
        NextActionSchema.parse({
          ...valid,
          title: '',
        })
      ).toThrowError('Nội dung hành động không được để trống');
    });
  });

  describe('EventSchema', () => {
    it('should validate event_type and require title', () => {
      const valid = {
        application_id: '123e4567-e89b-12d3-a456-426614174000',
        event_type: 'tech_interview',
        event_date: '2026-09-30',
        title: 'Phỏng vấn kỹ thuật vòng 1',
      };
      const result = EventSchema.parse(valid);
      expect(result.event_type).toBe('tech_interview');

      expect(() =>
        EventSchema.parse({
          ...valid,
          title: '',
        })
      ).toThrowError('Tiêu đề sự kiện không được để trống');
    });
  });
});
