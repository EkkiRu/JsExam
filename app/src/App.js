import './App.css';
import Photos from './components/Photos'

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex'},{flexdirection: 'column'},{justifycontent: 'space-evenly'},{alignitems: 'stretch'},{padding:'0px 400px 0px 400px'},{backgroundImage:'linear-gradient(to right, #d87272 0%, #4830F0 51%, #9EEFE1 100%)'}}>
      <Photos></Photos>
      </div>
    </div>
  );
}

export default App;
