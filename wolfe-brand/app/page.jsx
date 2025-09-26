import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-2xl font-bold">Wolfe Brand</h1>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Building Clean, Modern Websites
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Wolfe Brand creates high-performance, minimalistic websites to grow your online presence.
        </p>
        <Link href="/services" className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800">
          Explore Services
        </Link>
      </section>

      <footer className="text-center text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Wolfe Brand. All rights reserved.
      </footer>
    </main>
  );
}