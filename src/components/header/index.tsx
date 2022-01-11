import React from "react";
import SearchField from "../searchField";
import './styles.scss'

const Header = () => {
    return (<header>
        <nav className="col-md-10">
            {/* <img
                className="logo"
                onClick={() => history.push("/")}
                src={logo}
                title="Mercado Livre"
                alt="Mercado Livre"
            /> */}
            <SearchField />
        </nav>
    </header>)
}

export default Header