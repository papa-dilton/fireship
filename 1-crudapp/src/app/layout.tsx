import '@/styles/globals.css'
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <nav>
            <a href="/">Home</a>
            <a href="/notes">Notes</a>
        </nav>
        {children}</body>
        </html>
    )
}
