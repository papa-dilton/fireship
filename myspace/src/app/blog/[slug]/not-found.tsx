"use client"
import styles from "@/styles/blog.error.module.css"

export default function NotFound() {
    return (
        <div className={styles.errorDiv}>
            <p>Error: blog post not found</p>
        </div>
    )
}