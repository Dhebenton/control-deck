import OpenSideBarIcon from '../../../assets/button-icons/clospan.svg'
import OverviewIcon from '../../../assets/dashboard-tabs-icons/atriai/overview.svg'
import PerformanceIntelligenceIcon from '../../../assets/dashboard-tabs-icons/atriai/performance.svg'
import ConversionOptimizationIcon from '../../../assets/dashboard-tabs-icons/atriai/conver.svg'
import BlogGeneratorIcon from '../../../assets/dashboard-tabs-icons/atriai/blog.svg'
import MetaTitleAndDescriptionIcon from '../../../assets/dashboard-tabs-icons/atriai/meta.svg'
import ReportGeneratorIcon from '../../../assets/dashboard-tabs-icons/atriai/report.svg'
import SEODiganosticsIcon from '../../../assets/dashboard-tabs-icons/atriai/ser.svg'
import AISettingsIcon from '../../../assets/dashboard-tabs-icons/atriai/setting.svg'
import FullScreenIcon from '../../../assets/button-icons/fullscree.svg'
import StatusDropdown from '../../DropDownMenus/StatusDropdown'

function Menu({ dashboardTab, collapsed, handleCollapse }) {
    const tabIconMap = {
        "Overview": OverviewIcon,
        "Performance Intelligence": PerformanceIntelligenceIcon,
        "Conversion Optimization": ConversionOptimizationIcon,
        "SEO Diagnostics": SEODiganosticsIcon,
        "Blog Writer": BlogGeneratorIcon,
        "Meta Title & Desciptions": MetaTitleAndDescriptionIcon,
        "Report Generator": ReportGeneratorIcon,
        "AI Settings": AISettingsIcon
    };


    return (
        <div className="dashboard-menu">
            <div className="menu-icon-heading-wrap">
                <div className={`close-sidebar-wrap ${collapsed ? "closed" : ""}`}>
                    <button className="trans-button" id='open-sidebar-button' onClick={() => handleCollapse("menu")}>
                        <img src={OpenSideBarIcon}/>
                    </button>
                </div>
                <img src={tabIconMap[dashboardTab] || ""} className='dashboard-tab-icon' />
                <p className='dashboard-tab-heading'>{dashboardTab}</p>
            </div>
            <div className="menu-button-wrap">
                <button className='button-main one' id='full-screen'>
                    <div className='button-content-wrap'>
                        <img src={FullScreenIcon} />
                    </div>
                </button>
                <button className='button-main'>
                    <div className='button-content-wrap'>
                        <p className='button-text'>Go Back</p>
                    </div>
                </button>
                <button className='button-main'>
                    <div className='button-content-wrap'>
                        <p className='button-text'>Editor</p>
                    </div>
                </button>
                <StatusDropdown />
            </div>
        </div>
    )
}

export default Menu