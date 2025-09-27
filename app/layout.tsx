import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chairul – Portfolio',
  description: 'Mobile & Hardware Integrator: Android, React-Native, RS-485, IoT',
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
