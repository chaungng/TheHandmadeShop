import React from 'react';
import CategoryNavBar from './CategoryNavBar';
import MainNavBar from './MainNavBar';

const Header = () => {
    return (
        <div>
            <MainNavBar />
            <CategoryNavBar />
        </div>
    );
}

export default Header;