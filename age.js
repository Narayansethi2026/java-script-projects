function changeColor() {
            // Random Hex Color banane ka logic
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            
            // Screen par color apply karna
            document.body.style.backgroundColor = randomColor;
            
            // H2 tag me color ka naam (Hex code) likhna
            document.getElementById("colorText").innerText = randomColor;
        }