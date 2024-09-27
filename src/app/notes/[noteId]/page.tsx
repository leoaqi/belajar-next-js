import { Metadata } from "next";
import { notFound } from "next/navigation"

export const generateMetadata = ({params}: {
    params: { noteId: string }
}):Metadata => {
    return {
        title : `Note ${params.noteId}`
    }
}
export default function Note(
    { params }:
        { params: { noteId: string }}) {
    if(parseInt(params.noteId) > 100){
        return notFound()
    }
    return (
        <h1>Note Detail {params.noteId}</h1>
    );
}