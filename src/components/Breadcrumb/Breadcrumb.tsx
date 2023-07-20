import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import { protectedRoutes } from '@/routes/protected'; // 会員のみ閲覧可のルート

export const Breadcrumb = () => {
  // excludePathsオプションにより、デフォルトで追加されるroot'/'を除いています。
  const breadcrumbs = useBreadcrumbs(protectedRoutes, { excludePaths: ['/'] });

  return (
    <ol
      className="flex min-w-0 flex-1 items-center whitespace-nowrap"
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          // FIXME: Currentの場合のスタイルの切り替えしたい
          <li className="text-sm" key={match.pathname}>
            {isLast ? (
              <span className="font-semibold text-gray-500">{breadcrumb}</span>
            ) : (
              <Link
                className={twMerge(
                  'flex items-center text-gray-500 hover:text-blue-600 hover:underline',
                )}
                to={match.pathname}
              >
                {breadcrumb}
                <ChevronRightIcon className="mx-3 h-3 w-3 shrink-0 overflow-visible text-gray-500 dark:text-gray-600" />
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
};
