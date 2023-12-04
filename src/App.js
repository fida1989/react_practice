import './App.css';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile name="Fida" last="Muntaseer"/>
      <Message text="Hello World From Component."/>
    </div>
  );
}

export default App;
