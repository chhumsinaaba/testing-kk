(function(l,m){typeof exports=="object"&&typeof module<"u"?m(exports):typeof define=="function"&&define.amd?define(["exports"],m):(l=typeof globalThis<"u"?globalThis:l||self,m(l.AbaPayway={}))})(this,function(l){"use strict";const m=document.createElement("style");m.innerHTML=`
  .aba-checkout-desktop { 
    position: fixed; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    overflow: auto; 
    background: #081b3787; 
    z-index: 99999; 
    animation-name: modalAbaCheckout; 
    animation-duration: 0.5s; 
  } 
  .aba-checkout-desktop .aba-checkout-content .aba-close-button {
    cursor: pointer; 
    right: 24px; 
    position: absolute; 
    top: 34px; 
    width: 12px !important; 
  } 
  .aba-checkout-desktop .aba-checkout-content { 
    min-height: 264px; 
    padding: 0px;  
    position: absolute; 
    left: 0; 
    width: 391px; 
    border-radius: 12px; 
    margin: 0 auto; 
    right: 0; 
  } 
  @keyframes modalAbaCheckout { 
    0% { 
      display: none; 
      opacity: 0; 
    } 
    100% { 
      display: block; 
      opacity: 1; 
    } 
  } 
  .aba-checkout-desktop .aba-checkout-modal-container {
    min-height: 100vh; 
    display: flex; 
    align-items: center; 
    justify-content: center;
  }
  .aba-checkout-mobile {
    position: absolute; 
    width: 100%; 
    top: -3px; 
    border-top-left-radius: 23px; 
    border-top-right-radius: 23px;
  }
  #aba_webservice_loading {
    position: absolute; 
    height: 91%; 
    top: 20px; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    background: #fff; 
    border-radius: 12px;
  }
  #aba_webservice_loading .loading-icon { 
    width: 40px; 
    left: 0; 
    right: 0; 
    position: absolute; 
    margin: 0 auto; 
    top: 40%; 
    -webkit-animation: spin 1s linear infinite; 
    animation: spin 1s linear infinite; 
  } 
  @-webkit-keyframes spin { 
    0% { 
      -webkit-transform: rotate(0deg); 
    } 
    100% { 
      -webkit-transform: rotate(360deg); 
    } 
  } 
  @keyframes spin { 
    0% { 
      transform: rotate(0deg); 
    } 
    100% { 
      transform: rotate(360deg); 
    } 
  }
  .cupertino-pane-wrapper { 
    z-index: 2147483647; 
  } 
  .cupertino-pane-wrapper .draggable {
    height: 10px;
  }
  .aba-checkout-payment-options_item { 
    cursor: pointer; 
    position: relative; 
    display: flex; 
    margin-bottom: 10px; 
    padding: 12px 30px; 
    border-radius: 12px; 
    box-shadow: 0 1px 4px rgb(183 190 203 / 36%); 
    background: #fff; 
  }
  .aba-checkout-payment-options_logo { 
    margin-right: 15px; 
    width: 51px; 
    height: 41px; 
  }
  .aba-checkout-payment-options_left-radio { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: absolute; 
    left: 5px; 
    top: 23px; 
  }
  .aba-checkout-payment-options_title {
    font-weight: 400; 
    color: #4a4a4a; 
    font-size: 16px; 
    font-family: sans-serif; 
    margin: 0; 
    margin-top: 12px;
  }
  .aba-checkout-payment-options_sub_title {
    color: #8a8a8a; 
    font-size: 13px; 
    font-family: sans-serif; 
    padding: 0; 
    margin: 0;
  }
  .aba-checkout-payment-options_btn_checkout_now {
    font-size: 15px; 
    color: #fff; 
    padding: 10px; 
    width: fit-content; 
    border-radius: 5px; 
    font-family: sans-serif; 
    background: #055E7C; 
    cursor: pointer;
  }
  .aba-checkout-payment-options_btn_checkout_now:hover {
    background: #055e7cd4;
  }
  .aba_checkout_column { 
    display: flex; 
    flex-direction: column; 
  }
  .aba_checkout_column.aba_checkout_items_center { 
    align-items: center; 
  }
  .aba_checkout_column.justify-center { 
    justify-content: center; 
  }
  .aba_checkout_column.aba_checkout_justify_end { 
    justify-content: flex-end; 
  }
  #aba_checkout_sheet { 
    display: none; 
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    z-index: 999999999; 
    visibility: visible; 
    transition: opacity 0.5s, visibility 0.5s; 
  } 
  #aba_checkout_sheet[aria-hidden='true'] { 
    opacity: 0; 
    visibility: hidden; 
    pointer-events: none; 
  }
  #aba_checkout_sheet .aba_checkout_overlay { 
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    z-index: -1; 
    background: #888; 
    opacity: 0.5; 
  } 
  #aba_checkout_sheet .aba_checkout_contents { 
    border-radius: 16px 16px 0 0; 
    width: 100%; 
    background: #fff; 
    position: relative; 
    overflow-y: inherit; 
    transition: transform 0.5s, border-radius 0.5s; 
    transform: translateY(0); 
    max-height: 100vh; 
    height: 0px; 
    max-width: 70rem; 
    box-sizing: border-box; 
  }
  #aba_checkout_sheet .aba_checkout_contents:not(.not-selectable) { 
    transition: transform 0.5s, border-radius 0.5s, height 0.5s; 
  }
  #aba_checkout_sheet[aria-hidden='true'] .aba_checkout_contents { 
    transform: translateY(100%); 
  }
  #aba_checkout_sheet .aba_checkout_draggable_area { 
    z-index: 100; 
    position: relative; 
    top: -3px; 
    left: 0; 
    right: 0; 
    margin: auto; 
    padding: 1rem; 
    cursor: grab; 
    width: 80%; 
    padding-top: 14px; 
  }
  #aba_checkout_sheet .aba_checkout_draggable-thumb { 
    width: 44px; 
    height: 4px; 
    background: #dcdcdc; 
    border-radius: 2px; 
    position: absolute; 
    margin: 0 auto; 
    left: 0; 
    right: 0; 
  }
  #aba_checkout_sheet .close-sheet { 
    position: absolute; 
    right: 0; 
    top: 0; 
    border: none; 
  }
  #aba_checkout_sheet .body { 
    height: 100%; 
    overflow-y: auto; 
    gap: 1rem; 
  }
  #aba_checkout_open_exit_modal_mini_app {
    z-index: 99999999999999; 
    width: 100%; 
    height: 100%; 
    position: fixed; 
    visibility: visible; 
    display: block; 
    background-color: rgba(22,22,22,0.7); 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
  }
  #aba_checkout_close_exit_modal_mini_app { 
    visibility: hidden; 
    display: none; 
  }
  .aba_checkout_open_mini_app { 
    background: #fffffff7; 
    margin: 0 auto; 
    position: relative; 
    z-index: 41; 
    top: 25%; 
    padding: 0; 
    border-radius: 20px; 
    width: 70%; 
    height: 140px; 
  }
  .aba_checkout_open_mini_app .merchant_name { 
    text-align: center; 
    margin-bottom: -8px; 
    padding: 15px; 
    padding-top: 23px; 
    font-size: 18px; 
    font-weight: bold; 
  }
  .aba_checkout_open_mini_app .msg_title { 
    text-align: center; 
    margin-top: 0px; 
    font-size: 12px; 
  }
  .aba_checkout_open_mini_app .footer { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: absolute; 
    width: 100%; 
    bottom: 0; 
  }
  .aba_checkout_open_mini_app .footer div { 
    width: 50%; 
    text-align: center; 
    border: 1px solid #f1f1f1; 
    border-left: 0; 
    border-bottom: 0; 
    height: 41px; 
    font-weight: bold; 
    padding-top: 9px; 
    font-size: 14px; 
  }
  .aba_checkout_open_mini_app .footer div:last-child { 
    border-right: 0; 
    color: red; 
  }
`;const E=document.querySelector("script");E.parentNode.insertBefore(m,E);var C={__esModule:!0};Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0;function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function V(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function J(t,e,a){return e&&V(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var U=function(){var e={},a=navigator.userAgent,n=a.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),o=a.match(/(Android);?[\s\/]+([\d.]+)?/),c=a.match(/(iPad).*OS\s([\d_]+)/),s=a.match(/(iPod)(.*OS\s([\d_]+))?/),r=!c&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return e.ios=e.android=e.windows=e.iphone=e.ipod=e.ipad=e.androidChrome=!1,n&&(e.os="windows",e.osVersion=n[2],e.windows=!0),o&&!n&&(e.os="android",e.osVersion=o[2],e.android=!0,e.androidChrome=a.toLowerCase().indexOf("chrome")>=0),(c||r||s)&&(e.os="ios",e.ios=!0),r&&!s&&(e.osVersion=r[2].replace(/_/g,"."),e.iphone=!0),c&&(e.osVersion=c[2].replace(/_/g,"."),e.ipad=!0),s&&(e.osVersion=s[3]?s[3].replace(/_/g,"."):null,e.iphone=!0),e.ios&&e.osVersion&&a.indexOf("Version/")>=0&&e.osVersion.split(".")[0]==="10"&&(e.osVersion=a.toLowerCase().split("version/")[1].split(" ")[0]),e.iphonex=e.ios&&screen.height===812&&screen.width===375,e.webView=(r||c||s)&&a.match(/.*AppleWebKit(?!.*Safari)/i),e},z=U(),Y=function(){function t(){D(this,t),this.options={debug:!1,delay:200}}return J(t,[{key:"init",value:function(a){if(z.android)window.WebViewJavascriptBridge?a(window.WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){a(window.WebViewJavascriptBridge)},!1);else{if(window.WebViewJavascriptBridge)return a(window.WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(a);window.WVJBCallbacks=[a];var n=document.createElement("iframe");n.style.display="none",n.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(n),setTimeout(function(){document.documentElement.removeChild(n)},0)}}},{key:"registerHandler",value:function(a,n){var o=this,c=this.options.delay;setTimeout(function(){o.init(function(s){s.registerHandler(a,function(r,d){var i=typeof r=="string"?JSON.parse(r):r;n(i,d)})})},c)}},{key:"callHandler",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.nativeHandlerName,n=arguments.length>1?arguments[1]:void 0,o=this.options.debug;console.log("call.....",a);var c,s,r=new Promise(function(d,i){c=d,s=i});return o&&console.info("[VueJsBridge] Start calling NativeHandler with payload:",n),this.init(function(d){try{d.callHandler(a,n,function(i){o&&console.info("[VueJsBridge] Success response:",typeof i=="string"?JSON.parse(i):i),c(typeof i=="string"?JSON.parse(i):i)})}catch(i){o&&console.info("[VueJsBridge] Failed error:",typeof i=="string"?JSON.parse(i):i),s(i)}}),r}}]),t}();C.default=Y,document.body.insertAdjacentHTML("beforeend",`
<div id="aba_checkout_sheet" class="aba_checkout_column aba_checkout_items_center aba_checkout_justify_end" aria-hidden="true">
<!-- Dark background for the sheet -->
<div class="aba_checkout_overlay"></div>

<!-- The sheet itself -->
<div class="aba_checkout_contents aba_checkout_column">
<!-- Sheet controls -->
<header>
  <!-- The thing to drag if you want to resize the sheet -->
  <div class="aba_checkout_draggable_area">
    <div class="aba_checkout_draggable-thumb"></div>
  </div>
</header>

<!-- Body of the sheet -->
<main class="aba_checkout_column" id="aba_checkout_app">
</main>
</div>
</div>`);const y=document.querySelector("#aba_checkout_sheet"),A=y.querySelector(".aba_checkout_contents"),k=y.querySelector(".aba_checkout_draggable_area");let S,f;const v=t=>{S=t,A.style.height=`${t}px`},P=t=>{y.setAttribute("aria-hidden",String(!0))};y.querySelector(".aba_checkout_overlay").addEventListener("click",()=>{v(100),P(),f=0,document.body.style.overflowY="auto"});const H=t=>t.touches?t.touches[0]:t;let _;const M=t=>{_=H(t).pageY,A.classList.add("not-selectable"),k.style.cursor=document.body.style.cursor="grabbing"},T=t=>{if(_===void 0)return;const e=H(t).pageY,n=(_-e)/window.innerHeight*100;f=n,f<0&&v(S+n),_=e},B=()=>{_=void 0,A.classList.remove("not-selectable"),k.style.cursor=document.body.style.cursor="",f<-1?(v(100),P(),f=0,document.body.style.overflowY="auto"):v(S)};k.addEventListener("mousedown",M),k.addEventListener("touchstart",M),window.addEventListener("mousemove",T),window.addEventListener("touchmove",T),window.addEventListener("mouseup",B),window.addEventListener("touchend",B);const p="https://checkout.payway.com.kh";function h(t){return document.getElementById(t)}function R(t){return document.querySelector(t)}const g=navigator.userAgent.toLowerCase().includes("abamobile");let u={};try{u=new VueJsBridgePlugin}catch{u={}}function w(){return[/Android/i,/webOS/i,/iPhone/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(e=>navigator.userAgent.match(e))}function N(t,e){return new Promise(function(a,n){let o=new XMLHttpRequest;o.open("POST",t),o.setRequestHeader("Accept","application/json"),o.setRequestHeader("Content-Type","application/json"),o.onload=function(){o.status>=200&&o.status<300?a(o.response):n({status:o.status,statusText:o.statusText})},o.onerror=function(){n({status:o.status,statusText:o.statusText})},o.send(JSON.stringify(e))})}let F=document.currentScript.src;const L=new URL(F).searchParams.get("hide-close"),O=h("aba-checkout");O&&O.remove(),document.body.insertAdjacentHTML("beforeend",'<div id="aba-checkout"></div>'),function(t,e,a,n,o,c,s){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,c=e.createElement(a),s=e.getElementsByTagName(a)[0],c.async=1,c.src=n,s.parentNode.insertBefore(c,s)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga");function W(t){var e={title:`Payway - ${t.page}`,page:`/${t.page}`};ga("create",t.ua,"auto",e),ga("send","pageview",e)}let I=function(){},j=function(){},q=function(){};function G(t){const e=h("aba_merchant_request");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`<form style="display:none;" method="POST" action="${t.form_url}" target="aba_webservice" id="aba_merchant_request"></form>`),delete t.form_url;const a=document.getElementById("aba_merchant_request");let n=!1;if(Object.keys(t).forEach(o=>{o!=="payment_option"||o==="payment_option"&&t[o]!==""?a.insertAdjacentHTML("beforeend",`<input type='hidden' name='${o}' value='${t[o]}'/>`):n=!0}),typeof t.payment_option>"u"||n){let o=document.querySelector('input[name="aba_checkout_payment_option"]:checked');o&&(o=o.value,a.insertAdjacentHTML("beforeend",`<input type='text' name='payment_option' value='${o}'/>`))}}function X(t={}){const e=document.getElementById("aba_merchant_request");Object.keys(t).length>0&&(this.setupForm(t),j=t.onSuccess,q=t.onError);let a=document.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("value","true"),a.setAttribute("name","is_plugin_js"),document.getElementById("aba_merchant_request").appendChild(a);let o=!1,c=!1;try{e.querySelector("input[name=payment_option]")!==null&&(o=e.querySelector("input[name=payment_option]").value==="abapay",c=e.querySelector("input[name=payment_option]").value==="abapay_khqr")}catch{}if(g&&(o||c)){let r=e.action;r=new URL(r),r=`${r.origin}/api/mini-app/v1/payments/initial`;const d=[];var s=e;for(let i=0;i<s.length;i++){const b=s[i].getAttribute("name"),x=s[i].value;d[b]=x}d.mini_app=!0,N(r,Object.assign({},d)).then(function(i){const b=JSON.parse(i),x=h("aba_checkout_miniapp_setting");x&&x.remove();const le=`${b.skip_success_screen}***${b.continue_success_url}`;document.body.insertAdjacentHTML("beforeend",`<input value="${le}" type="hidden" id="aba_checkout_miniapp_setting"></input>`),u.callHandler("doPayment",{amount:b.amount,account:d.tran_id,currency:b.currency,useDefault:!1,uniqueId:b.pw_key}).catch(de=>{console.log(de)})}).catch(i=>{console.log(i)})}else this.initPlugin("aba_merchant_request")}function K(){this.initPlugin("aba_merchant_add_card")}function Q(){this.initPluginAddAccount()}function Z(t={}){g&&Object.keys(t).length>0&&(t.useExitApp!==!1?window.document.body.insertAdjacentHTML("afterbegin",'<div id="aba_checkout_close_exit_modal_mini_app"> <div class="aba_checkout_open_mini_app"> <h3 class="merchant_name">'+t.merchantName+'</h3> <p class="msg_title"> Do you want to quit? </p> <div class="footer"> <div onclick="AbaPayway.exitModalMiniApp(false)"> Cancel </div> <div class="btn_close" onclick="AbaPayway.exitModalMiniApp(true)"> Confirm </div> </div> </div>'):window.document.body.insertAdjacentHTML("afterbegin",`<input type="hidden" id="aba_payway_mini_app_req" value='${JSON.stringify(t)}'/>`),u.callHandler("setBarTitle",{title:t.barTitle.title,bgColor:t.barTitle.bgColor,color:t.barTitle.color,safeAreaColor:t.barTitle.safeAreaColor}).catch(e=>{console.log(e)}))}function ee(t={}){g&&Object.keys(t).length>0&&(I=t.callback,u.callHandler("getProfile",{}).then(e=>{I(e)}).catch(e=>{console.log(e)}))}function te(t,e={}){return new Promise((a,n)=>{u.registerHandler(t,o=>{a(o)})})}function ae(t,e={}){return new Promise((a,n)=>{u.callHandler(t,e).then(o=>{a(o)}).catch(o=>{n(o)})})}function oe(){document.body.style.overflowY="hidden";const t=document.getElementById("aba_checkout_close_exit_modal_mini_app");t.id="aba_checkout_open_exit_modal_mini_app"}function ne(t,e=null){if(document.body.style.overflowY="hidden",document.getElementById("aba-checkout"),t==="mini_app_success"){const a=document.getElementById("aba_checkout_app");setTimeout(()=>{document.getElementById("aba_checkout_sheet").style.display="flex",setTimeout(()=>{abaCheckoutSetSheetHeight(480),abaCheckoutSetIsSheetShown(!0)},1e3),a.classList.add("aba-checkout-mobile"),a.insertAdjacentHTML("beforeend",`<div id="aba_webservice_loading"> 
                <img src="${p}/images/loading.svg" class="loading-icon"/>
                </div>`),a.insertAdjacentHTML("beforeend",`<img style="position: fixed; top: -30px; margin: 0 auto; right: 20px; width: 118px !important;" src="${p}/images/payway-logo-white.svg"/>`);let n=document.getElementById("aba_merchant_request").action;n=new URL(n),a.insertAdjacentHTML("beforeend",`<iframe allow="payment *" frameborder="0" width="100%" height="485" style="border-radius: 16px 16px 0px 0px;" scrolling="yes" src="${n.origin}/app-success/?id=${e.uniqueId}" name="aba_webservice" id="aba_webservice"></iframe>`)},300)}else if(w()){const a=document.getElementById("aba_checkout_app");setTimeout(()=>{document.getElementById("aba_checkout_sheet").style.display="flex",setTimeout(()=>{abaCheckoutSetSheetHeight(400),abaCheckoutSetIsSheetShown(!0)},1e3),a.classList.add("aba-checkout-mobile");const n=h("aba_webservice");if(n){n.remove();const o=h("aba_webservice_loading");o&&o.remove()}a.insertAdjacentHTML("beforeend",`<img style="position: fixed; top: -30px; margin: 0 auto; right: 20px; width: 118px !important;" src="${p}/images/payway-logo-white.svg"/>`),a.insertAdjacentHTML("beforeend",'<iframe allow="payment *" frameborder="0" width="100%" height="416" style="border-radius: 16px 16px 0px 0px;" scrolling="yes" src="" name="aba_webservice" id="aba_webservice"></iframe>'),document.getElementById(t).submit()},300)}else{const a=document.getElementById("aba-checkout");a.classList.add("aba-checkout-desktop"),a.insertAdjacentHTML("beforeend",`<div class='aba-checkout-modal-container'>
                    <div class='aba-checkout-content'>
                        <div id='aba_webservice_loading'> <img src="${p}/images/loading.svg" class="loading-icon"/> </div>
                    </div>
                </div>`);const n=document.querySelector(".aba-checkout-content");n.insertAdjacentHTML("beforeend",`<img style="right: 0; z-index: 100; position: absolute; top: -30px; width: 118px !important;" src="${p}/images/payway-logo-white.svg"/>`),L!=="1"&&n.insertAdjacentHTML("beforeend",`<img class='aba-close-button' onclick='AbaPayway.closeCheckout(true)' src='${p}/images/checkout_cross.svg'/>`),a.style.display="block",n.insertAdjacentHTML("beforeend",'<iframe allow="payment *" style="border-radius: 12px; background: #fff;transition: height 0.25s;overflow: hidden; max-height: 595px;" frameborder="0" width="100%" height="264" scrolling="yes" src="" name="aba_webservice" id="aba_webservice"></iframe>'),document.getElementById(t).submit()}}function ie(){const t=document.getElementById("aba-checkout");t.classList.add("aba-checkout-desktop"),t.insertAdjacentHTML("beforeend","<div class='aba-checkout-modal-container'><div class='aba-checkout-content'><div id='aba_webservice_loading'> <div id='aba_webservice_loader'></div> </div></div></div>"),document.querySelector(".aba-checkout-content").insertAdjacentHTML("beforeend",`<img style="right: 0; z-index: 100; position: absolute; top: -40px; width: 118px !important;" src="${p}/images/payway-logo-white.svg"/><img class='aba-close-button' onclick='AbaPayway.closeCheckout(true)' src='${p}/images/checkout_cross.svg'/>`),t.style.display="block"}function ce(t){var a;if(t){if(confirm("Are you sure you want to close?")){var e=((a=document.getElementById("payway_cancel_url"))==null?void 0:a.value)===void 0?"":document.getElementById("payway_cancel_url").value;e!==""?(location.href=e,document.getElementById("aba-checkout").style.display="none",document.getElementById("aba-checkout").innerHTML="",document.body.style.overflowY="visible"):L==="2"?(document.getElementById("aba-checkout").style.display="none",document.getElementById("aba-checkout").innerHTML="",document.body.style.overflowY="visible",h("aba_merchant_request")):location.reload()}}else location.reload(),document.getElementById("aba-checkout").style.display="none",document.getElementById("aba-checkout").innerHTML="",document.body.style.overflowY="visible"}function se(){w()?$():(document.getElementById("aba-checkout").classList.remove("aba-checkout-desktop"),document.body.style.overflowY="visible",document.getElementById("aba-checkout").innerHTML="")}function re(t){if(t)u.callHandler("closeApp").catch(e=>{console.log(e)});else{document.body.style.overflowY="visible";const e=document.getElementById("aba_checkout_open_exit_modal_mini_app");e.id="aba_checkout_close_exit_modal_mini_app"}}function $(){document.getElementById("aba-checkout").innerHTML="",document.body.style.overflowY="visible",abaCheckoutSetIsSheetShown(!1);var t=document.getElementById("payway_cancel_url");t&&(location.href=t.value)}g&&u.registerHandler("getStatus",t=>{const a=document.getElementById("aba_checkout_miniapp_setting").value.split("***"),n=a[0],o=a[1];n==="0"?AbaPayway.initPlugin("mini_app_success",t):location.href=o}),g&&u.registerHandler("closeApp",(t,e)=>{let a=!0;const n=h("aba_payway_mini_app_req");if(n&&(a=JSON.parse(n.value).useExitApp),a!==!1){document.body.style.overflowY="hidden";const o=document.getElementById("aba_checkout_close_exit_modal_mini_app");o.id="aba_checkout_open_exit_modal_mini_app"}}),window.onmessage=t=>{const e=t.data;if(e.hasOwnProperty("ga")){var a={ua:e.ua,page:e.page};W(a)}if(e.hasOwnProperty("close")&&(w()?$():AbaPayway.closeCheckout(!1)),e.hasOwnProperty("removeClose")){var n=document.querySelector(".aba-close-button");n&&n.remove()}if(e.hasOwnProperty("cancel_url")&&document.getElementById("aba-checkout").insertAdjacentHTML("beforeend",`<input type="hidden" value="${e.cancel_url}" id="payway_cancel_url"/>`),e.hasOwnProperty("openApp")&&(window.location=e.openApp),e.hasOwnProperty("merchantUrl")&&(R(".st-invoice-link")?location.reload():e.merchantUrl===""?AbaPayway.closeCheckoutByContinueUrl():setTimeout(()=>{location.href=e.merchantUrl},300)),e.hasOwnProperty("miniAppSuccessUrl")&&e.miniAppSuccessUrl!==""&&(location.href=e.miniAppSuccessUrl),e.hasOwnProperty("frameHeight")){w()&&abaCheckoutSetSheetHeight(e.frameHeight);const c=h("aba_webservice_loading");c&&c.remove(),document.getElementById("aba_webservice").style.height=`${e.frameHeight}px`}e.hasOwnProperty("_abaCallbackOnSuccess")&&j(e),e.hasOwnProperty("_abaCallbackOnError")&&q(e);async function o(c){const r=await(await fetch(c.fileUrl)).blob(),d=new File([r],c.title,{type:r.type});await navigator.share({files:[d]}).catch(i=>{console.log(i)})}e.hasOwnProperty("share")&&o(e.share)},l.addAccount=Q,l.addCard=K,l.checkout=X,l.closeCheckout=ce,l.closeCheckoutByContinueUrl=se,l.exitModalMiniApp=re,l.initPlugin=ne,l.initPluginAddAccount=ie,l.miniApp=Z,l.miniAppCallHandler=ae,l.miniAppExit=oe,l.miniAppGetProfile=ee,l.miniAppRegisterHandler=te,l.setupForm=G,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
