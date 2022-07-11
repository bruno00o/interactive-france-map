let paths = document.getElementsByClassName('region-carte');
let regions = document.getElementById('regions');
let listeRegions = [];
for (let i = 0; i < paths.length; i++) {
    listeRegions.push(paths[i]);
    /* Display the name of the region following cursor */
    paths[i].addEventListener('mousemove', (e) => {
        let suiviSouris = document.getElementById('suivi-souris');
        let mouseY = e.clientY;
        let mouseX = e.clientX;
        suiviSouris.innerHTML = paths[i].id;
        suiviSouris.style.display = 'block';

        suiviSouris.style.top = mouseY + 10 + 'px';
        suiviSouris.style.left = mouseX + 10 + 'px';
    });
    paths[i].addEventListener('mouseout', (e) => {
        let suiviSouris = document.getElementById('suivi-souris');
        suiviSouris.style.display = 'none';
    });

}

/* sorting list of regions by name */
listeRegions.sort(function (a, b) {
    if (a.id < b.id) {
        return -1;
    } else if (a.id > b.id) {
        return 1;
    }
    return 0;
});

/* adding list of regions next of the map */
for (let i = 0; i < listeRegions.length; i++) {
    let lien = document.createElement('a');
    lien.href = listeRegions[i].getAttribute('href');
    lien.innerHTML = listeRegions[i].id;
    lien.addEventListener('mouseover', () => {
        listeRegions[i].classList.add('region-carte-hover');
    });
    lien.addEventListener('mouseout', () => {
        listeRegions[i].classList.remove('region-carte-hover');
    });
    regions.appendChild(lien);
}