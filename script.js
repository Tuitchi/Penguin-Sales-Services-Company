window.addEventListener('scroll', function () {
    const logo = document.getElementById('logo');
    if (window.scrollY > 50) {
      logo.classList.remove('w-20');
      logo.classList.add('w-12');
    } else {
      logo.classList.remove('w-12');
      logo.classList.add('w-20');
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll("#service");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("md:flex-row-reverse")) {
                    entry.target.classList.remove("opacity-0", "-translate-x-10");
                } else {
                    entry.target.classList.remove("opacity-0", "translate-x-10");
                }
                entry.target.classList.add("opacity-100", "translate-x-0");
            }
        });
    }, { threshold: 0.2 });

    services.forEach(service => {
        observer.observe(service);
    });
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});
const servicesToggle = document.getElementById('mobile-services-toggle');
const servicesMenu = document.getElementById('mobile-services-menu');

servicesToggle.addEventListener('click', () => {
    servicesMenu.classList.toggle('hidden');
});
