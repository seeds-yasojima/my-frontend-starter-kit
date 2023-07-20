import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import logo from '@/assets/vite.svg';
import { AuthLayout } from '@/components/Layout';

type Inputs = {
  email: string;
};

export const SendMailAddress = () => {
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
    navigate('/forgotpassword'); // パスワード再設定ページへ遷移。本来はメール送るだけ。
  };

  return (
    <AuthLayout>
      <img className="mx-auto mb-4 h-16" src={logo} alt="logo" />
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              パスワード再設定メールの送信
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              ご登録いただいたメールアドレス宛に、
              <br />
              パスワード再設定のURLを送信します。
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

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
