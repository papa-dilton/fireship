import Link from 'next/link'
import styles from '@/styles/about.page.module.css'

export const dynamic = 'force-static'
export const metadata = {
    title: "About page",
    description: "About page on how this website is built using Fireship's Next.js 13 course"
}
export default function About() {
    return (
        <div className={styles.container}>
            <h1>About</h1>
            <p>This is a test project to help me learn Next.js! Want to learn how to do this? Go visit <Link href={'https://fireship.io/courses/nextjs/'} rel="noopener noreferrer" target="_blank">fireship.io</Link> to learn more! This is a static, single page Next/React page and, like most of this website, uses server-side rendering!</p>
        </div>
    )
}