document.addEventListener('DOMContentLoaded', function() {
    let noCount = 0;

    const yb = document.getElementById('yb');
    const nb = document.getElementById('nb');
    const hom = document.getElementById('home');
    const invitep = document.getElementById('invite');
    const Tba = document.getElementById('tooBad');

    yb.addEventListener('click', function() {
        hom.style.display = 'none';
        invitep.style.display = 'block';
    });

    nb.addEventListener('click', function() {
        noCount++;
        if (noCount < 3) {
            const maxX = window.innerWidth - nb.offsetWidth - 20;
            const maxY = window.innerHeight - nb.offsetHeight - 20;
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            nb.style.position = 'absolute';
            nb.style.left = `${x}px`;
            nb.style.top = `${y}px`;
        } else {
            hom.style.display = 'none';
            Tba.style.display = 'block';
        }
    });
});