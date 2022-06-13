const convType = document.getElementById('type');

const inputType = document.getElementById('inputType');
const outputType = document.getElementById('outputType');

convType.addEventListener('change', () => {
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

      const m = document.createElement('option');
      m.value = 'Meter';
      m.innerText = 'Meter';
      inputType.appendChild(m);

      const km = document.createElement('option');
      km.value = 'Kilometer';
      km.innerText = 'Kilometer';
      inputType.appendChild(km);

      const yd = document.createElement('option');
      yd.value = 'Yards';
      yd.innerText = 'Yards';
      inputType.appendChild(yd);

      const miles = document.createElement('option');
      miles.value = 'Miles';
      miles.innerText = 'Miles';
      inputType.appendChild(miles);

      const ft = document.createElement('option');
      ft.value = 'Foot';
      ft.innerText = 'Foot';
      inputType.appendChild(ft);

      const inch = document.createElement('option');
      inch.value = 'Inch';
      inch.innerText = 'Inch';
      inputType.appendChild(inch);
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

      const kg = document.createElement('option');
      kg.value = 'Kilogramm';
      kg.innerText = 'Kilogramm';
      inputType.appendChild(kg);

      const gramm = document.createElement('option');
      gramm.value = 'Gramm';
      gramm.innerText = 'Gramm';
      inputType.appendChild(gramm);

      const mg = document.createElement('option');
      mg.value = 'Milligramm';
      mg.innerText = 'Milligramm';
      inputType.appendChild(mg);

      const pound = document.createElement('option');
      pound.value = 'Pound';
      pound.innerText = 'Pound';
      inputType.appendChild(pound);

      const ounce = document.createElement('option');
      ounce.value = 'Ounce';
      ounce.innerText = 'Ounce';
      inputType.appendChild(opouncetion);
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

      const fahrenheit = document.createElement('option');
      fahrenheit.value = 'Fahrenheit';
      fahrenheit.innerText = 'Fahrenheit';
      inputType.appendChild(fahrenheit);

      const kelvin = document.createElement('option');
      kelvin.value = 'Kelvin';
      kelvin.innerText = 'Kelvin';
      inputType.appendChild(kelvin);
    }, 10);
  }
});


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
});





