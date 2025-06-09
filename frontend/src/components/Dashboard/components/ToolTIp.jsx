function ToolTip({ answer }) {
    return (
        <div className="tooltip-wrap">
            <div className="tool-tip-icon">
                <p>?</p>
                <div className="tooltip">
                    <p>{ answer }</p>
                </div>
            </div>
        </div>
    )
}

export default ToolTip