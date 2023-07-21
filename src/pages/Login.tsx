import { Link, useNavigate } from 'react-router-dom';

import logo from '@/assets/vite.svg';

import { AuthLayout } from '@/components/Layout';

import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // FIXME: demo
    console.log(data);

    // 200
    reset();
    navigate('/mypage'); // マイページへ遷移
  };

  return (
    <AuthLayout>
      <img className="mx-auto mb-4 h-16" src={logo} alt="logo" />
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              ログイン
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              初めてのご利用ですか？
              <Link
                to="/register"
                className="font-medium text-blue-600 decoration-2 hover:underline"
              >
                新規登録はこちら
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm dark:text-white"
                  >
                    メールアドレス
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      {...register('email', { required: true })}
                      className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="email-error"
                    />
                    <div
                      className={twMerge(
                        'pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3',
                        errors.email && 'flex',
                      )}
                    >
                      <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                  <p
                    className={twMerge(
                      'mt-2 hidden text-xs text-red-600',
                      errors.email && 'block',
                    )}
                    id="email-error"
                  >
                    必須項目です
                  </p>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm dark:text-white"
                    >
                      パスワード
                    </label>
                    <Link
                      to="/sendmail"
                      className="text-sm font-medium text-blue-600 decoration-2 hover:underline"
                    >
                      パスワードを忘れた方はこちら
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      {...register('password', { required: true })}
                      className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="password-error"
                    />
                    <div
                      className={twMerge(
                        'pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3',
                        errors.password && 'flex',
                      )}
                    >
                      <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                  <p
                    className={twMerge(
                      'mt-2 hidden text-xs text-red-600',
                      errors.password && 'block',
                    )}
                    id="password-error"
                  >
                    必須項目です
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm dark:text-white"
                    >
                      ログイン状態を保存する
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  ログイン
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
