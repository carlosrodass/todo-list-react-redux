import './App.css';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <h1>WEVENTURE Coding Challenge</h1>
        <AddTask />
        <TaskList />
      </main>
    </Provider>
  );
}

export default App;
