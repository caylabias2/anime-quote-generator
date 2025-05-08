const animeInfo = [
    {
        name: "Naruto",
        id: "naruto",
        characters: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno ", "Kakashi", "Jiraiya"],
        defaultImage: "images/default-naruto.jpg",
        defaultColor: "#f38c18",
        colorMap: {
            Naruto: "orange",
            Sasuke: "#a349e7",
            Sakura: "#f0c0c0",
            Kakashi: "#c8cee0",
            Jiraiya: "#f2f2f2",
        },
        imageMap: {
            Naruto: "images/character-images/naruto-image.jpg",
            Sasuke: "images/character-images/sasuke-image.jpg",
            Sakura: "images/character-images/sakura-image.jpg",
            Kakashi: "images/character-images/kakashi-image.jpg",
            Jiraiya: "images/character-images/jiraiya-image.jpg",
        }
    },
    {
        name: "Dragon Ball",
        id: "dragonball",
        characters: ["Goku", "Vegeta", "Piccolo", "Trunks", "Frieza"],
        defaultImage:"images/default-dragonball.jpg",
        defaultColor: "#ffff00",
        colorMap: {
            Goku: "#e75908",
            Vegeta: "#4157b2",
            Piccolo: "#6edc32",
            Trunks: "#bfa3e4",
            Frieza: "#72479a",
        },
        imageMap: {
            Goku: "images/character-images/goku-image.png",
            Vegeta: "images/character-images/vegeta-image.jpg",
            Piccolo: "images/character-images/piccolo-image.jpg",
            Trunks: "images/character-images/trunks-image.jpg",
            Frieza: "images/character-images/frieza-image.jpg",
        }
    },
    {
        name: "Hunter x Hunter",
        id: "hxh",
        characters: ["Gon Freecss", "Killua", "Kurapika", "Leorio", "Hisoka"],
        defaultImage:"images/default-hxh.jpg",
        defaultColor: "#138d36",
        colorMap: {
            Gon: "#5aa14d",
            Killua: "#b4b0c8",
            Kurapika: "#fae885",
            Leorio: "#00264d",
            Hisoka: "#e89ab2",
        },
        imageMap: {
            Gon: "images/character-images/gon-image.jpg",
            Killua: "images/character-images/killua-image.png",
            Kurapika: "images/character-images/kurapika-image.jpg",
            Leorio: "images/character-images/leroio-image.jpg",
            Hisoka: "images/character-images/hisoka-image.jpg",
        }
    },
    {
        name: "Bleach",
        id: "bleach",
        characters: ["Ichigo", "Rukia", "Kisuke Urahara", "Kenpachi", "Aizen"],
        defaultImage:"images/default-bleach.jpg",
        defaultColor: "#f5181b",
        colorMap: {
            Ichigo: "#ec8a24",
            Rukia: "#d9d8f9",
            Kisuke: "#4d6956",
            Kenpachi: "black",
            Aizen: "#ac7cdc",
        },
        imageMap: {
            Ichigo: "images/character-images/ichigo-image.jpg",
            Rukia: "images/character-images/rukia-image.jpg",
            Kisuke: "images/character-images/kisuke-image.jpg",
            Kenpachi: "images/character-images/kenpachi-image.jpg",
            Aizen: "images/character-images/sosuke-image.jpg",
        }
    },
    {
        name: "One Piece",
        id: "onepiece",
        characters: ["Luffy", "Zoro", "Shanks", "Sanji", "Trafalgar Law"],
        defaultImage:"images/default-onepiece.jpg",
        defaultColor: "#3b9dd5",
        colorMap: {
            Luffy: "#c23842",
            Zoro: "#98d759",
            Shanks: "#9f1833",
            Sanji: "#ecdf7d",
            Trafalgar: "#edc240",
        },
        imageMap: {
            Luffy: "images/character-images/luffy-image.jpg",
            Zoro: "images/character-images/zoro-image.jpg",
            Shanks: "images/character-images/shanks-image.jpg",
            Sanji: "images/character-images/sanji-image.jpg",
            Trafalgar: "images/character-images/law-image.jpg",
        }
    }
];

/* Character map to ensure API fetches quote only for characters of certain animes */
const characterAnimeMap = {
    Goku: ["Dragon Ball", "Dragon Ball Z", "Dragon Ball Super"],
    Nami: ["One Piece"],
    Law: ["One Piece"],
    Kon:["Bleach"]
};

