const credentialURL =
    "https://www.credly.com/badges/9b575393-727f-4568-89e0-9b11fb6b1028";

document.getElementById("verifyBtn").addEventListener("click", () => {
    window.open(credentialURL, "_blank", "noopener,noreferrer");
});

document.getElementById("celebrateBtn").addEventListener("click", async () => {
    const shareData = {
        title: "AWS Certified AI Practitioner",
        text: "I'm sharing my AWS Certified AI Practitioner badge!",
        url: credentialURL
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (error) {
            if (error.name !== "AbortError") {
                console.error("Sharing failed:", error);
            }
        }
    } else {
        try {
            await navigator.clipboard.writeText(credentialURL);
            alert("Credential link copied! Share your achievement.");
        } catch (error) {
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
