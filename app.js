// import { querySelector } from 'https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js';

const testiKysymys = [
  {
    teksti: 'Testi kysymys 1 (valitse 2)',
    vaihtoehdot: [
      { teksti: 'Vaihtoehto 1', oikein: false },
      { teksti: 'Vaihtoehto 2', oikein: true },
      { teksti: 'Vaihtoehto 3', oikein: false },
    ]
  },
  {
    teksti: 'Testi kysymys 2 (valitse 1)',
    vaihtoehdot: [
      { teksti: 'Vaihtoehto A', oikein: true },
      { teksti: 'Vaihtoehto B', oikein: false },
      { teksti: 'Vaihtoehto C', oikein: false },
    ]
  }
];

const kysymys = document.querySelector('#kysymys');
const vastaukset = document.querySelector('#vastaukset');
const seuraava = document.querySelector('#seuraava');

function main() {
  let n = 0;
  seuraava.addEventListener('click', (e) => {
    if (n < testiKysymys.length) {
      naytaKysymys(testiKysymys[n]);
      n++;
    } else {
      seuraava.remove();
      vastaukset.innerHTML = '';
      kysymys.textContent = 'Olet vastannut kaikkiin kysymyksiin.';
    }
  });
}

async function naytaKysymys(question) {
  vastaukset.innerHTML = '';
  kysymys.textContent = question.teksti;

  for (const q of question.vaihtoehdot) {
    const elem = document.createElement('div');
    elem.className = 'vaihtoehto';
    elem.textContent = q.teksti;

    elem.addEventListener('click', (e) => {
      elem.textContent = q.oikein ? 'oikein!' : 'väärin!';
    });

    vastaukset.appendChild(elem);
  }
}

main();
