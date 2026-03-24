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
					<Route path='/bilder' element={[]}/>
					<Route path='*' element={<ErrorPage />}/>
				</Routes>		
			</BrowserRouter>
		</>
	);
}

export default App;
