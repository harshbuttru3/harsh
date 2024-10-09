window.addEventListener('load', function() {
    const audio = document.getElementById('background-audio');
    const output = document.getElementById('output');
    const inputField = document.getElementById('user-input');
    const promptText = "Hello friend? I know you exist only in my brain, anyways welcome to my portfolio.";
    let charIndex = 0;

    // Play audio once
    // audio.play().catch(error => {
    //     console.log('Audio autoplay failed: ', error);
    // });

    // Type out text with typewriter effect
    function typeText(text, callback = null, speed = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                output.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // Disable input until intro text is fully typed
    inputField.disabled = true;
    typeText(promptText, () => {
        output.innerHTML += "<br>Type a command to explore my portfolio...";
        inputField.disabled = false;
        inputField.focus();  // Focus input after intro
    });

    // Handle user input and respond with a typewriter effect
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const userInput = inputField.value.trim().toLowerCase();
            inputField.value = '';  // Clear input

            // Fast typewriter effect for responses
            function respondWithType(response) {
                inputField.disabled = true;
                output.innerHTML += "<br><br>$ " + userInput + "<br><br>";
                typeText(response, () => { 
                    inputField.disabled = false;
                    inputField.focus();  // Re-focus input after response
                }, 50);  // Faster speed for responses (50ms)
            }

            // Direct HTML rendering for projects
            function respondWithHTML(response) {
                inputField.disabled = true;
                output.innerHTML += "<br>$ " + userInput + "<br>";
                output.innerHTML += response;  // Directly add HTML response
                inputField.disabled = false;
                inputField.focus();  // Re-focus input after HTML response
            }

            // Handle different commands
            if (userInput === 'whoami') {
                respondWithType("Hello friend. I am Harsh, a phantom in the wires, a seeker of truth in a world full of noise. I delve into the depths of code and systems, challenging the status quo, and rewrite what's possible. Welcome to my world—where nothing is ever what it seems.\n I'm good at reading people. My secret , I look for the worst in them.\nI know it sounds like Elliot from Mr. Robot, because I am.");
            } else if (userInput === 'projects') {
                const projectsResponse = `
                    Here are some of my projects:
                    <h3> Web Projects: </h3>
                    <br><a href="https://harshbuttru3.github.io/portfolio" target="_blank">Portfolio</a> : This is my old portfolio site.
                    <br><a href="https://medikit-247.web.app" target="_blank">Medikit</a> : The project which i made for SIH for medical services.
                    <br><a href="https://famewriter.online" target="_blank">Story writing.</a> : You can submit your storys and poems here to win exciting prizes. (It was a paid project. I am not the owner of this project. I only developed this.)
                    <br><a href="https://harshbuttru3.github.io/imageSearch" target="_blank">Image search Engine.</a> : It utilized unsplash api to fetch images based on you queris.
                    <br><a href="https://github.com/harshbuttru3/news" target="_blank">News App</a> :News app using react which utilizes news api to fetch live news.
                    <h3> Other Projects: </h3> <br>
                    <br><a href="https://github.com/harshbuttru3/attendence" target="_blank">Automatic attendence system.</a> : Python project which utilizes panda, face_recognition and cv2 to recognize face and make the attendance and save to a csv file.
                    <br><a href="https://github.com/harshbuttru3/Bitb" target="_blank">BITB</a> :Templates for performing BITB attack.
                    <br><a href="https://github.com/harshbuttru3/terminal2do" target="_blank">TODO app</a> :lightweight TODO app right in your terminal.
                    <br>You can see all my projects on my <a href="https://github.com/harshbuttru3" target="_blank">Github</a>.
                `;
                respondWithHTML(projectsResponse);  // Render HTML directly
            } else if (userInput === 'contact') {
                const contactResponse = `
                mail me at : noobdeveloperlvl0@gmail.com<br>
                follow me on <a href="https://instagram.com/127.0.0.1_7777" target="_blank">Instagram</a>.<br>
                or we can chat on <a href="https://wa.link/atbsf4" target="_blank">Whatsapp</a>.<br>
                `
                respondWithHTML(contactResponse)
            } else if (userInput === 'help') {
                respondWithType("Here are the list of commands.\nprojects: list some of my recent projects. \ncontact: gives options to contact me. \nwhoami: you probably know me. right?\nseeme: wanna see me?\nclear: clear the screen\nThere are some hidden commands as easter egg you can find them to know more about me!(just use your blackhat skills, good luck.)");
            } else if (userInput === 'seeme'){
                const seemeResponse = `
                <img src="elliot.jpg"> `
                respondWithHTML(seemeResponse); //render my image
            } else if(userInput === 'clear') {
                output.innerHTML = ''
            }else if(userInput === 'intro'){
                respondWithType("Hello friend? I know you exist only in my brain anyways welcome to my portfolio.")
            }else if(userInput === ''){
                respondWithType("Please enter some commands to explore about me....")
            }
            else {
                respondWithType("Command not found. Enter 'help' to get the full list of commands.");
            }

            // Scroll to bottom after every command
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
});
