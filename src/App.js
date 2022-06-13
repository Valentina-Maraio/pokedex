import './App.css';
import {Provider} from 'react-redux'
import configureStore from './store/configusteStore'
import Pokemon from './components/Pokemon';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Pokedex</h1>
            <Pokemon />
          </header>
        </div>
    </Provider>
  );
}

export default App;
