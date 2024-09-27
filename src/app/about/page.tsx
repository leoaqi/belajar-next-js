import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "about",
    },
    description: "this is about page",
};

export default function Page(){
    return (
        <h1>about</h1>
    )
}
