const outerWheel = document.querySelector('.outer-wheel');
const innerWheel = document.querySelector('.inner-wheel');
const centerWheel = document.querySelector('.center-wheel');
const hideWheel = document.querySelector('.hide-wheel');
const container = document.querySelector('.container')
// Commenting the key since we define different key per container
//   let key = document.querySelector('.key');
//   const body = document.querySelector('body')
const container1 = document.getElementById('container1');
const container1_1 = document.getElementById('container1_1');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const container4 = document.getElementById('container4');
const inputText1 = document.getElementById('inputText1');
const outputText1 = document.getElementById('outputText1');
const scaleFactor1 = document.getElementById('sf1');
const scaleFactor1_1 = document.getElementById('sf1_1');
const scaleFactor2 = document.getElementById('sf2');
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
const keyInput2 = document.getElementById('key2');
const keyInput3 = document.getElementById('key3');
const keyInput4 = document.getElementById('key4');
const workingOut3 = document.getElementById('workingOut3');
const workingOut4 = document.getElementById('workingOut4');
// Not a constant value, the mod needs to update as we move the slider
let sliderMod = parseInt(document.getElementById('segmentSlider').value);
const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numSegments = charSet.length;
const skewAngle = 162;
let animationChar;

  
  
//  Finds which device it is used in
  const mediaQueryMobile = window.matchMedia('(min-width: 320px)');
  const mediaQueryTablet = window.matchMedia('(min-width: 481px)');
  const mediaQueryLaptop = window.matchMedia('(min-width: 769px)');
  const mediaQueryDesktop = window.matchMedia('(min-width: 1025px)');
  const mediaQueryExtra = window.matchMedia('(min-width: 1201px)');
  
//  Global variable
  let mediaQuery = []
  let mobile, tablet, laptop, desktop, extra = false;
//   Determines which is the active media screen
  function mediaSize(e) {
    if (mediaQueryMobile.matches) {
      mediaQuery = []
      mediaQuery.push('mobile')
    };
    if (mediaQueryTablet.matches) {
      mediaQuery = []
      mediaQuery.push('tablet')
    };
    if (mediaQueryLaptop.matches) {
      mediaQuery = []
      mediaQuery.push('laptop')
    };
    if (mediaQueryDesktop.matches) {
      mediaQuery = []
      mediaQuery.push('desktop')
    };
    if (mediaQueryExtra.matches) {
      mediaQuery = []
      mediaQuery.push('extra')
    };
    console.log(mediaQuery)
    if (mediaQuery[0] === 'mobile') {
      tablet, laptop, desktop, extra = false
      mobile = true
    };
    if (mediaQuery[0] === 'tablet') {
      mobile, laptop, desktop, extra = false
      tablet = true
    };
    if (mediaQuery[0] === 'laptop') {
      tablet, mobile, desktop, extra = false
      laptop = true
    };
    if (mediaQuery[0] === 'desktop') {
      tablet, laptop, mobile, extra = false
      desktop = true
    };
    if (mediaQuery[0] === 'extra') {
      tablet, laptop, desktop, mobile = false
      extra = true
    };
  }
//  Flexible to adjustments of screen size
  mediaQueryMobile.addListener(mediaSize);
  mediaQueryTablet.addListener(mediaSize);
  mediaQueryLaptop.addListener(mediaSize);
  mediaQueryDesktop.addListener(mediaSize);
  mediaQueryExtra.addListener(mediaSize);
//   Initialisation when the page loads
  mediaSize();
  
  let counter = 0;
  
//   Whenever user inputs in the key for Activity 1
  keyInput1.addEventListener('input', function(input){
    // Gets current input key
    let key = input.target.value;

    // Scope the wheels to container1
    const outerWheel1 = container1.querySelector('.outer-wheel');
    const innerWheel1 = container1.querySelector('.inner-wheel');
    const centerWheel1 = container1.querySelector('.center-wheel');

    
    innerWheel1.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / numSegments)}deg)` 
    centerWheel1.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / numSegments)}deg)`
    counter = key

    for (let i = 0; i < numSegments; i++){
      const li = document.createElement('li');
      const rotateAngle = (360 / numSegments) * i; 
      li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
      outerWheel1.appendChild(li);
    };

    encryptAffText(container1, keyInput1, scaleFactor1, inputText1, outputText1);
    // caesarWheel(container1, charSet, numSegments, 162, sf);
    delayTimer();
    //setTimeout(outerHighlight,500);
    checkEncipher(event);
  });

  // scaleFactor1.addEventListener('input', function(input){
  //   // Gets current input scaling factor
  //   let sf = parseInt(input.target.value);
  //   // let key1 = keyInput1.value;
  //   caesarWheel(container1, charSet, numSegments, 162, sf);
  // });

//   scaleFactor1.addEventListener("input", (event) => {
//     sf = parseInt(event.target.value);
//     caesarWheel(container1, charSet, numSegments, 162, sf, key);
// });

