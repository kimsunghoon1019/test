import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
            My Next.js App
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            홈
          </Link>
          <Link href="/list" className="text-gray-300 hover:text-white">
            목록
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            소개
          </Link>
        </div>
      </div>
    </nav>
  );
}
