import { useRouter } from "next/router";
import FrontLayout from "../layouts/FrontLayout";

export default function Session() {
  const router = useRouter();
  const { sessionId } = router.query;

  return <FrontLayout sessionTitle="Join" />;
}
