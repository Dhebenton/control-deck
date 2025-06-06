import SunIcon from '../../assets/theme-toggle/sun.svg'
import MoonIcon from '../../assets/theme-toggle/moon.svg'

function ThemeToggle({darkTheme, setDarkTheme}) {
    
    function setTheme() {
        setDarkTheme(prev => !prev);
    }

    return (
        <div className="theme-toggle-wrap">
            <img src={SunIcon} />
            <div  className={`theme-toggle ${darkTheme === true ? 'dark' : ''}`} onClick={setTheme}>
                <div className="theme-toggle-knob">
                </div>
            </div>
            <img src={MoonIcon} />
        </div>
    )
}

export default ThemeToggle;