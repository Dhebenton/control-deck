import SettingsIcon from '../../assets/button-icons/gear.svg'

function SettingsButton({}) {
    return (
        <>
        <button className="button-main icon-square" id='settingsbuttonnav'>
            <div className='button-content-wrap'>
                <img src={SettingsIcon} />
            </div>
        </button>
        </>
    )
}

export default SettingsButton