function calculateBirthDetails() {
            let birthInput = document.getElementById("birthDatetime").value;

            if (!birthInput) {
                alert("Please select your birth date and time!");
                return;
            }

            let birthDate = new Date(birthInput);
            let now = new Date();

            if (birthDate > now) {
                alert("Birth date future me nahi ho sakti!");
                return;
            }

            // 1. Day Name Nikalna
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let dayName = days[birthDate.getDay()];

            // 2. Exact Age (Years, Months, Days) Calculate Karna
            let years = now.getFullYear() - birthDate.getFullYear();
            let months = now.getMonth() - birthDate.getMonth();
            let dateDiff = now.getDate() - birthDate.getDate();

            if (dateDiff < 0) {
                months--;
                let lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                dateDiff += lastMonth.getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            // 3. Total Time Difference (Milliseconds se Hours)
            let diffMs = now - birthDate;
            let totalHours = Math.floor(diffMs / (1000 * 60 * 60));
            let totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            // Output Set Karna
            document.getElementById("dayName").innerText = dayName;
            document.getElementById("ageText").innerText = `${years} Years, ${months} Months, ${dateDiff} Days`;
            document.getElementById("totalHours").innerText = `${totalDays} Days (~${totalHours} Hours)`;

            document.getElementById("resultBox").style.display = "block";
        }