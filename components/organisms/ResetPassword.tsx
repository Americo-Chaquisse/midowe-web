import TitleHeader from '../atoms/TitleHeader';
import ResetPasswordForm from '../molecules/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <TitleHeader
            title="Vamos ajudar-lhe a recuperar a sua conta"
            subtitle="Introduza o endereço de email que usou quando criou a sua conta, e nós iremos lhe enviar um link para redefinir a sua password."
          />

          <div className="max-w-sm mx-auto">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
