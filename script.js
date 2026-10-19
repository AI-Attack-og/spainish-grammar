// Renders the accordion UI from GRAMMAR_DATA and wires up the toggle interactions.

function buildTOC(data) {
  const toc = document.getElementById("toc");
  const list = document.createElement("ul");
  list.className = "toc-list";

  data.forEach((part) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.className = "toc-link";
    link.href = "#" + part.id;
    link.textContent = part.title;
    item.appendChild(link);
    list.appendChild(item);
  });

  toc.appendChild(list);
}

function buildContent(data) {
  const content = document.getElementById("content");

  data.forEach((part) => {
    const partEl = document.createElement("section");
    partEl.className = "part";
    partEl.id = part.id;

    const partHeading = document.createElement("h2");
    partHeading.className = "part-title";
    partHeading.textContent = part.title;
    partEl.appendChild(partHeading);

    part.sections.forEach((section) => {
      const sectionEl = document.createElement("div");
      sectionEl.className = "accordion-item";

      const button = document.createElement("button");
      button.className = "accordion-trigger";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", "panel-" + section.id);
      button.id = "trigger-" + section.id;
      button.textContent = section.title;

      const icon = document.createElement("span");
      icon.className = "accordion-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "+";
      button.appendChild(icon);

      const panel = document.createElement("div");
      panel.className = "accordion-panel";
      panel.id = "panel-" + section.id;
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", "trigger-" + section.id);
      panel.hidden = true;

      const panelInner = document.createElement("div");
      panelInner.className = "accordion-panel-inner";
      panelInner.innerHTML = section.html;
      panel.appendChild(panelInner);

      button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
        icon.textContent = isOpen ? "+" : "−";

        if (!isOpen) {
          panelInner.classList.remove("bounce-in");
          // eslint-disable-next-line no-unused-expressions
          panelInner.offsetWidth; // restart animation
          panelInner.classList.add("bounce-in");
        }
      });

      sectionEl.appendChild(button);
      sectionEl.appendChild(panel);
      partEl.appendChild(sectionEl);
    });

    content.appendChild(partEl);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildTOC(GRAMMAR_DATA);
  buildContent(GRAMMAR_DATA);
});
