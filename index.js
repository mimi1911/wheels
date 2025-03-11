const missionText = `Agent, your mission begins now...

The world’s most brilliant mathematical minds have hidden their secrets in encrypted messages.
Your task is to uncover their knowledge and master the art of Number Theory.

Do you accept the challenge?`;

        let i = 0;
        function typeEffect() {
            if (i < missionText.length) {
                document.getElementById("mission-text").innerHTML += missionText.charAt(i);
                i++;
                setTimeout(typeEffect, 50);
            }
        }
        
        window.onload = typeEffect;
        
        function startMission() {
            alert("Mission Accepted. Proceeding to the next phase...");
            // Replace with actual link to the next lesson page
            window.location.href = "lesson1.html";
        }