import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  PaintBrushIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  CommandLineIcon,
  LinkIcon,
} from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

type SectionTitleProps = {
  title: string;
  desc?: string;
};

const SectionTitle = ({ title, desc }: SectionTitleProps) => {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
      <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">
        {title}
      </h2>
      <p className="mt-1.5 text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-slate-900">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="mx-auto max-w-[85rem] space-y-8 px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link
              className="group inline-block rounded-full border border-white/[.05] bg-white/[.05] p-1 pl-4 shadow-md hover:bg-white/[.1]"
              to="/login"
            >
              <p className="mr-2 inline-block text-sm text-white">
                Play the demo
              </p>
              <span className="inline-flex items-center justify-center gap-x-2 rounded-full bg-white/[.075] px-3 py-2 text-sm font-semibold text-white group-hover:bg-white/[.1]">
                <svg
                  className="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="block text-4xl font-medium text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
              My Frontend Starter Kit
            </h1>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-400">
              This is my idea of a best practices project.
            </p>
          </div>

          <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
            <a
              className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              href="https://github.com/seeds-yasojima/my-frontend-starter-kit"
              target="_brank"
            >
              <svg
                className="w-4.5 h-4.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Continue with Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconSection = () => {
  const items = [
    {
      title: 'Vite',
      icon: <CommandLineIcon className="h-8 w-8" />,
      desc: 'フロントエンドのビルドツール。高速に開発をサポートしてくれます。',
      href: 'https://ja.vitejs.dev/',
    },
    {
      title: 'React',
      icon: <CodeBracketIcon className="h-8 w-8" />,
      desc: 'フロントエンドJSライブラリです。',
      href: 'https://react.dev/',
    },
    {
      title: 'TypeScript',
      icon: <CodeBracketIcon className="h-8 w-8" />,
      desc: '型安全に運用するために導入しています。',
      href: 'https://www.typescriptlang.org/',
    },
    {
      title: 'tailwindcss',
      icon: <PaintBrushIcon className="h-8 w-8" />,
      desc: 'ユーティリティクラスを活用したCSSフレームワークです。CSSの難しい扱いを簡素化したい目的で導入しています。',
      href: 'https://tailwindcss.com/',
    },
    {
      title: 'Preline UI',
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      desc: 'tailwindベースのUIコンポーネントライブラリです。tailwindのみだとUIの設計に苦労するのでUIコンポーネントを導入しています。',
      href: 'https://preline.co/docs/index.html',
    },
    {
      title: 'React Router',
      icon: <LinkIcon className="h-8 w-8" />,
      desc: 'ページルーティングを実装するためのライブラリです。',
      href: 'https://reactrouter.com/en/main',
    },
  ];

  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <SectionTitle
        title="技術スタック"
        desc="ほんの一部ですが、主に使っているライブラリです！"
      />
      <div className="grid items-center gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
        {items.map(({ title, icon, desc, href }, index) => {
          return (
            <React.Fragment key={index}>
              <a
                className="group flex h-full w-full gap-y-6 rounded-lg p-5 transition-all hover:bg-gray-100 dark:hover:bg-white/[.075]"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="mr-6 mt-0.5 shrink-0 text-gray-800 dark:text-gray-200">
                  {icon}
                </div>

                <div>
                  <div>
                    <h3 className="block font-bold text-gray-800 dark:text-white">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                  </div>

                  <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Learn more
                    <svg
                      className="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

const FaqSection = () => {
  const items = [
    {
      id: 'one',
      question: 'どういう場面で使えますか？',
      answer:
        'フロントエンドの開発で使用できるのはもちろんですが。\n画面のモックをサクッと作りたい時や、Reactの検証作業などなんでも使っていただけます。',
    },
    {
      id: 'two',
      question: '実案件でも使えますか？',
      answer:
        'もちろん使えますが、SPA（Single Page Application）のプロジェクトなので、SEOを意識した設計をしないといけない場合は、向かないと思います。\n\nNextjsのようなSSG（Static Site Generation）または、SSR（Server Side Rendering）の機能が備わったWebアプリケーションフレームワークを選定した方がいいと思います。\n\ntailwindcssやPrelineなどのUIパッケージは、流用いただけると思います！！！',
    },
    {
      id: 'three',
      question: 'これはフロント開発のベストプラクティスですか？',
      answer:
        'そんなわけありません。フロントエンドは流行り廃りが激しいので、今後の流れも追った上で参考程度に使用していただきたいです。',
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle
          title="よくある質問"
          desc="質問はひとつも来たことないですが、ありそうな質問をまとめました。"
        />

        <div className="mx-auto max-w-2xl">
          <div className="hs-accordion-group">
            {items.map(({ id, question, answer }, index) => {
              const isFirst = index === 0;

              return (
                <div
                  key={id}
                  className={twMerge(
                    'hs-accordion rounded-xl p-6 hs-accordion-active:bg-gray-100 dark:hs-accordion-active:bg-white/[.05]',
                    isFirst && 'active',
                  )}
                  id={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
                >
                  <button className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 pb-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 md:text-lg">
                    {question}
                    <svg
                      className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-gray-400"
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
                      />
                    </svg>
                    <svg
                      className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-gray-400"
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
                      />
                    </svg>
                  </button>
                  <div
                    id={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
                    className={twMerge(
                      'hs-accordion-content w-full overflow-hidden transition-[height] duration-300',
                      !isFirst && 'hidden',
                    )}
                  >
                    <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                      {answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <div>
            <a className="flex-none text-xl font-semibold  text-white" href="#">
              My Frontend Starter Kit
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500">
              © 2023 All My Frontend Starter Kit rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Top = () => {
  return (
    <>
      <HeroSection />
      <IconSection />
      <FaqSection />
      <Footer />
    </>
  );
};
