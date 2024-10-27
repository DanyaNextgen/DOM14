import { createUserCard } from "./scripts/createUserCard.js"

function displayUserProfile() {
    const userProfileContainer = document.querySelector('.user-card')
    let user = localStorage.getItem("user")

    if (user) {
        user = JSON.parse(user)
        const userCard = createUserCard(user)
        userProfileContainer.append(userCard)
    }
}

displayUserProfile();

