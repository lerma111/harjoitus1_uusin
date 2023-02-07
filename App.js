import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(1);
  const [sex, setSex] = useState("male");
  const [result, setResult] = useState(0);

  const calculate = () => {
    let blood_level = 0;
    if (sex === 'male' && ((0.33*bottles*8*4.5)-(weight/10*time))/(weight*0.7)>0) {
      blood_level = ((0.33*bottles*8*4.5)-(weight/10*time))/(weight*0.7);
    }  else if(sex !== 'male' && ((0.33*bottles*8*4.5)-(weight/10*time))/(weight*0.6)>0) {
      blood_level = ((0.33*bottles*8*4.5)-(weight/10*time))/(weight*0.6);
    }
      else{
        blood_level = 0
      }
    setResult(blood_level);
  }

  return (

  <form>
  <h3>Calculating alcohol blood level</h3>
  <div>
    <label>Weight</label>
    <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
  </div>
  <div>
    <label>Bottles</label>
    <select onChange={e => setBottles(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div>
    <label>Time(h)</label>
    <select onChange={e => setTime(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div>
    <label>Sex</label>
    <label><input type="radio" name="Sex" value="male" defaultChecked onChange={e => setSex(e.target.value)}/>Male</label>
    <label><input type="radio" name="Sex" value="female" onChange={e => setSex(e.target.value)} />Female</label>
  </div>
  <br></br>
  <div>
    <label>Blood level </label>
    <output>{result.toFixed(2)}</output>
  </div>
  <br></br>
    <button type="button" onClick={calculate}>Calculate</button>
 </form>
  
  )

  }

export default App;
