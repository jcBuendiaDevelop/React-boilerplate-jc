import * as React from "react";
import {ABCPROVEEDOR, ADDPRODUCT, CONSULTPRODUCT, LOGO_USER, SOLICITUDMUESTRA} from "../Const/Constants";
import headerInterface from "../interfaces/headerInterface";
import ButtonsNav from "./buttonsNav";
import LogoTronico from "./logoTronico";
import UserProfile from "./UserProfile";

const labels = [ADDPRODUCT, ABCPROVEEDOR, SOLICITUDMUESTRA, CONSULTPRODUCT];

class Header extends React.Component<headerInterface, any > {

    constructor(props: headerInterface) {
        super(props);

        this.state = {
            sideNav: "mySidenav",
        };
    }

    public closeNav = () => {
        this.setState ({
            sideNav: "mySidenavClose",
        });
        this.props.onCategoryStyle();
    }

    public openNav = () => {
        this.setState ({
            sideNav: "mySidenav",
        });
        this.props.onCategoryStyle();
    }

    public handleLogout = async (event) => {
        event.preventDefault();
        location.assign("https://auth.tronicogroup.com/logout?response_type=code&client_id=1rg3u2ch329gb3n97chqai555h&redirect_uri=https://www.google.com.mx/imghp&state=STATE&scope=aws.cognito.signin.user.admin");
    }

    public render() {
        return (
            <div>
            <header>
            <UserProfile urlImage={LOGO_USER} nameUser={`Juan Carlos Buendia`} />
            <h2 className="login-form-title">{this.props.rol}</h2>
            <span className="spanOpen" onClick={this.openNav}>&#9776;</span>

            </header>
            <div id="mySidenav"  className={this.state.sideNav}>
            <a href="javascript:void(0)" onClick={this.closeNav} >&#8249;&#8249;</a>
            <LogoTronico />
            <ButtonsNav label={labels}/>
            </div>
            </div>
        );
    }
}

export default Header;
