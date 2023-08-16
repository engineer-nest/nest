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
      </nav>
    </header>
  );
}
