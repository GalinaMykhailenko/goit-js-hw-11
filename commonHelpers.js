import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();function f(r){const s="https://pixabay.com",a="/api/",o=new URLSearchParams({key:"44052553-0e6a302568f711546d3ca79ba",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}${a}?${o}`;return fetch(t).then(e=>e.ok?e.json():(console.error(`HTTP error! status: ${e.status}`),Promise.reject(new Error(`HTTP error! status: ${e.status}`)))).catch(e=>(console.error(`HTTP error! status: ${e.message}`),Promise.reject(new Error(`HTTP error! status: ${e.message}`))))}function m(r){return`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-item-image">
                <div class="info">
                    <p class="info-title">Likes: <span class="info-value">${r.likes}</span></p>
                    <p class="info-title">Views: <span class="info-value">${r.views}</span></p>
                    <p class="info-title">Comments: <span class="info-value">${r.comments}</span></p>
                    <p class="info-title">Downloads: <span class="info-value">${r.downloads}</span></p>
                    <p class="info-title">Alt: <span class="info-value">${r.tags}</span></p>
                </div>
            </a>
        </li>
    `}function p(r){return r.map(m).join("")}const d=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector("#loader");d.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.searchQuery.value.trim();if(!s){i.error({title:"Error",message:"Search query cannot be empty!"});return}l.classList.remove("hidden"),l.classList.add("hidden"),c.innerHTML="",f(s).then(a=>{if(a.hits.length===0)i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=p(a.hits);c.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),r.target.elements.searchQuery.value=""}}).catch(a=>{i.error({title:"Error",message:a.message})}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=commonHelpers.js.map
