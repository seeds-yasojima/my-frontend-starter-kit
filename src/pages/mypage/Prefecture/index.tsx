import { Link } from 'react-router-dom';

import { ContentLayout } from '@/components/Layout';
import { usePref } from '@/features/test/api/getPref';

export const Prefecture = () => {
  const { prefectures, isLoading, isError } = usePref();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>エラーが発生しました！</>;
  }

  return (
    <ContentLayout title="都道府県一覧">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {prefectures.map(({ prefCode, prefName }) => (
          <Link key={prefCode} to={`/mypage/prefecture/${prefCode}`}>
            <div className="rounded-lg border bg-white p-4 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7] md:p-5">
              {`${prefCode}：${prefName}`}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <span className="text-sm text-gray-500">
          RESAS（地域経済分析システム）を加工して作成
        </span>
      </div>
    </ContentLayout>
  );
};
