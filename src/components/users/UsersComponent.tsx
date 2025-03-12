"use client";

import {useState} from "react";
import {Button} from "antd";
import {DeleteFilled} from "@ant-design/icons";
import Link from "next/link";
import HttpService from "@/services/HttpService";
import API_URL from "@/constants/apiUrls";

export default function UsersComponent({...props}:{users:any[]}) {
    const [users, setUsers] = useState(props.users);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}
                        <Button shape={"circle"}
                                onClick={() => {
                                    HttpService.delete(API_URL.user(user.id)).then(() => {
                                        setUsers(users.filter((u) => u.id !== user.id));
                                });
                            }
                        }
                                icon={<DeleteFilled/>}>

                        </Button>
                    </li>
                ))}
            </ul>
            <Link href={"/"}>Retour à home</Link>
        </>
    );

}