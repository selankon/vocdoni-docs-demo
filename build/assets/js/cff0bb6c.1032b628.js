"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8570],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(67294),i=n(86010),c=n(53438),r=n(39960),s=n(13919),l=n(95999);const a="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return o.createElement(r.Z,{href:t,className:(0,i.Z)("card padding--lg",a)},n)}function v(e){let{href:t,icon:n,title:c,description:r}=e;return o.createElement(u,{href:t},o.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:c},n," ",c),r&&o.createElement("p",{className:(0,i.Z)("text--truncate",m),title:r},r))}function p(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?o.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return o.createElement(v,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,c.jA)();return o.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return o.createElement(g,e);const r=(0,c.MN)(t);return o.createElement("section",{className:(0,i.Z)("row",n)},r.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},8300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var o=n(87462),i=(n(67294),n(3905)),c=n(52991),r=n(53438);const s={id:"vote",title:"vote",description:"vote",custom_edit_url:null},l=void 0,a={unversionedId:"vocdoni/vote",id:"vocdoni/vote",title:"vote",description:"vote",source:"@site/docs/vocdoni/vote.tag.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/vote",permalink:"/vocdoni-docs-demo/vocdoni/vote",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"vote",title:"vote",description:"vote",custom_edit_url:null},sidebar:"petstore",previous:{title:"Delete unpublished census",permalink:"/vocdoni-docs-demo/vocdoni/census-delete"},next:{title:"Get full vote data",permalink:"/vocdoni-docs-demo/vocdoni/vote-get"}},d={},m=[],u={toc:m};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Submit, get, and verify votes"),(0,i.kt)(c.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);