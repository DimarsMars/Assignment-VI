import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function Search({ onSearch }) {
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search);
      };

    return(
        <nav className="navbar bg-primary ">
            <div className="container">
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} name="searchInput" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Search