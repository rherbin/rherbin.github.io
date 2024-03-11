import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div className="grid grid-rows-6 font-semibold h-screen w-screen items-center">
        <div className="flex text-6xl row-start-3 justify-center">rherbin.github.io</div>
        <div className="text-2xl flex row-start-4 justify-center">
          <Link href="/portfolio" className="mx-5 px-10 py-5 hover:bg-gray-900 duration-700 rounded-xl">portfolio</Link>
          <Link href="/cv" className="mx-5 px-10 py-5 hover:bg-gray-900 duration-700 rounded-xl">cv</Link>
          <Link href="/contact" className="mx-5 px-10 py-5 hover:bg-gray-900 duration-700 rounded-xl">contact</Link>
        </div>
      </div>
    </main>
  );
}