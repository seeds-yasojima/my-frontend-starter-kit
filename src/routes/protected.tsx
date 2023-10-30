import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Home } from '@/pages/mypage/Home';
import { News } from '@/pages/mypage/News';
import { NotPageTemplate } from '@/pages/mypage/NotPageTemplate';
import { Prefecture } from '@/pages/mypage/Prefecture';
import { PrefectureDetail } from '@/pages/mypage/Prefecture/detail';
import { User } from '@/pages/mypage/User';
import { NotFound } from '@/pages/NotFound';

import { MainLayout } from '@/components/Layout';
import { Loading } from '@/components/Loading';

const AppElement = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: 'mypage',
    element: <AppElement />,
    children: [
      { index: true, element: <Home />, breadcrumb: 'ホーム' },
      { path: 'news', element: <News />, breadcrumb: 'お知らせ' },
      {
        path: 'reservations',
        element: <NotPageTemplate />,
        breadcrumb: '予約履歴',
      },
      { path: 'orders', element: <NotPageTemplate />, breadcrumb: '購入履歴' },
      {
        path: 'opinions',
        element: <NotPageTemplate />,
        breadcrumb: 'ご意見・ご要望',
      },
      { path: 'user', element: <User />, breadcrumb: '個人設定' },
      {
        path: 'prefecture',
        breadcrumb: '都道府県',
        children: [
          {
            index: true,
            element: <Prefecture />,
          },
          {
            path: ':prefCode',
            breadcrumb: '都道府県詳細',
            element: <PrefectureDetail />,
          },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];
