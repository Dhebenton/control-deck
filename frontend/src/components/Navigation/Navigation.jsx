import CloseNavigationIcon from '../../assets/button-icons/clnv.svg'
import NotificationDropdown from '../DropDownMenus/NotificationDropDown';
import AccountDropdown from '../DropDownMenus/AccountDropdown';
import Search from './Search';
import Tabs from './Tabs';
import ThemeToggle from './ThemeToggle';
import SettingsButton from './SettingsButton';
import UIButton from './EditUIButton';
import { useState } from 'react';

function Navigation({ activeTab, setActiveTab, darkTheme, setDarkTheme }) {
    const [closedNav, setClosedNav] = useState(false)
    const [opening, setOpening] = useState(false);

    function handleClose() {
        if (closedNav) {
            setOpening(true);
            setTimeout(() => setOpening(false), 400);
        }
        setClosedNav(prev => !prev);
    }

    return (
        <div className={`navigation ${closedNav ? 'closed' : ''} ${opening ? 'opening' : ''}`} >
            <div className="navigation-top">
                <AccountDropdown />
                <NotificationDropdown />
                <button className="trans-button" id="close-navigation" onClick={handleClose}>
                    <img src={CloseNavigationIcon}/>
                </button>
            </div>
            <Search />
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="navigation-top bottom">
                <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <UIButton />                
                <SettingsButton />
            </div>
        </div>
    );
}

export default Navigation;