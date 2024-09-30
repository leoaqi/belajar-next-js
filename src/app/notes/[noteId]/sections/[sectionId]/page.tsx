
import { Metadata } from "next";

function getRamdimInt(arr: string[]){
    return arr[Math.floor(Math.random() * arr.length)]
}
type Props = {
    params: {
        noteId: string,
        sectionId: string,
    }
}
export const generateMetadata = ({ params }: Props): Metadata => {
    const item = getRamdimInt(["", "Section"])
    if(item === ""){
        throw new Error("Item is empty")
    }
    return {
        title: `Note ${params.noteId} Section ${params.sectionId}`
    }
}
export default function SectionDetail({ params }: Props) {
    return (
        <h1>Note Section {params.noteId} {params.sectionId}</h1>
    );
}