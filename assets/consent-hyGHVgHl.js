var e={gaId:``,cloudflareToken:``,searchConsole:``},t=`crs-consent-statistik`,n=()=>{try{return localStorage.getItem(t)}catch{return null}},r=e=>{try{localStorage.setItem(t,e)}catch{}},i=()=>{try{localStorage.removeItem(t)}catch{}};function a(e){if(window.__crsGa)return;window.__crsGa=!0;let t=document.createElement(`script`);t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[];let n=function(...e){window.dataLayer.push(arguments)};n(`js`,new Date),n(`config`,e,{anonymize_ip:!0,allow_google_signals:!1,allow_ad_personalization_signals:!1})}function o(e,t){if(!e)return;let o=null,s=()=>{o?.remove(),o=null},c=t=>{r(t),s(),t===`granted`&&a(e)},l=()=>{o||(o=document.createElement(`div`),o.className=`einwilligung`,o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-modal`,`false`),o.setAttribute(`aria-labelledby`,`einwilligung-titel`),o.innerHTML=`<div class="wrap">
        <div class="text">
          <p id="einwilligung-titel"><strong>Darf ich messen, welche Seiten benutzt werden?</strong></p>
          <p>Dafür würde ich Google Analytics einsetzen, das Cookies benötigt. Es hilft mir zu sehen, was nützlich ist,
          für die Nutzung dieser Seite ist es nicht erforderlich. Werbe-Zielgruppen werden ausdrücklich nicht gebildet.
          Details in der <a href="${t}">Datenschutzerklärung</a>.</p>
        </div>
        <div class="wahl">
          <button type="button" class="knopf" data-wahl="denied">Nein danke</button>
          <button type="button" class="knopf" data-wahl="granted">Einverstanden</button>
        </div>
      </div>`,o.addEventListener(`click`,e=>{let t=e.target.closest(`[data-wahl]`)?.dataset.wahl;(t===`granted`||t===`denied`)&&c(t)}),document.body.appendChild(o))},u=n();u===`granted`?a(e):u===null&&l(),document.addEventListener(`click`,e=>{e.target?.closest(`[data-consent-reset]`)&&(e.preventDefault(),i(),l())})}export{o as a,r as i,n,e as o,i as r,a as t};