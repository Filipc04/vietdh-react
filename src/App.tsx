import { Routes, Route, BrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import './App.css'
import { ErrorPage } from './pages/ErrorPage';


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />}/>
					<Route path='*' element={<ErrorPage />}/> {/* Add 404 not found*/}
				</Routes>		
			</BrowserRouter>
		</>
	);
}

export default App;
