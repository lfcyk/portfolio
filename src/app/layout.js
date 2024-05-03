import './globals.css'

export const metadata = {
  title: 'Willa Waliyadin',
  description: 'a software engineer portfolio',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  )
}
