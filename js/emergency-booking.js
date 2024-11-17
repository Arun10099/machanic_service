document
  .getElementById("emergencyBookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const bookingData = {
      name: formData.get("name"),
      contact: formData.get("contact"),
      email: formData.get("email"),
      carModel: formData.get("car-model"),
      location: formData.get("location"),
    };

    console.log("Emergency Booking Data:", bookingData);

    // Add your logic here to send data to the server
    // e.g., using fetch API to POST data to your backend

    // Here, you might also add functionality to find nearby garages using an API or a database query
  });
