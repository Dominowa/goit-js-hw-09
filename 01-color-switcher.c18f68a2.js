!function(){var t;document.querySelector("[data-start]").addEventListener("click",(function(){var e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.disabled=!0,a.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),document.querySelector("[data-stop]").addEventListener("click",(function(){var e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.disabled=!1,a.disabled=!0,clearInterval(t),document.body.style.backgroundColor=""}))}();
//# sourceMappingURL=01-color-switcher.c18f68a2.js.map
