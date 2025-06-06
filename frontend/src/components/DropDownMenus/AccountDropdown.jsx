import ProfilePic from '../../assets/img/accounntpfp.png'
import Chevron from '../../assets/Chevrons/chevronone.svg'
import SettingsIcon from '../../assets/dropdown-icons/account/set.svg'
import WorkspaceIcon from '../../assets/dropdown-icons/account/workspa.svg'
import SignOutIcon from '../../assets/dropdown-icons/account/signout.svg'
import { useState } from 'react';

function AccountDropdown({}) {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(prev => !prev);
    }

    return (
        <div className='dropdown-wrap account'>
            <div onClick={handleOpen} className='account-toggle-wrap'>
                <img src={ProfilePic}/>
                <div className={`chev-togg ${open ? 'open' : ``}`}>
                    <p className='dropdown-heading thiner'>Account</p>
                    <img src={Chevron} className='chevron'/>
                </div>
            </div>
            <div className={`dropdown account ${open ? 'open' : ''}`}>
                <div className='dropdown-block top spread'>
                    <img src={ProfilePic} />
                    <p className='dropdown-heading'>Daniil Hebenton</p>
                </div>
                <div className='dropdown-block'> 
                    <div className="dropdown-block-content-opacity middle">
                        <img src={SettingsIcon}/>
                        <p className='dropdown-subheading'>Account settings</p>
                    </div>
                </div>
                <div className='dropdown-block'> 
                    <div className="dropdown-block-content-opacity middle">
                        <img src={WorkspaceIcon}/>
                        <p className='dropdown-subheading'>Workspace settings</p>
                    </div>
                </div>
                <div className='dropdown-block'> 
                    <div className="dropdown-block-content-opacity middle">
                        <img src={SignOutIcon}/>
                        <p className='dropdown-subheading'>Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountDropdown