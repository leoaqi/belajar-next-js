import Card from "@/components/Card";
import Link from "next/link";

export default function Instagram() {
    return (
        <Card>
            <h3>instagram</h3>
            <Link href="/dashboard">Back to dashboard</Link>
        </Card>
    )
}