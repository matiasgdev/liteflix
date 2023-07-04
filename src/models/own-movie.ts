export interface MyMovie {
  id: number
  title: string
  image: {
    type: 'Buffer'
    data: Buffer
  }
  imageSrc?: string
}
