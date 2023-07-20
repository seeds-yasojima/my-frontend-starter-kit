import * as React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import logo from '@/assets/vite.svg';
import { protectedRoutes } from '@/routes/protected';

type SideNavProps = {
  isOpen: boolean;
};

export const SideNav = ({ isOpen }: SideNavProps) => {
  const SITE_NAME = 'Brand Name'; // 適宜変更

  // protectedRoutesの設定から引っ張ってきた。
  const routes = protectedRoutes[0].children.flatMap((item) =>
    item.breadcrumb && item.path ? item : [],
  );

  return (
    <div
      id="application-sidebar-dark"
      className={twMerge(
        'hs-overlay scrollbar-y fixed inset-y-0 left-0 z-[60] hidden w-64 -translate-x-full flex-col overflow-y-auto border-r border-gray-800 bg-gray-900 transition-all duration-300 hs-overlay-open:translate-x-0 lg:bottom-0 lg:right-auto lg:flex lg:translate-x-0',
        isOpen && 'lg:-translate-x-full',
      )}
    >
      <div className="mx-4 pb-1 pt-3">
        <Link
          className="flex items-center text-xl font-semibold text-white"
          to="/mypage"
        >
          <img className="mr-2 h-5" src={logo} alt="logo" />
          {SITE_NAME}
        </Link>
      </div>

      <nav
        className="hs-accordion-group flex w-full flex-1 flex-col flex-wrap px-4 py-3"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          {routes.map(({ path, breadcrumb: name }) => (
            <li key={path}>
              <NavLink
                className="custom-nav-link flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                to={path}
              >
                {name}
              </NavLink>
            </li>
          ))}

          {/* FIXME: とりあえずおき */}
          {/* <li className="hs-accordion" id="account-accordion">
            <a
              className="hs-accordion-toggle flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent"
              href="#"
            >
              Account
              <svg
                className="ml-auto hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <svg
                className="ml-auto block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>

            <div
              id="account-accordion-child"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            >
              <ul className="pl-2 pt-2">
                <li>
                  <Link
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                    to="/"
                  >
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                    to="/"
                  >
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                    to="/"
                  >
                    Link 3
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};
