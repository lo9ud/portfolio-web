'use client'

import { Card } from "@/components/structure/cards"


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <Card>
            <h2>Something went wrong!</h2>
            <h2>{error.message}</h2>
            <button onClick={() => reset()}>Try again?</button>
        </Card>
    )
}