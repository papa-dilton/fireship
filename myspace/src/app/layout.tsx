import '@/styles/global.css'
import NavMenu from '@/lib/NavMenu'
import AuthProvider from "@/app/AuthProvider";


export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
        <html lang="en">
        <body>
            <NavMenu/>
            {children}
        </body>
        </html>
        </AuthProvider>
    )
}
