

export default function UsersComponent({...props}:{users:any[]}) {
    return (
        <>
            <h1>Users</h1>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.name}
                        <Button shape={"circle"}
                                icon={<DeleteFilled/>}>

                        </Button>
                    </li>
                ))}
            </ul>
            <Link href={"/"}>Retour à home</Link>
        </>
    );

}