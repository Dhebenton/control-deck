import AtriOverview from "./AtriAI/Overview"

function Content({ fadeState, activeTab,  dashboardTab}) {
    if( activeTab === 'Atri Ai') {
        return (
            <div className="content">
                <div className={`fade-wrapper ${fadeState}`}>
                    <AtriOverview />
                </div>
            </div>
        )
    }
}

export default Content