"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[198],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var c=n(67294),o=n(86010),i=n(53438),r=n(39960),a=n(13919),s=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return c.createElement(r.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:i,description:r}=e;return c.createElement(m,{href:t},c.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},n," ",i),r&&c.createElement("p",{className:(0,o.Z)("text--truncate",d),title:r},r))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?c.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return c.createElement(p,{href:t.href,icon:n,title:t.label,description:null==o?void 0:o.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(h,{item:t});case"category":return c.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.jA)();return c.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return c.createElement(v,e);const r=(0,i.MN)(t);return c.createElement("section",{className:(0,o.Z)("row",n)},r.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(g,{item:e})))))}},23102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var c=n(87462),o=(n(67294),n(3905)),i=n(52991),r=n(53438);const a={id:"account",title:"account",description:"account",custom_edit_url:null},s=void 0,l={unversionedId:"vocdoni/account",id:"vocdoni/account",title:"account",description:"account",source:"@site/docs/vocdoni/account.tag.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/account",permalink:"/vocdoni/account",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account",title:"account",description:"account",custom_edit_url:null},sidebar:"petstore",previous:{title:"Create an election",permalink:"/vocdoni/create-election"},next:{title:"Return specific account information",permalink:"/vocdoni/account-by-address"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,c.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Account metadata management"),(0,o.kt)(i.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);