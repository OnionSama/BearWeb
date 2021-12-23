import './App.css';
import HeadMenu from './HeadMenu.js'
import merry_christmas_png from './img/merry_christmas.png'


function App() {
  return (
    <div className="App">
      <HeadMenu />
        <div className="App-img-div">
          <img src={merry_christmas_png} className="mc-img" alt="Merry Christmas" />
        </div>
    </div>
  );
}

export default App;
