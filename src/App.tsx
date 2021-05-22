import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './style/global';
import { RecoilRoot } from 'recoil';
import Header from './components/Header/Header';
import AnimalPicker from './pages/AnimalPicker';
import TodoListFilter from './pages/TodoList';

function App() {
	return (
		<>
			<GlobalStyle />
			<RecoilRoot>
			<BrowserRouter>
			<Header />
				<Switch>
					<Route exact path='/' >
						<AnimalPicker />
					</Route>
					<Route exact path='/todo' >
						<TodoListFilter />
					</Route>
				</Switch>
			</BrowserRouter>
			</RecoilRoot>
		</>
	);
}

export default App;
