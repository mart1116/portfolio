const o = [1, 2, 3, 4, 5]

const web = []
for (const $o of o) {
  web.push(`
    <div class="image${$o}"> <img alt="" class="image" src="img/web/${$o}.png"> </div>`)
}

const $web = document.getElementById('web')

$web.innerHTML = web.join(' ')
