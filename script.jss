function playProjection() {
    // Simulate tape insertion animation
    const tape = document.getElementById('tape');
    tape.style.animation = 'tapeInsert 2s forwards';

    // Show the message after a delay
    setTimeout(() => {
        const message = document.getElementById('message');
        message.style.animation = 'fadeIn 2s forwards';
    }, 2000);
}
