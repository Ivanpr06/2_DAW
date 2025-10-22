const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {
  const body = button.parentElement.querySelector(".accordion-body");

  // Establecer altura inicial para el primero
  if (button.getAttribute("aria-expanded") === "true") {
    body.style.height = body.scrollHeight + "px";
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Cerrar todos los demás
    accordionButtons.forEach(btn => {
      btn.setAttribute("aria-expanded", "false");
      const content = btn.parentElement.querySelector(".accordion-body");
      content.style.height = "0";
      content.classList.remove("open");
    });

    // Si estaba cerrado, abrirlo
    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      body.classList.add("open");
      body.style.height = body.scrollHeight + "px";
    } else {
      // Si lo cierra, reabrir el primero
      const firstButton = accordionButtons[0];
      const firstBody = firstButton.parentElement.querySelector(".accordion-body");
      firstButton.setAttribute("aria-expanded", "true");
      firstBody.classList.add("open");
      firstBody.style.height = firstBody.scrollHeight + "px";
    }
  });
});
