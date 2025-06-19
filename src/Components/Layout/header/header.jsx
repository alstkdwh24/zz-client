    import '../../../styles/header.scss'
    const Header = () => {
    return (
        <header className="headline">
            <div className="inner_header">
                <div className="top_logo" />
                <div className="auth_buttons">
                    <button className="soft_button">로그인</button>
                    <button className="soft_button">회원가입</button>
                </div>
            </div>
        </header>
    )

}

export default Header