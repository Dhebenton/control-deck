import SettingsIcon from '../../assets/button-icons/gear.svg'

function SettingsButton({}) {
    return (
        <>
        <button className="button-main icon-square" id='settingsbuttonnav'>
            <img src={SettingsIcon} />
        </button>
        </>
    )
}

export default SettingsButton