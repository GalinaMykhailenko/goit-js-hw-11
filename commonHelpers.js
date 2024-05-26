import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();function m(t){const s="https://pixabay.com",a="/api/",o=new URLSearchParams({key:"44052553-0e6a302568f711546d3ca79ba",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}${a}?${o}`;return fetch(r).then(e=>e.ok?e.json():(console.error(`HTTP error! status: ${e.status}`),Promise.reject(new Error(`HTTP error! status: ${e.status}`)))).catch(e=>(console.error(`HTTP error! status: ${e.message}`),Promise.reject(new Error(`HTTP error! status: ${e.message}`))))}function f(t){return`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-item-image">
                <div class="info">
                    <p class="info-title">Likes: <span class="info-value">${t.likes}</span></p>
                    <p class="info-title">Views: <span class="info-value">${t.views}</span></p>
                    <p class="info-title">Comments: <span class="info-value">${t.comments}</span></p>
                    <p class="info-title">Downloads: <span class="info-value">${t.downloads}</span></p>
                </div>
            </a>
        </li>
    `}function d(t){return t.map(f).join("")}const p=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector("#loader");p.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.searchQuery.value.trim();if(!s){i.error({title:"Error",message:"Search query cannot be empty!"});return}l.classList.remove("hidden"),l.classList.add("hidden"),c.innerHTML="",m(s).then(a=>{if(a.hits.length===0)i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=d(a.hits);c.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t.target.elements.searchQuery.value=""}}).catch(a=>{i.error({title:"Error",message:a.message})}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=commonHelpers.js.map
