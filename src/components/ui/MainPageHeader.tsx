import { ActiveLink } from '@/components/Navbar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Inter, Roboto_Mono } from 'next/font/google';
import { Fragment } from 'react';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const MainPageHeader = () => {

    return (
        <div className="flex gap-4 flex-col md:flex-row md:items-center">
            <span className={`${robotoMono.className} text-white text-2xl`}>Assistant0</span>
            <nav className="flex gap-1 flex-col md:flex-row">
                <ActiveLink href="/">Chat</ActiveLink>
            </nav>
            <div className="flex justify-center">
                <a
                    href="https://a0.to/ai-event"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center gap-2 px-4"
                >
                    <Image
                        src="/images/auth0-ai-logo.svg"
                        alt="Auth0 AI Logo"
                        className="h-8"
                        width={143}
                        height={32}
                    />
                </a>
                <Button asChild variant="header" size="default">
                    <a href="https://github.com/oktadev/auth0-assistant0" target="_blank">
                        <Github className="size-3" />
                        <span>Open in GitHub</span>
                    </a>
                </Button>
                <Button asChild variant="header" size="default">
                    <a href="/auth/logout">
                        <span>Logout</span>
                    </a>
                </Button>
            </div>
        </div>
    )
}
