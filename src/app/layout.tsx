import { type Metadata } from 'next';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: 'Nikolay Hadzhiyski',
    default: 'Hadzhiyski.bg - Software Engineer and 3D Designer',
  },
  description:
    'I’m Nikolay, a software engineer and entrepreneur based in Bulgaria. I’m the co-founder of Chicagoboatparties, where we provide information and details about certain events, registration and ticketing, engagement and interaction.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
