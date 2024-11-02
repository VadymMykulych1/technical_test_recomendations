'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
      <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
        <div className="p-6 font-bold text-xl border-b text-black">OB technical test</div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/create">
                <div
                  className={`block p-2 rounded ${
                    pathname === '/create'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  create interests
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div
                  className={`block p-2 rounded ${
                    pathname === '/'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  get interests
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};