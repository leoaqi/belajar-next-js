import Link from "next/link";

export default function A2Page(){
    return <div>
        <h1>A1 Page</h1>
        <Link href={'/a1/a2'}>To A2</Link>
    </div>
}