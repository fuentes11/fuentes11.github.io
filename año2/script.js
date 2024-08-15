// script.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDBdchyRC5aOY88ZyP7f1xMLu11l4yPmqo",
    authDomain: "paginanaho.firebaseapp.com",
    projectId: "paginanaho",
    storageBucket: "paginanaho.appspot.com",
    messagingSenderId: "855264838825",
    appId: "1:855264838825:web:e6268e740fbf0d399955b8",
    measurementId: "G-BWTV9XV5C4"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

async function loadFelicitaciones() {
    const container = document.getElementById('felicitaciones-container');
    const querySnapshot = await getDocs(collection(db, 'felicitaciones'));

    querySnapshot.forEach(async (doc) => {
        const data = doc.data();
        let imgUrl = 'assets/img/felicitaciones/no-img.jpeg'; // URL por defecto si no hay imagen

        if (data.imageUrl) {
            try {
                imgUrl = data.imageUrl;
            } catch (error) {
                console.error('Error obteniendo la URL de la imagen:', error);
            }
        }

        console.log('Imagen URL:', imgUrl); // Verifica la URL de la imagen en la consola

        container.innerHTML += `
            <div class="swiper-slide">
                <div class="testimonial-wrap">
                    <div class="testimonial-item">
                        <img src="${imgUrl}" class="testimonial-img" alt="">
                        <h3 class="mayus">${data.name}</h3>
                        <h4>${data.identificador}</h4>
                        <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            ${data.description}
                            <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}

loadFelicitaciones();
