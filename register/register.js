import {successTemplate, participantTemplate} from './Templates.js';

let numOfParticipants = 1;
const addParticipant = document.getElementById("add");
const participants = document.getElementById("participants");
const submitButton = document.getElementById("submitButton");
const adultName = document.getElementById("adult_name");
const registrationForm = document.getElementById("registration-form");
const summary = document.getElementById("summary");

addParticipant.addEventListener("click", function(){
    numOfParticipants = numOfParticipants + 1;

    const newParticipant = document.createElement('section');
        newParticipant.innerHTML = participantTemplate(numOfParticipants.toString());
        newParticipant.classList.add("participant1");

        add.insertAdjacentElement("beforebegin", newParticipant);
});

submitButton.addEventListener("click", function submitForm(event) {
        event.preventDefault();
        let info = {};
        info.name = adultName.value;
        info.fees = totalFees();
        info.numberOfParticipants = numOfParticipants;

        registrationForm.style.display = "none";
        summary.innerText = successTemplate(info);
    });


function totalFees() {
// the selector below lets us grab any element that has an id that begins with "fee"
let totalFees = 0;
let feeElements = document.querySelectorAll("[id^=fee]");
console.log(feeElements);
// querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
// The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
// The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
feeElements = [...feeElements];
feeElements.forEach(fee => {
    totalFees = totalFees + parseInt(fee.value); 
});
// sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
// Remember that the text that was entered into the input element will be found in the .value of the element.
console.log(totalFees);
return totalFees;
// once you have your total make sure to return it!

};