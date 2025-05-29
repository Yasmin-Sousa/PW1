document.addEventListener('DOMContentLoaded', function () {
    console.log("consertando links..")
    const urlParams = new URLSearchParams(window.location.search);
    const uValue = urlParams.get('u');

    if (uValue) {
        const linksParaModificar = document.querySelectorAll('a.pass-query-parameters');

        linksParaModificar.forEach(link => {
            const originalHref = link.getAttribute('href');
            try {
                const linkUrl = new URL(originalHref, window.location.origin);

                linkUrl.searchParams.set('u', uValue);

                link.setAttribute('href', linkUrl.pathname + linkUrl.search);
            } catch (e) {
                console.error("Erro ao processar o link: ", originalHref, e);
            }
        });
    }
});

function signUp(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (email === '' || username === '' || password === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    window.location.href = "/?u="+encodeURIComponent(username)

    return false;
}

function signIn(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    window.location.href = "/?u="+encodeURIComponent(username)

    return false;
}
