export const getImageResource = (imagePath: string) => {
  const url = new URL(
    `/t/p/original${imagePath}`,
    process.env.NEXT_PUBLIC_MOVIEDB_IMAGE_URL,
  )
  return url.toString()
}
