import Image from "next/image";
import Link from "next/link";
import {Button} from "antd";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
        <Link href={"/users"}>
            <Button type="primary">Utilisateurs</Button>
        </Link>

    </>
  );
}
