!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body"),d=null;t.addEventListener("click",(function(n){d=setInterval((function(){var d="#".concat(Math.floor(16777215*Math.random()).toString(16));r.style.backgroundColor=d,t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(r){clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.d6a3424b.js.map
