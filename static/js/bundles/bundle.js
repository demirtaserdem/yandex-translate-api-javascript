!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);class a{static getSearchedFromStorage(){let e;return e=null===localStorage.getItem("searchlist")?[]:JSON.parse(localStorage.getItem("searchlist"))}static addSearchedToStorage(e,t){let r=this.getSearchedFromStorage();r=[`${e} ---\x3e>> ${t}`,...r],localStorage.setItem("searchlist",JSON.stringify(r))}static clearAllSearchedFromStorage(){localStorage.removeItem("searchlist")}}const n=document.getElementById("form-1"),o=document.getElementById("input_word"),l=document.getElementById("output_word"),c=document.getElementById("lastSearchListArea"),s=document.getElementById("btn_clear");var i=new class{constructor(e,t,r){self.inputWordArea=e,self.outputWordArea=t,self.lastSearchListArea=r}clearInputWordArea(){self.inputWordArea.value=""}clearOutputWordArea(){self.outputWordArea.value=""}printOutputWordArea(e,t){self.outputWordArea.value=`${e} ---\x3e>> ${t}`}printAllSearchListToUi(e){const t=e;self.lastSearchListArea.value="";for(let e in t)self.lastSearchListArea.value+=t[e]+"\n"}}(o,l,c),u=new class{constructor(){this.baseUrl="https://translate.yandex.net/api/v1.5/tr.json/translate",this.apiKey="trnsl.1.1.20190121T100542Z.4befbb4bba198843.b6081dd6370342a5c61258dbb83fb7b9a58dd523",this.lang="tr-en"}async translateWord(e){this.inputWord=e;const t=`${this.baseUrl}?key=${this.apiKey}&lang=${this.lang}&text=${this.inputWord}`,r=await fetch(t);return(await r.json()).text[0]}};function d(e){let t=o.value.trim();t&&u.translateWord(t).then(e=>{console.log(e),i.clearInputWordArea(),i.printOutputWordArea(t,e),a.addSearchedToStorage(t,e),i.printAllSearchListToUi(a.getSearchedFromStorage())}).catch(e=>console.log(e)),i.clearInputWordArea(),e.preventDefault()}function f(e){a.clearAllSearchedFromStorage(),i.clearOutputWordArea(),i.printAllSearchListToUi(a.getSearchedFromStorage()),e.preventDefault()}function p(){i.printAllSearchListToUi(a.getSearchedFromStorage())}n.addEventListener("submit",d),s.addEventListener("click",f),document.addEventListener("DOMContentLoaded",p)}]);