const m = [1, 2, 3, 4, 5, 6, 7]

const graphic = []
for (const $m of m) {
  graphic.push(`
    <div class="image${$m}"> <img alt="" class="image" src="img/graphic/${$m}.png"> </div>`)
}

const $graphic = document.getElementById('graphic')

$graphic.innerHTML = graphic.join(' ')
