/** @format */

import postData from "./data/posts.json";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header></Header>
			<p className="script-font fs-1 text-md-center m-4">
				Travel is the only thing you buy that makes you richer...
			</p>
			<hr />
            <Content posts={postData}></Content>
            
			<Footer></Footer>
		</>
	);
}

export default App;
