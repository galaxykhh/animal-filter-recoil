import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './style/global';
import { RecoilRoot } from 'recoil';
import Picker from './components/Picker';
import Animals from './components/Animals';

function App() {
	return (
		<>
			<GlobalStyle />
			<RecoilRoot>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' >
						<Picker />
						<Animals />
					</Route>
				</Switch>
			</BrowserRouter>
			</RecoilRoot>
		</>
	);
}

export default App;