// scaleFactor1.addEventListener("input", caesarWheel(container1, charSet, numSegments, 162, sf1, key1));
// keyInput1.addEventListener("input", caesarWheel(container1, charSet, numSegments, 162, sf1, key1));

  keyInput1_1.addEventListener('input', function(input){
    let key = input.target.value;
    // Scope the wheels to container2
    const outerWheel1_1 = container1_1.querySelector('.outer-wheel');
    const innerWheel1_1 = container1_1.querySelector('.inner-wheel');
    const centerWheel1_1 = container1_1.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel1_1.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel1_1.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / numSegments)}deg)` 
    centerWheel1_1.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / numSegments)}deg)`
    counter = key
    encryptAffText(container1_1, keyInput1_1, scaleFactor1_1, inputText1_1, userOutputText1_1);

    delayTimer();
    //setTimeout(outerHighlight,500);
    
    // checkEncipher(container1_1, key1_1, inputText1_1, userOutputText1_1);
  });

  scaleFactor1_1.addEventListener('input', function (input) {
    let sf = parseInt(input.target.value); // Parse scaling factor
    const innerWheel = container1_1.querySelector('.inner-wheel');
    const centerWheel1_1 = container1_1.querySelector('.center-wheel');

    // If input is cleared, stop animation and clear wheel
    if (isNaN(sf)) {
      innerWheel.innerHTML = ''; 
      clearTimeout(animationChar);
      for (let i = 0; i < numSegments; i++){
        const li = document.createElement('li');
        const rotateAngle = (360 / numSegments) * i; 
        li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
        innerWheel.appendChild(li);
      };
      innerWheel.appendChild(centerWheel1_1);
      return;
    }

    clearTimeout(animationChar);
    affineWheel(container1_1, charSet, numSegments, 162, sf, userOutputText1_1);
});



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
    counter = key
    delayTimer();
    //setTimeout(outerHighlight,500);
    encryptText(container2, key2, inputText2, userOutputText2);
    checkEncipher(container2, key2, inputText2, userOutputText2);
  });

  scaleFactor2.addEventListener('input', function (input) {
    let sf = parseInt(input.target.value); // Parse scaling factor
    const innerWheel = container2.querySelector('.inner-wheel');
    const centerWheel2 = container2.querySelector('.center-wheel');

    // If input is cleared, stop animation and clear wheel
    if (isNaN(sf)) {
      innerWheel.innerHTML = ''; 
      clearTimeout(animationChar);
      for (let i = 0; i < numSegments; i++){
        const li = document.createElement('li');
        const rotateAngle = (360 / numSegments) * i; 
        li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
        innerWheel.appendChild(li);
      };
      innerWheel.appendChild(centerWheel2);
      return;
    }

    clearTimeout(animationChar);
    affineWheel(container2, charSet, numSegments, 162, sf, userOutputText2);
});

  keyInput3.addEventListener('input', function(input){
    let key = input.target.value
    // Scope the wheels to container2
    const outerWheel3 = container3.querySelector('.outer-wheel');
    const innerWheel3 = container3.querySelector('.inner-wheel');
    const centerWheel3 = container3.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel3.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel3.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / numSegments)}deg)` 
    centerWheel3.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / numSegments)}deg)`
    counter = key
    delayTimer();
    //setTimeout(outerHighlight,500);
    encryptText(container3, key3, inputText3, userOutputText3);
    checkEncipher(container3, key3, inputText3, userOutputText3);
  });

  keyInput4.addEventListener('input', function(input){
    let key = input.target.value
    const newSegments = parseInt(document.getElementById('segmentSlider').value);
    // Scope the wheels to container2
    const outerWheel4 = container4.querySelector('.outer-wheel');
    const innerWheel4 = container4.querySelector('.inner-wheel');
    const centerWheel4 = container4.querySelector('.center-wheel');

    // Set to center, reset rotation to 0 deg, set outer wheel stable
    outerWheel4.style.transform = `translate(-50%, -50%) rotate(0deg)` 
    innerWheel4.style.transform =  `translate(-50%, -50%) rotate(${key * (360 / newSegments)}deg)` 
    centerWheel4.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * - (360 / newSegments)}deg)`
    counter = key
    delayTimer();
    //setTimeout(outerHighlight,500);
    encryptText(container4, key4, inputText4, userOutputText4);
    checkEncipher(container4, key4, inputText4, userOutputText4);
  });

  window.onload = function () {
    document.getElementById("sf1").value = "";
    document.getElementById("sf1_1").value = "";
    document.getElementById("sf2").value = "";
    document.getElementById("key1").value = "";
    document.getElementById("key1_1").value = "";
    document.getElementById("key2").value = "";
    document.getElementById("inputText1").value = "";
    document.getElementById("inputText1_1").value = "";
    document.getElementById("inputText2").value = "";
    document.getElementById("outputText1").value = "";
    document.getElementById("userOutputText1_1").value = "";
    document.getElementById("userOutputText2").value = "";

    document.getElementById("sf1").placeholder = "0";
    document.getElementById("sf1_1").placeholder = "0";
    document.getElementById("sf2").placeholder = "0";
    document.getElementById("key1").placeholder = "0";
    document.getElementById("key1_1").placeholder = "0";
    document.getElementById("key2").placeholder = "0";
    document.getElementById("inputText1").placeholder = "Enter text to encrypt...";
    document.getElementById("inputText1_1").placeholder = "Enter text to decrypt...";
    document.getElementById("inputText2").placeholder = "Enter text to decrypt...";
    document.getElementById("outputText1").placeholder = "Encrypted text will appear here...";
    document.getElementById("userOutputText1_1").placeholder = "Decrypted text will appear here...";
    document.getElementById("userOutputText2").placeholder = "Decrypted text will appear here...";
};

  function appearDisappearText() {
    const hiddenText = document.getElementById('hiddenText');
    const button = document.querySelector('.btn');
    if (hiddenText.style.display == 'none') {
        hiddenText.style.display = 'block';
        button.textContent = 'Hide Text'; // Update button text
      } else {
        hiddenText.style.display = 'none';
        button.textContent = 'Learn more about Caesar cipher!'; // Update button text
      }
    }
  
    scaleFactor1.addEventListener('input', function (input) {
      let sf = parseInt(input.target.value); // Parse scaling factor
      const innerWheel = container1.querySelector('.inner-wheel');
      const centerWheel1 = container1.querySelector('.center-wheel');


      // If input is cleared, stop animation and clear wheel
      if (isNaN(sf)) {
        // innerWheel.querySelectorAll('li').forEach(li => li.remove());

        innerWheel.innerHTML = ''; 
        clearTimeout(animationChar);
        for (let i = 0; i < numSegments; i++){
          const li = document.createElement('li');
          const rotateAngle = (360 / numSegments) * i; 
          li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
          innerWheel.appendChild(li);
        };
        innerWheel.appendChild(centerWheel1);
        return;
      }

      clearTimeout(animationChar);
      affineWheel(container1, charSet, numSegments, 162, sf, outputText1);
      // encryptAffText(container1, keyInput1, scaleFactor1, inputText1, outputText1);
  });


let isWheelFilled = false;

function affineWheel(container, charSet, numSegments, skewAngle, scalingFactor, outputText){
  const outerWheel = container.querySelector('.outer-wheel');
  outerWheel.innerHTML = '';
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
  };

// TRYING TO PUT THIS PART INSIDE REVEALCHAR
  for (let i = 0; i < numSegments; i++){
    // const li = document.createElement('li');
    const rotateAngle = (360 / numSegments) * i; 

    const outerLi = document.createElement('li');
    outerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
    const innerLi = document.createElement('li');
    innerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
    const charIndex = document.createElement('div');
    charIndex.className = 'char-index';

    if (displayChar) {
        const charDiv = document.createElement('div');
        charDiv.className = 'char';
        charDiv.textContent = charSet[i]; // Display character if applicable
        charIndex.appendChild(charDiv);

        outerLi.appendChild(charDiv);
        // innerLi.appendChild(charDiv);  
    }

    if (displayIndex) {
      const indexDiv = document.createElement('div');
      indexDiv.className = 'index';
      indexDiv.textContent = i;

      const baseX = -45; // Base X position (center)
      const baseY = 170;
      const xAdjust = -(numSegments - 25) * 1.8;  // Adjust X position
      const yAdjust = -(numSegments - 25) * 1.5;  // Adjust Y position
      const rotationAdjust = 10 + (numSegments - 26) * 0.5; // Adjust rotation

      indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
      indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;

      indexDiv.style.top = "55%";

      charIndex.appendChild(indexDiv);
      outerLi.appendChild(charIndex);
  }


    outerWheel.appendChild(outerLi);
    innerWheel.appendChild(innerLi);
  }






  // Appends each list element (this case adds line segments) to Outer Wheel
//   for (let i = 0; i < numSegments; i++){
//     const li = document.createElement('li');
//     const rotateAngle = (360 / numSegments) * i; 
//     li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
//     innerWheel.appendChild(li);
//   }

//   // Appends each list element to Inner Wheel
//   for (let i = 0; i < numSegments; i++){
//   const li = document.createElement('li');
//   const rotateAngle = (360 / numSegments) * i; 
//   li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
//   outerWheel.appendChild(li);
// }

// // Similarly, appends each list element to Inner Wheel
// for (let i = 0; i < numSegments; i++) {
//   const li = document.createElement("li");
//   const rotateAngle = (360 / numSegments) * (i);
//   const outerLi = document.createElement('li');
//   outerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;

//   if (displayChar) {
//     const charDiv = document.createElement('div');
//     charDiv.className = 'char';
//     charDiv.textContent = charSet[i];
//     outerLi.appendChild(charDiv);
//   }


//   // Adds Index to each segment of the wheel
//   // const indexDiv = document.createElement("div");
//   // indexDiv.className = "index";
//   // indexDiv.textContent = i;
//   if (displayIndex) {
//       const indexDiv = document.createElement('div');
//       indexDiv.className = 'index';
//       indexDiv.textContent = i;

//       const baseX = -45; 
//       const baseY = 50;
//       const xAdjust = -(numSegments - 25) * 1.5; 
//       const yAdjust = -(numSegments - 25) * 0.8;  
//       // Adjust rotation
//       const rotationAdjust = 10 + (numSegments - 26) * 0.5; 

//       indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
//       indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;

//       indexDiv.style.top = "48%";

//       innerWheel.appendChild(indexDiv); //I dont think we have inner li yet
//       li.appendChild(indexDiv);
//   }
  

//   li.style.transform = `rotate(${rotateAngle}deg) skewY(162deg)`;

//   // Slice background
//   const sliceDiv = document.createElement("div");
//   sliceDiv.className = "slice";

//   // Append elements to each segment of the wheel
//   li.appendChild(sliceDiv);
//   // li.appendChild(charDiv);
//   // li.appendChild(indexDiv);
//   outerWheel.appendChild(innerLi);

//   // Append the segments to the wheel
//   outerWheel.appendChild(li);


//   };

 



  if (isNaN(scalingFactor)) {
    return;
};

function restartAnimation() {
  const centerWheels = document.querySelectorAll('.center-wheel');
  // const centerWheel1 = container1.querySelector('.center-wheel');
  // const centerWheel1_1 = container1_1.querySelector('.center-wheel');
  innerWheel.innerHTML = ''; // Clear inner wheel before starting new animation
  usedPositions.clear(); // Reset used positions
  revealChar(0);
  for (let i = 0; i < numSegments; i++){
    const li = document.createElement('li');
    const rotateAngle = (360 / numSegments) * i; 
    li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
    innerWheel.appendChild(li);
  };
  for (let i = 0; i < centerWheels.length; i++) {
    innerWheel.appendChild(centerWheels[i].cloneNode(true));
}
}

// Delay reading the scaling factor input to allow user input to come through
sfTimeout = setTimeout(() => {
  restartAnimation();
}, 300);

  // We don't use it yet but stores all the unique affine indexes (positions) (until there is an overlap)
  let usedPositions = new Set();
  let i = 0;


  // Animation of the characters appearing one by one with the first overlap
  function revealChar(i, outputText) {
    if (i === 0) {
      // Disable inputs at initialisation
      disableInputs(true);
  }

    // Stops after completing the full circle (when sf is coprime)
    if (i >= numSegments) {
      isWheelFilled = usedPositions.size === numSegments;
      disableInputs(false);
      return;
    };

    if (animationChar) {
      clearTimeout(animationChar);
    }

    // Simple affine index
    let position = (i * scalingFactor) % numSegments;

    let rotateAngle = (position / numSegments) * 360;
    let char = charSet[i];

    const innerLi = document.createElement('li');
    innerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;


    const charDiv = document.createElement('div');
    charDiv.className = 'char';
    charDiv.textContent = char;
    innerLi.appendChild(charDiv);

    if (displayIndex) {
      const indexDiv = document.createElement('div');
      indexDiv.className = 'index';
      indexDiv.textContent = i; // Display index if applicable
      
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

    innerWheel.appendChild(innerLi);
      
    // If the index overlaps A (always will crash at A when it will) then the character will appear in red then stop
    if (i > 0 && position === 0) {
        charDiv.style.color = "red";
        outputText.add = "Uh Ohhh!";
        disableInputs(true);
        return;
    }

    if (usedPositions.has(position)) {
      disableInputs(true);
      return;
    }

    if (usedPositions.length === numSegments) {
      isWheelFilled = true;
    } else {
      isWheelFilled = false;
    };

      // Adds the positions for those that don't overlap
      usedPositions.add(position);

      // const rotateAngle = (360 / numSegments) * i; 
    
      //   const outerLi = document.createElement('li');
      //   outerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
      //   const innerLi = document.createElement('li');
      //   innerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
      //   const charIndex = document.createElement('div');
      //   charIndex.className = 'char-index';
    
      //   if (displayChar) {
      //       const charDiv = document.createElement('div');
      //       charDiv.className = 'char';
      //       charDiv.textContent = charSet[i]; // Display character if applicable
      //       charIndex.appendChild(charDiv);
    
      //       // outerLi.appendChild(charDiv);
      //       // innerLi.appendChild(charDiv);  
      //   }
    
      //   if (displayIndex) {
      //     const indexDiv = document.createElement('div');
      //     indexDiv.className = 'index';
      //     indexDiv.textContent = i;
    
      //     const baseX = -45; // Base X position (center)
      //     const baseY = 170;
      //     const xAdjust = -(numSegments - 25) * 1.8;  // Adjust X position
      //     const yAdjust = -(numSegments - 25) * 1.5;  // Adjust Y position
      //     const rotationAdjust = 10 + (numSegments - 26) * 0.5; // Adjust rotation
    
      //     indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
      //     indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;
    
      //     indexDiv.style.top = "55%";
    
      //     charIndex.appendChild(indexDiv);
      //     outerLi.appendChild(charIndex);
      // }
    
    
      //   if (displayIndex) {
      //       const indexDiv = document.createElement('div');
      //       indexDiv.className = 'index';
      //       indexDiv.textContent = i; // Display index if applicable
            
      //       const baseX = -45; 
      //       const baseY = 50;
      //       const xAdjust = -(numSegments - 25) * 1.5; 
      //       const yAdjust = -(numSegments - 25) * 0.8;  
      //       // Adjust rotation
      //       const rotationAdjust = 10 + (numSegments - 26) * 0.5; 
    
      //       indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
      //       indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;
    
      //       indexDiv.style.top = "48%";
    
      //       innerLi.appendChild(indexDiv);  
      //   }
      //   outerWheel.appendChild(outerLi);
      //   innerWheel.appendChild(innerLi);
    

      // Displays character one by one
      animationChar = setTimeout(() => revealChar(i + 1), 500); 

    }

    revealChar(0, outputText);
    if (!isWheelFilled) {
      outputText.value = "Checking Scaling Factor...";
      // return "Processing...";
    }
    if (i > 0 && position === 0){
      outputText.add = "Uh Ohhh!";
    }
}


/* This is the code to make the Affine Wheel*/
/*function affineWheel(container, charSet, numSegments, skewAngle, scalingFactor, outputText){
  const outerWheel = container.querySelector('.outer-wheel');
  outerWheel.innerHTML = '';
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
  };

// TRYING TO PUT THIS PART INSIDE REVEALCHAR
  for (let i = 0; i < numSegments; i++){
    // const li = document.createElement('li');
    const rotateAngle = (360 / numSegments) * i; 

    const outerLi = document.createElement('li');
    outerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
    const innerLi = document.createElement('li');
    innerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
    const charIndex = document.createElement('div');
    charIndex.className = 'char-index';

    if (displayChar) {
        const charDiv = document.createElement('div');
        charDiv.className = 'char';
        charDiv.textContent = charSet[i]; // Display character if applicable
        charIndex.appendChild(charDiv);

        // outerLi.appendChild(charDiv);
        // innerLi.appendChild(charDiv);  
    }

    if (displayIndex) {
      const indexDiv = document.createElement('div');
      indexDiv.className = 'index';
      indexDiv.textContent = i;

      const baseX = -45; // Base X position (center)
      const baseY = 170;
      const xAdjust = -(numSegments - 25) * 1.8;  // Adjust X position
      const yAdjust = -(numSegments - 25) * 1.5;  // Adjust Y position
      const rotationAdjust = 10 + (numSegments - 26) * 0.5; // Adjust rotation

      indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
      indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;

      indexDiv.style.top = "55%";

      charIndex.appendChild(indexDiv);
      outerLi.appendChild(charIndex);
  }


    if (displayIndex) {
        const indexDiv = document.createElement('div');
        indexDiv.className = 'index';
        indexDiv.textContent = i; // Display index if applicable
        
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
    outerWheel.appendChild(outerLi);
    innerWheel.appendChild(innerLi);
  }






  // Appends each list element (this case adds line segments) to Outer Wheel
  for (let i = 0; i < numSegments; i++){
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

// Similarly, appends each list element to Inner Wheel
for (let i = 0; i < numSegments; i++) {
  const li = document.createElement("li");
  const rotateAngle = (360 / numSegments) * (i);
  const innerLi = document.createElement('li');
  innerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;

  if (displayChar) {
    const charDiv = document.createElement('div');
    charDiv.className = 'char';
    charDiv.textContent = charSet[i];
    innerLi.appendChild(charDiv);
  }


  // Adds Index to each segment of the wheel
  // const indexDiv = document.createElement("div");
  // indexDiv.className = "index";
  // indexDiv.textContent = i;
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
      li.appendChild(indexDiv);
  }
  

  li.style.transform = `rotate(${rotateAngle}deg) skewY(162deg)`;

  // Slice background
  const sliceDiv = document.createElement("div");
  sliceDiv.className = "slice";

  // Append elements to each segment of the wheel
  li.appendChild(sliceDiv);
  // li.appendChild(charDiv);
  // li.appendChild(indexDiv);
  innerWheel.appendChild(innerLi);

  // Append the segments to the wheel
  innerWheel.appendChild(li);


  };

 



  if (isNaN(scalingFactor)) {
    return;
};


  // We don't use it yet but stores all the unique affine indexes (positions) (until there is an overlap)
  let usedPositions = new Set();
  let i = 0;


  // Animation of the characters appearing one by one with the first overlap
  function revealChar(i, outputText) {
    if (i === 0) {
      // Disable inputs at initialisation
      disableInputs(true);
  }

    // Stops after completing the full circle (when sf is coprime)
    if (i >= numSegments) {
      isWheelFilled = usedPositions.size === numSegments;
      disableInputs(false);
      return;
    };

    // Simple affine index
    let position = (i * scalingFactor) % numSegments;

    let rotateAngle = (position / numSegments) * 360;
    let char = charSet[i];

    const li = document.createElement('li');
    li.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;


    const charDiv = document.createElement('div');
    charDiv.className = 'char';
    charDiv.textContent = char;
    li.appendChild(charDiv);

    outerWheel.appendChild(li);
      
    // If the index overlaps A (always will crash at A when it will) then the character will appear in red then stop
    if (i > 0 && position === 0) {
        charDiv.style.color = "red";
        outputText.add = "Uh Ohhh!";
        disableInputs(true);
        return;
    }

    if (usedPositions.has(position)) {
      disableInputs(true);
      return;
    }

    if (usedPositions.length === numSegments) {
      isWheelFilled = true;
    } else {
      isWheelFilled = false;
    };

      // Adds the positions for those that don't overlap
      usedPositions.add(position);

      // const rotateAngle = (360 / numSegments) * i; 
    
      //   const outerLi = document.createElement('li');
      //   outerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
      //   const innerLi = document.createElement('li');
      //   innerLi.style.transform = `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`;
      //   const charIndex = document.createElement('div');
      //   charIndex.className = 'char-index';
    
      //   if (displayChar) {
      //       const charDiv = document.createElement('div');
      //       charDiv.className = 'char';
      //       charDiv.textContent = charSet[i]; // Display character if applicable
      //       charIndex.appendChild(charDiv);
    
      //       // outerLi.appendChild(charDiv);
      //       // innerLi.appendChild(charDiv);  
      //   }
    
      //   if (displayIndex) {
      //     const indexDiv = document.createElement('div');
      //     indexDiv.className = 'index';
      //     indexDiv.textContent = i;
    
      //     const baseX = -45; // Base X position (center)
      //     const baseY = 170;
      //     const xAdjust = -(numSegments - 25) * 1.8;  // Adjust X position
      //     const yAdjust = -(numSegments - 25) * 1.5;  // Adjust Y position
      //     const rotationAdjust = 10 + (numSegments - 26) * 0.5; // Adjust rotation
    
      //     indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
      //     indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;
    
      //     indexDiv.style.top = "55%";
    
      //     charIndex.appendChild(indexDiv);
      //     outerLi.appendChild(charIndex);
      // }
    
    
      //   if (displayIndex) {
      //       const indexDiv = document.createElement('div');
      //       indexDiv.className = 'index';
      //       indexDiv.textContent = i; // Display index if applicable
            
      //       const baseX = -45; 
      //       const baseY = 50;
      //       const xAdjust = -(numSegments - 25) * 1.5; 
      //       const yAdjust = -(numSegments - 25) * 0.8;  
      //       // Adjust rotation
      //       const rotationAdjust = 10 + (numSegments - 26) * 0.5; 
    
      //       indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
      //       indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;
    
      //       indexDiv.style.top = "48%";
    
      //       innerLi.appendChild(indexDiv);  
      //   }
      //   outerWheel.appendChild(outerLi);
      //   innerWheel.appendChild(innerLi);
    

      // Displays character one by one
      animationChar = setTimeout(() => revealChar(i + 1), 500); 

    }

    revealChar(0, outputText);
    if (!isWheelFilled) {
      outputText.value = "Checking Scaling Factor...";
      // return "Processing...";
    }
    if (i > 0 && position === 0){
      outputText.add = "Uh Ohhh!";
    }
}*/


function disableInputs(checker) {
  document.getElementById("inputText1").disabled = checker;
  document.getElementById("key1").disabled = checker;
  document.getElementById("inputText1_1").disabled = checker;
  document.getElementById("key1_1").disabled = checker;
  document.getElementById("inputText2").disabled = checker;
  document.getElementById("key2").disabled = checker;

}


  
  /*
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

        // Adds Characters to each segment of the wheel
        // const charDiv = document.createElement("div");
        // charDiv.className = "char";
        // charDiv.textContent = charSet[i];

        if (displayChar) {
            const charDiv = document.createElement('div');
            charDiv.className = 'char';
            charDiv.textContent = charSet[i];
            outerLi.appendChild(charDiv);
        }

        // Adds Index to each segment of the wheel
        // const indexDiv = document.createElement("div");
        // indexDiv.className = "index";
        // indexDiv.textContent = i;

        if (displayIndex) {
            const indexDiv = document.createElement('div');
            indexDiv.className = 'index';
            indexDiv.textContent = i;

            const baseX = -45; // Base X position (center)
            const baseY = 170;
            const xAdjust = -(numSegments - 25) * 1.8;  // Adjust X position
            const yAdjust = -(numSegments - 25) * 1.5;  // Adjust Y position
            const rotationAdjust = 10 + (numSegments - 26) * 0.5; // Adjust rotation

            indexDiv.style.transformOrigin = `${baseX + xAdjust}% ${baseY + yAdjust}%`;
            indexDiv.style.transform = `translate(${baseX + xAdjust}%, ${baseY + yAdjust}%) rotate(${rotationAdjust}deg)`;

            indexDiv.style.top = "55%";

            outerLi.appendChild(indexDiv);
        }

        li.style.transform = `rotate(${rotateAngle}deg) skewY(162deg)`;

        // Slice background
        const sliceDiv = document.createElement("div");
        sliceDiv.className = "slice";

        // Append elements to each segment of the wheel
        li.appendChild(sliceDiv);
        // li.appendChild(charDiv);
        // li.appendChild(indexDiv);
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


        // Adds Characters to each segment of the wheel
        // const charDiv = document.createElement("div");
        // charDiv.className = "char";
        // charDiv.textContent = charSet[i];
        if (displayChar) {
            const charDiv = document.createElement('div');
            charDiv.className = 'char';
            charDiv.textContent = charSet[i];
            innerLi.appendChild(charDiv);
        }
        
        // Adds Index to each segment of the wheel
        // const indexDiv = document.createElement("div");
        // indexDiv.className = "index";
        // indexDiv.textContent = i;
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

        // Append elements to each segment of the wheel
        li.appendChild(sliceDiv);
        // li.appendChild(charDiv);
        // li.appendChild(indexDiv);
        innerWheel.appendChild(innerLi);

        // Append the segments to the wheel
        innerWheel.appendChild(li);
    }
}
*/    

    function changeSegment() {
        const newSegments = parseInt(document.getElementById('segmentSlider').value);
        // Update displayed value
        document.getElementById('segmentValue').textContent = newSegments; 
        
        //Define wheel segments
        const outerWheel = document.querySelector('#container4 .outer-wheel');
        const innerWheel = document.querySelector('#container4 .inner-wheel');
        const centerWheel = document.querySelector('#container4 .center-wheel');

        if (outerWheel && innerWheel && centerWheel) {
            // Temporarily store the center wheel
            innerWheel.removeChild(centerWheel);
    
        // Remove contents of current wheels
        document.querySelector('#container4 .outer-wheel').innerHTML = "";
        document.querySelector('#container4 .inner-wheel').innerHTML = "";

        // Change the wheel of container4 with the new number of segments
        caesarWheel(container4, charSet, newSegments, 162);
        innerWheel.appendChild(centerWheel);
        }
    }

let stepInstructions = { "container1": 0, "container1_1": 0, "container2": 0, "container3": 0, "container4": 0, "container5": 0 };

// Instruction steps
let instructions = {
  "container1": [
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 1.</strong> Type in the <strong>jumping factor ✨</strong> you want (e.g. 2)</span> <br><br>
      You want to encode your message so it is a problem if it crashes and doesn't give you all the 
      alphabet sets that you want 😲  
      <br><br> <strong>What numbers work?😲  Why do you think it works?😲 </strong>
      <strong>Step 2.</strong> Type in the <strong>key</strong> you want (e.g. 5)</span> <br><br>
      This part is exactly the same as what you did in the caesar cipher 😉✨<br>`,
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 3.</strong> Type in the <strong>plaintext message</strong> you want to encipher in the left textbox <br>
      (e.g. "My name is __") </span> <br><br>
       <strong>Tip: </strong> Type slowly too see the letter from the plaintext highlight in red with the 
       corresponding ciphertext highlight in yellow! 😎<br>`,
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 4. The enciphered message</strong> will appear in the right textbox </span> <br><br> 
      Check if you get the same encoding by finding the letter you want to encipher on 
      the grey inner-wheel, which represents the original alphabet set (or the <strong>plaintext</strong>), then replacing it 
      with the corresponding letter on the light blue outer-wheel, which represents the 4
      shifted alphabet set (or the <strong>ciphertext</strong>).`,
      `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
      <strong>Step 5:</strong> Repeat this until you get the enciphered text yourself! </span> <br><br>
      <strong>Mission 1 Complete! 🏅</strong> <br>You can now encode your message using the simple affine cipher wheel.
      <br><br> New emoji unlocked: 🔥`,
  ],
  "container1_1": [
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 1.</strong> Type in the <strong>secret message</strong> </span> <br><br>
    Type in the encrypted message from Mission 1.😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 2.</strong> Get the <strong>plaintext</strong> back! 😎🔥</span> <br><br>
    Try to change the <strong>shift key</strong> and see if you can get your original message back.`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 3.</strong> Did you get the original message back? 😲</span> <br><br>
    If not that's okay!😉✨ Go check out the hints if you want to satisfy your curious minds🔥
    <br><br> You must have noticed it's not very easy to get back your original message than in the ceasar cipher exercise.
    <br> This just proves simple affine cipher is <strong>much safer</strong> and <strong>more protected</strong>!!😲🔥  
    <strong>Mission 2 Complete! 🏅 </strong><br>
    If you managed to get your jumping size or key, did you notice something special about the number?
    <br><br> New emoji unlocked: 🤖`,
  ],
  "container2": [
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 1.</strong> Type in the <strong>jumping size</strong>🤖 </span> <br><br>
    This part is the same as the Mission 1 😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 2.</strong> Type in the <strong>shift</strong>🤖 </span> <br><br>
    Also same as the Mission 1 😲🔥`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 3.</strong> Type in the <strong>original message</strong>🤖 </span> <br><br>
    Type in the <strong>plaintext message</strong> you want to encipher in the left textbox (e.g. "Hello")<br>
    <strong>Tip: </strong> Try not to make the plaintext too long! Try typing your favourite word 🤖✨ <br>`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 4.</strong> Guess the enciphered message! 🤖</span> <br><br>
    Type what you think it will be in the right textbox!😉`,
    `<span style="font-size: 20px; background-color: rgb(173, 217, 250); padding: 2px 5px; border-radius: 5px; display: block;">
    <strong>Step 5.</strong> Did you get it right? 🤖</span> <br><br>
    <strong>Mission 3 Complete! 🏅 </strong> <br>
    Now you know how to encode your messages on your own!
    <br><br> New emoji unlocked: 🍔`,
  ],
}

function toggleInstructions(container) {
  let content = document.getElementById(`instructions-${container}`);
  let arrow = document.getElementById(`arrow-${container}`);

    if (window.getComputedStyle(content).display !== "none") {
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
    event.stopPropagation(); // Prevent toggle box from closing
    if (stepInstructions[container] < instructions[container].length - 1) {
        stepInstructions[container]++;
        document.getElementById(`instruction-text-${container}`).innerHTML = instructions[container][stepInstructions[container]];
    }
}

function prevStep(event, container) {
    event.stopPropagation(); // Prevent toggle box from closing
    if (stepInstructions[container] > 0) {
        stepInstructions[container] -= 1;
        document.getElementById(`instruction-text-${container}`).innerHTML = instructions[container][stepInstructions[container]];
    }
}


function appearDisappearText(id, button) {
  const hiddenText = document.getElementById(id);
  // const button = document.querySelector('.btn');
  if (hiddenText.style.display == 'none') {
      hiddenText.style.display = 'block';
      button.textContent = 'Hide Text'; // Update button text
    } else {
      hiddenText.style.display = 'none';
      button.textContent = id === 'hint1' ? 'Hint 1 ✨' : 'Hint 2 ✨';
    }
  }




    // Caesar Cipher function
    // function caesarCipher(str, shift) {
    //         const result = [];
    //         for (let i = 0; i < str.length; i++) {
    //             let char = str[i];
    //             if (char.match(/[a-z]/i)) {
    //                 const code = str.charCodeAt(i);
    //                 let base = (char === char.toLowerCase()) ? 97 : 65;
    //                 char = String.fromCharCode(((code - base + shift) % numSegments) + base);
    //             }
    //             result.push(char);
    //         }
    //         return result.join('');
    //     }
 

  

    function affineCipher(str, sf, shift, outputText){
        // if (!isWheelFilled) {
        //   // outputText.value = "Processing...";
        //   return "Processing...";
        // }

        const numSegments = 26;
        const result = [];
        for (let i = 0; i < str.length; i++){
          let char = str[i];
          if (char.match(/[a-z]/i)) {
            const code = str.charCodeAt(i);
            let base = (char === char.toLowerCase()) ? 97 : 65;
            let x = code - base;
            char = String.fromCharCode(((sf * x + shift) % numSegments) + base);
          }
          result.push(char);
        }
        return result.join('');
    } 

   
    function encryptAffText(container, keyInput, scaleFactor, inputText, outputText) {
      const input = inputText.value;
      const shift = parseInt(keyInput.value)%numSegments ||0;
      const sf = parseInt(scaleFactor.value);   
      const translatedText = affineCipher(input, sf, shift, outputText);
    
      outputText.value = translatedText;
  }

// caesarWheel(container1);
// caesarWheel(container2);

//  Code that used to call highlighting but it was just event inside no container
// document.addEventListener('keydown', highlightInput(container1));
// document.addEventListener('keydown', delayHighlightOutwheel(container1));


//COPY the function highlights inner and outer at the same time and makes it disappear at the same time with enciphered coming at 1sec delay.
// function to highlight the characters on keydown event from the user
//keydownevent is just a placeholder




// Function to highlight the Inner Wheel characters on keydown event from the user 
/*function highlightInput(container, event){
let innerWheel = container.querySelector('.inner-wheel'); 
let outerWheel = container.querySelector('.outer-wheel');
// Gets all the char elements of the Inner Wheel 
const charSetInElements = innerWheel.getElementsByClassName('char');
const input = event.key;
const charSetOutElements = outerWheel.getElementsByClassName('char');*/
/* This part was commented out from before
const charSetOutElements = outerWheel.getElementsByClassName('char')
const shift = parseInt(document.getElementById('key').value)%numSegments ||0;
const translatedChar = caesarCipher(input, shift); */

/*THIS COMMENTED OUT SINCE IT WAS EXPERIMENTED 
setTimeout(() => removeInHighlight(container, charSetInElements, charSetOutElements),2000);

if (input.match(/^[A-Za-z]$/)){
// Converts input character to ASCII code
const inCode = input.charCodeAt(0);
// ASCII base
const inBase = input === input.toLowerCase() ? 97 : 65;
// Calculate index (0-25)
const inCharIndex = inCode - inBase;

// Highlights Inner Wheel of the corresponding plaintext
if (charSetInElements[inCharIndex]){
  //setTimeout(() => removeHighlight(charSetElements),1000);
  charSetInElements[inCharIndex].classList.add('innerHighlight');
}
}

}*/

container1.addEventListener('keydown', function(event) {
    const inputLetter = event.key; // Normalize input to uppercase
    highlightInput(container1, inputLetter);  // Highlight only in container1
    highlightOutwheel(container1, inputLetter, keyInput1);
});

container1_1.addEventListener('keydown', function(event) {
    const inputLetter = event.key; // Normalize input to uppercase
    highlightInput(container1_1, inputLetter);  // Highlight only in container1_1
    highlightOutwheel(container1_1, inputLetter, keyInput1_1);
});

container2.addEventListener('keydown', function(event) {
    const inputLetter = event.key; // Normalize input to uppercase
    highlightInput(container2, inputLetter);  // Highlight only in container2
    highlightOutwheel(container2, inputLetter, keyInput2);
});

document.addEventListener('keydown', delayHighlightOutwheel);
    

    //COPY the function highlights inner and outer at the same time and makes it disappear at the same time with enciphered coming at 1sec delay.
     // function to highlight the characters on keydown event from the user
    //keydownevent is just a placeholder
    /*function highlightInput(event){
      const charSetInElements = innerWheel.getElementsByClassName('char');
      const input = event.key;
      const charSetOutElements = outerWheel.getElementsByClassName('char')
      const shift = parseInt(document.getElementById('key').value)%numSegments ||0;
      const translatedChar = caesarCipher(input, shift);

      setTimeout(() => removeInHighlight(charSetInElements, charSetOutElements),1000);

      //for (let i = 0; i < input.length; i++){
      if (input.match(/^[A-Za-z]$/)){
        const inCode = input.charCodeAt(0);
        const inBase = input === input.toLowerCase() ? 97 : 65; // ASCII base 
        const inCharIndex = inCode - inBase; // Calculate index (0-25)

        if (charSetInElements[inCharIndex]){
          //setTimeout(() => removeHighlight(charSetElements),1000);
          charSetInElements[inCharIndex].classList.add('innerHighlight');
        }
      }

      //setTimeout(() => removeHighlight(charSetOutElements),1000);

      if (translatedChar.match(/^[A-Za-z]$/)){
        const outCode = translatedChar.charCodeAt(0);
        const outBase = translatedChar === translatedChar.toLowerCase() ? 97 : 65;
        const outCharIndex = outCode - outBase;

        if (charSetOutElements[outCharIndex]){
          charSetOutElements[outCharIndex].classList.add('outerHighlight');
        }
      }*/





    // Function to highlight the Inner Wheel characters on keydown event from the user 
    function highlightInput(container, inputLetter){
      // Gets all the char elements of the Inner Wheel 
      const innerWheel = container.querySelector('.inner-wheel');
      const charSetInElements = innerWheel.getElementsByClassName('char');
      const outerWheel = container.querySelector('.outer-wheel');
      const charSetOutElements = outerWheel.getElementsByClassName('char');
      /* const charSetOutElements = outerWheel.getElementsByClassName('char')
      const shift = parseInt(document.getElementById('key').value)%numSegments ||0;
      const translatedChar = caesarCipher(input, shift); */

      setTimeout(() => removeInHighlight(charSetInElements, charSetOutElements),2000);

        if (inputLetter.match(/^[A-Za-z]$/)){
            // Converts input character to ASCII code
            const inCode = inputLetter.charCodeAt(0);
            // ASCII base
            const inBase = inputLetter === inputLetter.toLowerCase() ? 97 : 65;
            // Calculate index (0-25)
            const inCharIndex = inCode - inBase;

            // Highlights Inner Wheel of the corresponding plaintext
            if (charSetInElements[inCharIndex]){
            //setTimeout(() => removeHighlight(charSetElements),1000);
            charSetInElements[inCharIndex].classList.add('innerHighlight');
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

        if (charSetOutElements[outCharIndex]){
          charSetOutElements[outCharIndex].classList.add('outerHighlight');
        }
      }

    }

    // Show highlight of the Outer Wheel with 1 sec delay
    function delayHighlightOutwheel(event){
      setTimeout(() => highlightOutwheel(event), 1000);
    }

    // Remove both highlights at the same time
    function removeInHighlight(charSetInElements, charSetOutElements){
      for (let char of charSetInElements) {
            char.classList.remove('innerHighlight'); 
            }
      for (let char of charSetOutElements){
        char.classList.remove('outerHighlight');
      }
          }          

          
    // Checks if user Enciphered guess is correct or incorrect
    function checkEncipher(container, keyInput, inputText, outputText){
    const messageElement = document.getElementById('message');  
    const userOgInput = inputText.value;
    const userEnInput = outputText.value;
    const shift = parseInt(keyInput.value)%numSegments ||0;
    const correctEnc = affineCipher(userOgInput, sf, shift, outputText);


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
    // Clears the message when user Enciphered Input is shorter than the plaintext
    else if (userEnInput.length < userOgInput.length) {
    messageElement.textContent = '';}
    }
  /*This highlight function actually works

  function highlight(){
    let charSetElements = innerWheel.getElementsByClassName('char');
    const input = document.getElementById('inputText').value;
    for (let i = 0; i < input.length; i++){
      let char = input[i];
      if (char.match(/[a-z]/i)) {
      const code = input.charCodeAt(i);
      let base = (char === char.toLowerCase()) ? 97 : 65;
      let charIndex = code - base;
      charSetElements[charIndex].classList.add('innerHighlight');
      }
    }
  }*/
  

  /*Highlights inner wheel as user inputs 
  function innerHighlight(){
    let charSetElements = innerWheel.getElementsByClassName('char');
    const input = document.getElementById('inputText').value;
    for (let char of charSetElements) {
    char.classList.remove('innerHighlight');  // Remove 'innerHighlight' class
    }

    
    for (let i = 0; i < input.length; i++){
      let char = input[i];
      if (char.match(/[a-z]/i)) {
      const code = input.charCodeAt(i);
      let base = (char === char.toLowerCase()) ? 97 : 65;
      let charIndex = code - base;
      charSetElements[charIndex].classList.add('innerHighlight');
      }
    }
  }

  function outerHighlight(){
    let charSetElements = outerWheel.getElementsByClassName('char');
    const input = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('key').value)%numSegments ||0;
    const translatedText = caesarCipher(input, shift);
    
    for (let char of charSetElements) {
    char.classList.remove('outerHighlight');  // Remove 'outerHighlight' class
    }

    for (let i = 0; i < translatedText.length; i++){
      let char = translatedText[i];
      if (char.match(/[a-z]/i)) {
      const code = translatedText.charCodeAt(i);
      let base = (char === char.toLowerCase()) ? 97 : 65;
      let charIndex = code - base;
      charSetElements[charIndex].classList.add('outerHighlight');
      }
    }
  } */

function encryptText(container, keyInput, inputText, outputText) {
    const input = inputText.value;
    const shift = parseInt(keyInput.value)%numSegments ||0;
    const translatedText = caesarCipher(input, shift);
  
    outputText.value = translatedText;
}

// Copy of OG encryptText func
/*function encryptText() {
    const input = document.getElementById('inputText1').value;
    const shift = parseInt(document.getElementById('key').value)%numSegments ||0;
    const translatedText = caesarCipher(input, shift);
  
    document.getElementById('outputText1').value = translatedText;
}*/

/*Goes with the Inner and Outer highlight function
function delayTimer() {
  let delay; 
  clearTimeout(delay); // Reset the time up
  delay = setTimeout(() => {
      innerHighlight();  // Call inner highlight after delay
      setTimeout(outerHighlight, 500); // Call outer highlight after 0.5-second delay
      setTimeout(encryptedText, 1000); // Show encrypted character after another 1-second delay
  }, 1000); // Delay of 1 second after last input
}*/

    
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
            // workingOut.innerHTML += `<br>After shift and modulus: (${num} + ${shift}) % ${mod} = ${shiftedNum}`;

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
                //    workingOut.innerHTML += `<br>Reducing steps: ${num} - ${mod}`;
                    num = num - mod;
                }
                workingOut.innerHTML += `<br>Reduced Number: ${num} <br><strong>${numbers[index]} &#8801 ${num} modulo ${mod}</strong>`;
            }
            
            // Calculating caesar shift
            let shiftedNum = (num + shift);
            workingOut.innerHTML += `<br>After shift: (${num} + ${shift}) = ${shiftedNum}`
            // workingOut.innerHTML += `<br>After shift and modulus: (${num} + ${shift}) % ${mod} = ${shiftedNum}`;

            if (shiftedNum >= mod){
                workingOut.innerHTML += `<br>The number ${shiftedNum} is greater than or equal to ${mod} so we need to reduce it!`;
            
                // num = num % mod; 
                while(shiftedNum >= mod){
                //    workingOut.innerHTML += `<br>${shiftedNum} - ${mod} = ${shiftedNum - mod}`;
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

        //     for (let i = 0; i < numbers.length; i++) {
        //         console.clear();
        //         let num = numbers[i];
        //         console.log(`Input Number: ${num}`);
        //         // Reduce numbers greater than number of segments in the wheel (modulus)
        //         if (num <= mod){
        //             console.log(`The number you inputted is greater than ${mod} so we need to reduce it!`);
        //             while(num <= mod){
        //                 console.log(`${num - mod}`);
        //                 num = num - mod;
        //             }
        //         }
        //         else if(num < mod){
        //             console.log(`Your input number: ${num}`);
        //             shiftedNum = ((num + shift) % mod);
        //             console.log(`After modulus: ${(num + shift) % mod} so ${shiftedNum}`);
        //         }
                
        //         setTimeout(() => increaseIndex(i + 1), 1500);
        //     }
        // }
        // result.push(shiftedNum);}