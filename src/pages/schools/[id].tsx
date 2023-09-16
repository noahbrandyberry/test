import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>School: {router.query.id}</p>;
}
