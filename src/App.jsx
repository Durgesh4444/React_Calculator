import { useState } from 'react';
import './App.css';

function App() {
    const [result, setresult] = useState("")

    const handleclick = (event) => {
        setresult(result.concat(event.target.value))
    }

    const finalresult = () =>{
        if(result === ""){
            setresult("")
        }
        else{setresult(eval(result).toString())}
        
    }

    const cleardisplay = () =>{
        setresult("")
    }

    const remove = () =>{
        setresult(result.toString().slice(0,-1))
    }
  return (
   
       <div className="container">
        <section className="calculator">
            <h1 >Calculator</h1>
            <form>
                <input type="text" className="screen" placeholder='0' value={result} />
              
            
            <div className="button oprator">
                <button type="button" value="AC" onClick={cleardisplay}>AC</button>
                <button type="button" value="CE" onClick={remove}>CE</button>
                <button type="button" value="." onClick={handleclick}>.</button>
                <button type="button" value="/" onClick={handleclick}>/</button>
            </div>
            <div className="button">
                <button type="button" value="7" onClick={handleclick} >7</button>
                <button type="button" value="8" onClick={handleclick}>8</button>
                <button type="button" value="9" onClick={handleclick}>9</button>
                <button type="button" value="*" onClick={handleclick}>*</button>
            </div>
            <div className="button">
                <button type="button" value="4" onClick={handleclick}>4</button>
                <button type="button" value="5" onClick={handleclick}>5</button>
                <button type="button" value="6" onClick={handleclick}>6</button>
                <button type="button" value="-" onClick={handleclick}>-</button>
            </div>
            <div className="button">
                <button type="button" value="3" onClick={handleclick}>3</button>
                <button type="button" value="2" onClick={handleclick}>2</button>
                <button type="button" value="1"onClick={handleclick}>1</button>
                <button type="button" value="+" onClick={handleclick}>+</button>
            </div>
            <div className="button">
                <button type="button" value="00" onClick={handleclick}>00</button>
                <button type="button" value="0" onClick={handleclick}>0</button>
                <button type="button" value="=" onClick={finalresult}>=</button>
            </div>
        </form>  
     </section>
    </div>
  );
}

export default App;
