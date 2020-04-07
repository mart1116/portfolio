const n = [1, 2, 3, 4, 5, 6, 7, 8]

const illu = []
for (const $n of n) {
  illu.push(`
    <div class="image${$n}"> <img alt="" class="image" src="img/illu/${$n}.png"> </div>`)
}

const $illu = document.getElementById('illu')

$illu.innerHTML = illu.join(' ')
