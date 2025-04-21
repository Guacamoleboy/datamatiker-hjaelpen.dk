window.addEventListener("DOMContentLoaded", () => {
  const catIcon = document.getElementById("cat-icon");

  if (catIcon) {
      catIcon.addEventListener("click", () => {
          const butterflyWrapper = document.createElement("div");
          const butterfly = document.createElement("img");
          const nameText = document.createElement("div");

          butterfly.src = "assets/images/sad/heart.png";
          butterfly.className = "butterfly";

          nameText.className = "butterfly-name";
          nameText.textContent = "Sidney - I miss you";

          butterflyWrapper.className = "butterfly-wrapper";
          butterflyWrapper.appendChild(butterfly);
          butterflyWrapper.appendChild(nameText);

          const rect = catIcon.getBoundingClientRect();
          const offsetX = window.scrollX || document.documentElement.scrollLeft;
          const offsetY = window.scrollY || document.documentElement.scrollTop;

          butterflyWrapper.style.left = `${rect.left + rect.width / 2 + offsetX - 80}px`;
          butterflyWrapper.style.top = `${rect.top + offsetY - 60}px`;

          document.body.appendChild(butterflyWrapper);

          setTimeout(() => {
              butterflyWrapper.remove();
          }, 5000);
      });
  }
});