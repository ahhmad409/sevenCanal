const sendMessageButton = document.getElementById("sendMessageButton");
sendMessageButton.addEventListener("click", () => {
  const personName = document.getElementById("personName").value;
  const personEmail = document.getElementById("personEmail").value;
  const personMessage = document.getElementById("personMessage").value;

  if (!personName || !personEmail || !personMessage) {
    Swal.fire({
      title: "Please Enter All Fields",
      confirmButtonText: "OK",
    });
    return;
  }

  Swal.fire({
    title: "Your Query Has Been Recieved, Thank you!",
    confirmButtonText: "OK",
  });
});
