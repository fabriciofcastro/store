"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [hidden, setHidden] = useState(() => false);

  return (
    <nav className="xl:px-20 bg-red-800 text-white max-lg:hidden">
      <div className=" h-12 flex max-w-[1920] mx-auto">
        <div className=" flex items-center justify-between w-full px-12 ">
          <div className="relative top-0">
            <button
              className=" h-full text-1xl hover:border-white text-white hover:bg-red-900  focus:outline-none font-bold px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
              type="button"
              onClick={() => setHidden(() => !hidden)}
            >
              DEPARTAMENTO
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div /** Submenu toggle */
              className={`absolute z-10 ${
                hidden ? "" : "hidden"
              } bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700`}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-[1rem] dark:hover:text-white"
                  >
                    HARDWARE
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-2 text-[1rem] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    PERIFÉRICOS
                    <svg
                      className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                  <div className="z-10 hidden  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <Link
                          href="#"
                          className="block text-[1rem] px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-[1rem] dark:hover:text-white"
                        >
                          MOUSE
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-[1rem] dark:hover:text-white"
                        >
                          Billing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 text-[1rem] py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          TECLADOS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-[1rem] px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    PROJETORES
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-[1rem] px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    TVs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/" className="`${} block font-bold text-1xl `">
            OFERTA DO DIA
          </Link>
          <Link href="/" className="`${} block font-bold text-1xl `">
            LANÇAMENTOS
          </Link>
          <Link href="/" className="`${} block font-bold text-1xl `">
            OPENBOX
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
