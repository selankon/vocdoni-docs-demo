"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3513],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(67294),c=n(86010),o=n(53438),r=n(39960),a=n(13919),s=n(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return i.createElement(r.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},n)}function h(e){let{href:t,icon:n,title:o,description:r}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,c.Z)("text--truncate",d),title:o},n," ",o),r&&i.createElement("p",{className:(0,c.Z)("text--truncate",m),title:r},r))}function p(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?i.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(t.docId??void 0);return i.createElement(h,{href:t.href,icon:n,title:t.label,description:null==c?void 0:c.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return i.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return i.createElement(g,e);const r=(0,o.MN)(t);return i.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(v,{item:e})))))}},27186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(87462),c=(n(67294),n(3905)),o=n(52991),r=n(53438);const a={id:"chain",title:"chain",description:"chain",custom_edit_url:null},s=void 0,l={unversionedId:"vocdoni/chain",id:"vocdoni/chain",title:"chain",description:"chain",source:"@site/docs/vocdoni/chain.tag.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/chain",permalink:"/vocdoni-docs-demo/vocdoni/chain",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"chain",title:"chain",description:"chain",custom_edit_url:null},sidebar:"petstore",previous:{title:"Introduction",permalink:"/vocdoni-docs-demo/vocdoni/vocdoni-api"},next:{title:"Get transaction actual cost",permalink:"/vocdoni-docs-demo/vocdoni/transaction-cost"}},d={},m=[],u={toc:m};function h(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Everything about internal Vochain information (transactions, organizations, blocks, stats...)"),(0,c.kt)(o.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);