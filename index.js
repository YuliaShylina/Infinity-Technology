import{i as w,S as P}from"./assets/vendor-DUjQUmGA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function H(){const e=document.querySelectorAll(".accordion-block");e.forEach(t=>{const n=t.querySelector(".accordion-title"),o=t.querySelector(".accordion-content"),s=n.querySelector("span");n.addEventListener("click",()=>{t.classList.contains("active")?(t.classList.remove("active"),o.classList.remove("active"),o.style.maxHeight=0,s.querySelector("svg").style.transform="rotate(0deg)"):(e.forEach(r=>{r.classList.remove("active"),r.querySelector(".accordion-content").classList.remove("active"),r.querySelector(".accordion-content").style.maxHeight=0,r.querySelector("span svg").style.transform="rotate(0deg)"}),t.classList.add("active"),o.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")}),t===e[0]&&(t.classList.add("active"),o.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")})}function I(){const e=document.querySelector(".work-together-form"),t=document.querySelector(".work-together-backdrop"),n=document.querySelector(".work-together-modal-btn-closing"),o=document.querySelector(".work-together-input-email"),s=document.querySelector(".work-together-error-message"),r=document.querySelector(".work-together-adress-icon-form"),l=document.querySelector(".work-together-input-message"),x=document.querySelector(".work-together-modal-main"),T=document.querySelector(".work-together-modal-second"),h={},M="https://portfolio-js.b.goit.study/api/";e.addEventListener("submit",v=>{if(v.preventDefault(),o.value.trim()!==""&&o.value.trim()!==" ")if(s.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o.value.trim())===!0){r.classList.remove("hidden"),o.style.color="black",h.email=o.value,h.comment=l.value;const B={method:"POST",body:JSON.stringify(h),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`${M}requests`,B).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).then(a=>{x.textContent=a.title,T.textContent=a.message,t.classList.add("active"),r.classList.remove("hidden")}).catch(a=>{w.info({title:"Info",message:"Sorry, something went wromg, please check your request once more, fill all the fields"}),console.log(a)})}else s.innerHTML="Please input correct Email adress",o.style.color="red",s.classList.add("active");else s.innerHTML="Field Email cannot be blank",s.classList.add("active")}),n.addEventListener("click",()=>{t.classList.remove("active"),o.value="",r.classList.add("hidden"),l.value=""}),t.addEventListener("click",v=>{v.target.classList.value!=="work-together-modal-btn-closing"&&v.target.classList.value!=="work-together-modal"&&(t.classList.remove("active"),o.value="",r.classList.add("hidden"),l.value="")}),document.addEventListener("keydown",v=>{v.key==="Escape"&&(t.classList.remove("active"),o.value="",r.classList.add("hidden"),l.value="")})}const d=document.querySelector(".third-section-list"),b=document.querySelectorAll(".dot"),S=d.children.length,$=4;let u=0;const L=d.children[0].offsetWidth+20;for(let e=0;e<$;e++){const t=d.children[e].cloneNode(!0);d.appendChild(t)}function q(){d.style.transition="transform 0.8s ease-in-out",d.style.transform=`translateX(-${u*L}px)`,u===S&&setTimeout(()=>{d.style.transition="none",u=0,d.style.transform=`translateX(-${u*L}px)`},800)}function E(){b.forEach((e,t)=>{e.classList.toggle("active",t===u%S)})}b.forEach((e,t)=>{e.addEventListener("click",()=>{u=t,q(),E()})});setInterval(()=>{u++,q(),E()},3e3);const A="/Infinity-Technology/assets/icons-BnJ1DFUD.svg",C="https://portfolio-js.b.goit.study/api",k=document.querySelector(".swiper-wrapper"),c=document.querySelector(".swiper-button-prev"),m=document.querySelector(".swiper-button-next"),y=c.querySelector(".icon-swipe-prev use"),p=m.querySelector(".icon-swipe-next use");let g;const F=async()=>{try{const e=await fetch(`${C}/reviews`);if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch(e){throw w.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),e}},N=e=>e.map(({author:t,avatar_url:n,review:o})=>`
    <li class='swiper-slide user-review'>
      <p class='text-review'>${o}</p>
      <div class='icon-photo-name'>
        <img
          src="${n}"
          alt="${t}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${t}</p>
      </div>
    </li>`).join(""),O=async()=>{try{g=await F(),g.length>0&&(k.innerHTML+=N(g),f.update())}catch(e){console.log(e),k.innerHTML="<p class='not-found'>Not found</p>",i(c,!0,y,"reviews-grey-btn-prev"),i(m,!0,p,"reviews-grey-btn-next")}},f=new P(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:2,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const e=f.activeIndex,t=f.params.slidesPerView,n=g.length;e===0?document.body.classList.contains("body-dark")?i(c,!0,y,"reviews-dark-grey-btn-prev"):i(c,!0,y,"reviews-grey-btn-prev"):document.body.classList.contains("body-dark")?i(c,!1,y,"reviews-white-btn-prev"):i(c,!1,y,"reviews-black-btn-prev"),e>=n-t?(document.body.classList.contains("body-dark")?i(m,!0,p,"reviews-dark-grey-btn-next"):i(m,!0,p,"reviews-grey-btn-next"),w.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):document.body.classList.contains("body-dark")?i(m,!1,p,"reviews-white-btn-next"):i(m,!1,p,"reviews-black-btn-next")}}}),i=(e,t,n,o)=>{e.disabled=t,n.setAttribute("href",`${A}#${o}`),t?e.style.cursor="not-allowed":e.style.cursor=""};document.body.classList.contains("body-dark")?i(c,!0,y,"reviews-dark-grey-btn-prev"):i(c,!0,y,"reviews-grey-btn-prev");c.addEventListener("click",()=>{f.slidePrev()});m.addEventListener("click",()=>{f.slideNext()});O();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link, .header-nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.modal.classList.contains("is-hidden")?(e.openModalBtn.style.display="block",e.closeModalBtn.style.display="none"):(e.openModalBtn.style.display="none",e.closeModalBtn.style.display="block")}function n(o){const s=document.querySelector(o);if(s){const r=s.getBoundingClientRect().top+window.scrollY;window.scrollBy({top:r-window.scrollY,left:0,behavior:"smooth"})}else console.warn(`Element not found: ${o}`)}e.menuLinks.forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const r=o.getAttribute("href");e.modal.classList.contains("is-hidden")||t(),n(r)})})})();H();I();
//# sourceMappingURL=index.js.map
