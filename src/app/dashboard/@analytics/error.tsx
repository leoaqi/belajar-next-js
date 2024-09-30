"use client"

import Card from "@/components/Card";

export default function Error({ error }: { error: Error;}) {
    const reload = () => window.location.reload()
    return (
        <Card>
            <h1>{error.message}</h1>
            <button onClick={
                reload
                } className="bg-red-600 rounded-md py-2 px-4 m-3 text-white font-semibold hover:opacity-60">Try again</button>
        </Card>
    )
}