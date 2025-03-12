import Link from "next/link";
import HttpService from "@/services/HttpService";
import API_URL from "@/constants/apiUrls";
import {Button} from "antd";
import {DeleteFilled} from "@ant-design/icons";
import UsersComponent from "@/components/users/UsersComponent";

export default async function UsersPage() {
    const users= await HttpService.get(API_URL.users);

  return (
    <>
        <h1>Users</h1>
        <UsersComponent users={users}/>
        <Link href={"/"}>Retour à home</Link>
    </>
  );
}