
import { Metadata } from "next";

type Props = {
    params: {
        noteId: string,
        sectionId: string,
    }
}
export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Note ${params.noteId} Section ${params.sectionId}`
    }
}
export default function SectionDetail({ params }: Props) {
    return (
        <h1>Note Section {params.noteId} {params.sectionId}</h1>
    );
}