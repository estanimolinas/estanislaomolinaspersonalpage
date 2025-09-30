function sendMail() {
  const to = "estanislao.molinasir@gmail.com";
  const subject = "Contacto desde la web";
  const body = (document.getElementById("message")?.value || "").trim();
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}
