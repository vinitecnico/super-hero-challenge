import React, { useState, useRef } from "react";
import searchIcon from "../../assets/images/search.svg";
import './styles.scss'

const SearchField: React.FC = () => {
    const buttonRef = useRef(null);
    const [search, setSearch] = useState();

    // useEffect(() => {
    //     if (history.location.pathname === "/") setTerm();
    // }, [history.location.pathname]);

    const handleChange = (e: any) => {
        setSearch(e.target.value);
    }

    const handleKeyUp = (e: any) => {
        // if (e.key === "Enter") buttonRef.current && buttonRef.current.click();
    }

    const handleSearch = () => {
        // history.push(`/items?q=${encodeURIComponent(term)}`);
    }

    return (
        <section className="search-field">
            <input
                className="search-field-input"
                placeholder="Nunca deixe de buscar"
                type="text"
                value={search}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
            // {...props}
            />
            <button
                ref={buttonRef}
                onClick={handleSearch}
                className="search-field-button"
            >
                <img src={searchIcon} alt="Buscar herói" title="Buscar herói" />
            </button>
        </section>
    )
}

export default SearchField