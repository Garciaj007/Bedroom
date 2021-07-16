import { useRouter } from "next/router"

export default function Session()
{
    const router = useRouter()
    const { sessionId } = router.query

    return <h1>Hello {sessionId}</h1>
}