import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="navbar">
        <Link href="/">home</Link>
        <Link href="/list">list페이지</Link>
      </div>
      <Image src="next.svg" width={500} height={500} alt="사진" />
      <h1 className="title">Programming Log</h1>
      <p className="title-sub">by dev kim</p>
    </main>
  );
}
