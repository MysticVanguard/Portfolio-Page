if (!sessionStorage.getItem("mode")) {
    sessionStorage.setItem("mode", "light")
}

function makeDark(all_light, inp) {
    Array.from(all_light).forEach(element => {
        element.classList.remove("light")
        element.classList.add("dark")
    });
    inp.textContent = "Light Mode";
    sessionStorage.setItem("mode", "dark")
}

function makeLight(inp) {
    const all_dark = document.getElementsByClassName("dark")
    Array.from(all_dark).forEach(element => {
        element.classList.remove("dark")
        element.classList.add("light")
    });
    inp.textContent = "Dark Mode";
    sessionStorage.setItem("mode", "light")
}

function getMode(inp) {
    const all_light = document.getElementsByClassName("light")
    if (sessionStorage.getItem("mode") === "light") { makeLight(inp); }
    else { makeDark(all_light, inp); }
}

function darkMode(inp) {

    inp.addEventListener("click", function (e) {
        const all_light = document.getElementsByClassName("light")
        if (all_light.length > 0) { makeDark(all_light, inp); }
        else { makeLight(inp); }
    });
}


function botInfoChanger(inp) {
    let text = [
        "AquaMarine is a virtual fishing and aquarium application I created in May 2021 to help " +
        "me learn Python. Since its public debut in August 2021, it has gained increasing popularity " +
        "with over 350 downloads, 900 users, and 100k commands ran. Then in June 2023 I started reworking " +
        "the bot, fully updating the code and remaking it. Now it is fully functional with over a hundred " +
        "different fish and something for everyone.",
        "Dracobot is a bot meant to be a virtual cat that you can take care of, and in return " +
        "he will keep you company. You can pet him to grow his affection towards you, but make " +
        "sure you're feeding him everyday or else he'll start losing affection for you. ",
        "LeoGuides is the newest bot application I've made and I made to help people struggling " +
        "with addiction. It lets users track their struggles and gives them all kinds of resources to " +
        "help them get through it. It is still being worked on but offers a safe and secure place " +
        "for these users to journal and analyze the data of their hardships."
    ]
    let images = [
        "images/AquaMarine.png",
        "images/draco.png",
        "images/LeoGuides.jpg"
    ]
    Array.from(inp.children).forEach(element => {
        element.addEventListener("click", function (e) {
            element.classList.add("selected")
            Array.from(inp.children).forEach(child => {
                if (child !== element)
                    child.classList.remove("selected")
            });
            const descr = document.getElementById("description");
            const img = document.getElementById("bot-image");
            img.setAttribute("src", images[Array.from(inp.children).indexOf(element)]);
            descr.textContent = text[Array.from(inp.children).indexOf(element)];
        })
    });

}

/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
    var languages = [
        { name: 'Python', startDate: new Date(2020, 8, 12) },
        { name: 'PostgreSQL', startDate: new Date(2020, 8, 12) },
        { name: 'Java', startDate: new Date(2021, 8, 17) },
        { name: 'HTML', startDate: new Date(2022, 11, 5) },
        { name: 'CSS', startDate: new Date(2022, 11, 20) },
        { name: 'JavaScript', startDate: new Date(2022, 12, 13) },
        { name: 'C', startDate: new Date(2024, 1, 24)},
        { name: 'Assembly x86-64', startDate: new Date(2024, 3, 4)}
    ];
    
    function getTimeDifference(startDate) {
        var currentDate = new Date();
        var timeDiff = currentDate.getTime() - startDate.getTime();
        var days = Math.floor(timeDiff / (1000 * 3600 * 24));
        var years = Math.floor(days / 365);
        return { days: days, years: years };
    }
    
    function createLanguageTimeElement(language) {
        var time = getTimeDifference(language.startDate);
        var languageTimeElement = document.createElement('p');
        languageTimeElement.textContent = language.name + " - " + time.years + " years, " + time.days%365 + " days";
        return languageTimeElement;
    }   
    
    var languagesContainer = document.getElementById('languages-container');
    for (var i = 0; i < languages.length; i++) {
        var language = languages[i];
        var languageTimeElement = createLanguageTimeElement(language);
        languagesContainer.appendChild(languageTimeElement);
    }
});