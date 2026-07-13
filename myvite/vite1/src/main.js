
import 'bulma/css/bulma.min.css'
document.querySelector('#app').innerHTML = `
<div class="container">
  <div class="notification is-primary">
    This container is <strong>centered</strong> on desktop and larger viewports.
  </div>
</div>

`

setupCounter(document.querySelector('#counter'))
