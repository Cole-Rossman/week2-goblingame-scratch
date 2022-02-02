export function renderOrc(orcData) {
    const orcEl = document.createElement('div');
    const emojiEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    orcEl.classList.add('orc');

    nameEl.textContent = orcData.name;
    hpEl.id = `orc-hp-${orcData.id}`;
    hpEl.textContent = orcData.hp < 0 ? 0 : orcData.hp;

    emojiEl.id = `orc-face-${orcData.id}`;
    