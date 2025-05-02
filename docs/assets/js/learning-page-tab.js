document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll("#navi ul li a");
  const indicators = document.querySelectorAll("#navi ul li .indicator");

  const observer = new IntersectionObserver(
      entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  navLinks.forEach(link => {
                      link.classList.remove("active");
                  });

                  const id = entry.target.getAttribute("id");
                  const activeLink = document.querySelector(`#navi a[href="#${id}"]`);
                  if (activeLink) activeLink.classList.add("active");

                  // Move the indicator
                  const activeIndex = Array.from(navLinks).indexOf(activeLink);
                  indicators.forEach((indicator, index) => {
                      indicator.style.transition = "none";
                      indicator.style.height = (index <= activeIndex) ? "100%" : "0%";
                      indicator.style.backgroundColor = (index <= activeIndex) ? "#f8b600" : "white";
                  });
              }
          });
      },
      {
          root: null,
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0
      }
  );

  sections.forEach(section => {
      observer.observe(section);
  });
});