"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const searchParam = useSearchParams()
    console.log(searchParam.get('q'))
    return (
        <div>
            <h1>Car page</h1>
            <button 
            onClick={() => router.push('/products')} 
            className="border-1 bg-green-400 text-white px-4 rounded-md text-sm font-bold">Go back</button>
        </div>
    );
}