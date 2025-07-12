import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';
import { ActiveLink } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';
import Image from 'next/image';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });
const publicSans = Inter({ weight: '400', subsets: ['latin'] });

const TITLE = 'Auth0 Assistant0: An Auth0 + LangChain + Next.js Template';
const DESCRIPTION = 'Starter template showing how to use Auth0 in LangChain + Next.js projects.';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>{TITLE}</title>
                <link rel="shortcut icon" type="image/svg+xml" href="/images/favicon.png" />
                <meta name="description" content={DESCRIPTION} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:image" content="/images/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:image" content="/images/og-image.png" />
            </head>
            <body className={publicSans.className}>
                <div className="bg-secondary grid grid-rows-[auto,1fr] h-[100dvh]">
                    <div className="gradient-up bg-gradient-to-b from-white/10 to-white/0 relative grid border-input border-b-0">
                        <div id='children-container' className="absolute inset-0">{children}</div>
                    </div>
                </div>
                <Toaster />
            </body>
        </html>
    );
}
