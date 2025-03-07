document.addEventListener("DOMContentLoaded", function () {
    function validatePassword() {
        const name = document.getElementById('nameSelect').value;
        const password = document.getElementById('passwordInput').value;
        if (!name) return alert('Por favor, selecciona un nombre.');

        const passwords = { Kiara: '13', Vane: '25', Gaby: '15' };

        if (password === passwords[name]) {
            showMessage(name);
        } else {
            alert('Contraseña incorrecta.');
        }
    }

    function showMessage(name) {
        let message = '';
        const messageBox = document.getElementById('messageBox');

        if (name === 'Kiara') {
            message = `💛 Para Kiara 💛

🌻✨ Kiara, eres un rayo de sol en la vida de quienes te rodean. Con tu alegría contagiosa y tu espíritu libre, llenas de energía cada momento. Tu chispa de locura y diversión hace que cualquier día gris se ilumine con risas. 🌟😜

💃🎶 Tu amor por la danza refleja la pasión con la que vives, y tu deseo de viajar muestra tu alma aventurera. Pero, sobre todo, tu fe en la Virgen de la Merced y el Doctorcito es un reflejo de tu fortaleza y nobleza de corazón. 💖🙏

💛🌻 En este Día de la Mujer, quiero recordarte lo valiosa y única que eres. Que la vida te siga llenando de girasoles, alegría y momentos inolvidables. Nunca cambies, porque el mundo necesita más personas como tú. 🌍✨

Gracias por compartir un poquito más de ti conmigo. 😊

¡Feliz Día de la Mujer, Kiara! 💖🌻

Atte. Daniel Tugor`;
            messageBox.classList.add('kiara');
            showSunflowers();
        } else {
            messageBox.classList.remove('kiara');
        }

        if (name === 'Gaby') {
            message = `🌺 Gaby, tu ternura y fortaleza inspiran a todos. 🌺
            Que este día celebre tu esencia única, llena de amor y valentía.
            Nunca dejes de brillar, el mundo necesita más de tu luz. ✨
            
            Atte. Daniel Tugor`;
        }

        if (name === 'Vane') {
            message = `💐 Vane, tu energía y determinación son admirables. 💐
            Eres una mujer increíblemente fuerte y especial.
            Hoy es un día para recordar lo valiosa que eres para quienes te rodean. 💖
            
            Atte. Daniel Tugor`;
        }

        document.getElementById('messageText').innerText = message;
        document.getElementById('messageModal').style.display = "flex";
    }

    function closeMessage() {
        document.getElementById('messageModal').style.display = "none";
    }

    function showSunflowers() {
        for (let i = 0; i < 60; i++) {  // Aumentamos la cantidad a 35
            let sunflower = document.createElement('div');
            sunflower.className = 'sunflower';
            sunflower.style.left = `${Math.random() * 100}vw`;
            sunflower.style.animationDuration = `${Math.random() * 6 + 5}s`; // Ajustamos duración
            sunflower.style.fontSize = `${Math.random() * 25 + 45}px`; // Tamaño entre 25px y 40px
            document.body.appendChild(sunflower);
            setTimeout(() => sunflower.remove(), 5000);
        }
    }
    
    window.validatePassword = validatePassword;
    window.closeMessage = closeMessage;
});
