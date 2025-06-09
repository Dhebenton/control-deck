import BlogWriter from "./AtriAI/BlogWriter"
import ConversionOptimisation from "./AtriAI/ConversionOptimisation"
import AtriOverview from "./AtriAI/Overview"
import PerformanceIntelligence from "./AtriAI/PerformanceIntelligence"
import ReportGenerator from "./AtriAI/ReportGenerator"
import SEODiagnostics from "./AtriAI/SEODiagnostics"

function Content({ fadeState, activeTab,  dashboardTab}) {

    if( activeTab === 'Atri AI') {
        return (
            <div className="content">
                <div className={`fade-wrapper ${fadeState}`}>
                    { dashboardTab === "Overview" && <AtriOverview /> }
                    { dashboardTab === "Performance Intelligence" && <PerformanceIntelligence />}
                    { dashboardTab === "Conversion Optimization" && <ConversionOptimisation />}
                    { dashboardTab === "SEO Diagnostics" && <SEODiagnostics />}
                    { dashboardTab === "Blog Writer" && <BlogWriter />}
                    { dashboardTab === "Report Generator" && <ReportGenerator />}
                </div>
            </div>
        )
    }
}

export default Content