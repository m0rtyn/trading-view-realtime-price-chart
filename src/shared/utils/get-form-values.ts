export const getFormValues = <T, R>(form: HTMLFormElement): R => {
  const formData = new FormData(form) as unknown as Iterable<
    [T, FormDataEntryValue]
  >
  return Object.fromEntries(formData) as R
}
