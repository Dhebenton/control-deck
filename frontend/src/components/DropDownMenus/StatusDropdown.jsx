import Chevron from '../../assets/Chevrons/chevronbutton.svg'
import { useState } from 'react'

function StatusDropdown({}) {
    const [ statusTab, setStatusTab ] = useState(false)

    function handleTab() {
        setStatusTab(prev => !prev)
    };



    return (
        <div className="dropdown-wrap status">
            <button className='button-main green'>
                <div className='button-content-wrap'>
                    <p className='button-text'>Live</p>
                    <img src={Chevron} className='chevron two'/>
                </div>
            </button>
            <div className='dropdown status open'>
                <div className="dropdown-block top account">
                    <button onClick={() => setStatusTab(true)} className={`dropdown-tab ${statusTab ? 'current' : ''}`}>
                        Configuration
                    </button>
                    <button onClick={() => setStatusTab(false)} className={`dropdown-tab ${statusTab ? '' : 'current'}`}>
                        Destination
                    </button>
                </div>


                {statusTab === true &&

                <div className='dropdown-block'>
                    <div className='dropdown-block-content-opacity configuration-toggle'>
                        <div className='config-toggle'>
                                <div className='config-knob'></div>
                        </div>
                        <div className='config-knob-label-wrap'>
                            <p className='config-knob-label active'>Active</p>
                            <p className='config-knob-label'>Inactive</p>
                        </div>
                        <div className='config-block-sep'></div>
                        <p className='dropdown-subheading'>SSL</p>
                    </div>
                </div>

                }


            </div> 
        </div>
    )
}

export default StatusDropdown