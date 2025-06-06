import UIIcon from '../../assets/button-icons/ui.svg'

function UIButton({}) {
    return (
        <>
        <button className="button-main icon-square" id='edit-ui-button'>
            <div className='button-content-wrap'>
                <img src={UIIcon} />
            </div>
        </button>
        </>
    )
}

export default UIButton