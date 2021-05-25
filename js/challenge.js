const pause = document.querySelector('#pause')
    const submit = document.querySelector('#submit')
    let playResume = 0
    pause.addEventListener('click', () => {
        playResume++
        if (playResume % 2 === 0) {
            clock = setInterval(updateCounter, 1000)
            pause.textContent = 'pause'
            minus.disabled = false
            plus.disabled = false
            like.disabled = false
            submit.disabled = false
            minus.disabled = false
        } else {
            clearInterval(clock)
            pause.textContent = 'resume'
            minus.disabled = true
            plus.disabled = true
            like.disabled = true
            submit.disabled = true
        }
    })