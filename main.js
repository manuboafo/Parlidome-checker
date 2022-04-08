const text = document.querySelector('#textValue');
const dropdown = document.querySelector('#units');
const button =  document.querySelector('button');
const footValue =  document.querySelector('#footValue');
const centimetervalue = document.querySelector("#centimetersValue");
const metersValue = document.querySelector("#metersValue");
const inchesValue = document.querySelector("#inchesValue");
let cent;
let met;
let foot;
let inch;

button.addEventListener('click', calulate)

function calulate(){
    let textValue = text.value;
    let dropdownValue = dropdown.value;
   if(textValue.length > 0){

       if(dropdownValue == 'Foot'){
           footValue.innerText =  Number(textValue);

           cent = textValue * 30.48;
           centimetervalue.innerText = cent;

           met = textValue / 3.281;
           metersValue.innerText = met;

           inch = textValue*12;
           inchesValue.innerText = inch;

       } else if(dropdownValue == 'centimeter'){
           foot = textValue / 30.48;
           footValue.innerText = foot;

           centimetervalue.innerText = Number(textValue);

           met = textValue /100;
           metersValue.innerText = met;

           inch = textValue / 2.54;
           inchesValue.innerText = inch;

       } else if(dropdownValue == 'meters'){
        
            cent = textValue * 100;
            centimetervalue.innerText = cent;

            foot = textValue * 3.281;
            footValue.innerText = foot

            metersValue.innerText = Number(textValue);

            inch = textValue * 39.37;
            inchesValue.innerText = inch

       }else if( dropdownValue == 'inches'){

            inchesValue.innerText = Number(textValue);

            cent = textValue * 2.54;
            centimetervalue.innerText = cent;

            foot = textValue / 12;
            footValue.innerText = foot;

            met = textValue / 39.37;
            metersValue.innerText = met;

       }


   }else alert('input number')
}