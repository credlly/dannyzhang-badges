const credentialURL =
  "https://www.credly.com/badges/eda869b0-7fe0-4a6d-8dc4-b4e0268ece8d";

const verificationModal = document.getElementById("verificationModal");

document.getElementById("verifyBtn").addEventListener("click", () => {
    

    verificationModal.classList.add("active");
});

document.getElementById("closeVerification").addEventListener("click", () => {
    verificationModal.classList.remove("active");
});

verificationModal.addEventListener("click", (event) => {
    if (event.target === verificationModal) {
        verificationModal.classList.remove("active");
    }
});

document.getElementById("celebrateBtn").addEventListener("click", async () => {
  const shareData = {
    title: "AWS Certified Cloud Practitioner",
    text: "I'm sharing my AWS Certified Cloud Practitioner badge!",
    url: credentialURL
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      if (error.name !== "AbortError") console.error("Sharing failed:", error);
    }
  } else {
    try {
      await navigator.clipboard.writeText(credentialURL);
      alert("Credential link copied! Share your achievement.");
    } catch {
      alert("Unable to copy the credential link. Please copy it manually.");
    }
  }
});

const searchInput = document.querySelector(".search-box input");
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && searchInput.value.trim()) {
    alert("Search functionality requires a Credly search service.");
  }
});
