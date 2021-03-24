import Navbar from '../main/Navbar';
import Sidebar from '../main/Sidebar';

export default function App() {
	return (
		<>
			<div id="nav-main-container">
				<Navbar />
			</div>
			<div id="sidebar-main-container">
				<Sidebar />
			</div>
		</>
	);
}
