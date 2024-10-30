const podiumData = [
    { name: 'Satoshi Nakamoto', position: 1, description: '1 125 150 BTC' },
    { name: 'BlackRock', position: 2, description: '354 000 BTC' },
    { name: 'Grayscale', position: 3, description: '270 000 BTC' },
];

document.getElementById('entity-1-name').textContent = podiumData.find(e => e.position === 1).name;
document.getElementById('entity-2-name').textContent = podiumData.find(e => e.position === 2).name;
document.getElementById('entity-3-name').textContent = podiumData.find(e => e.position === 3).name;

document.getElementById('entity-1-description').textContent = podiumData.find(e => e.position === 1).description;
document.getElementById('entity-2-description').textContent = podiumData.find(e => e.position === 2).description;
document.getElementById('entity-3-description').textContent = podiumData.find(e => e.position === 3).description;