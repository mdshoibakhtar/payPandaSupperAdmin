import logo from "../../../assets/images/logo/merchant.paypanda.in-1697112771.png"
function HeaderLogo() {
    return (
        <>
            <div className="nav-header">
                <a href="index.html" className="brand-logo">
                    <img src={logo} alt="logo" width={100 + '%'} height={100 + '%'} viewBox="0 0 39 23"/>
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderLogo