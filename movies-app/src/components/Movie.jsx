import 'bootstrap/dist/css/bootstrap.css';

function Movie({title, year, type, poster}) {
    return (
        <div>
            <div className="card hover-card mt-4 text-center border border-2 border-black" style= {{ width: "254px" }}>
                <img src={poster} className="card-img-top" style={{ height: "350px" }} alt="This is Image"/>
                <div className="card-body" style={{ backgroundColor: "#F4F6FF" }}>
                    <p className="card-title mb-0 fw-bold">{title}</p>
                    <div className='d-flex flex-row gap-2 justify-content-center'>
                        <p className="card-title">{type}</p>
                        <p className="card-title">|</p>
                        <p className="card-title mb-0">{year}</p>
                    </div>
                    <a href="#" className="btn btn-primary shadow-lg rounded">Watch Movie</a>
                </div>
            </div>
        </div>
    )
}

export default Movie