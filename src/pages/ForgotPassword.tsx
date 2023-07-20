import * as React from 'react';

import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import logo from '@/assets/vite.svg';
import { AuthLayout } from '@/components/Layout';

type Inputs = {
  password: string;
};

export const ForgotPassword = () => {
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
    navigate('/login'); // ログインページへ遷移
  };

  return (
    <AuthLayout>
      <img className="mx-auto mb-4 h-16" src={logo} alt="logo" />
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              パスワード再設定
            </h1>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm dark:text-white"
                  >
                    新しいパスワード
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      {...register('password', { required: true })}
                      className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="email-error"
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
                    id="email-error"
                  >
                    必須項目です
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  再設定
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
