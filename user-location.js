document.addEventListener("DOMContentLoaded", () => {
  const userOfficeContainer = document.getElementById("user-location-office");
  if (!userOfficeContainer) return;

  const officeData = {
    IN: {
      city: "Bangalore",
      image: "images/india-office.jpg",
      address: "Unit 1, Block E, Helios Business Park, Bangalore 560103, India",
      phone: "+91 80 4164 8996"
    },
    US: {
      city: "Boston",
      image: "images/usa-office.jpg",
      address: "123 Seaport Blvd, Boston, MA 02210, USA",
      phone: "+1 617-123-4567"
    },
    DE: {
      city: "Frankfurt",
      image: "images/germany-office.jpg",
      address: "Friedrich-Ebert-Anlage 35, 60327 Frankfurt, Germany",
      phone: "+49 69 12345678"
    }
  };

  fetch("https://ipapi.co/json/")
    .then(res => {
      if (!res.ok) throw new Error("Location service unavailable");
      return res.json();
    })
    .then(data => {
      const country = data.country_code;
      const office = officeData[country] || officeData["IN"]; // fallback to India
      renderOffice(office);
    })
    .catch(error => {
      console.warn("Could not fetch user location:", error);
      // Show default fallback location
      renderOffice(officeData["IN"]);
    });

  function renderOffice(office) {
    userOfficeContainer.innerHTML = `
      <div class="office-card" style="background-image: url('${office.image}');">
        <div class="office-overlay">
          <h3>${office.city}</h3>
          <p>${office.address}</p>
          <p><strong>📞</strong> ${office.phone}</p>
        </div>
      </div>
    `;
  }
});
