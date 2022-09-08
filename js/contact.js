const sendMessageButton = document.getElementById("sendMessageButton");
sendMessageButton.addEventListener("click", () => {
  const personName = document.getElementById("personName");
  const personEmail = document.getElementById("personEmail");
  const personMessage = document.getElementById("personMessage");

  if (!personName.value || !personEmail.value || !personMessage.value) {
    Swal.fire({
      title: "Please Enter All Fields",
      confirmButtonText: "OK",
    });
    return;
  }

  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (personEmail.value.match(validEmail)) {
  } else {
    Swal.fire({
      title: "Please check your email again!",
      confirmButtonText: "OK",
    });
    return;
  }

  Swal.fire({
    title: "Your Query Has Been Recieved, Thank you!",
    confirmButtonText: "OK",
  });

  personEmail.value = "";
  personMessage.value = "";
  personName.value = "";
});
