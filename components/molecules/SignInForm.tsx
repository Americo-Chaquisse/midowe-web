import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface SignInFormValues {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSignIn: (data: SignInFormValues) => void;
  loading?: boolean;
}

const SignInForm = ({ onSignIn, loading = false }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const onSubmit: SubmitHandler<SignInFormValues> = (data) => onSignIn(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap mb-3">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Escreva o seu email"
            className="input input-bordered"
            {...register('email', { required: true })}
          />
        </div>
      </div>

      <div className="flex flex-wrap mb-3">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Escreva a sua password"
            className="input input-bordered"
            {...register('password', { required: true })}
          />
          <label className="label">
            <Link href="/reset-password">
              <a className="label-text-alt">Esqueçeu a password?</a>
            </Link>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap mt-4">
        <button
          type="submit"
          className={`btn btn-primary btn-block ${loading && 'loading'}`}
          disabled={loading}
        >
          Entrar
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
