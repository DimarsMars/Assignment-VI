import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';

function Header({ onSearch }) {

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary py-1">
                <div className="container">
                    <a className="navbar-brand fw-bold link-light" style={{ fontSize: "28px"}} href="#">Cinepex</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fw-bold"  style={{ fontSize: "15px"}}>
                            <li className="nav-item">
                            <a className="nav-link link-light" href="#">CINEPEX21</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link link-light" href="#">MOVIES</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link link-light" href="#">PARKS</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true"></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Search onSearch = {onSearch}/>
                    </div>
                </div>
            </nav>
    )
}

export default Header