$(() => {
    $('#navbar').load('./components/navbar.html', loginIfNeeded)
    $('#footer').load('./components/footer.html')
    $('#content').load('./components/all-articles.html')
})

function loginIfNeeded() {
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if (!currentUser) {
        $.post('/api/users', {}, (user) => {
            if (user) {
                console.log('Registered user', user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                $('#nav-username').text(user.username)
            }
        })
    } else {
        console.log("Resuming session as ", currentUser.username)
        $('#nav-username').text(currentUser.username)

    }
}

function loadArticles() {
    $.get('/api/get')
}