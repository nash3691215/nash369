import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-black hover:text-electric transition-colors">
            NASH369
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/boutique"
              className="text-sm font-medium text-gray-700 hover:text-electric transition-colors"
            >
              Boutique
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium bg-electric text-white px-4 py-2 rounded-lg hover:bg-electric-dark transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
