import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="flex justify-center space-x-4">
        <Link
          href="/"
          className="font-medium px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          ROOT
        </Link>
        <Link
          href="/users"
          className="font-medium px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          ユーザー一覧
        </Link>
        <Link
          href="#"
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          sign_in
        </Link>
        <Link
          href="#"
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          sign_up
        </Link>
      </nav>
    </header>
  );
}
