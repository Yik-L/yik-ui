import{a as r,u as p,i as o,c as u,d as c,A as l,H as d,e as f,f as m,g as A,s as h,h as g,j as _,k as P,C as v,l as y,m as w,N as C,n as E,p as R}from"./chunks/framework.e2f0ebea.js";const D={async enhanceApp({app:e}){{const t=await r(()=>import("./chunks/yik-ui.umd.03f3e3df.js").then(a=>a.y),["./chunks\\yik-ui.umd.03f3e3df.js","./chunks\\framework.e2f0ebea.js"],import.meta.url);console.log(t),e.use(t)}}};function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(D),T=p({name:"VitePressApp",setup(){const{site:e}=c();return l(()=>{d(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),f(),m(),A(),s.setup&&s.setup(),()=>h(s.Layout)}});async function b(){const e=j(),t=O();t.provide(g,e);const a=_(e.route);return t.provide(P,a),t.component("Content",v),t.component("ClientOnly",y),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:w}),{app:t,router:e,data:a}}function O(){return C(T)}function j(){let e=o,t;return E(a=>{let n=R(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),r(()=>import(n),[],import.meta.url)):null},s.NotFound)}o&&b().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{b as createApp};
