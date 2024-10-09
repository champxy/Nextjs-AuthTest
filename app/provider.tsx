'use client';
import { SessionProvider } from "next-auth/react";

export const Customprovider = ({ 
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <SessionProvider session={null}>
            {children}
        </SessionProvider>
    );
}