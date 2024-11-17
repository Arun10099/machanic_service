document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const customerData = {
      name: formData.get("name"),
      contact: formData.get("contact"),
      address: formData.get("address"),
      carMake: formData.get("car-make"),
      carModel: formData.get("car-model"),
      carYear: formData.get("car-year"),
      serviceDetails: formData.get("service-details"),
    };

    console.log("Appointment Data:", customerData);

    // Add your logic here to send data to the server
    // e.g., using fetch API to POST data to your backend
  });