const contentContainer = document.getElementById("anime-grid");

/* Function to dynamically create all anime containers/generators */
function createContainers() {
    animeInfo.forEach(anime => {
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        container.style.backgroundColor = anime.defaultColor;
        contentContainer.appendChild(container);
    
        const leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'left');
    
        const animeTitle = document.createElement('h1');
        animeTitle.setAttribute('id', `${anime.id}-title`);
        animeTitle.innerHTML = anime.name;
    
        const animeImage = document.createElement('div');
        animeImage.setAttribute('class', 'anime-image');
        animeImage.style.backgroundImage = `url('${anime.defaultImage}')`;
    
        const generateButton = document.createElement('button');

        generateButton.innerHTML = "Generate";
    
        const quoteParagraph = document.createElement('p');

        const rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'right');

        const chooseCharacter = document.createElement('h3');
        chooseCharacter.textContent = "Choose a Character";

        const characterForm = document.createElement('form');
        characterForm.setAttribute('id', `${anime.id}-character-select`);

    anime.characters.forEach(character => {
        const characterInput = document.createElement('input');
        characterInput.setAttribute('type', 'radio');
        characterInput.setAttribute('id', `${character}-select`);
        characterInput.setAttribute('value',`${character}`);
        characterInput.setAttribute('name', `${anime.id}-radio`);
        
        const characterLabel = document.createElement('label');
        characterLabel.setAttribute('for', `${character}-select`);
        const characterFirstName = character.split(" ");

        if (character === "Trafalgar Law" || character === "Kisuke Urahara") {
            characterLabel.innerHTML = ` ${characterFirstName[1]}<br>`;
        }
        else {
            characterLabel.innerHTML = ` ${characterFirstName[0]}<br>`;
        }
        
        characterForm.appendChild(characterInput);
        characterForm.appendChild(characterLabel);

       });
        
        container.appendChild(leftDiv);
    
        leftDiv.appendChild(animeTitle);
        leftDiv.appendChild(animeImage);
        leftDiv.appendChild(generateButton);
    
        animeImage.appendChild(quoteParagraph);

        container.appendChild(rightDiv);

        rightDiv.appendChild(chooseCharacter);
        rightDiv.appendChild(characterForm);

    });
}

createContainers();

/* Adds event listener to each generate button to help later determine which generator should run */
var buttons = document.querySelectorAll('button');

buttons.forEach (button => {
    button.addEventListener("click", getSelectedCharacter);
});

/* Function to get the selected character based on which button is clicked */
function getSelectedCharacter(event) {
    const container = event.target.closest('.container');
    const selectedRadioButton = container.querySelector('input[type="radio"]:checked');

    const characterName = selectedRadioButton ? selectedRadioButton.value : null;

    getQuote(characterName, container);
}

/* Function to get the quote based on the character and container where button is clicked */
async function getQuote(character, container) {
    const apiURL = "https://yurippe.vercel.app/api/quotes?character=" + character + "&random=1";

    const quoteParagraph = container.querySelector('p');
    const showTitle = container.querySelector('h1');
    const containerImage = container.querySelector(".anime-image");

    // Show "Loading..." in the paragraph while fetching
    quoteParagraph.textContent = "Loading...";
   
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const quoteText = data[0].quote;
        const quoteCharacter = data[0].character;
        const quoteShowName = data[0].show;

        // Check character-anime match
        if (character in characterAnimeMap) {
            if (!characterAnimeMap[character].includes(quoteShowName)) {
                quoteParagraph.textContent = "No matching quote found.";
                return;
            }
        }

        showTitle.textContent = quoteShowName;
        quoteParagraph.innerHTML = `${quoteText}<br>- ${quoteCharacter}`;

        const animeObj = animeInfo.find(anime =>
            quoteShowName.toLowerCase().includes(anime.name.toLowerCase())
        );

        if (animeObj) {
            const charNameArray = character.split(" ");
            const characterFN = charNameArray[0];

            const characterColor = animeObj.colorMap[characterFN];
            const characterImage = animeObj.imageMap[characterFN];

            if (characterColor) {
                container.style.backgroundColor = characterColor;
                containerImage.style.backgroundImage = `url('${characterImage}')`;
            } else {
                container.style.backgroundColor = animeObj.defaultColor || "#ffffff";
            }
        } else {
            container.style.backgroundColor = "#ffffff"; // fallback
        }

    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteParagraph.textContent = "Failed to load quote.";
    }
}




