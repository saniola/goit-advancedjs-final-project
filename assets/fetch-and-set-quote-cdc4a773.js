import{d as C,e as H,i as p,a as x}from"./vendor-032df744.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-mobile-overlay"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),a=()=>{e.classList.add("is-opening"),t.classList.remove("hidden"),C(e),setTimeout(()=>{e.classList.add("is-open"),e.classList.remove("is-opening")},50)},s=()=>{e.classList.add("is-closing"),setTimeout(()=>{e.classList.remove("is-open","is-closing"),H(e),t.classList.add("hidden")},250)};n.addEventListener("click",a),o.addEventListener("click",s),t.addEventListener("click",r=>{r.target===t&&s()})})();const f={DOMEN:"https://your-energy.b.goit.study/api",FAV_KEY:"favorites"},J=(e,t=!1)=>e.length===0?'<p class="not-found-message">No results found.</p>':e.map(({_id:n,name:o,burnedCalories:a,rating:s,target:r,time:i,bodyPart:L})=>`<div class="exercises-container">
                <div class="exercises-header">
                    <div class="exercises-workout-ratio">
                        <div class="exercises-workout">WORKOUT</div>
                        ${t?q(null,n):q(s)}
                    </div>
                    <button class="modal-exercise-info" type="button" id="${n}">
                        <span>Start</span>
                        <span class="icon-arrow-right icon-arrow"></span>
                    </button>
                </div>
                <div class="exercises-title">
                    <span class="icon-runner circle-icon"></span>
                    <p class="exercises-name">${o}</p>
                </div>
                <div class="exercises-info">
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Burned calories:</p>
                        <p class="exercises-info-value burned-calories">${a} / ${i} min</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Body part:</p>
                        <p class="exercises-info-value body-part">${L}</p>
                    </div>
                    <div class="exercises-info-item">
                        <p class="exercises-info-title">Target:</p>
                        <p class="exercises-info-value target">${r}</p>
                    </div>
                </div>
            </div>
        </div>`).join("");function q(e=null,t=""){return e||e===0?`<div class="exercises-ratio">
      <p class="ratio-value">${P(e)}</p>
      <span class="icon-star ratio-star"></span>
      </div>`:`<button class="trash-btn js-delete-favorite" type="button" data-id="${t}">
    <span class="icon-trash trash-icon"></span>
    </button>`}function P(e){return e%1?`${Math.round(e*10)/10}`:`${e}.0`}function K({params:e,pagination:t,method:n}){const o=Array.from(t.querySelectorAll(".button"));let a=1;o.forEach(s=>{s.addEventListener("click",r=>{s.classList.contains("active")||(a=s.dataset.page,n({...e,page:a}),o.forEach(i=>i.classList.remove("active")),s.classList.add("active")),window.innerWidth<768&&document.querySelector(".filter-title").scrollIntoView({behavior:"smooth"})})})}function _({params:e,totalPages:t,method:n}){const o=document.querySelector(".pagination");let a="";const s=Number(e.page);if(t<=1){o.innerHTML="";return}s>3&&(a+=`
      <button class="button${s===1?" active":""}" data-page="1">
        1
      </button>
    `),s-3>1&&(a+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `),s>2&&(a+=`
      <button class="button" data-page="${s-2}">
        ${s-2}
      </button>
    `),s>1&&(a+=`
      <button class="button" data-page="${s-1}">
        ${s-1}
      </button>
    `),a+=`
    <button class="button active" data-page="${s}">
      ${s}
    </button>
  `,s+1<=t&&(a+=`
      <button class="button" data-page="${s+1}">
        ${s+1}
      </button>
    `),s+2<=t&&(a+=`
      <button class="button" data-page="${s+2}">
        ${s+2}
      </button>
    `),s+3===t?a+=`
      <button class="button${t==s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `:s+3<t&&(a+=`
        <button class="button" data-page="1" disabled>
          ...
        </button>
      `,a+=`
      <button class="button${t===s?" active":""}" data-page="${t}">
        ${t}
      </button>
    `),o.innerHTML=a,K({params:e,pagination:o,method:n})}function c({type:e,title:t,message:n,position:o="topRight"}){switch(e){case"error":p.error({title:t,message:n,position:o});break;case"success":p.success({title:t,message:n,position:o});break;case"warning":p.warning({title:t,message:n,position:o});break;case"info":p.info({title:t,message:n,position:o});break;default:console.warn("Unknown toast type:",e)}}async function V(e){const t=document.querySelector(".loader-text");t.style.display="block";try{const{data:n}=await x({method:"get",url:`${f.DOMEN}/exercises/${e}`,responseType:"json"});return n}catch{c({type:"error",title:"Server error",message:"Sorry, the exercise information was not retrieved from the server. Please refresh the page"})}finally{t.style.display="none"}}let y,u;function Y(e){y=document.getElementById("addFavoritesButton"),u=document.getElementById("removeFavoritesButton"),y.addEventListener("click",U),u.addEventListener("click",D),F(e)?I():w()}function W(){const e=document.getElementById("exerciseModal"),t=e.querySelector(".add-favorites-btn").getAttribute("data-id"),n=e.querySelector(".exercise-title-js").getAttribute("data-value"),o=Number(e.querySelector(".rating-value-js").getAttribute("data-value")),a=e.querySelector(".details-target-js").getAttribute("data-value"),s=e.querySelector(".details-body-part-js").getAttribute("data-value"),r=e.querySelector(".details-burned-calories-js").getAttribute("data-value"),i=Number(r.split("/")[0]),L=r.split("/")[1],N=Number(L.split(" ")[0]);return{_id:t,name:n,burnedCalories:i,rating:o,target:a,time:N,bodyPart:s}}function Q(e){let t=h();t[e._id]=e,localStorage.setItem("favorites",JSON.stringify(t)),T("success",e.name,"Added to favorites")}function F(e){return h()[e]||null}function U(){const e=W();F(e._id)||(Q(e),I()),O()&&E({page:1})}function D(){let e=h();const t=u.dataset.id;if(e[t]){const n=e[t].name;delete e[t],localStorage.setItem("favorites",JSON.stringify(e)),w(),T("info",n,"Removed from favorites")}O()&&E({page:1})}function z(e){let t=h();const n=e.currentTarget.getAttribute("data-id");t[n]&&(delete t[n],localStorage.setItem("favorites",JSON.stringify(t)),E({page:1}))}function w(){y.classList.remove("hidden"),u.classList.add("hidden")}function I(){y.classList.add("hidden"),u.classList.remove("hidden")}function O(){return document.querySelector("body").classList.contains("js-favorites")}function h(){return JSON.parse(localStorage.getItem(f.FAV_KEY))||{}}function T(e,t,n){c({type:e,title:t||"",message:n})}async function G(e,t){const{data:n}=await x({method:"patch",url:`${f.DOMEN}/exercises/${e}/rating`,responseType:"json",data:t});return n}function X(){const e=document.getElementById("modalOverlay"),t=`
    <div class="modal-window-rating" id="ratingModal">
      <span class="close-button icon-x" id="closeRatingButton"></span>
      <div class="rating-wrapper">
        <div class="rating-header">
          <h3>Rating</h3>
          <div class="rating">
            <span class="rating-value">0.0</span>
            <span class="icon-star empty" data-value="1"></span>
            <span class="icon-star empty" data-value="2"></span>
            <span class="icon-star empty" data-value="3"></span>
            <span class="icon-star empty" data-value="4"></span>
            <span class="icon-star empty" data-value="5"></span>
          </div>
        </div>
        <form class="rating-form" id="ratingForm">
          <input class="rating-form-email" type="email" placeholder="Email" required>
          <textarea class="rating-form-comment" placeholder="Your comment" required></textarea>
        </form>
        <button type="submit" class="send-rating-btn" id="sendRatingButton" form="ratingForm">Send</button>
      </div>
    </div>
  `;e.insertAdjacentHTML("beforeend",t)}function Z(){return document.getElementById("ratingModal").remove()}let S,l=0;function ee(e){X(),ne(),ae(),re(e),te()}function te(){v().querySelector("#closeRatingButton").addEventListener("click",A)}function A(){exerciseModal.classList.remove("hidden"),se(),ie(),Z()}function se(){b(0),l=0,m().reset()}function b(e){v().querySelectorAll(".icon-star").forEach((a,s)=>{s<e?a.classList.remove("empty"):a.classList.add("empty")});var n=e.toFixed(1);const o=v().querySelector(".rating-value");o.textContent=n}function ne(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("mouseover",()=>{const n=parseInt(t.getAttribute("data-value"),10);b(n)}),t.addEventListener("mouseout",()=>{b(l)})})}function ae(){v().querySelectorAll(".icon-star").forEach(t=>{t.addEventListener("click",()=>{l=parseInt(t.getAttribute("data-value"),10),b(l)})})}function oe(e,t){if(e.preventDefault(),l===0){c({type:"error",title:"Incorrect input",message:"Please select the rating"});return}const n=m().querySelector(".rating-form-email").value,o=m().querySelector(".rating-form-comment").value;G(t,{rate:l,email:n,review:o}).then(()=>{A(),c({type:"success",title:"Rating submitted",message:"Thank you for leaving review!"})}).catch(s=>{console.error("Error submitting form:",s),c({type:"error",title:"Server error",message:"Error submitting rating form"})})}function re(e){S=t=>oe(t,e),m().addEventListener("submit",S)}function ie(){m().removeEventListener("submit",S)}function v(){return document.getElementById("ratingModal")}function m(){return document.getElementById("ratingForm")}function ce(e){const t=document.getElementById("modalOverlay"),n=`${e.burnedCalories}/${e.time} min`,o=g(e.target),a=g(e.bodyPart),s=g(e.name),r=e.rating.toFixed(1),i=`
    <div class="modal-window" id="exerciseModal">
    <span class="close-button icon-x" id="closeExerciseButton"></span>
    <div class="exercise-wrapper">
      <img src="${e.gifUrl}" alt="${s}" class="exercise-image">
      <div class="exercise-details">
        <div class="exercise-header">
          <h2 class="exercise-title-js" data-value="${s}">${s}</h2>
          <div class="rating">
            <span class="rating-value rating-value-js" data-value="${r}">${r}</span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
          </div>
        </div>
        <ul class="exercise-info">
          <li class="details-column">
            <div class="details-title">Target</div>
            <div class="details-value details-target-js" data-value="${o}">${o}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Body Part</div>
            <div class="details-value details-body-part-js" data-value="${a}">${a}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Equipment</div>
            <div class="details-value">${g(e.equipment)}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Popular</div>
            <div class=" details-value">${e.popularity}</div>
          </li>
          <li class="details-column">
            <div class="details-title">Burned Calories</div>
            <div class="details-value details-burned-calories-js" data-value="${n}">${n}</div>
          </li>
        </ul>
        <p class="exercise-description">${e.description}</p>
      </div>
    </div>
    <div class="modal-actions">
      <button class="add-favorites-btn" id="addFavoritesButton" data-id="${e._id}">Add to favorites<span
          class="icon-heart"></span></button>
      <button class="remove-favorites-btn hidden" id="removeFavoritesButton" data-id="${e._id}">Remove from favorites<span
          class="icon-trash"></span></button>
      <button class="give-rating-btn" id="addRatingButton">Give a rating</button>
    </div>
  </div>
  `;t.insertAdjacentHTML("beforeend",i),le(e.rating)}function le(e){exerciseModal.querySelectorAll(".icon-star").forEach((t,n)=>{t.classList.toggle("empty",n>=Math.round(e))})}function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}let d,$,k;async function de(e){let t;try{t=await V(e)}catch{c({type:"error",title:"Server error",message:"Error fetching exercise data"})}await ce(t),ue(),ve(),me(),fe(e),Y(e),ge(),ye()}function ue(){d=document.getElementById("modalOverlay"),$=document.getElementById("exerciseModal"),document.getElementById("addFavoritesButton"),document.getElementById("removeFavoritesButton"),k=document.getElementById("addRatingButton")}function ve(){d.classList.remove("hidden"),document.body.classList.add("modal-open")}function B(){document.getElementById("exerciseModal").remove(),document.body.classList.remove("modal-open"),d.classList.add("hidden"),document.removeEventListener("keydown",j),d.removeEventListener("click",R)}function me(){$.querySelector("#closeExerciseButton").addEventListener("click",B)}function fe(e){k.addEventListener("click",()=>pe(e))}function pe(e){$.classList.add("hidden"),ee(e)}function ge(){d.addEventListener("click",R)}function R(e){e.target===d&&B()}function ye(){document.addEventListener("keydown",j)}function j(e){e.key==="Escape"&&B()}function be(){document.querySelectorAll(".modal-exercise-info").forEach(t=>{t.addEventListener("click",()=>{de(t.id)})})}function he(){document.querySelectorAll(".js-delete-favorite").forEach(t=>{t.addEventListener("click",z)})}function E(e){const t=window.innerWidth>1280?1e4:window.innerWidth<768?8:10,n=JSON.parse(localStorage.getItem(f.FAV_KEY))??[],o=Object.values(n);if(o&&o.length){const a=e&&e.page?(parseInt(e.page)-1)*t:0,s=o.slice(a,a+t);document.querySelector(".content").innerHTML=J(s,!0),document.querySelector(".pagination").innerHTML="";const r=o.length>t?Math.ceil(o.length/t):1;r>1&&_({params:e,totalPages:r,method:E}),be(),he()}else document.querySelector(".content").innerHTML=`<p class="empty">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites for easier access in the future.
      </p>`,document.querySelector(".pagination").innerHTML=""}async function Ee(){const e=document.querySelector(".loader-text");e.style.display="inline-block";try{const{data:t}=await x({method:"get",url:`${f.DOMEN}/quote`,responseType:"json"});return t}catch{return c({type:"info",title:"Server error",message:"Sorry, today quote was not retrieved from the server. But previous one was pretty good"}),{author:"Shaquille O'Neal",quote:"Excellence is not a singular act but a habit. You are what you do repeatedly."}}finally{e.style.display="none"}}function Le(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}/${n}/${o}`}function M(e,t){const n=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");n&&o&&(o.innerHTML=e,n.innerHTML=t)}async function xe(){const e=localStorage.getItem("quote"),t=Le();if(e&&JSON.parse(e).currentDate==t){const{author:n,quote:o}=JSON.parse(e);M(n,o);return}if(!e||JSON.parse(e).currentDate!==t){const{author:n,quote:o}=await Ee();M(n,o),localStorage.setItem("quote",JSON.stringify({currentDate:t,author:n,quote:o}))}}export{E as a,_ as b,f as c,J as d,be as e,xe as f,c as s};
//# sourceMappingURL=fetch-and-set-quote-cdc4a773.js.map
