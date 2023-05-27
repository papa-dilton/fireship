'use client'
import { useRouter } from 'next/navigation';
import {MouseEventHandler, useState, useTransition} from "react";

interface Props {
    isFollowing: boolean;
    targetUserId: string;
}

export default function FollowClient({isFollowing, targetUserId}: Props) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const isMutating = isPending || isFetching

    const follow = async (e: React.FormEvent<HTMLButtonElement>) => {
        // @ts-ignore
        e.target.innerHTML = 'Unfollow'
        setIsFetching(true)
        await fetch('/api/follow', {
            method: 'POST',
            body: JSON.stringify({
                targetUserId
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        setIsFetching(false)

        startTransition(() => {
            // Refresh the page
            // Makes a request to the server for teh route
            // Re-fetches the data and re-renders the server component
            // Sends the updated payload to the client
            // client-side component merges with payload
            router.refresh()
        })
    }

    const unfollow = async (e: React.FormEvent<HTMLButtonElement>) => {
        // @ts-ignore
        e.target.innerHTML = 'Follow'
        setIsFetching(true)
        await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE',
        })
        setIsFetching(false)
        startTransition(() => {
            router.refresh()
        })
    }


    if (isFollowing) {
        return (
            <button onClick={unfollow}>
                {'Unfollow'}
            </button>
        )
    } else {
        return (
            <button onClick={follow}>
                {'Follow'}
            </button>
        )
    }
}