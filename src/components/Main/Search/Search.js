import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
    const onChange = (event) => {
        if (event.keyCode === 13) {
            onSearch(event.target.value)
        }
    }
    return (
        <div className="Search__wrapper">
            <h1>Search Giphy</h1>
            <input
                type="text"
                id="search-bar"
                placeholder="Search GIFs..."
                onKeyDown={onChange}
            />
        </div>
    )
}

export { Search }