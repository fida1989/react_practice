import './App.css';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import Message from './components/Message';
import Profile from './components/Profile';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Profile name="Fida" last="Muntaseer"/>
      <Message text="Hello World From Component."/>
      <Resume name="Appnap"/>
      <Counter/>
      <FunctionEvent/>
      <ClassEvent/>
    </div>
  );
}

export default App;
