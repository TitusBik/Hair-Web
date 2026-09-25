const form = document.getElementById("consultation-form");
const status = document.getElementById("consultation-form-status");

if (form instanceof HTMLFormElement && status instanceof HTMLElement) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const formData = new FormData(form);
        const fullName = String(formData.get("fullName") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const treatment = String(formData.get("treatment") || "").trim();
        const message = String(formData.get("message") || "").trim();

        const subject = `Consultation request from ${fullName}`;
        const body = [
            `Full Name: ${fullName}`,
            `Email Address: ${email}`,
            `Treatment of Interest: ${treatment}`,
            "",
            "Message:",
            message,
        ].join("\n");

        status.textContent =
            "Opening your email application. Please send the prepared message.";
        window.location.href = `mailto:executive@lumaclinic.com.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
