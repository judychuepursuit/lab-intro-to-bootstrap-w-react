/** @format */
//changed from SearchBar.js

function Search({ postData, setPosts, handleSearch}) {

    function resetPage() {
        setPosts(postData);
        document.querySelector("input").value = "";
    }

    return (
        <div className="d-none d-sm-block my-3 d-flex">
            <div className="d-flex gap-3">
                {/* <label>Search posts by location...</label> */}
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search posts by location..."
                    onChange={handleSearch}
                ></input>
                <button
                    className="btn btn-warning"
                    onClick={resetPage}
                >Cancel</button>
            </div>
        </div>
    );
}

export default Search;