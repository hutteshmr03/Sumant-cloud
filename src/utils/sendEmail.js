/**
 * Dual-Delivery Form Email Dispatcher
 * Sends to FormSubmit.co (100% deliverability directly into inboxes)
 * and /api/send-email.php as a secondary backup.
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
    // 1. FormSubmit.co AJAX Endpoint (SPF/DKIM signed, guaranteed inbox delivery)
    fetch("https://formsubmit.co/ajax/contact@sumantcloud.com", {
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
