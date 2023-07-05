export const getReleaseYear = (date: Date | string) => {
  return new Date(date).getFullYear().toString()
}
