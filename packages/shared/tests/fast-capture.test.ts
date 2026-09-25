import { describe, it, expect } from 'vitest';
import { FastCaptureSchema } from '../src/schemas/fast-capture';

describe('FastCaptureSchema', () => {
  const validPayload = {
    company_name: 'Tech Corp',
    role_title: 'Senior Frontend Engineer',
    raw_jd_text: 'We are looking for a Senior Frontend Engineer with 5+ years of experience in React and TypeScript.',
  };

  it('should successfully parse valid payload with defaults', () => {
    const result = FastCaptureSchema.parse(validPayload);
    expect(result.company_name).toBe('Tech Corp');
    expect(result.role_title).toBe('Senior Frontend Engineer');
    expect(result.source).toBe('direct');
    expect(result.status).toBe('saved');
    expect(result.original_url).toBeUndefined();
  });

  it('should trim company_name and role_title', () => {
    const result = FastCaptureSchema.parse({
      ...validPayload,
      company_name: '  Tech Corp  ',
      role_title: '  Senior Frontend Engineer  ',
    });
    expect(result.company_name).toBe('Tech Corp');
    expect(result.role_title).toBe('Senior Frontend Engineer');
  });

  it('should validate company_name is not empty with Vietnamese message', () => {
    expect(() => FastCaptureSchema.parse({ ...validPayload, company_name: '' })).toThrowError(
      'Tên công ty không được để trống'
    );
    expect(() => FastCaptureSchema.parse({ ...validPayload, company_name: '   ' })).toThrowError(
      'Tên công ty không được để trống'
    );
  });

  it('should validate role_title is not empty with Vietnamese message', () => {
    expect(() => FastCaptureSchema.parse({ ...validPayload, role_title: '' })).toThrowError(
      'Vị trí ứng tuyển không được để trống'
    );
    expect(() => FastCaptureSchema.parse({ ...validPayload, role_title: '   ' })).toThrowError(
      'Vị trí ứng tuyển không được để trống'
    );
  });

  it('should validate raw_jd_text min 10 chars with Vietnamese message', () => {
    expect(() => FastCaptureSchema.parse({ ...validPayload, raw_jd_text: 'Short' })).toThrowError(
      'Nội dung JD tối thiểu 10 ký tự'
    );
  });

  it('should handle original_url properly', () => {
    const withUrl = FastCaptureSchema.parse({
      ...validPayload,
      original_url: 'https://example.com/job/123',
    });
    expect(withUrl.original_url).toBe('https://example.com/job/123');

    const withEmptyUrl = FastCaptureSchema.parse({
      ...validPayload,
      original_url: '',
    });
    expect(withEmptyUrl.original_url).toBe('');

    const withUndefinedUrl = FastCaptureSchema.parse({
      ...validPayload,
      original_url: undefined,
    });
    expect(withUndefinedUrl.original_url).toBeUndefined();

    expect(() =>
      FastCaptureSchema.parse({
        ...validPayload,
        original_url: 'not-a-valid-url',
      })
    ).toThrow();
  });
});
