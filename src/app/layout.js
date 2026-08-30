import './globals.css'

export const metadata = {
  metadataBase: new URL('https://lfcyk.vercel.app'),
  title: 'Willa Waliyadin | Automotive Software Engineer',
  description: 'Automotive software engineer focused on ADAS, model-based development, vehicle control, verification, and CARLA simulation.',
  openGraph: {
    title: 'Willa Waliyadin | Automotive Software Engineer',
    description: 'ADAS, model-based development, vehicle control, verification, and CARLA simulation.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 909,
        alt: 'Willa Waliyadin, Automotive Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willa Waliyadin | Automotive Software Engineer',
    description: 'ADAS, model-based development, vehicle control, verification, and CARLA simulation.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  )
}
