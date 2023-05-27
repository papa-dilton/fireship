import UserCard from '@/components/UserCard';
import styles from '@/styles/users.page.module.css'
import { prisma } from '@/lib/prisma';

export default async function Users() {
    const users = await prisma.user.findMany();

    return (
        <div className={styles.grid}>
            {users.map((user) => {
                return <UserCard key={user.id} {...user} />;
            })}
        </div>
    );
}