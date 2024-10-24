let user = localStorage.getItem("user")
user = JSON.parse(user)

if (user) {
    const profileInfo = document.querySelector('.profile-info')

    const name = document.createElement('h2')
    name.innerText = user.name

    const email = document.createElement('p')
    email.innerHTML = `<strong>Email:</strong> ${user.email}`

    const phone = document.createElement('p')
    phone.innerHTML = `<strong>Phone:</strong> ${user.phone}`

    const address = document.createElement('p');
    address.innerHTML = `<strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`

    const company = document.createElement('p')
    company.innerHTML = `<strong>Company:</strong> ${user.company.name} - ${user.company.catchPhrase}`

    profileInfo.append(name, email, phone, address, company)

    const homeBtn = document.querySelector('.home-button')

    homeBtn.onclick = () => {
        window.location.href = "/index.html"
    }

    document.getElementById('home-button').onclick = () => {
        
    }
} 
