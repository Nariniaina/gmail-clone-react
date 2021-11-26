import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    };

    return (
        <div className='header'>
            <div className="header__left">
                {/* This is how we made effect to an Icon : 
                ripple effect example 
                we must surround the Icon with an IconButton*/}
                <IconButton>
                    <MenuIcon />
                </IconButton>
                {/* The render is particulary cool */}

                <img src="https://i02.appmifile.com/images/2019/05/25/65d91020-cff7-4ccd-b469-e5a5296e2e55.jpg" alt=""/>
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Seach mail" type="text"/>
                <ArrowDropDownIcon />
            </div> 
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                {/* user? means to protect from undefined error */}
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
