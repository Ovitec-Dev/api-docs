export async function processField(field: string | undefined, transformFn?: (value: string) => unknown) {
  if (field === undefined) return undefined;
  try {
    return transformFn ? transformFn(field) : field;
  } catch (error) {
    // console.error(`Error processing field: ${error}`);
    return undefined;
  }
}
