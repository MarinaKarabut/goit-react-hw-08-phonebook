import React from 'react';
import { connect } from 'react-redux';

import { getUserNme } from '../../../../redux/auth/auth-selectors'

import {logOut} from '../../../../redux/auth/auth-operations'


import Button from '../../../../shared/components/Button'
import defaultAvatar from './avatar.jpg'


import styles from './UserMenu.module.css'

function UserMenu({avatar, name, onLogout}) {
    return (
        <div className={ styles.container}>
            <img src={avatar} alt="" width="32" className={ styles.avatar}/>
            <span className={ styles.name}>Welcome, {name}</span>
            <Button onClick={onLogout} className={ styles.btn}>Logout</Button>
            
        </div>
    )
};

const mapStateToProps = (state) => ({
    name: getUserNme(state),
    avatar: defaultAvatar
})

const mapDispatchToProps = {
    onLogout: logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
