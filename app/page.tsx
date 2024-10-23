import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the timber nest.</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
