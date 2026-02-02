let fps = 30;
let fpsInterval = 1000 / fps;

let now;
let then = performance.now();

const body = document.body;

let offset = 0;

requestAnimationFrame(animate);

function animate() {
    now = performance.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        body.style.background = `
            repeating-linear-gradient(
                transparent,
                transparent ${offset}px,
                var(--main25) ${offset}px,
                var(--main25) calc(1px + ${offset}px),
                transparent calc(1px + ${offset}px),
                transparent 32px
            ),
            repeating-linear-gradient(
                90deg,
                transparent,
                transparent ${offset}px,
                var(--main25) ${offset}px,
                var(--main25) calc(1px + ${offset}px),
                transparent calc(1px + ${offset}px),
                transparent 32px
            ),
            linear-gradient(var(--bg), var(--bg))
        `;

        offset = (offset + 1) % (16 * 2);
    }

    requestAnimationFrame(animate);
}