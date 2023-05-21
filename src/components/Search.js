/** @format */

function Search({ handleSearch, resetPage }) {
    return (
        <div className="d-none d-sm-block my-3 d-flex">
            <div className="input-group d-flex gap-3">
                <label className="mt-2">Search posts by location...</label>
                <input
                    className="form-control rounded"
                    type="search"
                    onChange={handleSearch}
                ></input>
                <button
                    className="btn btn-warning rounded"
                    onClick={resetPage}
                >Cancel</button>
            </div>
        </div>
    );
}

export default Search;