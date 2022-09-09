//   if (!personName.value || !personEmail.value || !personMessage.value) {
//     Swal.fire({
//       title: "Please Enter All Fields",
//       confirmButtonText: "OK",
//     });
//     return;
//   }

//   const validEmail =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (personEmail.value.match(validEmail)) {
//   } else {
//     Swal.fire({
//       title: "Please check your email again!",
//       confirmButtonText: "OK",
//     });
//     return;
//   }

//   Swal.fire({
//     title: "Your Query Has Been Recieved, Thank you!",
//     confirmButtonText: "OK",
//   });

//   personEmail.value = "";
//   personMessage.value = "";
//   personName.value = "";
// });

const sendMessageButton = document.getElementById("sendMessageButton");
const personName = document.getElementById("personName");
const personEmail = document.getElementById("personEmail");
const personMessage = document.getElementById("personMessage");
let error = false;

sendMessageButton.addEventListener("click", (e) => {
  checkInputs();
});

function checkInputs() {
  const nameValue = personName.value;
  const emailValue = personEmail.value;
  const messageValue = personMessage.value;

  if (nameValue === "") {
    setErrorFor(personName, "Name cannot be blank");
  } else {
    setSuccessFor(personName);
  }

  if (emailValue === "") {
    setErrorFor(personEmail, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(personEmail, "Not a valid email");
  } else {
    setSuccessFor(personEmail);
  }

  if (messageValue === "") {
    setErrorFor(personMessage, "Message cannot be blank");
  } else {
    setSuccessFor(personMessage);
  }

  personName.value = "";
  personEmail.value = "";
  personMessage.value = "";

  if (error) return;

  Swal.fire({
    title: "Your Query Has Been Recieved, Thank you!",
    confirmButtonText: "OK",
  });
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);
  const small = formControl.querySelector("small");
  formControl.className = "error";
  formControl.classList.add("mb-3");
  small.innerText = message;
  error = true;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "success";
  formControl.classList.add("mb-3");
  console.log(formControl);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
