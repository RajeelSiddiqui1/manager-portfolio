import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Farhan Raza | Strategic Portfolio',
  description: 'A showcase of strategic leadership, agile delivery, and digital transformation.',
  icons: {
    icon: '/farhan.png',
    apple: '/farhan.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  )
}
