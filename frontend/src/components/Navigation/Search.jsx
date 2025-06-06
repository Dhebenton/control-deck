import SearchIcon from '../../assets/search/search.svg'

function Search({}) {
    return (
        <>
            <div className="searchbar">
                <div className='searchbar-content'>
                    <img src={SearchIcon} />
                    <p className='searchbar-placeholder'>Search</p>
                </div>
            </div>
        </>
    )
}

export default Search