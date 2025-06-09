import DashboardIcon from '../../assets/navigation/dashbo.svg'
import AnalyticsIcon from '../../assets/navigation/analy.svg';
import AtriAIIcon from '../../assets/navigation/atri.svg';
import BackupsIcon from '../../assets/navigation/backu.svg';
import ConfigurationsIcon from '../../assets/navigation/config.svg';
import IntegrationsIcon from '../../assets/navigation/inter.svg';
import LogsIcon from '../../assets/navigation/lgorep.svg';
import NotificationsIcon from '../../assets/navigation/noti.svg';
import PerformanceIcon from '../../assets/navigation/perfo.svg';
import PlansBillingIcon from '../../assets/navigation/planbili.svg';
import SecurityIcon from '../../assets/navigation/secu.svg';
import UsersIcon from '../../assets/navigation/useracc.svg';


function Tabs({ activeTab, setActiveTab }) {
    const tabs = [
        { id: "Dashboard", icon: DashboardIcon },
        { id: "Atri AI", icon: AtriAIIcon },
        { id: "Analytics", icon: AnalyticsIcon },
        { id: "Performance", icon: PerformanceIcon },
        { id: "Notifications", icon: NotificationsIcon },
        { id: "Security", icon: SecurityIcon },
        { id: "Integrations Hub", icon: IntegrationsIcon },
        { id: "Backups & Restore", icon: BackupsIcon },
        { id: "Configurations", icon: ConfigurationsIcon },
        { id: "Plans & Billing", icon: PlansBillingIcon },
        { id: "Users & Access", icon: UsersIcon },
        { id: "Logs & Reports", icon: LogsIcon }
    ];

    return (
        <div className='tabs-wrap'>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    <img src={tab.icon} alt={tab.label} />
                    <p className="tab-label">{tab.id}</p>
                </button>
            ))}
        </div>
    );
}

export default Tabs