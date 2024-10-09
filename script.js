window.addEventListener('load', function() {
    const audio = document.getElementById('background-audio');
    const output = document.getElementById('output');
    const inputField = document.getElementById('user-input');
    const promptText = "Hello friend? I know you exist only in my brain anyways welcome to my portfolio.";
    let charIndex = 0;

    // Play audio once
    audio.play().catch(error => {
        console.log('Audio autoplay failed: ', error);
    });

    // Type out text with typewriter effect
    function typeText(text, callback = null, speed = 10) {
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
                output.innerHTML += "<br><br>$ " + userInput + "<br><br>";
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
                    <br><a href="https://yourproject1link.com" target="_blank">Project 1</a>
                    <br><a href="https://yourproject2link.com" target="_blank">Project 2</a>
                    <br><a href="https://yourproject3link.com" target="_blank">Project 3</a>
                `;
                respondWithHTML(projectsResponse);  // Render HTML directly
            } else if (userInput === 'contact') {
                respondWithType("Contact me at: harsh@example.com");
            } else if (userInput === 'help') {
                respondWithType("Here are the list of commands.\nprojects: list some of my recent projects. \ncontact: gives options to contact me. \nwhoami: you probably know me. right?");
            } else {
                respondWithType("Command not found. Enter 'help' to get the full list of commands.");
            }

            // Scroll to bottom after every command
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
});
