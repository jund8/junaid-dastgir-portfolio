import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Junaid Dastgir — Mechanical Engineer',
  description: 'Mechanical Engineer specializing in CAD/CAM, FEA simulation, robotics, and sustainable engineering design. Double Master\'s from Politecnico di Milano & LUT University.',
  keywords: 'mechanical engineer, CAD, SolidWorks, FEA, ANSYS, robotics, MEP, simulation, Italy',
  authors: [{ name: 'Junaid Dastgir' }],
  openGraph: {
    title: 'Junaid Dastgir — Mechanical Engineer',
    description: 'Precision design, advanced simulation, and sustainable engineering solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="blueprint-bg min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
