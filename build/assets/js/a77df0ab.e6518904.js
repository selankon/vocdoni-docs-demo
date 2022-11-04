"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3630],{78137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>h,toc:()=>b});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),r=n(74933),d=n(47507),c=(n(24310),n(63303)),p=(n(75035),n(85162));const l={id:"census-post",title:"Create new census",description:"- Available types are: `weighted` and `zkindexed` - Requires a Bearer token - A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called",sidebar_label:"Create new census",hide_title:!0,hide_table_of_contents:!0,api:{description:"- Available types are: `weighted` and `zkindexed`\n- Requires a Bearer token\n- A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called",operationId:"censusPost",security:[{bearerAuth:[]}],tags:["census"],parameters:[{name:"type",in:"path",description:"Census types",required:!0,schema:{type:"string",enum:["todo","todo2"]}}],responses:{200:{description:"Return new census id",content:{"application/json":{example:'{\n  "censusID":"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"\n}'}}}},method:"post",path:"/census/{type}",servers:[{url:"https://api.vocdoni.io/version/v3"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Create new census",description:{content:"- Available types are: `weighted` and `zkindexed`\n- Requires a Bearer token\n- A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called",type:"text/plain"},url:{path:["census",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni/vocdoni-api"},u=void 0,h={unversionedId:"vocdoni/census-post",id:"vocdoni/census-post",title:"Create new census",description:"- Available types are: `weighted` and `zkindexed` - Requires a Bearer token - A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called",source:"@site/docs/vocdoni/census-post.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/census-post",permalink:"/vocdoni/census-post",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/census-post.api.mdx",tags:[],version:"current",frontMatter:{id:"census-post",title:"Create new census",description:"- Available types are: `weighted` and `zkindexed` - Requires a Bearer token - A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called",sidebar_label:"Create new census",hide_title:!0,hide_table_of_contents:!0,api:{description:"- Available types are: `weighted` and `zkindexed`\n- Requires a Bearer token\n- A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called",operationId:"censusPost",security:[{bearerAuth:[]}],tags:["census"],parameters:[{name:"type",in:"path",description:"Census types",required:!0,schema:{type:"string",enum:["todo","todo2"]}}],responses:{200:{description:"Return new census id",content:{"application/json":{example:'{\n  "censusID":"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"\n}'}}}},method:"post",path:"/census/{type}",servers:[{url:"https://api.vocdoni.io/version/v3"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Create new census",description:{content:"- Available types are: `weighted` and `zkindexed`\n- Requires a Bearer token\n- A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called",type:"text/plain"},url:{path:["census",":type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"census",permalink:"/vocdoni/census"},next:{title:"Create new census",permalink:"/vocdoni/census-add-key"}},m={},b=[{value:"Create new census",id:"create-new-census",level:2}],y={toc:b};function k(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"create-new-census"},"Create new census"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Available types are: ",(0,s.kt)("inlineCode",{parentName:"li"},"weighted")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"zkindexed")),(0,s.kt)("li",{parentName:"ul"},"Requires a Bearer token"),(0,s.kt)("li",{parentName:"ul"},"A new random censusID is created in the backend side, the census can only be managed by the Bearer token used when create is called")),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"type",in:"path",description:"Census types",required:!0,schema:{type:"string",enum:["todo","todo2"]}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Return new census id")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "censusID":"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);