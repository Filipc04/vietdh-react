import { Routes, Route, BrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />}/>
					<Route path='/bilder' element={[]}/>
				</Routes>		
			</BrowserRouter>
		</>
	);
}

export default App;
