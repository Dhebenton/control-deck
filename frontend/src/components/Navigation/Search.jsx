import SearchIcon from '../../assets/search/search.svg'

function Search({}) {
    return (
        <>
            <div className="searchbar">
                <img src={SearchIcon} />
                <p>Search</p>
            </div>
        </>
    )
}

export default Search