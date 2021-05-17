import React from "react";
import { connect } from "react-redux";

import NavbarNav from '../NavbarNav'
import UserMenu from '../UserMenu'
import AuthNav from '../AuthNav'

import {getIsAuthenticated} from '../../../../redux/auth/auth-selectors'

import styles from "./Navbar.module.css";




const Navbar = ({ isAuthenticated }) => {

    return (
        <nav className="navbar">
            <div className={ styles.container}>
                <div className={ styles.navbarRow}>
                    < NavbarNav isAuthenticated={isAuthenticated} />
                    { isAuthenticated? <UserMenu/> : <AuthNav/>}
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: getIsAuthenticated(state)
})



export default connect(mapStateToProps)(Navbar);

