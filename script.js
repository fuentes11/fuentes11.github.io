document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".custom-nav-tabs .nav-link");
    const tabContents = document.querySelectorAll(".tab-pane");

    tabLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            tabContents.forEach(content => {
                content.classList.remove("active");
            });

            const targetTab = this.getAttribute("data-bs-target");
            document.querySelector(targetTab).classList.add("active");

            tabLinks.forEach(link => {
                link.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});
