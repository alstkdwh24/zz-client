import { useNavigate } from 'react-router-dom';
import '../../../styles/header.scss'

const Header = () => {

    const navigate = useNavigate();
    return (
        <header className="headline">
            <div className="inner_header">
                <div className="top_logo" />
                <div className="auth_buttons">
                    <button className="soft_button" onClick={() => navigate('/login')}>로그인</button>
                    <button className="soft_button" onClick={() => navigate('/sign-up')}>회원가입</button>
                </div>
            </div>
        </header>
    )

}

export default Header