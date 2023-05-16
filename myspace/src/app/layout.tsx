import '@/styles/global.css'
import NavMenu from '@/app/NavMenu'

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <NavMenu/>
                {children}
            </body>
        </html>
    )
}
