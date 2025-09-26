import Link from "next/link";

export default function Contact() {
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

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="w-full max-w-md space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 border rounded-lg focus:outline-none"></textarea>
          <button type="submit" className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Wolfe Brand
      </footer>
    </main>
  );
}