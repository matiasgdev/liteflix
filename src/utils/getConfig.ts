export const getConfig = (key: string) => {
  const config = process.env[key] || process.env[`NEXT_PUBLIC_${key}`]
  if (!config) {
    throw new Error(
      `Variable ${key} or NEXT_PUBLIC_${key} does not exists. Try to configure it`,
    )
  }
  return config
}
