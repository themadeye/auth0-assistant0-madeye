'use client';

import { useUser } from '@auth0/nextjs-auth0';

import { ChatWindow } from '@/components/ChatWindow';
import { InfoCard } from '@/components/InfoCard';
import { Fragment } from 'react';
import { MainPageHeader } from '@/components/ui/MainPageHeader';
import { PageHeader } from '@/components/ui/PageHeader';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Home() {
    const { user, isLoading } = useUser();
    console.log('User: ', user);
    if (isLoading) return <div>Loading....</div>;

    if (!user) {
        return (
            <Stack spacing={2}>
                <Box><PageHeader user={user}/></Box>
                <Box sx={{ p: 2, border: '1px dashed grey' }}>
                    This is landing page, simple content placed here
                </Box>
            </Stack>

        );
    }

    return (
        <Stack spacing={2}>
            <Box><PageHeader user={user}/></Box>
            {/*Replace with Video transcript extractor*/}
            <ChatWindow
                endpoint="api/chat"
                emoji="🤖"
                placeholder="I'm your personal assistant. How can I help you today?"
                emptyStateComponent={<InfoCard />}
            />
        </Stack>

    );
}
