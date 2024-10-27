function createUserCard(user) {
    const card = document.createElement('div')
    card.className = 'card'

    const name = document.createElement('h2')
    name.textContent = user.name

    const username = document.createElement('p')
    username.textContent = `Username: ${user.username}`

    const email = document.createElement('p')
    email.innerHTML = `Email: <a href="mailto:${user.email}">${user.email}</a>`

    const address = document.createElement('p')
    address.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`

    const phone = document.createElement('p')
    phone.textContent = `Phone: ${user.phone}`

    const company = document.createElement('p')
    company.textContent = `Company: ${user.company.name} - ${user.company.catchPhrase}`

    card.append(name, username, email, address, phone, company)

    return card
}

export { createUserCard }