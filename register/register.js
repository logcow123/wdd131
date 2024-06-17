
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

}

function successTemplate(info){
    return `
        Thank you ${info.name} for registering. You have registered ${numOfParticipants} participants and owe $${info.fees} in Fees.
    `
}

function participantTemplate(count){
    return `
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
        `;
};