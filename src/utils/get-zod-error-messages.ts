/* eslint-disable */

export function getZodErrorMessages(error: any): string[] {
  return Object.values(error)
    .map((field: any) => {
      if (Array.isArray(field)) return field;
      return field?._errors || [];
    })
    .flat()
    .filter(Boolean);
}
