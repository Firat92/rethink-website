import './App.css';
import Footer from './components/Footer';
import Group from './components/Group';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Video from './components/Video';

function App() {
	return (
		<div className='App'>
			<Header />
			<Video />
			<Group />
			<SignUp />
			<Footer />
		</div>
	);
}

export default App;
