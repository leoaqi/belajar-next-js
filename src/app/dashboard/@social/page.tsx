import Card from "@/components/Card";
import Link from "next/link";

export default function Social() {
    return (
        <Card>
            <h3>Social Dashboard</h3>
            <Link href="/dashboard/instagram">To Instagram</Link>
        </Card>
    )
}