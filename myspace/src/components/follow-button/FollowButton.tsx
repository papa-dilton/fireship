import {getServerSession} from "next-auth";
import {prisma} from "@/lib/prisma"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import FollowClient from "@/components/follow-button/FollowClient"

interface Props {
    targetUserId: string;
}

export default async function FollowButton({targetUserId}: Props) {
    const session = await getServerSession(authOptions)
    if (!session || !session.user || !session.user.email) {
        throw new Error('No email found')
    }

    const currentUserId = await prisma.user
        .findFirst({
            where: {
                email: session.user.email
            }
        })
        .then((user) => {
            if (!user) {
                throw new Error('No user found')
            }
            return user.id
        })
    // @ts-ignore
    const isFollowing = await prisma.follows.findFirst({
        where: {
            followerId: currentUserId,
            followingId: targetUserId
        }
    })

    return (
        <FollowClient isFollowing={!!isFollowing} targetUserId={targetUserId} />
    )
}