import { LOGO_URL } from "../../utils/constants";

const Logo = () => {
    return (
        <img 
            src={LOGO_URL}
            alt="logo"
            className="header-logo"
        />
    )
}

export default Logo;