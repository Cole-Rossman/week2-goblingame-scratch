import { renderOrc } from '../render-utils.js';

const test = QUnit.test;

test('renderOrc should place <div> with orc info', (expect) => {
    const expected = `<div class="orc"><p>Sheldon</p><p id="orc-face-1">👹</p><p id="orc-hp-1">HP: 10</p></div>`;

    const actual = renderOrc({ name: 'Sheldon', hp: 10, id: 1 });

    expect.equal(actual.outerHTML, expected);
});