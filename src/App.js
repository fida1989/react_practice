import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
import Profile from './components/Profile';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Profile name="Fida" last="Muntaseer"/>
      <Message text="Hello World From Component."/>
      <Resume name="Fabliha"/>
      <Counter/>
    </div>
  );
}

export default App;
