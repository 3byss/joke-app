let button = document.querySelector(".generate-btn");
let text = document.querySelector(".text");

let coolDown = false;

button.addEventListener("click", () => {
    if (!coolDown) {
        getJoke().then(joke => {
            text.textContent = joke;
        });

        coolDown = true;

        setTimeout(() => {
            coolDown = false;
        }, 2000);
    } else {
        text.textContent = "Sorry! Wait for abit before getting a new joke."
    }
});

let getJoke = async () => {
    try {
        let apiResponse = await fetch("https://icanhazdadjoke.com", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        });

        if (!apiResponse.ok) {
            return "Trouble getting joke! Try again please";
        }

        let data = await apiResponse.json();
        let newJoke = data.joke;

        return newJoke;
    } catch (error) {
        console.error(`Error has occured it reads ${error}`)
    }
}