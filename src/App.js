import React, { useState } from 'react';
import './App.css'; // Assuming CSS is in App.css

function CalculatorApp() {
  const [display, setDisplay] = useState(''); // State for display

  // Handle button click
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display)); // Evaluate the expression in display
      } catch (error) {
        setDisplay('Error'); // Display error if eval fails
      }
    } else if (value === 'C') {
      setDisplay(''); // Clear the display
    } else if (value === 'del') {
      setDisplay(display.slice(0, -1)); // Remove last character
    } else {
      setDisplay(display + value); // Add clicked value to display
    }
  };


  return (
    <div id="calculator-box">
      <input type="text" id="display" value={display}  disabled />

      <div className="button-manage">
        <button className="btn" onClick={() => handleClick('C')}>
          C
        </button>
        <button className="btn" onClick={() => handleClick('del')}>
          del
        </button>
        <button className="btn" onClick={() => handleClick('%')}>
          %
        </button>
        <button className="btn" onClick={() => handleClick('/')}>
          /
        </button>
      </div>

      <div className="button-manage">
        <button className="btn" onClick={() => handleClick('7')}>
          7
        </button>
        <button className="btn" onClick={() => handleClick('8')}>
          8
        </button>
        <button className="btn" onClick={() => handleClick('9')}>
          9
        </button>
        <button className="btn" onClick={() => handleClick('*')}>
          *
        </button>
      </div>

      <div className="button-manage">
        <button className="btn" onClick={() => handleClick('4')}>
          4
        </button>
        <button className="btn" onClick={() => handleClick('5')}>
          5
        </button>
        <button className="btn" onClick={() => handleClick('6')}>
          6
        </button>
        <button className="btn" onClick={() => handleClick('-')}>
          -
        </button>
      </div>

      <div className="button-manage">
        <button className="btn" onClick={() => handleClick('1')}>
          1
        </button>
        <button className="btn" onClick={() => handleClick('2')}>
          2
        </button>
        <button className="btn" onClick={() => handleClick('3')}>
          3
        </button>
        <button className="btn" onClick={() => handleClick('+')}>
          +
        </button>
      </div>

      <div className="button-manage">
        <button className="btn" onClick={() => handleClick('0')}>
          0
        </button>
        <button className="btn" onClick={() => handleClick('00')}>
          00
        </button>
        <button className="btn" onClick={() => handleClick('.')}>
          .
        </button>
        <button className="btn" onClick={() => handleClick('=')}>
          =
        </button>
      </div>
    </div>
  );
}

export default CalculatorApp;
