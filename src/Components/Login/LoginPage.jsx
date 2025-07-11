import '../../styles/login.scss'
import { useNavigate } from 'react-router-dom';

const SocialButton = ({ type, text, onClick  }) => {
  return (
    <button className={`social-btn ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};


export default function LoginPage() {
    const navigate = useNavigate();

    return (<>
        <div className="login-container">
            <h1 className="logo">여기어때.</h1>
            <p className="desc">로그인/회원가입</p>

            <div className="button-container">
                <SocialButton type="kakao" text="카카오로 시작하기" />
                <SocialButton type="naver" text="네이버로 시작하기" />
                <SocialButton type="email" text="이메일로 시작하기" onClick={() => navigate('/sign-up')}/>
            </div>

            <div className="footer">비즈니스 로그인/회원가입</div>
        </div>
    </>);
}