// Create country select option.
countryCode.forEach(selectOptions);
function selectOptions(item, index) {
  let x = document.getElementById("country");
  let option = document.createElement("option");
  option.text = item.name + " (" + item.dial_code + ")";
  option.value = item.dial_code;
  x.add(option);
}

// Add Country select listners. 
document.getElementById("country").addEventListener("change", updateDialCode);

// Set default value for country and country-code.
document.getElementById("country").value = "+91";
document.getElementById("country-code").value = "+91";

// On change country field update country-code field. 
function updateDialCode() {
  let countryCodeSelected = document.getElementById("country").value;
  document.getElementById("country-code").value = countryCodeSelected;
}

// Add click listner to open WhatsApp.
document.getElementById("open-whatsapp-newtab").addEventListener("click", openWhatsAppNewTab);

function openWhatsAppNewTab() {
  handleOpeningWhatsApp("");
}

// Params are _self or _blank ...
function handleOpeningWhatsApp(params) {
  let countryCodeSelected = document.getElementById("country-code").value.trim();
  let phoneNumber = document.getElementById("phone-number").value.trim();
  if (phoneNumber == "") {
    document.getElementById("phone-number-error").innerHTML = "Phone Number is required";
  }
  else if (phoneNumber.length < 4) {
    document.getElementById("phone-number-error").innerHTML = "Enter Valid Phone Number";
  }
  else if (countryCodeSelected == "" && !phoneNumber.startsWith("+")) {
    document.getElementById("country-code-error").innerHTML = "Select Country";
  }
  else if (phoneNumber.startsWith("+") && countryCodeSelected != "") {
    document.getElementById("phone-number-error").innerHTML = "Remove Country code from phone number";
  }
  else {
    let finalPhoneNumber = countryCodeSelected.replace('+','') + phoneNumber.replace('+','');
    window.open('https://wa.me/' + finalPhoneNumber, params);
  }
}
