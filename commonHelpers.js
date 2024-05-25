import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(t){const s="https://pixabay.com",o="/api/",a=new URLSearchParams({key:"44052553-0e6a302568f711546d3ca79ba",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${o}?${a}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r.json()}).catch(r=>{throw new Error(`HTTP error! status: ${r.message}`)})}function m(t){return`
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
    `}function p(t){return t.map(m).join("")}const d=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector("#loader");d.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.searchQuery.value.trim();if(!s){i.error({title:"Error",message:"Search query cannot be empty!"});return}c.classList.remove("hidden"),l.innerHTML="",f(s).then(o=>{if(o.hits.length===0)i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=p(o.hits);l.innerHTML=a,new u(".gallery a").refresh()}}).catch(o=>{i.error({title:"Error",message:o.message})}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=commonHelpers.js.map
