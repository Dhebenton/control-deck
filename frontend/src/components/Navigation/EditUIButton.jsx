import UIIcon from '../../assets/button-icons/ui.svg'

function UIButton({}) {
    return (
        <>
        <button className="button-main icon-square" id='edit-ui-button'>
            <img src={UIIcon} />
        </button>
        </>
    )
}

export default UIButton