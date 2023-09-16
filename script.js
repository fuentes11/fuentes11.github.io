document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".custom-nav-tabs .nav-link");
    const tabContents = document.querySelectorAll(".tab-pane");
    const uploadButton = document.getElementById("uploadButton");
    const uploadedImage = document.getElementById("uploadedImage");

    // Comprueba si hay una imagen guardada en localStorage
    const savedImageUrl = localStorage.getItem("uploadedImage");
    if (savedImageUrl) {
        uploadedImage.src = savedImageUrl;
    }

    tabLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            tabContents.forEach((content) => {
                content.classList.remove("active");
            });

            const targetTab = this.getAttribute("data-bs-target");
            document.querySelector(targetTab).classList.add("active");

            tabLinks.forEach((link) => {
                link.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    // Agregar un evento de cambio al botón de carga
    uploadButton.addEventListener("change", function () {
        const file = uploadButton.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            uploadedImage.src = imageUrl;

            // Guardar la URL de la imagen en localStorage
            localStorage.setItem("uploadedImage", imageUrl);

            uploadedImage.onload = function () {
                URL.revokeObjectURL(imageUrl);
            };
        }
    });
});
