import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { ErrorPage, HomePage, ImagePage } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/bilder" element={<ImagePage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
