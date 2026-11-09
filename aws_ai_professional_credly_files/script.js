
const credentialURL =
    "https://www.credly.com/badges/ad164865-05ba-4f23-8df9-2e79774d7e0d";

// Verify credential
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

// Celebrate credential
document.getElementById("celebrateBtn").addEventListener("click", async () => {
    const shareData = {
        title: "AWS Certified Generative AI Developer - Professional",
        text: "Congratulations on earning the AWS Certified Generative AI Developer - Professional badge!",
        url: credentialURL
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (error) {
            if (error.name !== "AbortError") {
                console.error(error);
            }
        }
    } else {
        try {
            await navigator.clipboard.writeText(credentialURL);
            alert("Credential link copied! Share your achievement.");
        } catch {
            alert("Unable to copy the credential link.");
        }
    }
});

// Search bar
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && searchInput.value.trim()) {
        alert("Search functionality requires a Credly search service.");
    }
});
