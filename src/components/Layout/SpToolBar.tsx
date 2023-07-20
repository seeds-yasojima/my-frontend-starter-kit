import { Breadcrumb } from '@/components/Breadcrumb';

export const SpToolBar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-20 border-y bg-gray-100 px-4 py-2 dark:border-gray-700 dark:bg-gray-800 sm:px-6 md:px-8 lg:hidden">
      <div className="flex">
        <button
          type="button"
          className="mr-3 text-gray-500 hover:text-gray-600"
          data-hs-overlay="#application-sidebar-dark"
          aria-controls="application-sidebar-dark"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="h-5 w-5"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <Breadcrumb />
      </div>
    </div>
  );
};
