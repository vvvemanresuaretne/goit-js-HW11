import{a as L,S as b,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}})();const w="49762011-8c0412d09af011351a5757fc9";function p(e){return L("https://pixabay.com/api/?",{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})}const m=document.querySelector(".gallery"),h=document.querySelector(".loader");let i=null;function P(e){const t=e.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${t}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${e.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${e.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${e.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${e.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function g(e){const t=e.map(P).join("");m.insertAdjacentHTML("beforeend",t),i?i.refresh():i=new b(".gallery a",{captionsData:"alt",captionDelay:250})}function S(){m.innerHTML="",i&&(i.destroy(),i=null)}function y(){h.classList.remove("hidden")}function v(){h.classList.add("hidden")}const q=document.querySelector(".form"),u=document.querySelector(".input"),r=document.querySelector(".js-load-more");let a=1,l="";q.addEventListener("submit",M);r.addEventListener("click",j);r.classList.replace("js-load-more","load-more-hidden");async function M(e){if(e.preventDefault(),l=u.value.trim(),a=1,!l){n.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),u.focus();return}y(),S(),r.classList.add("load-more-hidden");try{const t=await p(l,a);if(!t.hits||t.hits.length===0){n.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}g(t.hits);const c=Math.ceil(t.totalHits/15);a<c&&(r.classList.remove("load-more-hidden"),r.classList.add("js-load-more"))}catch(t){n.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",t)}finally{v(),u.value=""}}async function j(){a++,r.disabled=!0,r.classList.add("load-more-hidden"),y();try{const e=await p(l,a),t=Math.ceil(e.totalHits/15);if(a>t){n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}g(e.hits),a<t&&(r.classList.remove("load-more-hidden"),r.classList.add("js-load-more"))}catch(e){n.error({position:"topRight",title:"Error",message:e.message})}finally{v(),r.disabled=!1}}
//# sourceMappingURL=index.js.map
