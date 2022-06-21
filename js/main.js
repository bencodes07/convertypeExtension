const convType = document.getElementById('type');
const inputType = document.getElementById('inputType');
const outputType = document.getElementById('outputType');
const resultValue = document.querySelector('.resultValue');
const inputField = document.getElementById('input');


function checkConvType() {
  if (convType.value == 'Speed') {
    let input = document.getElementById('input').value;
    let inputTypeValue = document.getElementById('inputType').value;
    let resultType = document.getElementById('outputType').value;
    const output = document.getElementById('output');

    if (inputTypeValue == 'Meter per second') {
      // Meter per second
      if (resultType == 'Meter per second') {
        output.value = input;
      }
      // Kilometer per hour
      else if (resultType == 'Kilometer per hour') {
        let calcResult = input * 3.6;
        output.value = calcResult;
      }
      // Foot per second
      else if (resultType == 'Foot per second') {
        const calcResult = input * 3.28084;
        output.value = calcResult;
      }
      // Mile per hour
      else if (resultType == 'Mile per hour') {
        const calcResult = input * 2.237;
        output.value = calcResult;
      }
      // Miles
      else if (resultType == 'Knot') {
        const calcResult = input * 1.94384;
        output.value = calcResult;
      }

    } else if (inputTypeValue === 'Kilometer per hour') {
      // Meter per second
      if (resultType == 'Meter per second') {
        const calcResult = input / 3.6;
        output.value = calcResult;
      }
      // Kilometer per hour
      else if (resultType == 'Kilometer per hour') {
        output.value = input;
      }
      // Foot per second
      else if (resultType == 'Foot per second') {
        const calcResult = input / 1.097;
        output.value = calcResult;
      }
      // Mile per hour
      else if (resultType == 'Mile per hour') {
        const calcResult = input / 1.609;
        output.value = calcResult;
      }
      // Knot 
      else if (resultType == 'Knot') {
        const calcResult = input / 1.852;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Foot per second') {
      // Meter per second
      if (resultType == 'Meter per second') {
        const calcResult = input / 3.281;
        output.value = calcResult;
      }
      // Kilometer per hour
      else if (resultType == 'Kilometer per hour') {
        const calcResult = input * 1.097;
        output.value = calcResult;
      }
      // Foot per second
      else if (resultType == 'Foot per second') {
        output.value = input;
      }
      // Mile per hour
      else if (resultType == 'Mile per hour') {
        const calcResult = input / 1.467;
        output.value = calcResult;
      }
      // Knot
      else if (resultType == 'Knot') {
        const calcResult = input / 1.688;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Mile per hour') {
      // Meter per second
      if (resultType == 'Meter per second') {
        const calcResult = input / 2.237;
        output.value = calcResult;
      }
      // Kilometer per hour
      else if (resultType == 'Kilometer per hour') {
        const calcResult = input * 1.609;
        output.value = calcResult;
      }
      // Foot per second
      else if (resultType == 'Foot per second') {
        const calcResult = input * 1.467;
        output.value = calcResult;
      }
      // Mile per hour
      else if (resultType == 'Mile per hour') {
        output.value = input;
      }
      // Knot
      else if (resultType == 'Knot') {
        const calcResult = input / 1.151;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Knot') {

      // Meter per second
      if (resultType == 'Meter per second') {
        const calcResult = input / 1.944;
        output.value = calcResult;
      }
      // Kilometer per hour
      else if (resultType == 'Kilometer per hour') {
        const calcResult = input * 1.852;
        output.value = calcResult;
      }
      // Foot per second
      else if (resultType == 'Foot per second') {
        const calcResult = input * 1.688;
        output.value = calcResult;
      }
      // Mile per hour
      else if (resultType == 'Mile per hour') {
        output.value = input * 1.151;
      }
      // Knot
      else if (resultType == 'Knot') {
        output.value = input;
      }
    }
} else if (convType.value == 'Distance') {
    let input = document.getElementById('input').value;
    let inputTypeValue = document.getElementById('inputType').value;
    let resultType = document.getElementById('outputType').value;
    const output = document.getElementById('output');


    if (inputTypeValue == 'Centimeter') {
      // Centimeter
      if(resultType == 'Centimeter') {
        output.value = input;
      } 
      // Meter
      else if(resultType == 'Meter') {
        let calcResult = input / 100;
        output.value = calcResult;
      }
      // Kilometer
      else if(resultType == 'Kilometer') {
        let calcResult = input / 100000;
        output.value = calcResult;
      }
      // Yards
      else if(resultType == 'Yard') {
        let calcResult = input / 91.44;
        output.value = calcResult;
      }
      // Miles
      else if(resultType == 'Mile') {
        let calcResult = input / 160934.4;
        output.value = calcResult;
      }
      // Foot 
      else if(resultType == 'Foot') {
        let calcResult = input / 30.48;
        output.value = calcResult;
      }
      // Inch
      else if(resultType == 'Inch') {
        let calcResult = input / 2.54;
        output.value = calcResult;
      }
  
    } else if (inputTypeValue === 'Meter') {
        // Centimeter
        if(resultType == 'Centimeter') {
          let calcResult = input * 100;
          output.value = calcResult;
        }
        // Meter
        else if(resultType == 'Meter') {
          output.value = input;
        }
        // Kilometer
        else if(resultType == 'Kilometer') {
          let calcResult = input / 1000;
          output.value = calcResult;
        }
        // Yards
        else if(resultType == 'Yard') {
          let calcResult = input / 0.9144;
          output.value = calcResult;
        }
        // Miles 
        else if(resultType == 'Mile') {
          let calcResult = input / 1609.34;
          output.value = calcResult;
        }
        // Foot
        else if(resultType == 'Foot') {
          let calcResult = input / 0.3048;
          output.value = calcResult;
        }
        // Inch
        else if(resultType == 'Inch') {
          let calcResult = input / 0.0254;
          output.value = calcResult;
        }
  
    } else if (inputTypeValue === 'Kilometer') {
        // Centimeter
        if(resultType == 'Centimeter') {
          let calcResult = input * 100000;
          output.value = calcResult;
        }
        // Meter
        else if(resultType == 'Meter') {
          let calcResult = input * 1000;
          output.value = calcResult;
        }
        // Kilometer
        else if(resultType == 'Kilometer') {
          output.value = input;
        }
        // Yards
        else if(resultType == 'Yard') {
          let calcResult = input * 1093.61;
          output.value = calcResult;
        }
        // Miles
        else if(resultType == 'Mile') {
          let calcResult = input / 1.60934;
          output.value = calcResult;
        }
        // Foot
        else if(resultType == 'Foot') {
          let calcResult = input * 3280.84;
          output.value = calcResult;
        }
        // Inch
        else if(resultType == 'Inch') {
          let calcResult = input * 39370.1;
          output.value = calcResult;
        }
    } else if (inputTypeValue === 'Yard') {
        // Centimeter
        if(resultType == 'Centimeter') {
          let calcResult = input * 91.44;
          output.value = calcResult;
        }
        // Meter
        else if(resultType == 'Meter') {
          let calcResult = input * 0.9144;
          output.value = calcResult;
        }
        // Kilometer
        else if(resultType == 'Kilometer') {
          let calcResult = input / 1093.61;
          output.value = calcResult;
        }
        // Yards
        else if(resultType == 'Yard') {
          output.value = input;
        }
        // Miles
        else if(resultType == 'Mile') {
          let calcResult = input / 1760;
          output.value = calcResult;
        }
        // Foot
        else if(resultType == 'Foot') {
          let calcResult = input * 3;
          output.value = calcResult;
        }
        // Inch
        else if(resultType == 'Inch') {
          let calcResult = input * 36;
          output.value = calcResult;
        }
    } else if (inputTypeValue === 'Mile') {
        // Centimeter
        if(resultType == 'Centimeter') {
          let calcResult = input * 160934;
          output.value = calcResult;
        }
        // Meter
        else if(resultType == 'Meter') {
          let calcResult = input * 1609.34;
          output.value = calcResult;
        }
        // Kilometer
        else if(resultType == 'Kilometer') {
          let calcResult = input / 0.62137;
          output.value = calcResult;
        }
        // Yards
        else if(resultType == 'Yard') {
          let calcResult = input * 1760;
          output.value = calcResult;
        }
        // Miles
        else if(resultType == 'Mile') {
          output.value = input;
        }
        // Foot
        else if(resultType == 'Foot') {
          let calcResult = input * 5280;
          output.value = calcResult;
        }
        // Inch
        else if(resultType == 'Inch') {
          let calcResult = input * 63360;
          output.value = calcResult;
        }
  
    } else if (inputTypeValue === 'Foot') {
        // Centimeter
        if(resultType == 'Centimeter') {
          output.value = calcResult;
        }
        // Meter
        else if(resultType == 'Meter') {
          let calcResult = input * 0.3048;
          output.value = calcResult;
        }
        // Kilometer
        else if(resultType == 'Kilometer') {
          let calcResult = input / 3280.84;
          output.value = calcResult;
        }
        // Yards
        else if(resultType == 'Yard') {
          let calcResult = input * 3;
          output.value = calcResult;
        }
        // Miles
        else if(resultType == 'Mile') {
          let calcResult = input / 5280;
          output.value = calcResult;
        }
        // Foot
        else if(resultType == 'Foot') {
          output.value = input;
        }
        // Inch
        else if(resultType == 'Inch') {
          let calcResult = input * 12;
          output.value = calcResult;
        }
    } else if (inputTypeValue === 'Inch') {
        // Centimeter
        if(resultType == 'Centimeter') {
          let calcResult = input * 2.54;
          output.value = calcResult;
        }
        // Meter
        else if(resultType == 'Meter') {
          let calcResult = input * 0.0254;
          output.value = calcResult;
        }
        // Kilometer
        else if(resultType == 'Kilometer') {
          let calcResult = input / 39370;
          output.value = calcResult;
        }
        // Yards
        else if(resultType == 'Yard') {
          let calcResult = input * 0.0277778;
          output.value = calcResult;
        }
        // Miles
        else if(resultType == 'Mile') {
          let calcResult = input / 63360;
          output.value = calcResult;
        } 
        // Foot
        else if(resultType == 'Foot') {
          let calcResult = input * 0.083333;
          output.value = calcResult;
        }
        // Inch
        else if(resultType == 'Inch') {
          output.value = input;
        }
    };



} else if (convType.value == 'Weight') {
    let input = document.getElementById('input').value;
    let inputTypeValue = document.getElementById('inputType').value;
    let resultType = document.getElementById('outputType').value;
    const output = document.getElementById('output');
    if (inputTypeValue === 'Tonne') {
      // Tonne
      if(resultType == 'Tonne') {
        output.value = input;
      } 

      // Kilogram
      else if(resultType === 'Kilogram') {
        let calcResult = input * 1000;
        output.value = calcResult;
      }

      // Gram
      else if(resultType === 'Gram') {
        let calcResult = input * 1000000;
        output.value = calcResult;
      }

      // Milligram
      else if(resultType === 'Milligram') {
        let calcResult = input * 1000000000;
        output.value = calcResult;
      }

      // Pound
      else if(resultType === 'Pound') {
        let calcResult = input * 2.20462;
        output.value = calcResult;
      }

      // Ounce 
      else if(resultType === 'Ounce') {
        let calcResult = input * 35.274;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Kilogram') {
      // Tonne
      if(resultType == 'Tonne') {
        let calcResult = input / 1000;
        output.value = calcResult;
      }

      // Kilogram
      else if(resultType === 'Kilogram') {
        output.value = input;
      }

      // Gram
      else if(resultType === 'Gram') {
        let calcResult = input * 1000;
        output.value = calcResult;
      }

      // Milligram
      else if(resultType === 'Milligram') {
        let calcResult = input * 1000000;
        output.value = calcResult;
      }

      // Pound
      else if(resultType === 'Pound') {
        let calcResult = input * 2.20462;
        output.value = calcResult;
      }

      // Ounce
      else if(resultType === 'Ounce') {
        let calcResult = input * 35.274;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Gram') {
      // Tonne
      if(resultType == 'Tonne') {
        let calcResult = input / 1000000;
        output.value = calcResult;
      }

      // Kilogram
      else if(resultType === 'Kilogram') {
        let calcResult = input / 1000;
        output.value = calcResult;
      }

      // Gram
      else if(resultType === 'Gram') {
        output.value = input;
      }

      // Milligram
      else if(resultType === 'Milligram') {
        let calcResult = input * 1000;
        output.value = calcResult;
      }

      // Pound
      else if(resultType === 'Pound') {
        let calcResult = input * 0.00220462;
        output.value = calcResult;
      }

      // Ounce
      else if(resultType === 'Ounce') {
        let calcResult = input * 0.035274;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Milligram') {
      // Tonne
      if(resultType == 'Tonne') {
        let calcResult = input / 1000000000;
        output.value = calcResult;
      }

      // Kilogram
      else if (resultType === 'Kilogram') {
        let calcResult = input / 1000000;
        output.value = calcResult;
      }

      // Gram
      else if(resultType === 'Gram') {
        let calcResult = input / 1000;
        output.value = calcResult;
      }

      // Milligram
      else if (resultType === 'Milligram') {
        output.value = input;
      }

      // Pound
      else if (resultType === 'Pound') {
        let calcResult = input * 0.0000220462;
        output.value = calcResult;
      }

      // Ounce 
      else if (resultType === 'Ounce') {
        let calcResult = input * 0.000035274;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Pound') {
      // Tonne
      if(resultType == 'Tonne') {
        let calcResult = input / 2.20462;
        output.value = calcResult;
      }

      // Kilogram
      else if(resultType === 'Kilogram') {
        let calcResult = input / 2.20462;
        output.value = calcResult;
      }

      // Gram
      else if(resultType === 'Gram') {
        let calcResult = input * 453.592;
        output.value = calcResult;
      }

      // Milligram
      else if(resultType === 'Milligram') {
        let calcResult = input * 453592;
        output.value = calcResult;
      }

      // Pound
      else if(resultType === 'Pound') {
        output.value = input;
      }

      // Ounce
      else if(resultType === 'Ounce') {
        let calcResult = input * 16;
        output.value = calcResult;
      }
    } else if (inputTypeValue === 'Ounce') {
      // Tonne
      if(resultType == 'Tonne') {
        let calcResult = input / 35.274;
        output.value = calcResult;
      }

      // Kilogram
      else if(resultType === 'Kilogram') {
        let calcResult = input / 35.274;
        output.value = calcResult;
      }

      // Gram
      else if(resultType === 'Gram') {
        let calcResult = input * 28.3495;
        output.value = calcResult;
      }

      // Milligram
      else if (resultType === 'Milligram') {
        let calcResult = input * 28349.5;
        output.value = calcResult;
      }

      // Pound
      else if(resultType === 'Pound') {
        let calcResult = input / 16;
        output.value = calcResult;
      }

      // Ounce
      else if(resultType === 'Ounce') {
        output.value = input;
      }




    }
} else if (convType.value == 'Temperature') {
  let input = document.getElementById('input').value;
  let inputTypeValue = document.getElementById('inputType').value;
  let resultType = document.getElementById('outputType').value;
  const output = document.getElementById('output');
  if (inputTypeValue == 'Celsius') {
    // Celsius 
    if(resultType == 'Celsius') {
      output.value = input;
      console.log('Both celsius')
    }

    // Fahrenheit
    if(resultType === 'Fahrenheit') {
      let calcResult = input * 1.8 + 32;
      output.value = calcResult;
    }

    // Kelvin
    else if(resultType === 'Kelvin') {
      let calcResult = input + 273.15;
      output.value = calcResult;
    }
  } else if (inputTypeValue === 'Fahrenheit') {
    // Celsius
    if(resultType === 'Celsius') {
      let calcResult = (input - 32) / 1.8;
      output.value = calcResult;
    }

    // Fahrenheit
    if(resultType === 'Fahrenheit') {
      output.value = input;
    }

    // Kelvin
    else if(resultType === 'Kelvin') {
      let calcResult = (input + 459.67) * 5/9;
      output.value = calcResult;
    }
  } else if (inputTypeValue === 'Kelvin') {
    // Celsius
    if(resultType === 'Celsius') {
      let calcResult = input - 273.15;
      output.value = calcResult;
    }

    // Fahrenheit
    else if(resultType === 'Fahrenheit') {
      let calcResult = input * 9/5 - 459.67;
      output.value = calcResult;
    }

    // Kelvin
    else if(resultType === 'Kelvin') {
      output.value = input;
    }
  }
}

window.addEventListener('load', () => {
  while (inputType.children.length > 0) {
    inputType.removeChild(inputType.children.item(0));
  }

  while (outputType.children.length > 0) {
    outputType.removeChild(outputType.children.item(0));
    console.log('Delete');
  }

  const mps1 = document.createElement('option');
  mps1.value = 'Meter per second';
  mps1.innerText = 'Meter per second';
  inputType.appendChild(mps1);

  const mps2 = document.createElement('option');
  mps2.value = 'Meter per second';
  mps2.innerText = 'Meter per second';
  outputType.appendChild(mps2);



  const kmph1 = document.createElement('option');
  kmph1.value = 'Kilometer per hour';
  kmph1.innerText = 'Kilometer per hour';
  inputType.appendChild(kmph1);

  const kpmh2 = document.createElement('option');
  kpmh2.value = 'Kilometer per hour';
  kpmh2.innerText = 'Kilometer per hour';
  outputType.appendChild(kpmh2);



  const fps1 = document.createElement('option');
  fps1.value = 'Foot per second';
  fps1.innerText = 'Foot per second';
  inputType.appendChild(fps1);

  const fps2 = document.createElement('option');
  fps2.value = 'Foot per second';
  fps2.innerText = 'Foot per second';
  outputType.appendChild(fps2)



  const mph1 = document.createElement('option');
  mph1.value = 'Mile per hour';
  mph1.innerText = 'Mile per hour';
  inputType.appendChild(mph1);

  const mph2 = document.createElement('option');
  mph2.value = 'Mile per hour';
  mph2.innerText = 'Mile per hour';
  outputType.appendChild(mph2);



  const kts1 = document.createElement('option');
  kts1.value = 'Knot';
  kts1.innerText = 'Knot';
  inputType.appendChild(kts1);

  const kts2 = document.createElement('option');
  kts2.value = 'Knot';
  kts2.innerText = 'Knot';
  outputType.appendChild(kts2);
})};


window.addEventListener('change', checkConvType);
window.addEventListener('load', checkConvType);
inputField.addEventListener('keyup', checkConvType);
inputType.addEventListener('change', checkConvType);
outputType.addEventListener('change', checkConvType);

window.addEventListener('load', changeConvType);
convType.addEventListener('change', changeConvType);

function changeConvType() {
  if(convType.value == 'Speed') {

    console.log('Speed selected');

    setTimeout(() => {

      // Delete all options
      while (inputType.children.length > 0) {
        inputType.removeChild(inputType.children.item(0));
        console.log('Delete');
      }

      while (outputType.children.length > 0) {
        outputType.removeChild(outputType.children.item(0));
        console.log('Delete');
      }

      // Create and set new options

      const mps1 = document.createElement('option');
      mps1.value = 'Meter per second';
      mps1.innerText = 'Meter per second';
      inputType.appendChild(mps1);

      const mps2 = document.createElement('option');
      mps2.value = 'Meter per second';
      mps2.innerText = 'Meter per second';
      outputType.appendChild(mps2);



      const kmph1 = document.createElement('option');
      kmph1.value = 'Kilometer per hour';
      kmph1.innerText = 'Kilometer per hour';
      inputType.appendChild(kmph1);

      const kpmh2 = document.createElement('option');
      kpmh2.value = 'Kilometer per hour';
      kpmh2.innerText = 'Kilometer per hour';
      outputType.appendChild(kpmh2);



      const fps1 = document.createElement('option');
      fps1.value = 'Foot per second';
      fps1.innerText = 'Foot per second';
      inputType.appendChild(fps1);

      const fps2 = document.createElement('option');
      fps2.value = 'Foot per second';
      fps2.innerText = 'Foot per second';
      outputType.appendChild(fps2)



      const mph1 = document.createElement('option');
      mph1.value = 'Mile per hour';
      mph1.innerText = 'Mile per hour';
      inputType.appendChild(mph1);

      const mph2 = document.createElement('option');
      mph2.value = 'Mile per hour';
      mph2.innerText = 'Mile per hour';
      outputType.appendChild(mph2);



      const kts1 = document.createElement('option');
      kts1.value = 'Knot';
      kts1.innerText = 'Knot';
      inputType.appendChild(kts1);

      const kts2 = document.createElement('option');
      kts2.value = 'Knot';
      kts2.innerText = 'Knot';
      outputType.appendChild(kts2);

    }, 10);
  } else if (convType.value == 'Distance') {

    console.log('Distance selected');

    setTimeout(() => {
      while (inputType.children.length > 0) {
        inputType.removeChild(inputType.children.item(0));
        console.log('Delete');
      }

      while (outputType.children.length > 0) {
        outputType.removeChild(outputType.children.item(0));
        console.log('Delete');
      }

      const cm = document.createElement('option');
      cm.value = 'Centimeter';
      cm.innerText = 'Centimeter';
      inputType.appendChild(cm);

      const cm2 = document.createElement('option');
      cm2.value = 'Centimeter';
      cm2.innerText = 'Centimeter';
      outputType.appendChild(cm2);



      const m = document.createElement('option');
      m.value = 'Meter';
      m.innerText = 'Meter';
      inputType.appendChild(m);

      const m2 = document.createElement('option');
      m2.value = 'Meter';
      m2.innerText = 'Meter';
      outputType.appendChild(m2);



      const km = document.createElement('option');
      km.value = 'Kilometer';
      km.innerText = 'Kilometer';
      inputType.appendChild(km);

      const km2 = document.createElement('option');
      km2.value = 'Kilometer';
      km2.innerText = 'Kilometer';
      outputType.appendChild(km2);



      const yd = document.createElement('option');
      yd.value = 'Yard';
      yd.innerText = 'Yards';
      inputType.appendChild(yd);

      const yd2 = document.createElement('option');
      yd2.value = 'Yard';
      yd2.innerText = 'Yards';
      outputType.appendChild(yd2);



      const miles = document.createElement('option');
      miles.value = 'Mile';
      miles.innerText = 'Miles';
      inputType.appendChild(miles);

      const miles2 = document.createElement('option');
      miles2.value = 'Mile';
      miles2.innerText = 'Miles';
      outputType.appendChild(miles2);



      const ft = document.createElement('option');
      ft.value = 'Foot';
      ft.innerText = 'Foot';
      inputType.appendChild(ft);

      const ft2 = document.createElement('option');
      ft2.value = 'Foot';
      ft2.innerText = 'Foot';
      outputType.appendChild(ft2);



      const inch = document.createElement('option');
      inch.value = 'Inch';
      inch.innerText = 'Inch';
      inputType.appendChild(inch);

      const inch2 = document.createElement('option');
      inch2.value = 'Inch';
      inch2.innerText = 'Inch';
      outputType.appendChild(inch2);
    }, 10);
  } else if (convType.value == 'Weight') {
    console.log('Weight selected');

  setTimeout(() => {
    while (inputType.children.length > 0) {
      inputType.removeChild(inputType.children.item(0));
      console.log('Delete');
    }

    while (outputType.children.length > 0) {
      outputType.removeChild(outputType.children.item(0));
      console.log('Delete');
    }

    const tonne = document.createElement('option');
    tonne.value = 'Tonne';
    tonne.innerText = 'Tonne';
    inputType.appendChild(tonne);

    const tonne2 = document.createElement('option');
    tonne2.value = 'Tonne';
    tonne2.innerText = 'Tonne';
    outputType.appendChild(tonne2);



    const kg = document.createElement('option');
    kg.value = 'Kilogram';
    kg.innerText = 'Kilogram';
    inputType.appendChild(kg);

    const kg2 = document.createElement('option');
    kg2.value = 'Kilogram';
    kg2.innerText = 'Kilogram';
    outputType.appendChild(kg2);



    const gram = document.createElement('option');
    gram.value = 'Gram';
    gram.innerText = 'Gram';
    inputType.appendChild(gram);

    const gram2 = document.createElement('option');
    gram2.value = 'Gram';
    gram2.innerText = 'Gram';
    outputType.appendChild(gram2);



    const mg = document.createElement('option');
    mg.value = 'Milligram';
    mg.innerText = 'Milligram';
    inputType.appendChild(mg);

    const mg2 = document.createElement('option');
    mg2.value = 'Milligram';
    mg2.innerText = 'Milligram';
    outputType.appendChild(mg2);



    const pound = document.createElement('option');
    pound.value = 'Pound';
    pound.innerText = 'Pound';
    inputType.appendChild(pound);

    const pound2 = document.createElement('option');
    pound2.value = 'Pound';
    pound2.innerText = 'Pound';
    outputType.appendChild(pound2);



    const ounce = document.createElement('option');
    ounce.value = 'Ounce';
    ounce.innerText = 'Ounce';
    inputType.appendChild(ounce);

    const ounce2 = document.createElement('option');
    ounce2.value = 'Ounce';
    ounce2.innerText = 'Ounce';
    outputType.appendChild(ounce2);
  }, 10);
  } else if (convType.value == 'Temperature') {
    
    console.log('Temperature selected');

    setTimeout(() => {
      while (inputType.children.length > 0) {
        inputType.removeChild(inputType.children.item(0));
        console.log('Delete');
      }

      while (outputType.children.length > 0) {
        outputType.removeChild(outputType.children.item(0));
        console.log('Delete');
      }

      const celsius = document.createElement('option');
      celsius.value = 'Celsius';
      celsius.innerText = 'Celsius';
      inputType.appendChild(celsius);

      const celsius2 = document.createElement('option');
      celsius2.value = 'Celsius';
      celsius2.innerText = 'Celsius';
      outputType.appendChild(celsius2);



      const fahrenheit = document.createElement('option');
      fahrenheit.value = 'Fahrenheit';
      fahrenheit.innerText = 'Fahrenheit';
      inputType.appendChild(fahrenheit);

      const fahrenheit2 = document.createElement('option');
      fahrenheit2.value = 'Fahrenheit';
      fahrenheit2.innerText = 'Fahrenheit';
      outputType.appendChild(fahrenheit2);



      const kelvin = document.createElement('option');
      kelvin.value = 'Kelvin';
      kelvin.innerText = 'Kelvin';
      inputType.appendChild(kelvin);

      const kelvin2 = document.createElement('option');
      kelvin2.value = 'Kelvin';
      kelvin2.innerText = 'Kelvin';
      outputType.appendChild(kelvin2);
    }, 10);
  }
}