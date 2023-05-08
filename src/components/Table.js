/** @format */

//TabelRows.js renamed was Sidetable 
// import React from "react";

// function SideTable(props) {
// 	let counts = {};
// 	props.posts.forEach((obj) => {
// 		const location = obj.location;
// 		counts[location] = counts[location] ? counts[location] + 1 : 1;
// 	});

// 	return (
// 		<table className="table my-3">
// 			<thead>
// 				<tr>
// 					<th scope="col">Location</th>
// 					<th scope="col">Posts</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				{props.posts.map((element) => {
// 					return (
// 						<tr key={element.id}>
// 							<td > <p className="text-decoration-none text-dark m-0" > {element.location}</p>    </td>
// 							<td>
// 								<span className="badge bg-secondary badge-pill">
// 									{counts[element.location]}
// 								</span>
// 							</td>
// 						</tr>
// 					);
// 				})}
// 			</tbody>
// 		</table>
// 	);
// }

// export default SideTable;

// renamed: TableRows was SideTable.js
function Table({ posts }) {

    const locations = {};
    posts.forEach(post =>  locations[post.location] ? locations[post.location]++:locations[post.location]=1);
    const keys = Object.keys(locations);

    return (
        <div className="col-lg-3">
            <h4>Posts by <span className="text-warning">location</span></h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Location</th>
                        <th className="text-center" scope="col">Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {keys.map(key => 
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td className="text-center"><span className="badge text-bg-secondary">{locations[key]}</span></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;