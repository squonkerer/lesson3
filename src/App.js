import './App.css';
import City from './City';
import City2 from './City2';
import Counter from './Counter.js';
import frog from './frog.png';

/*const moreCities = [
  {
    cityName: 'Tallinn'
  },
  {
    cityName: 'New-York'
  },
  {
    cityName: 'London'
  }
]*/

function App() {
  //const moreCitiesJsx = moreCities.map((city) => <City name={cityName}/>)
  return (
    <div className="container">
      <h1>Favorite cities</h1>
      <City name="London" country="GB" remarks = "free-for-all"/>
      <City name="New-York" country="USA"/>
      <City name="Tallinn" country="EST"/>
      <City2 name="Blizzard" image={frog}/>
    </div>
  );
}

export default App;
