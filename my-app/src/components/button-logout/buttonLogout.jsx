import { Link } from "react-router-dom";

export default function ButtonLogOut(){
    return(
        <nav className="main-nav">
            <Link className="main-nav-item" to="/User">
                <i className="fa fa-user-circle"></i>
                {firstName}
            </Link>
            <Link className="main-nav-item" to="/signIn">
                <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
            
            
        </nav>
    )
}