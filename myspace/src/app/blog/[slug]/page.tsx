import { notFound } from 'next/navigation';

export const revalidate = 300
interface Post {
    title: string,
    content: string,
    slug: string,
}

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    const allPosts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => { return res.json() })
    return allPosts.map((post) => ({
        slug: post.slug
    }))
}

export default async function BlogPostPage({ params }: Props) {
    const allPosts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => { return res.json() })
    const curPost = allPosts.find((post) => post.slug === params.slug)

    if (curPost == undefined) {
        notFound()
        return
    }

    return (
        <div>
            <h1>{curPost.title}</h1>
            <p>{curPost.content}</p>
        </div>
    )

}