import React, {useState} from 'react';
import './App.css';

function App() {

//    counter
const  [counter, setCounter] = useState(0);
    function addOne () {
        setCounter(counter +1)
    }
    function subOne() {
        if (counter >0) {
            setCounter(counter - 1)
        }
    }
  //  counter
  //  reset
    function reset() {
        setCounter(0)
    }
  //  form
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [age, setAge] = useState('')
    const [zipCode, setZipcode] = useState('')
    const [frequent, setFrequent ] = useState('')

    console.log(frequent)
    console.log(fName)
    console.log(age)
    console.log(lName)
    console.log(zipCode)
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        {/*counter button*/}
        <div>
            <h1>Aarbeien</h1>
            <button
                type="button"
                className="btn"
                onClick={ addOne }
                >
                +
            </button>
            <p> { counter } </p>
            <button
                type="button"
                className="btn"
                onClick={ subOne }
            >
                -
            </button>
        </div>

    {/*    reset button*/}
        <button
            type="button"
            className="reset-button"
            onClick={ reset }
        >
            reset
        </button>

    {/*    form*/}
        <form>
            <label for="fname"> First name: </label>
            <input
                type="text"
                id="fname"
                name="fname"
                value={ fName }
                onChange={(event) => setFName( event.target.value )}
            />
            <label form="lname"> Last name: </label>
            <input
                type="text"
                id="lname"
                name="lname"
                value={ lName }
                onChange={(event) => setLName( event.target.value )}
            />
            <label form="age"> Leeftijd</label>
            <input
                type="text"
                id="leeftijd"
                name="leeftijd"
                value={ age }
                onChange={(event) => setAge( event.target.value )}
            />
            <label form="zipCode"> Postcode</label>
            <input
                type="text"
                id="zipcode"
                name="zipCode"
                value={ zipCode }
                onChange={(event) => setZipcode( event.target.value )}
            />
            <label form="frequent"> Bezorgfrequentie</label>
            <select>
                <option value="2">  2 keer per week</option>
                <option value="3"> 3 keer per week</option>
                <option value="5"> 5 keer per week</option>
                <option value="7"> elke dag </option>
            </select>
            <label form="time"></label>
            <label form="review"></label>
        </form>
    </>
  );
}

export default App;
