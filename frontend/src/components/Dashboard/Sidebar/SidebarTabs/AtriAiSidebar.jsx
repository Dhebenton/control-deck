import OverviewIcon from '../../../../assets/sidebar-icons/atriai/over.svg'
import PerformanceIntelligenceIcon from '../../../../assets/sidebar-icons/atriai/analy.svg'
import ConversionOptimizationIcon from '../../../../assets/sidebar-icons/atriai/conveopt.svg'
import BlogWriterIcon from '../../../../assets/sidebar-icons/atriai/bloggene.svg'
import MetaTitleAndDesciption from '../../../../assets/sidebar-icons/atriai/metatitle.svg'
import ReportGeneratorIcon from '../../../../assets/sidebar-icons/atriai/repogen.svg'
import AiSettingsIcon from '../../../../assets/sidebar-icons/atriai/sett.svg'
import SEODiagnosticsIcon from '../../../../assets/sidebar-icons/atriai/seodiag.svg'


function AtriAiSidebar({ dashboardTab, setDashboardTab }) {
    
    const tabs = [
        {id: "Overview", icon: OverviewIcon},
        {id: "Performance Intelligence", icon: PerformanceIntelligenceIcon},
        {id: "Conversion Optimization", icon: ConversionOptimizationIcon},
        {id: "SEO Diagnostics", icon: SEODiagnosticsIcon},
        {id: "Blog Writer", icon: BlogWriterIcon},
        {id: "Meta Title & Desciptions", icon: MetaTitleAndDesciption},
        {id: "Report Generator", icon: ReportGeneratorIcon},
        {id: "AI Settings", icon: AiSettingsIcon}
    ];

    const groupedTabs = {
        Categories: tabs.slice(1, 4),
        "Content Writer": tabs.slice(4, 7),
        "AI Settings": [tabs[7]]
    };

    return (
        <div className='sidebar-tabs-wrap'>

            <button
                className={`sidebar-tab ${dashboardTab === "Overview" ? "active" : ""}`}
                onClick={() => setDashboardTab("Overview")}
            >
                <img src={OverviewIcon} />
                <p className='sidebar-tab-label'>Overview</p>
            </button>


            {Object.entries(groupedTabs).map(([heading, group]) => (
                <div className='sidebar-tab-group' key={heading}>
                    <p className='sidebar-tabs-group-heading'>{heading}</p>
                    {group.map(tab => (
                        <button
                            key={tab.id}
                            className={`sidebar-tab ${dashboardTab === tab.id ? "active" : ""}`}
                            onClick={() => setDashboardTab(tab.id)}
                        >
                            <img src={tab.icon} />
                            <p className='sidebar-tab-label'>{tab.id}</p>
                        </button>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default AtriAiSidebar