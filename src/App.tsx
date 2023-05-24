import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

const App = () => {
	return (
		<div className="">
			<Header />
			<div className="flex items-center justify-space-between space-x-5">
				<Sidebar />
				<Home />
			</div>
		</div>
	);
};

export default App;
