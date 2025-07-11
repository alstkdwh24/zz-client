import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/register.scss'

export default function EmailRegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        console.log('회원가입 요청:', { email, password });
    };

    return (
        <div className="register-container">
            <h2>이메일로 회원가입</h2>
            <form onSubmit={handleSubmit}>
                <label>이메일</label>
                <input
                    type="email"
                    placeholder="abc@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>비밀번호</label>
                <input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label>비밀번호 확인</label>
                <input
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요."
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                />

                <button type="submit" className="register-btn">회원가입</button>
            </form>

            <p className="login-link">
                이미 계정이 있으신가요?{' '}
                <span onClick={() => navigate('/login')}>로그인</span>
            </p>
        </div>
    );
}