import CloseSideBarIcon from '../../../assets/button-icons/clospan.svg'
import AtriAiSidebar from './SidebarTabs/AtriAiSidebar'

function Sidebar({ activeTab, dashboardTab, setDashboardTab, collapsed, handleCollapse, fadeState }) {
    return (
        <div className={`sidebar ${collapsed ? "closed" : ""}`}>
            <div className={`fade-wrapper ${fadeState}`}>
                <div className='sidebar-wrap'>
                    <div className="sidebar-icon-wrap">
                        <p className="h2">{activeTab}</p>
                        <button className="trans-button" onClick={() => handleCollapse("sidebar")}>
                            <img src={CloseSideBarIcon}/>
                        </button>
                    </div>
                    <AtriAiSidebar
                        dashboardTab={dashboardTab}
                        setDashboardTab={setDashboardTab}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar