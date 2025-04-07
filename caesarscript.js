const outerWheel = document.querySelector('.outer-wheel');
const innerWheel = document.querySelector('.inner-wheel');
const centerWheel = document.querySelector('.center-wheel');
const hideWheel = document.querySelector('.hide-wheel');
const container = document.querySelector('.container');
const container1 = document.getElementById('container1');
const container1_1 = document.getElementById('container1_1');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const container4 = document.getElementById('container4');
const container5 = document.getElementById('container5');
const inputText1 = document.getElementById('inputText1');
const outputText1 = document.getElementById('outputText1');
const keyInput1 = document.getElementById('key1');
const keyInput1_1 = document.getElementById('key1_1');
const inputText1_1 = document.getElementById('inputText1_1');
const userOutputText1_1 = document.getElementById('userOutputText1_1');
const inputText2 = document.getElementById('inputText2');
const userOutputText2 = document.getElementById('userOutputText2');
const inputText3 = document.getElementById('inputText3');
const userOutputText3 = document.getElementById('userOutputText3');
const inputText4 = document.getElementById('inputText4');
const userOutputText4 = document.getElementById('userOutputText4');
const inputText5 = document.getElementById('inputText5');
const userOutputText5 = document.getElementById('userOutputText5');
const keyInput2 = document.getElementById('key2');
const keyInput3 = document.getElementById('key3');
const keyInput4 = document.getElementById('key4');
const keyInput5 = document.getElementById('key5');
const workingOut3 = document.getElementById('workingOut3');
const workingOut4 = document.getElementById('workingOut4');
// Not a constant value, the mod needs to update as we move the slider
let sliderMod = parseInt(document.getElementById('segmentSlider').value);
const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numSegments = charSet.length;
const skewAngle = 162;

  

  
//   Whenever user inputs in the key for Activity 1
  keyInput1.addEventListener('input', function(input){
    // Gets current input key
    let key = input.target.value
    // Scope the wheels to container1
    const outerWheel1 = container1.querySelector('.outer-wheel');
    const innerWheel1 = container1.querySelector('.inner-wheel');
    const centerWheel1 = container1.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel1.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel1.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / numSegments)}deg)` 
    centerWheel1.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / numSegments)}deg)`

    setTimeout(delayHighlightOutwheel(container1, inputText1, key1),1500);
    encryptText(container1, keyInput1, inputText1, outputText1);
    checkEncipher(event);
  })



  keyInput1_1.addEventListener('input', function(input){
    let key = input.target.value
    // Scope the wheels to container1_1
    const outerWheel1_1 = container1_1.querySelector('.outer-wheel');
    const innerWheel1_1 = container1_1.querySelector('.inner-wheel');
    const centerWheel1_1 = container1_1.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel1_1.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel1_1.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / numSegments)}deg)` 
    centerWheel1_1.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / numSegments)}deg)`
    
    encryptText(container1_1, keyInput1_1, inputText1_1, userOutputText1_1);
  })

  keyInput2.addEventListener('input', function(input){
    let key = input.target.value
    // Scope the wheels to container2
    const outerWheel2 = container2.querySelector('.outer-wheel');
    const innerWheel2 = container2.querySelector('.inner-wheel');
    const centerWheel2 = container2.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel2.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel2.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / numSegments)}deg)` 
    centerWheel2.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / numSegments)}deg)`
   
    checkEncipher(container2, keyInput2, inputText2, userOutputText2);
  })

  keyInput3.addEventListener('input', function(input){
    let key = input.target.value
    // Scope the wheels to container3
    const outerWheel3 = container3.querySelector('.outer-wheel');
    const innerWheel3 = container3.querySelector('.inner-wheel');
    const centerWheel3 = container3.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel3.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel3.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / numSegments)}deg)` 
    centerWheel3.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / numSegments)}deg)`
    
    caesarNumCipherRed('inputText3', 'key3', 26, 'userOutputText3', 'workingOut3');
    
  })

  keyInput4.addEventListener('input', function(input){
    let key = input.target.value
    const newSegments = parseInt(document.getElementById('segmentSlider').value);
    // Scope the wheels to container4
    const outerWheel4 = container4.querySelector('.outer-wheel');
    const innerWheel4 = container4.querySelector('.inner-wheel');
    const centerWheel4 = container4.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel4.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel4.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / newSegments)}deg)` 
    centerWheel4.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / newSegments)}deg)`
  
    caesarNumCipherMod('inputText4', 'key4', sliderMod, 'userOutputText4', 'workingOut4')
  })

  function appearDisappearText() {
    const hiddenText = document.getElementById('hiddenText');
    const button = document.querySelector('.btn');
    if (hiddenText.style.display == 'none') {
        hiddenText.style.display = 'block';
        // Update button text
        button.textContent = 'Hide Text'; 
      } else {
        hiddenText.style.display = 'none';
        // Update button text
        button.textContent = 'Learn more about Caesar cipher!'; 
      }
    }
  



/* This is the code to make the Caesar Wheel*/
function caesarWheel(container, charSet, numSegments, skewAngle){
    const outerWheel = container.querySelector('.outer-wheel');
    const innerWheel = container.querySelector('.inner-wheel');
    
    //Default conditions
    let displayChar = false;
    let displayIndex = false;

    // Display character only
    if (container.id === 'container1'|| container.id === 'container1_1') {
        displayChar = true; 
    } 
    // Display both character and index
    else if (container.id === 'container2') {
        displayChar = true;
        displayIndex = true; 
    } 
    // Display index only
    else if (container.id === 'container3'|| container.id === 'container4') {
        displayIndex = true;
    }

    // Appends each list element to Outer Wheel
    for (let i = 0; i < numSegments; i++) {
        const li = document.createElement('li');
        const rotateAngle = (360 / numSegments) * i; 
        li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
        outerWheel.appendChild(li);
    }
    // Appends each list element to Inner Wheel
    for (let i = 0; i < numSegments; i++){
        const li = document.createElement('li');
        const rotateAngle = (360 / numSegments) * i; 
        li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
        innerWheel.appendChild(li);
    }


    for (let i = 0; i < numSegments; i++) {
        const li = document.createElement("li");
        const rotateAngle = (360 / numSegments) * i;
        const outerLi = document.createElement('li');
        outerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`

        // Adds Char to each segment of the wheel
        if (displayChar) {
            const charDiv = document.createElement('div');
            charDiv.className = 'char';
            charDiv.textContent = charSet[i];
            outerLi.appendChild(charDiv);
        }

        // Adds Index to each segment of the wheel
        if (displayIndex) {
            const indexDiv = document.createElement('div');
            indexDiv.className = 'index';
            indexDiv.textContent = i;

            // Base X position (center)
            const baseX = -45; 
            const baseY = 170;
            // Adjust X, Y position
            const xAdjust = -(numSegments - 25) * 1.8;
            const yAdjust = -(numSegments - 25) * 1.5;  
            const rotationAdjust = 10 + (numSegments - 26) * 0.5; 

            indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
            indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;

            indexDiv.style.top = "55%";

            outerLi.appendChild(indexDiv);
        }

        li.style.transform = `rotate(${rotateAngle}deg) skewY(162deg)`;

        // Slice background
        const sliceDiv = document.createElement("div");
        sliceDiv.className = "slice";

        // Append list elements to each segment of the wheel
        li.appendChild(sliceDiv);
        
        outerWheel.appendChild(outerLi)

        // Append the segments to the wheel
        outerWheel.appendChild(li);
    }

    // Similarly, appends each list element to Inner Wheel
    for (let i = 0; i < numSegments; i++) {
        const li = document.createElement("li");
        const rotateAngle = (360 / numSegments) * (i);
        const innerLi = document.createElement('li');
        innerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;


        // Adds Char to each segment of the wheel
        if (displayChar) {
            const charDiv = document.createElement('div');
            charDiv.className = 'char';
            charDiv.textContent = charSet[i];
            innerLi.appendChild(charDiv);
        }
        
        // Adds Index to each segment of the wheel
        if (displayIndex) {
            const indexDiv = document.createElement('div');
            indexDiv.className = 'index';
            indexDiv.textContent = i;

            const baseX = -45; 
            const baseY = 50;
            const xAdjust = -(numSegments - 25) * 1.5; 
            const yAdjust = -(numSegments - 25) * 0.8;  
            // Adjust rotation
            const rotationAdjust = 10 + (numSegments - 26) * 0.5; 

            indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
            indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;

            indexDiv.style.top = "48%";

            innerLi.appendChild(indexDiv);
        }

        li.style.transform = `rotate(${rotateAngle}deg) skewY(162deg)`;

        // Slice background
        const sliceDiv = document.createElement("div");
        sliceDiv.className = "slice";

        // Append list elements to each segment of the wheel
        li.appendChild(sliceDiv);
        
        innerWheel.appendChild(innerLi);

        // Append the segments to the wheel
        innerWheel.appendChild(li);
    }
}

// Keeps track of instruction steps
let stepInstructions = { "container1": 0, "container1_1": 0, "container2": 0, "container3": 0, "container4": 0, "container5": 0 };

// Instruction steps
let instructions = {
  "container1": [
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 1.</strong> Type in the <strong>key</strong> you want (e.g. 3)</span> <br><br>
      The <strong>key</strong> determines how many positions the letters of an 
      alphabet set will shift. <br>
      For example, if the key is <strong>3</strong>, each letter will move <strong>3 
      positions to the right</strong>, wrapping around at the end of the alphabet. <br><br>
      For example: <br>
       <strong>A</strong> (...BCD...) ---> <strong>D</strong><br>
       <strong>B</strong> (...CDE...) ---> <strong>E</strong><br>
       <strong>X</strong> (...YZA...) ---> <strong>A</strong>, etc!`,
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 2.</strong> Type in the <strong>plaintext message</strong> you want to encipher in the left textbox <br>
      (e.g. "My name is __") </span> <br><br>
       <strong>Tip: </strong> Type slowly too see the letter from the plaintext highlight in blue with the 
       corresponding ciphertext highlight in yellow! <br>`,
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 3. The enciphered message</strong> will appear in the right textbox </span> <br><br> 
      Check if you get the same encoding by finding the letter you want to encipher on 
      the grey inner-wheel, which represents the original alphabet set (or the <strong>plaintext</strong>), then replacing it 
      with the corresponding letter on the light blue outer-wheel, which represents the
      shifted alphabet set (or the <strong>ciphertext</strong>).`,
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 4:</strong> Repeat this until you get the enciphered text yourself! </span> <br><br>
      <strong>Mission 1 Complete!</strong> <br>You can now encode your message using the caesar cipher wheel.
      <br><br> New emoji unlocked: 🏅`,
  ],
  "container1_1": [
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 1.</strong> Type in the <strong>secret message</strong> </span> <br><br>
    Type in the encrypted message from Mission 1.`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 2.</strong> Get the <strong>plaintext</strong> back! </span> <br><br>
    Try to change the <strong>shift key</strong> and see if you can get your original message back.`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 3.</strong> Did you get the key?</span> <br><br>
    <strong>Mission 2 Complete! 🏅 </strong><br>
    If you managed to get your key, did you notice something special about the number?
    <br><strong>Hint:</strong> There are 26 letters in the alphabet!
    <br><br> New emoji unlocked: 😉`,
  ],
  "container2": [
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 1.</strong> Type in the <strong>key</strong> </span> <br><br>
    This part is the same as the Mission 1 😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 2.</strong> Type in the <strong>original message</strong> </span> <br><br>
    Type in the <strong>plaintext message</strong> you want to encipher in the left textbox (e.g. "Hello")<br>
    <strong>Tip: </strong> Try not to make the plaintext too long! Try typing your favourite word 😉 <br>`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 3.</strong> Guess the enciphered message!</span> <br><br>
    Type what you think it will be in the right textbox!`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 4.</strong> Did you get it right?</span> <br><br>
    <strong>Mission 3 Complete! 🏅 </strong> <br>
    Now you know how to encode your messages on your own!
    <br><br> New emoji unlocked: ✨`,
  ],
  "container3": [
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 1.</strong> Lets find out how to encrypt numbers </span> <br><br>
    Type in the shift (the shift key is <strong>b</strong> in <strong>x + b mod m</strong>). I'm sure you knew what was coming by now 😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 2.</strong> You guessed it...! ✨ </span> <br><br>
    Type in the number you want to encrypt.
    <br> (This is the <strong>x</strong> in <strong>x + b mod m</strong>)`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 3. ✨ Magical Steps for Encryption ✨ </strong> </span> <br><br>
    This is actually called <strong> ✨ working out the modulus ✨</strong> in maths! 😉
    <br> (This is the <strong>m</strong> in <strong>x + b mod m</strong>! mod is short for modulus😉✨)`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 4.</strong> Try other numbers!</span> <br><br>
    <strong>Mission 4 Complete! 🏅 </strong> <br>
    You might not need to know it now, but wasn't too bad right? 😉
    <br><br> New emoji unlocked: 😎`,
  ],
  "container4": [
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 1.</strong> Move the segment bar ✨ </span> <br><br>
    You thought first step was always the same? You thought wrong 😎`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 2.</strong> Type in the shift ✨ </span> <br><br>
    Don't worry, this step was coming 😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 3. ✨ Magical Steps for Encryption ✨ </strong> </span> <br><br>
    It now does the reducing step in one go, but I trust you have learned that from Mission 4 😎✨
    <br> The rest of the steps are actually the same as Mission 4. Isn't that easy? 😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 4.</strong> Try other modulus!</span> <br><br>
    <strong>Mission 5 Complete! 🏅 </strong> <br>
    Well done agents!! ✨✨ 
    <br><br> New emoji unlocked: 😲`,
  ],
  "container5": [
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 1.</strong> Everything is the same 😎 </span> <br><br>
    The steps are the same as the previous missions!✨ <br>
    Choose the modulus in the modulus bar, choose the shift and simply input the number you want to work out the modulus of. 😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 2.</strong> Subtraction Table 😲✨ </span> <br><br>
    You can use the subtraction table to reduce bigger numbers 😎
    <br> This means if your number is bigger than your modulus (e.g. 36 mod 26) then you can change the modulus bar to 26, 
    then look at the number right below 36 (this is 36 - 26 so it saves you from doing the reduction maths)! 😲✨ Wow Isn't 
    that helpful! ✨😲✨`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 3.</strong> ✨ Did you get it right? 😎✨ </span> <br><br>
    Type in the answer you think it is in the right textarea 😉
    <br> You can type more than one numbers in the <strong>left textbox</strong> separated by spaces.
    <br> See if you can get them all right 😲✨`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 4.</strong> ✨✨Are you ready to move to the next level? ✨✨</span> <br><br>
    <strong>Mission 6 Complete! 🏅 </strong> <br>
    <br> You have now completed the Caesar Cipher stage!!😲 Mastery in caesar cipher is only done by the tough 😎
    <br> Ready to go to Simple Affine Cipher stage now...? 😉 
    <br>I know you can do it!! All the best, agents 😎✨`,
  ],
};




function toggleInstructions(container) {
  let content = document.getElementById(`instructions-${container}`);
  let arrow = document.getElementById(`arrow-${container}`);

    if (window.getComputedStyle(content).display !== "none"){
        content.style.display = "none";
        arrow.innerHTML = "▾";
    } else {
        stepInstructions[container] = 0;
        document.getElementById(`instruction-text-${container}`).innerHTML = instructions[container][stepInstructions[container]];
        content.style.display = "block";
        arrow.innerHTML = "▴"; 
    }
}

function nextStep(event, container) {
    // Prevents toggle box from collapsing
    event.stopPropagation(); 
    if (stepInstructions[container] <= instructions[container].length - 1) {
        stepInstructions[container]++;
        document.getElementById(`instruction-text-${container}`).innerHTML = instructions[container][stepInstructions[container]];
    }
}

function prevStep(event, container) {
    // Prevents toggle box from collapsing
    event.stopPropagation(); 
    if (stepInstructions[container] > 0) {
        stepInstructions[container] -= 1;
        document.getElementById(`instruction-text-${container}`).innerHTML = instructions[container][stepInstructions[container]];
    }
}


    function changeSegment() {
        const newSegments = parseInt(document.getElementById('segmentSlider').value);
        // Update displayed value
        document.getElementById('segmentValue').textContent = newSegments; 
        
        //Define wheel segments
        const outerWheel = document.querySelector('#container4 .outer-wheel');
        const innerWheel = document.querySelector('#container4 .inner-wheel');
        const centerWheel = document.querySelector('#container4 .center-wheel');

        if (outerWheel && innerWheel && centerWheel) {
            // Temporarily removes the center wheel
            innerWheel.removeChild(centerWheel);
    
        // Remove contents of current wheels
        document.querySelector('#container4 .outer-wheel').innerHTML = "";
        document.querySelector('#container4 .inner-wheel').innerHTML = "";

        // Change the wheel of container4 with the new number of segments
        caesarWheel(container4, charSet, newSegments, 162);
        innerWheel.appendChild(centerWheel);
        }
    }


    // Caesar Cipher function
    function caesarCipher(str, shift) {
            const result = [];
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (char.match(/[a-z]/i)) {
                    const code = str.charCodeAt(i);
                    let base = (char === char.toLowerCase()) ? 97 : 65;
                    char = String.fromCharCode(((code - base + shift) % numSegments) + base);
                }
                result.push(char);
            }
            return result.join('');
        }



container1.addEventListener('keydown', function(event) {
    const inputLetter = event.key; 
    // Highlight only on inner wheel container1 with 0.5 sec delay
    setTimeout(() => highlightInput(container1, inputLetter),500); 
    // Highlight only on outer wheel container1 with 1 sec delay
    setTimeout(() => highlightOutwheel(container1, inputLetter, keyInput1),1000);
});

container1_1.addEventListener('keydown', function(event) {
    const inputLetter = event.key; 
    // Highlight only on inner wheel container1_1 with 0.5 sec delay
    setTimeout(() => highlightInput(container1_1, inputLetter),500); 
    // Highlight only on outer wheel container1_1 with 1 sec delay
    setTimeout(() => highlightOutwheel(container1_1, inputLetter, keyInput1_1),1000);
});

container2.addEventListener('keydown', function(event) {
    const inputLetter = event.key; 
    // Detect active textarea
    const activeElement = document.activeElement;
    if (activeElement === inputText2) {
      // Highlight only on inner wheel container2 with 0.5 sec delay
      setTimeout(() => highlightInput(container2, inputLetter),500);
      // Highlight only on outer wheel container2 with 1 sec delay
      setTimeout(() => highlightOutwheel(container2, inputLetter, keyInput2),1000);
    } else if (activeElement === userOutputText2){
      removeInHighlight(charSetInElements, charSetOutElements);
    }
});

document.addEventListener('keydown', delayHighlightOutwheel);
    

    // Function to highlight the Inner Wheel characters on keydown event from the user 
    function highlightInput(container, inputLetter){
      // Gets all the char elements of the Inner Wheel 
      const innerWheel = container.querySelector('.inner-wheel');
      const charSetInElements = innerWheel.getElementsByClassName('char');
      const outerWheel = container.querySelector('.outer-wheel');
      const charSetOutElements = outerWheel.getElementsByClassName('char');
      
      // Removes highlight after 3 sec
      setTimeout(() => removeInHighlight(charSetInElements, charSetOutElements),3000);

        if (inputLetter.match(/^[A-Za-z]$/)){
            // Converts input character to ASCII code
            const inCode = inputLetter.charCodeAt(0);
            // ASCII base
            const inBase = inputLetter === inputLetter.toLowerCase() ? 97 : 65;
            // Calculate index (0-25)
            const inCharIndex = inCode - inBase;

            // Highlights Inner Wheel of the corresponding plaintext
            if (charSetInElements[inCharIndex]){
            charSetInElements[inCharIndex].style.color = "blue";
            charSetInElements[inCharIndex].style.fontWeight = "bold";
            }
        }
    }
    
    
    // Function to highlight the Outer Wheel characters on keydown event from the user 
    function highlightOutwheel(container, inputLetter, keyInput){
      // Gets all the char elements of the Outer Wheel
      const outerWheel = container.querySelector('.outer-wheel');
      const charSetOutElements = outerWheel.getElementsByClassName('char')
      const shift = parseInt(keyInput.value)%numSegments ||0;
      const translatedChar = caesarCipher(inputLetter, shift);

      if (translatedChar.match(/^[A-Za-z]$/)){
        // Converts input character to ASCII code
        const outCode = translatedChar.charCodeAt(0);
        // ASCII base
        const outBase = translatedChar === translatedChar.toLowerCase() ? 97 : 65;
        // Calculate index (0-25)
        const outCharIndex = outCode - outBase;

        // Highlights Outer Wheel of the corresponding ciphertext
        if (charSetOutElements[outCharIndex]){
          charSetOutElements[outCharIndex].style.color = "yellow";
          charSetOutElements[outCharIndex].style.fontWeight = "bold";
        }
      }
    }

    // Show highlight of the Outer Wheel with 1 sec delay
    function delayHighlightOutwheel(event, container, inputLetter, keyInput){
      setTimeout(() => highlightInput(container, inputLetter), 1000);
      setTimeout(() => highlightOutwheel(container, inputLetter, keyInput), 2000);
    }

    // Remove both highlights at the same time
    function removeInHighlight(charSetInElements, charSetOutElements){
      for (let char of charSetInElements) {
          char.style.color = "";
          char.style.fontWeight = "";
            }
      for (let char of charSetOutElements){
        char.style.color = "";
        char.style.fontWeight = "";
      }
          }          

          
    // Checks if user Enciphered guess is correct or incorrect
    function checkEncipher(container, keyInput, inputText, outputText){
    const messageElement = document.getElementById('message');  
    const userOgInput = inputText.value;
    const userEnInput = outputText.value;
    const shift = parseInt(keyInput.value)%numSegments ||0;
    const correctEnc = caesarCipher(userOgInput, shift);


    /* Check if the user's input matches the correct cipher */
    // Checks for empty inputs
    if (!userOgInput || !userEnInput) {
    messageElement.textContent = '';}
    // The message only appears when the user Enciphered Input length matches the length of the plaintext   
    else if (userEnInput.length >= correctEnc.length) {
        if (userEnInput === correctEnc) {
            messageElement.innerHTML = "Correct Encipher Text!";
            messageElement.style.color = "green"; 
        } 
        else {
                messageElement.innerHTML = "Incorrect Encipher Text. <br>Please try again.";
                messageElement.style.color = "red"; 
            }
    }
    // Clears the message when user's attempt of enciphering is shorter than the plaintext
    else if (userEnInput.length < userOgInput.length) {
    messageElement.textContent = '';}
    }
  

function encryptText(container, keyInput, inputText, outputText) {
    const input = inputText.value;
    const shift = parseInt(keyInput.value)%numSegments ||0;
    const translatedText = caesarCipher(input, shift);
  
    outputText.value = translatedText;
}

    
    document.getElementById('segmentSlider').addEventListener("input", function() {
        sliderMod = parseInt(segmentSlider.value);
    });

    // Caesar cipher reduction version, only for container 3
    function caesarNumCipherRed(inputId, shiftId, mod, outputTextarea, workingOutId){
        // Reads the value in the Textarea
        let numStr = document.getElementById(inputId).value;
        // Converts it to integer
        let shift = parseInt(document.getElementById(shiftId).value);
        let workingOut = document.getElementById(workingOutId);
        let outputNum = document.getElementById(outputTextarea);
        // Splits the string into an array whenever there is a space, converts each element in array into string, also gets rid of spaces at beginning and end of string
        let numbers = numStr.trim().split(" ").map(num => Number(num));
        let result = [];



        function increaseIndexRed(index) {
            // Ensures the function only processes the elements in the array (so it won't run forever) 
            if (index >= numbers.length) {
                return; 
            }
            
            // Each number in the array
            let num = numbers[index];
            // Displays which number it will show the working out for
            workingOut.innerHTML = `<strong>Magical Steps for Encryption:</strong><br>Input Number: ${num}`;

            // If the number user entered is greater than the modulus we need to reduce it
            if (num >= mod) {
                // Prints the message once if the number is greater or equal to mod
                workingOut.innerHTML += `<br>The number ${num} is greater than or equal to ${mod} so we need to reduce it! <br>Reducing steps:`;
            
                // num = num % mod; 
                while(num >= mod){
                   workingOut.innerHTML += `<br>${num} - ${mod} = ${num - mod}`;
                    num = num - mod;
                }
                workingOut.innerHTML += `<br>Reduced Number: ${num} <br><strong>${numbers[index]} &#8801 ${num} modulo ${mod}</strong>`;
            }
            
            // Calculating caesar shift
            let shiftedNum = (num + shift);
            workingOut.innerHTML += `<br>After shift: ${num} + ${shift} = ${shiftedNum}`;

            if (shiftedNum >= mod){
                workingOut.innerHTML += `<br>The number ${shiftedNum} is greater than or equal to ${mod} so we need to reduce it! <br>Reducing steps:`;
            
                // num = num % mod; 
                while(shiftedNum >= mod){
                   workingOut.innerHTML += `<br>${shiftedNum} - ${mod} = ${shiftedNum - mod}`;
                   shiftedNum = shiftedNum - mod;
                }
                workingOut.innerHTML += `<br>Reduced Number: ${shiftedNum} <br><strong>${num + shift} &#8801 ${shiftedNum} modulo ${mod}</strong> <br><strong>So, ${numbers[index]} + ${shift} &#8801 ${shiftedNum} modulo ${mod}</strong>`;
            }
            else {
                workingOut.innerHTML +=`<br><strong>So, ${numbers[index]} + ${shift} &#8801 ${shiftedNum} modulo ${mod}</strong>`
            }

            // Adding the shifted numbers to an empty array with spaces in between
            result.push(shiftedNum);
            outputNum.value = result.join(" ");

            setTimeout(() => {increaseIndexRed(index + 1)}, 1000);
        }
        // Initialisation, starts from index 0
        increaseIndexRed(0)
    }

    // Caesar cipher for container 4 where we show the modulus straight away rather than modulus
    function caesarNumCipherMod(inputId, shiftId, mod, outputTextarea, workingOutId){
        // Reads the value in the Textarea
        let numStr = document.getElementById(inputId).value;
        // Converts it to integer
        let shift = parseInt(document.getElementById(shiftId).value);
        let workingOut = document.getElementById(workingOutId);
        let outputNum = document.getElementById(outputTextarea);
        // Splits the string into an array whenever there is a space, converts each element in array into string, also gets rid of spaces at beginning and end of string
        let numbers = numStr.trim().split(" ").map(num => Number(num));
        let result = [];



        function increaseIndexMod(index) {
            // Ensures the function only processes the elements in the array (so it won't run forever) 
            if (index >= numbers.length) {
                return; 
            }
            
            // Each number in the array
            let num = numbers[index];
            // Displays which number it will show the working out for
            workingOut.innerHTML = `<strong>Magical Steps for Encryption:</strong><br>Input Number: ${num}`;

            // If the number user entered is greater than the modulus we need to reduce it
            if (num >= mod) {
                workingOut.innerHTML += `<br>The number ${num} is greater than or equal to ${mod} so we need to reduce it!`;
                // num = num % mod; 
                while(num >= mod){
                    num = num - mod;
                }
                workingOut.innerHTML += `<br>Reduced Number: ${num} <br><strong>${numbers[index]} &#8801 ${num} modulo ${mod}</strong>`;
            }
            
            // Calculating caesar shift
            let shiftedNum = (num + shift);
            workingOut.innerHTML += `<br>After shift: (${num} + ${shift}) = ${shiftedNum}`
            
            if (shiftedNum >= mod){
                workingOut.innerHTML += `<br>The number ${shiftedNum} is greater than or equal to ${mod} so we need to reduce it!`;
            
                // num = num % mod; 
                while(shiftedNum >= mod){
                   shiftedNum = shiftedNum - mod;
                }
                workingOut.innerHTML += `<br>Reduced Number: ${shiftedNum} <br><strong>${num + shift} &#8801 ${shiftedNum} modulo ${mod}</strong> <br><strong>So, ${numbers[index]} + ${shift} &#8801 ${shiftedNum} modulo ${mod}</strong>`;
            }
            else {
                workingOut.innerHTML +=`<br><strong>So, ${numbers[index]} + ${shift} &#8801 ${shiftedNum} modulo ${mod}</strong>`
            }

            // Adding the shifted numbers to an empty array with spaces in between
            result.push(shiftedNum);
            outputNum.value = result.join(" ");

            setTimeout(() => {increaseIndexMod(index + 1)}, 1000);
        }
        // Initialisation, starts from index 0
        increaseIndexMod(0)
    }

    // When space key is pressed inside inputText3, clears working out with delay
    inputText3.addEventListener("keydown", function(event) {
        if (event.key === " ") {
            setTimeout(() => {
            workingOut3.innerHTML = "";
            }, 1000);
        }
    });


  function subtractionTable() {
    let bar = parseInt(document.getElementById("subtractionSlider").value);
    document.getElementById("subtractionValue").textContent = bar;
    let topRow = document.getElementById("topRow");
    let bottomRow = document.getElementById("bottomRow");
    
    // Initialise the table
    topRow.innerHTML = "";
    bottomRow.innerHTML = "";

    // Creating bottom row
    for (let i = 0; i < bar; i++) {
        let cell = document.createElement("td");
        cell.textContent = i;
        if (bar > 35){
          cell.style.fontSize = "14px";
        }
        if (bar > 40){
          cell.style.fontSize = "10px";
        }
        bottomRow.appendChild(cell);
    }

    // Creating top row
    for (let i = bar; i < 2 * bar; i++) {
        let cell = document.createElement("td");
        cell.textContent = i;
        if (bar > 35){
          cell.style.fontSize = "14px";
        }
        if (bar > 40){
          cell.style.fontSize = "10px";
        }
        topRow.appendChild(cell);

    }
  }
subtractionTable()

function checkEncipherNum(inputText, keyInput, outputText, workingOutId){
    const messageElement = document.getElementById('messageNum');  
    let numStr = document.getElementById(inputText).value.trim();
    // Converts it to integer
    let shift = parseInt(document.getElementById(keyInput).value);
    let modValue = parseInt(document.getElementById("subtractionSlider").value);
    let workingOut = document.getElementById(workingOutId);
    let userAttempt = document.getElementById(outputText).value.trim();

    let numbers = numStr.split(" ");
    let userNumbers = userAttempt.split(" ");

    /* Check if the user's input matches the correct cipher */
    // Checks for empty inputs
    if (numStr === "" && userAttempt === "") {
      // Clear message
      messageElement.innerHTML = ""; 
      return;
    }



    // Prompt for entering all numbers
    if (numbers.length !== userNumbers.length) {
      messageElement.innerHTML = "Please enter both numbers.";
      return;
    }

    let isCorrect = true;


    for (let i = 0; i < numbers.length; i++) {
      let inputNum = parseInt(numbers[i]);
      let outputNum = parseInt(userNumbers[i]);

      if (isNaN(inputNum) || isNaN(outputNum)) {
        messageElement.innerHTML = "Please type numbers only!";
        messageElement.style.color = "red";
        return;
      }

      let correctEnc = inputNum + shift;
      while (correctEnc >= modValue) {
        correctEnc -= modValue;
      }

      if (correctEnc !== outputNum) {
        isCorrect = false; 
      }

    }

      if (isCorrect) {
        messageElement.innerHTML = "Correct Encipher Text!";
        messageElement.style.color = "Green";
        workingOut.innerHTML = `<strong>Magical Steps for Encryption:</strong><br>Input Number: ${num}`;
      } else {
          messageElement.innerHTML = "Incorrect Encipher Number. <br>Please try again.";
          messageElement.style.color = "red";
      }

    }

