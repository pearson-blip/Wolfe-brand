import Link from "next/link";

export default function Services() {
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

      <section className="flex-1 px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2">Web Development</h3>
            <p className="text-gray-600">
              Custom, scalable websites built with modern frameworks.
            </p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Clean, minimal designs focused on usability and brand identity.
            </p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2">SEO & Marketing</h3>
            <p className="text-gray-600">
              Optimize your site to reach the right audience online.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Wolfe Brand
      </footer>
    </main>
  );
}