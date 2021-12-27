import SocialButton from '../atoms/SocialButton';

interface SocialLoginProps {
  onSubmit: Function;
}

const SocialLogin = ({ onSubmit }: SocialLoginProps) => {
  return (
    <form>
      <div className="flex flex-wrap -mx-3 mb-3">
        <SocialButton
          onClick={() => onSubmit('google')}
          type="google"
          label="Continuar com Google"
        />
      </div>
      <div className="flex flex-wrap -mx-3">
        <SocialButton
          onClick={() => onSubmit('facebook')}
          type="facebook"
          label="Continuar com Facebook"
        />
      </div>
    </form>
  );
};

export default SocialLogin;
