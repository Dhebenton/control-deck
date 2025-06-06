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
        { id: "dashboard", icon: DashboardIcon, label: "Dashboard" },
        { id: "atri-ai", icon: AtriAIIcon, label: "Atri AI" },
        { id: "analytics", icon: AnalyticsIcon, label: "Analytics" },
        { id: "performance", icon: PerformanceIcon, label: "Performance" },
        { id: "notifications", icon: NotificationsIcon, label: "Notifications" },
        { id: "security", icon: SecurityIcon, label: "Security" },
        { id: "integrations", icon: IntegrationsIcon, label: "Integrations Hub" },
        { id: "backups", icon: BackupsIcon, label: "Backups & Restore" },
        { id: "configurations", icon: ConfigurationsIcon, label: "Configurations" },
        { id: "plans-billing", icon: PlansBillingIcon, label: "Plans & Billing" },
        { id: "users-access", icon: UsersIcon, label: "Users & Access" },
        { id: "logs-reports", icon: LogsIcon, label: "Logs & Reports" }
    ];

    return (
        <div className='tabs-wrap'>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    <div className="tab-content">
                        <img src={tab.icon} alt={tab.label} />
                        <p className="tab-label">{tab.label}</p>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default Tabs