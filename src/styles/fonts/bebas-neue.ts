import localFont from 'next/font/local'

export const BebasNeue = localFont({
  src: [
    {path: './BebasNeueBold.otf', weight: '700'},
    {path: './BebasNeueLight.otf', weight: '300'},
    {path: './BebasNeueRegular.otf', weight: '500'},
  ],
  variable: '--bebas-neue',
})
