const loveLetter = `
Mi Estrellita,

Aquí hay 200 razones por las que te amo:


Pueden seguir siendo mas pero solo necesito verte unos segundos a los ojos para amarte.

Te amo000,  
<3  
 

        `;

        const letterElement = document.getElementById("loveLetter");
        let index = 0;
        let fontSize = 1.8; // Tamaño inicial de fuente en rem

        function typeLetter() {
            if (index < loveLetter.length) {
                letterElement.textContent += loveLetter[index];
                index++;

                // Reducir ligeramente el tamaño de la fuente si el texto es muy largo
                if (index > loveLetter.length * 0.3) {
                    fontSize -= 0.002;
                    letterElement.style.fontSize = `${Math.max(fontSize, 1)}rem`; // No baja de 1rem
                }

                setTimeout(typeLetter, 30); // Velocidad de escritura
            }
        }

        typeLetter();

        // Generar estrellas en el fondo
        const canvas = document.querySelector('.stars');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawStars();
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const numStars = 200;
            for (let i = 0; i < numStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 2;
                const brightness = Math.random() * 0.8 + 0.2;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
                ctx.fill();
            }
        }

        resizeCanvas();

        // Efecto de parpadeo de estrellas
        function twinkleStars() {
            drawStars();
        }

        setInterval(twinkleStars, 1000);

        // Ajustar tamaño de lienzo si se cambia la ventana
        window.addEventListener('resize', resizeCanvas);
