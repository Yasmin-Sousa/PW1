function newPost() {
    let channelSelect = document.querySelector("#channelSelect")
    let textField = document.querySelector("#newPostTextArea")

    if (!textField.value)
        return alert("A postagem não pode estar vazia.")

    if (channelSelect.value == "Escolha o canal")
        return alert("Você deve escolher o canal para enviar sua postagem.")

    return alert("Postagem não criada em " + channelSelect.value + "!")
}

function newPostChannel(channel) {
    let textField = document.querySelector("#newPostTextArea")

    if (!textField.value)
        return alert("A postagem não pode estar vazia.")

    return alert("Postagem não criada em #" + JSON.parse(channel).channelName + "!")
}

function likepost(user, pid) {
    if (user == "false") return alert("Entre na sua conta ou crie uma hoje mesmo para curtir postagens!")

    const btn = document.querySelector('#like-' + pid);
    const svg = btn.querySelector('svg');
    const txt = document.querySelector('#like-txt-' + pid);

    let liked = btn.dataset.liked === "true";
    let likes = parseInt(btn.dataset.likes);

    if (!liked) {
        liked = true;
        likes += 1;
    } else {
        liked = false;
        likes -= 1;
    }

    svg.setAttribute('color', liked ? `oklch(63.7% 0.237 25.331)` : `oklch(55.1% 0.027 264.364)`)
    svg.setAttribute('fill', liked ? `oklch(63.7% 0.237 25.331)` : `none`)

    btn.dataset.liked = liked;
    btn.dataset.likes = likes;
    txt.textContent = likes;
}

function gologin() {
    window.location.href = "/";
}
