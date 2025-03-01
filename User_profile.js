
let userprofile = {}; 
let additionalinfo = {}; 
let additionalinfo2 = {}; 


function UpdateProgressBar(currentStep) {
  var totalSteps = 12; 
  var progress = (currentStep / totalSteps) * 100;
  document.getElementById("progress-bar").value = progress;
}

function start() {
  // Step 1: Prompt for name
  let name = prompt("Enter your name:");
  if (name !== null) {
    userprofile.name = name.trim();
    UpdateProfileOutput(userprofile);
    UpdateProgressBar(1);
  } else {
    return; 
  }

  // Step 2: Prompt for surname
  let surname = prompt("Enter your surname:");
  if (surname !== null) {
    userprofile.surname = surname.trim();
    UpdateProfileOutput(userprofile);
    UpdateProgressBar(2);
  } else {
    return; 
  }

  // Step 3: Prompt for age
  let age = prompt("Enter your age:");
  if (age !== null) {
    userprofile.age = age.trim();
    UpdateProfileOutput(userprofile);
    UpdateProgressBar(3);
  } else {
    return; 
  }

  // Step 4: Prompt for email
  let email = prompt("Enter your email:");
  if (email !== null) {
    userprofile.email = email.trim();
    UpdateProfileOutput(userprofile);
    UpdateProgressBar(4);
  } else {
    return; 
  }
}


// Function to start the additional information 
function startAdditionalInfo() {
  // Step 1: Prompt for Dietary Preferences
  let DietaryPreferences = prompt("Enter your Dietary Preferences:");
  if (DietaryPreferences !== null) {
    additionalinfo.DietaryPreferences = DietaryPreferences.trim();
    UpdateAdditionalInfoOutput(additionalinfo);
    UpdateProgressBar(5);
  } else {
    return; 
  }

  // Step 2: Prompt for Cuisine Preferences
  let CuisinePreferences = prompt("Enter your Cuisine Preferences:");
  if (CuisinePreferences !== null) {
    additionalinfo.CuisinePreferences = CuisinePreferences.trim();
    UpdateAdditionalInfoOutput(additionalinfo);
    UpdateProgressBar(6);
  } else {
    return; 
  }

  // Step 3: Prompt for Beverage Preferences
  let BeveragePreferences = prompt("Enter your Beverage Preferences:");
  if (BeveragePreferences !== null) {
    additionalinfo.BeveragePreferences = BeveragePreferences.trim();
    UpdateAdditionalInfoOutput(additionalinfo);
    UpdateProgressBar(7);
  } else {
    return; 
  }

  // Step 4: Prompt for Dining Habits
  let  DiningHabits = prompt("Enter your Dining Habits:");
  if ( DiningHabits !== null) {
    additionalinfo. DiningHabits =  DiningHabits.trim();
    UpdateAdditionalInfoOutput(additionalinfo);
    UpdateProgressBar(8);
  } else {
    return;
  }

  document.getElementById("additionalInfoSection2").style.display = "block";
}

// Function to start the additional information process
function startAdditionalInfo2() {
  // Step 1: Prompt for weight
  let weight = prompt("Enter your weight:");
  if (weight !== null) {
    additionalinfo2.weight = weight.trim();
    UpdateAdditionalInfo2Output(additionalinfo2);
    UpdateProgressBar(9);
  } else {
    return; 
  }

  // Step 2: Prompt for Height
  let Height = prompt("Enter your Height:");
  if (Height !== null) {
    additionalinfo2.Height = Height.trim();
    UpdateAdditionalInfo2Output(additionalinfo2);
    UpdateProgressBar(10);
  } else {
    return; 
  }

  // Step 3: Prompt for BMI index
  let BMI = prompt("Enter your BMI index:");
  if (BMI!== null) {
    additionalinfo2.BMI = BMI.trim();
    UpdateAdditionalInfo2Output(additionalinfo2);
    UpdateProgressBar(11);
  } else {
    return; 
  }

  // Step 4: Prompt for medical conditions
  let MedicalConditions = prompt("Enter your medical conditions:");
  if (MedicalConditions !== null) {
    additionalinfo2.MedicalConditions = MedicalConditions.trim();
    UpdateAdditionalInfo2Output(additionalinfo2);
    UpdateProgressBar(12);
  } else {
    return; 
  }
}

// Function to update the profile output 
function UpdateProfileOutput(userprofile) {
  let profileOutput = document.getElementById("profileOutput");
  profileOutput.innerHTML = ""; 

 
  for (let key in userprofile) {
    if (userprofile.hasOwnProperty(key)) {
      let detail = document.createElement("p");
      detail.textContent = key.charAt(0).toUpperCase() + key.substring(1) + ": " + userprofile[key];
      detail.classList.add("output-box"); 
      profileOutput.appendChild(detail);
    }
  }

  document.getElementById("additionalInfoSection").style.display = "block";
}

// Function to update the additional information output 
function UpdateAdditionalInfoOutput(additionalInfo) {
  let additionalInfoOutput = document.getElementById("additionalInfoOutput");
  additionalInfoOutput.innerHTML = ""; 

  
  for (let key in additionalInfo) {
    if (additionalInfo.hasOwnProperty(key)) {
      let detail = document.createElement("p");
      detail.textContent = key.charAt(0).toUpperCase() + key.substring(1) + ": " + additionalInfo[key];
      detail.classList.add("output-box"); 
      additionalInfoOutput.appendChild(detail);
    }
  }
}
  


// Function to update the additional information2 output area
function UpdateAdditionalInfo2Output(additionalInfo2) {
  let additionalInfo2Output = document.getElementById("additionalInfoOutput2");
  additionalInfo2Output.innerHTML = ""; 

  
  for (let key in additionalInfo2) {
    if (additionalInfo2.hasOwnProperty(key)) {
      let detail = document.createElement("p");
      detail.textContent = key.charAt(0).toUpperCase() + key.substring(1) + ": " + additionalInfo2[key];
      detail.classList.add("output-box"); 
      additionalInfo2Output.appendChild(detail);
    }
  }
}
