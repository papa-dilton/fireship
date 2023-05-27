import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {prisma} from "@/lib/prisma";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)
    const currentUserEmail = session?.user?.email
    if (!currentUserEmail) {
        return NextResponse.json({error: 'Unauthorized'}, {status: 401})
    }
    const { targetUserId } = await req.json()
    const currentUserId = await prisma.user.findUnique({
        where: {email: currentUserEmail},
    }).then(user => {
        if (!user || !user.id) throw new Error('Current session user not found while trying to follow')
        else return user.id
    })
     // @ts-ignore
    const record = await prisma.follows.create({
        data: {
            followerId: currentUserId,
            followingId: targetUserId
        }
     })
    return NextResponse.json({record})
}

export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions)
    const currentUserEmail = session?.user?.email
    if (!currentUserEmail) {
        return NextResponse.json({error: 'Unauthorized'}, {status: 401})
    }
    const targetUserId = req.nextUrl.searchParams.get('targetUserId')
    const currentUserId = await prisma.user.findUnique({
        where: {email: currentUserEmail},
    }).then(user => {
        if (!user || !user.id) throw new Error('Current session user not found while trying to follow')
        else return user.id
    })
    // @ts-ignore
    const record = await prisma.follows.delete({
        where: {
            followerId_followingId: {
                followerId: currentUserId,
                followingId: targetUserId
            }
        }
    })
    return NextResponse.json({record})
}