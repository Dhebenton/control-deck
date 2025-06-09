import Chevron from '../../assets/Chevrons/chevronbutton.svg'
import { useState } from 'react'
import CheckIcon from '../../assets/form-icons/check.svg'
import { useRef, useLayoutEffect } from 'react';


function StatusDropdown({}) {
    const [ statusTab, setStatusTab ] = useState(true)
    const [sslToggleInactive, setSSLToggleInactive] = useState(false)
    const [jsToggleInactive, setJSToggleInactive] = useState(false)
    const [cdnToggleInactive, setCDNToggleInactive] = useState(false)
    const [ cachingToggleInactive, setCachingToggleInactive] = useState(false)
    const [open, setOpen] = useState(false)
    const [ destination, setDestination ] = useState(false)
    const tabContentRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState('auto');
    const [isTransitioning, setIsTransitioning] = useState(false);
    

    function handleDestination() {
        setDestination(prev => !prev)
    }

    function handleOpen() {
        setOpen(prev => !open)
    }

    function handleToggle() {
        setSSLToggleInactive(prev => !prev)
    };

    function handleChachingTab() {
        setCachingToggleInactive(prev => !prev)
    };

    function handleCDNToggle() {
        setCDNToggleInactive(prev => !prev)
    };

    function handleJSToggle() {
        setJSToggleInactive(prev => !prev)
    };

    function handleTab() {
        setStatusTab(prev => !prev)
    };

    
   function handleTabSwitch(newTab) {
  if (statusTab === newTab) return;

  setIsTransitioning(true);

  const currentHeight = tabContentRef.current?.scrollHeight || 0;
  setContainerHeight(currentHeight + 'px');

  setTimeout(() => {
    setStatusTab(newTab);

    requestAnimationFrame(() => {
      const newHeight = tabContentRef.current?.scrollHeight || 0;
      setContainerHeight(newHeight + 'px');
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 200); // total duration of fade and height transition
  }, 100); // delay for fade-out
}



    return (
        <div className="dropdown-wrap status">
            <button className={`button-main green ${open ? 'open' : ''}`} onClick={handleOpen}>
                    <p>Live</p>
                    <img src={Chevron} className='chevron'/>
                    <p>{containerHeight}</p>
            </button>
            <div className={`dropdown status ${open ? 'open' : ''}`} >
                <div className="dropdown-block top account">
                    <button onClick={() => handleTabSwitch(true)} className={`dropdown-tab ${statusTab ? 'current' : ''}`}>
                        Configuration
                    </button>
                    <button onClick={() => handleTabSwitch(false)} className={`dropdown-tab ${statusTab ? '' : 'current'}`}>
                        Destination
                    </button>
                </div>

                    <div className="dropdown-tab-height-wrapper" style={{ height: containerHeight, transition: 'height 0.4s ease'}}>
                        <div ref={tabContentRef} className={`dropdown-tab-fade-wrapper ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                            {statusTab === true &&
                            <>
                            <div className={`dropdown-block hover status ${sslToggleInactive ? '' : 'inactive'}`}>
                                <div className='config-toggle' onClick={handleToggle}>
                                    <div className='config-knob'></div>
                                </div>
                                <div className='config-knob-label-wrap'>
                                    <p className={`config-knob-label act ${sslToggleInactive ? 'active' : ''}`}>Active</p>
                                    <p className={`config-knob-label  ${sslToggleInactive ? '' : 'active'}`}>Inactive</p>
                                </div>
                                <div className='config-block-sep'></div>
                                <p className='dropdown-subheading'>SSL</p>
                            </div>
                        
                            <div className={`dropdown-block hover status ${jsToggleInactive ? '' : 'inactive'}`}>
                                <div className='config-toggle' onClick={handleJSToggle}>
                                    <div className='config-knob'></div>
                                </div>
                                <div className='config-knob-label-wrap'>
                                    <p className={`config-knob-label act ${jsToggleInactive ? 'active' : ''}`}>Active</p>
                                    <p className={`config-knob-label  ${jsToggleInactive ? '' : 'active'}`}>Inactive</p>
                                </div>
                                <div className='config-block-sep'></div>
                                <p className='dropdown-subheading'>Minified CSS & JS</p>
                            </div>
                            <div className={`dropdown-block hover status ${cdnToggleInactive ? '' : 'inactive'}`}>
                                <div className='config-toggle' onClick={handleCDNToggle}>
                                    <div className='config-knob'></div>
                                </div>
                                <div className='config-knob-label-wrap'>
                                    <p className={`config-knob-label act ${cdnToggleInactive ? 'active' : ''}`}>Active</p>
                                    <p className={`config-knob-label  ${cdnToggleInactive ? '' : 'active'}`}>Inactive</p>
                                </div>
                                <div className='config-block-sep'></div>
                                <p className='dropdown-subheading'>CDN</p>
                            </div>
                            <div className={`dropdown-block hover status ${cachingToggleInactive ? '' : 'inactive'}`}>
                                <div className='config-toggle' onClick={handleChachingTab}>
                                    <div className='config-knob'></div>
                                </div>
                                <div className='config-knob-label-wrap'>
                                    <p className={`config-knob-label act ${cachingToggleInactive ? 'active' : ''}`}>Active</p>
                                    <p className={`config-knob-label  ${cachingToggleInactive ? '' : 'active'}`}>Inactive</p>
                                </div>
                                <div className='config-block-sep'></div>
                                <p className='dropdown-subheading'>Edge Caching</p>
                            </div>
                        
                            <div className='dropdown-block hover indicators'>
                                <p className='dropdown-subheading'>Lighthouse Score 92 </p>
                                <p className='dropdown-subheading'>Uptime  99.98% </p>
                                <p className='last-updated-indicator'>Last updated 4h ago</p>
                                <p className='last-updated-indicator'>Last updated 4h ago</p>
                            </div>
                            </>}
                            {statusTab === false &&
                            <>
                            <div className={`dropdown-block domain ${destination ? 'active' : '' }`}>
                                <div className='dropdown-subheading'>Staging</div>
                                <div className='staging-checkbox' onClick={handleDestination}>
                                    <img src={CheckIcon}></img>
                                </div>
                                <div className='dropdown-menu-domain-block'>
                                    <p className='dropdown-domain'>pornhub/staging/hypeify.io</p>
                                    <p className='last-updated-indicator'>{destination === true ? 'Published 2m ago' : 'Not published'}</p>
                                    <button className='last-updated-indicator gray'>Unpublish</button>
                                </div>
                            </div>
                        
                            <div className={`dropdown-block domain ${destination ? '' : 'active' }`}>
                                <div className='dropdown-subheading'>Custom Domain</div>
                                <div className='staging-checkbox' onClick={handleDestination}>
                                    <img src={CheckIcon}></img>
                                </div>
                                <div className='dropdown-menu-domain-block'>
                                    <p className='dropdown-domain'>Custom Domain</p>
                                    <p className='dropdown-domain add'>Add A Custom Domain</p>
                                    <p className='last-updated-indicator'>{destination === true ? 'Not published' : 'Published 2m ago'}</p>
                                    <button className='last-updated-indicator gray'>Unpublish</button>
                                </div>
                            </div>
                            <div className='dropdown-block'>
                                <button className='button-main grey'><p>Cancel</p></button>
                                <button className='button-main orange'><p>Publish to seleceted domain</p></button>
                            </div>
                            </>}
                        </div>
                    </div>
                
            </div> 
        </div>
    )
}

export default StatusDropdown