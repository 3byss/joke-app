let button = document.querySelector(".generate-btn");
let text = document.querySelector(".text");

button.addEventListener("click", () => {
    getJoke().then(joke => {
        text.textContent = joke;
    });
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