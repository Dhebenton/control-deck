import NotificationBellIcon from '../../assets/button-icons/nobe.svg'
import DotsIcon from '../../assets/dropdown-icons/notifications/dots.svg'
import ImageIcon from '../../assets/dropdown-icons/notifications/img.svg'
import { useState } from 'react';

function NotificationDropdown({}) {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(prev => !prev);
    }

    return (
        <div className='dropdown-wrap'>
            <button className={`trans-button ${open ? 'active' : ''}`} onClick={handleOpen}>
                <img src={NotificationBellIcon}/>
            </button>
            <div className={`dropdown notifications ${open ? 'open' : ''}`}>
                <div className='dropdown-block top'>
                    <p className='dropdown-heading'>Notifications</p>
                </div>
                <div className='dropdown-block hover notification'>
                    <div>
                        <p className='notification'>News just in, Carlos Aija is severely homosexual, im talking big time gay, <a>Donate towards his rehabilitation here</a></p>
                        <p className='notification-date'>3 Days Ago</p>
                    </div>
                </div>
                <div className='dropdown-block hover notification'>
                    <img src={ImageIcon}/>
                    <div className='notification-date-wrap'>
                        <p className='notification'>Image Optimiser paused, Cloudinary quota hit. Auto-retry scheduled in 10 minutes. </p>
                        <p className='notification-date'>3 Days Ago</p>
                    </div>
                </div>
                <div className='dropdown-block hover notification'>
                    <div className='notification-date-wrap'>
                        <p className='notification'>New seat pricing is now available for your current Workspaces. <a>Learn more about all plan changes</a></p>
                        <p className='notification-date'>3 Days Ago</p>
                    </div>
                </div>
                <div className='dropdown-block hover'>
                        <img src={DotsIcon} />
                        <p className='dropdown-heading'>View All Notifications</p>
                </div>
            </div>
        </div>
    )
}

export default NotificationDropdown;