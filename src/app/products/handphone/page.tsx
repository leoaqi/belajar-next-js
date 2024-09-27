import { redirect } from "next/navigation";

export default function Page() {
    const isAdmin = true;

    if(!isAdmin){
        redirect('/products')
    }
    return (
        <h1>Handphone page</h1>
    );
}