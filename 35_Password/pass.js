const passwordInput = document.getElementById("password");
const strengthMeter = document.getElementById("strength-meter-fill");
const strengthText = document.getElementById("strength-text");

const lengthReq     = document.getElementById('length')    .querySelector('i');
const uppercaseReq  = document.getElementById('uppercase') .querySelector('i');
const lowercaseReq  = document.getElementById('lowercase') .querySelector('i');
const numberReq     = document.getElementById('number')    .querySelector('i');
const specialCharReq= document.getElementById('special')   .querySelector('i'); 


const lengthRegex     = /(?=.{8,})/;
const uppercaseRegex  = /(?=.*[A-Z])/;
const lowercaseRegex  = /(?=.*[a-z])/;
const numberRegex     = /(?=.*\d)/;
const specialCharRegex= /(?=.*[!@#$%^&*])/; 

passwordInput.addEventListener('input', updateStrength);

function updateStrength() {
  const password = passwordInput.value;
  let strength = 0;

  const requirements = [
    { regex: lengthRegex,      element: lengthReq },
    { regex: uppercaseRegex,   element: uppercaseReq },
    { regex: lowercaseRegex,   element: lowercaseReq },
    { regex: numberRegex,      element: numberReq },
    { regex: specialCharRegex, element: specialCharReq },
  ];

  requirements.forEach(req => {
    const ok = req.regex.test(password);
    if (ok) {
      strength += 20;                     
      req.element.className = 'fa-solid fa-check';
      req.element.style.color = 'green';
    } else {
      req.element.className = 'fas fa-times';
      req.element.style.color = 'red';
    }
  });


  strengthMeter.style.width = `${strength}%`;

  if (password.length === 0) {
    strengthText.textContent = 'No password';
    strengthMeter.style.backgroundColor = '#e0e0e0';
  } else if (strength < 20) {
    strengthText.textContent = 'Very Weak';
    strengthMeter.style.backgroundColor = '#ff4d4d';
  } else if (strength < 40) {
    strengthText.textContent = 'Weak';
    strengthMeter.style.backgroundColor = '#ffad4d';
  } else if (strength < 60) {
    strengthText.textContent = 'Moderate';
    strengthMeter.style.backgroundColor = '#ffff4d';
  } else if (strength < 80) {
    strengthText.textContent = 'Strong';
    strengthMeter.style.backgroundColor = '#a3ff4d';
  } else {
    strengthText.textContent = 'Very Strong';
    strengthMeter.style.backgroundColor = '#4dffff';
  }
}

function togglePasswordVisibility() {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

updateStrength();
