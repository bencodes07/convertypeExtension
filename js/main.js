const convType = document.getElementById('type');

const inputType = document.getElementById('inputType');
const outputType = document.getElementById('outputType');


const resultValue = document.querySelector('.resultValue');

function checkConvType() {
  if(convType.value == 'Speed'){
    console.log('Speed selected');


    setTimeout(() => {
      while (inputType.children.length > 0) {
        inputType.removeChild(inputType.children.item(0));
        console.log('Delete');
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
      kmph2.innerText = 'Kilometer per hour';
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


    let input = document.getElementById('input').value;
    let inputTypeValue = document.getElementById('inputType').value;
    let resultType = document.getElementById('outputType').value;
    let output = document.getElementById('output');

    if (input === '') return alert('Please enter a value');

    if (inputTypeValue == 'Meter per second') {
      // Meter per second
      if(resultType == 'Meter per second') {
        output.innerText = input;
      } 
      // Kilometer per hour
      else if(resultType == 'Kilometer per hour') {
        let calcResult = input * 3.6;
        output.innerText = calcResult;
      }
      // Foot per second
      else if(resultType == 'Foot per second') {
        let calcResult = input * 3.28084;
        output.innerText = calcResult;
      }
      // Mile per hour
      else if(resultType == 'Mile per hour') {
        let calcResult = input * 2.237;
        output.innerText = calcResult;
      }
      // Miles
      else if(resultType == 'Knot') {
        let calcResult = input * 1.94384;
        output.innerText = calcResult;
      }

    } else if (inputTypeValue === 'Kilometer per hour') {
        // Meter per second
        if(resultType == 'Meter per second') {
          let calcResult = input / 3.6;
          output.innerText = calcResult;
        }
        // Kilometer per hour
        else if(resultType == 'Kilometer per hour') {
          output.innerText = input;
        }
        // Foot per second
        else if(resultType == 'Foot per second') {
          let calcResult = input / 1.097;
          output.innerText = calcResult;
        }
        // Mile per hour
        else if(resultType == 'Mile per hour') {
          let calcResult = input / 1.609;
          output.innerText = calcResult;
        }
        // Knot 
        else if(resultType == 'Knot') {
          let calcResult = input / 1.852;
          output.innerText = calcResult;
        }
    } else if (inputTypeValue === 'Foot per second') {
        // Meter per second
        if(resultType == 'Meter per second') {
          let calcResult = input / 3.281;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Meters per second";
            output.innerText = input + " " + "Feet per second" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Kilometer per hour
        else if(resultType == 'Kilometer per hour') {
          let calcResult = input * 1.097;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Kilometers per hour";
            output.innerText = input + " " + "Feet per second" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Foot per second
        else if(resultType == 'Foot per second') {
          if(input > 1) {
            resultValue.innerText = input + " " + "Feet per second";
            output.innerText = input + " " + "Feet per second" + " =";
          } else {
            resultValue.innerText = input + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Mile per hour
        else if(resultType == 'Mile per hour') {
          let calcResult = input / 1.467;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Miles per hour";
            output.innerText = input + " " + "Feet per second" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Knot
        else if(resultType == 'Knot') {
          let calcResult = input / 1.688;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Knots";
            output.innerText = input + " " + "Feet per second" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
    } else if (inputTypeValue === 'Mile per hour') {
        // Meter per second
        if(resultType == 'Meter per second') {
          let calcResult = input / 2.237;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Meters per second";
            output.innerText = input + " " + "Miles per hour" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Kilometer per hour
        else if(resultType == 'Kilometer per hour') {
          let calcResult = input * 1.609;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Kilometers per hour";
            output.innerText = input + " " + "Miles per hour" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Foot per second
        else if(resultType == 'Foot per second') {
          let calcResult = input * 1.467;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Feet per second";
            output.innerText = input + " " + "Miles per hour" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Mile per hour
        else if(resultType == 'Mile per hour') {
          if(input > 1) {
            resultValue.innerText = input + " " + "Miles per hour";
            output.innerText = input + " " + "Miles per hour" + " =";
          } else {
            resultValue.innerText = input + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Knot
        else if(resultType == 'Knot') {
          let calcResult = input / 1.151;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + resultType + "s";
            output.innerText = input + " " + "Miles per hour" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
    } else if (inputTypeValue === 'Knot') {
      
        // Meter per second
        if(resultType == 'Meter per second') {
          let calcResult = input / 1.944;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Meters per second";
            output.innerText = input + " " + inputType + "s" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Kilometer per hour
        else if(resultType == 'Kilometer per hour') {
          let calcResult = input * 1.852;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Kilometers per hour";
            output.innerText = input + " " + inputType + "s" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Foot per second
        else if(resultType == 'Foot per second') {
          let calcResult = input * 1.688;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Feet per second";
            output.innerText = input + " " + inputType + "s" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Mile per hour
        else if(resultType == 'Mile per hour') {
          let calcResult = input * 1.151;
          if(calcResult > 1) {
            resultValue.innerText = calcResult + " " + "Miles per hour";
            output.innerText = input + " " + inputType + "s" + " =";
          } else {
            resultValue.innerText = calcResult + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
        // Knot
        else if(resultType == 'Knot') {
          if(input > 1) {
            resultValue.innerText = input + " " + resultType + "s";
            output.innerText = input + " " + inputType + "s" + " =";
          } else {
            resultValue.innerText = input + " " + resultType;
            output.innerText = input + " " + inputType + " =";
          }
        }
    }
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
      yd.value = 'Yards';
      yd.innerText = 'Yards';
      inputType.appendChild(yd);

      const yd2 = document.createElement('option');
      yd2.value = 'Yards';
      yd2.innerText = 'Yards';
      outputType.appendChild(yd2);



      const miles = document.createElement('option');
      miles.value = 'Miles';
      miles.innerText = 'Miles';
      inputType.appendChild(miles);

      const miles2 = document.createElement('option');
      miles2.value = 'Miles';
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
      kg.value = 'Kilogramm';
      kg.innerText = 'Kilogramm';
      inputType.appendChild(kg);

      const kg2 = document.createElement('option');
      kg2.value = 'Kilogramm';
      kg2.innerText = 'Kilogramm';
      outputType.appendChild(kg2);



      const gramm = document.createElement('option');
      gramm.value = 'Gramm';
      gramm.innerText = 'Gramm';
      inputType.appendChild(gramm);

      const gramm2 = document.createElement('option');
      gramm2.value = 'Gramm';
      gramm2.innerText = 'Gramm';
      outputType.appendChild(gramm2);



      const mg = document.createElement('option');
      mg.value = 'Milligramm';
      mg.innerText = 'Milligramm';
      inputType.appendChild(mg);

      const mg2 = document.createElement('option');
      mg2.value = 'Milligramm';
      mg2.innerText = 'Milligramm';
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
      inputType.appendChild(opouncetion);

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
      inputType.appendChild(kelvin2);
    }, 10);
  }


setInterval(() => {
  checkConvType();
}, 10);


window.addEventListener('load', () => {
  while (inputType.children.length > 0) {
    inputType.removeChild(inputType.children.item(0));
    console.log('Delete');
  }

  while (outputType.children.length > 0) {
    outputType.removeChild(outputType.children.item(0));
    console.log('Delete');
  }

  const mps = document.createElement('option');
  mps.value = 'Meter per second';
  mps.innerText = 'Meter per second';
  inputType.appendChild(mps);

  const kmph = document.createElement('option');
  kmph.value = 'Kilometer per hour';
  kmph.innerText = 'Kilometer per hour';
  inputType.appendChild(kmph);

  const fps = document.createElement('option');
  fps.value = 'Foot per second';
  fps.innerText = 'Foot per second';
  inputType.appendChild(fps);

  const mph = document.createElement('option');
  mph.value = 'Mile per hour';
  mph.innerText = 'Mile per hour';
  inputType.appendChild(mph);

  const kts = document.createElement('option');
  kts.value = 'Knot';
  kts.innerText = 'Knot';
  inputType.appendChild(kts);



  const mps2 = document.createElement('option');
  mps2.value = 'Meter per second';
  mps2.innerText = 'Meter per second';
  outputType.appendChild(mps2);

  const kmph2 = document.createElement('option');
  kmph2.value = 'Kilometer per hour';
  kmph2.innerText = 'Kilometer per hour';
  outputType.appendChild(kmph2);

  const fps2 = document.createElement('option');
  fps2.value = 'Foot per second';
  fps2.innerText = 'Foot per second';
  outputType.appendChild(fps2);

  const mph2 = document.createElement('option');
  mph2.value = 'Mile per hour';
  mph2.innerText = 'Mile per hour';
  outputType.appendChild(mph2);

  const kts2 = document.createElement('option');
  kts2.value = 'Knot';
  kts2.innerText = 'Knot';
  outputType.appendChild(kts2);
})};