/**
 * Dual-Delivery Form Email Dispatcher
 * Sends to FormSubmit.co using verified secure token: 8698d951f674a4363313e3361c2938bf
 * Delivered to contact@sumantcloud.com and sejal@sumantcloud.com
 */
export async function submitWebsiteForm({ formType, data, subject }) {
  const formattedData = {};
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      formattedData[key] = value.join(", ");
    } else {
      formattedData[key] = value;
    }
  }

  const senderName = data.fullName || (data.firstName ? `${data.firstName} ${data.lastName || ""}`.trim() : "Website Visitor");
  const emailSubject = subject || `[Sumant Cloud] New Inquiry: ${formType} - ${senderName}`;

  const payload = {
    _subject: emailSubject,
    _cc: "sejal@sumantcloud.com",
    _template: "table",
    _captcha: "false",
    "Form Type": formType,
    ...formattedData,
  };

  const attempts = [
    // 1. FormSubmit.co Secure Token (Direct delivery to contact@sumantcloud.com + sejal@sumantcloud.com)
    fetch("https://formsubmit.co/ajax/8698d951f674a4363313e3361c2938bf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => console.warn("FormSubmit dispatch warning:", err)),

    // 2. Local PHP Endpoint Backup
    fetch("/api/send-email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, data }),
    }).catch((err) => console.warn("Local mail dispatch warning:", err)),
  ];

  await Promise.allSettled(attempts);
  return { success: true };
}
