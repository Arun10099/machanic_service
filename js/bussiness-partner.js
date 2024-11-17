document
  .getElementById("businessPartnerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const partnerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      address: formData.get("address"),
      experience: formData.get("experience"),
      registeredShop: formData.get("registered-shop"),
      registrationNumber: formData.get("registration-number"),
      gstNumber: formData.get("gst-number"),
    };

    console.log("Business Partner Registration Data:", partnerData);

    // Add your logic here to send data to the server
    // e.g., using fetch API to POST data to your backend
  });
