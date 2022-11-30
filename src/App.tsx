import React from 'react';
import { useState } from "react"
import { useAge } from './hooks';
import MapHouston from './Map/Map';



function App() {
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  const theTimeThatPassed = useAge();

  return (
    <div className="App">

        {/* Last Updated: {theTimeThatPassed} */}
        {theTimeThatPassed}
        {/* <div className='love'>
        <img className="img-fluid"
              src={`${process.env.PUBLIC_URL}/picture.jpg`}
              alt="love"/>
        </div> */}

        <div>

		<input checked={isChecked}
        onChange={checkHandler} id="one" name="multiples" type="radio" value="1"/>
        <label htmlFor="one">1</label>

		<input id="two" name="multiples" type="radio" value="2"/>
        <label htmlFor="two">2</label>

        <input id="three" name="multiples" type="radio" value="3"/>
        <label htmlFor="three">3</label>

        <input id="four" name="multiples" type="radio" value="4"/>
        <label htmlFor="four">4</label>

        <input id="five" name="multiples" type="radio" value="5"/>
        <label htmlFor="five">5</label>

        <input id="six" name="multiples" type="radio" value="6"/>
        <label htmlFor="six">6</label>

        <input id="seven" name="multiples" type="radio" value="7"/>
        <label htmlFor="seven">7</label>

        <input id="eight" name="multiples" type="radio" value="8"/>
        <label htmlFor="eight">8</label>

		<div className="container">
			<div className="carousel">
				<img src={`${process.env.PUBLIC_URL}/picture.jpg`} alt="Landscape 1"/>
				<img src={`${process.env.PUBLIC_URL}/castle.jpg`} alt="Landscape 2"/>
				<img src={`${process.env.PUBLIC_URL}/ring.jpg`} alt="Landscape 3"/>
				<img src={`${process.env.PUBLIC_URL}/gallery.jpg`} alt="Landscape 4"/>
				<img src={`${process.env.PUBLIC_URL}/birthday.jpg`} alt="Landscape 5"/>
				<img src={`${process.env.PUBLIC_URL}/vltava.jpg`} alt="Landscape 6"/>
				<img src={`${process.env.PUBLIC_URL}/carlovyvary.jpg`} alt="Landscape 7"/>
				<img src={`${process.env.PUBLIC_URL}/sky.jpg`} alt="Landscape 8"/>
			</div>
		</div>

	      </div>
        <MapHouston />

    </div>
  );
}

export default App;
