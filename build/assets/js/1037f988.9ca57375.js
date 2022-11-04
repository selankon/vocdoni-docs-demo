"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8049],{81407:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>u});var o=i(87462),n=(i(67294),i(3905)),s=i(26389),a=i(94891),c=i(74933),l=i(47507),r=(i(24310),i(63303)),p=(i(75035),i(85162));const d={id:"election-get-keys",title:"Keys for specific election",description:"Keys for specific election",sidebar_label:"Keys for specific election",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"electionGetKeys",tags:["election"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Return list of keys",content:{"application/json":{example:'{\n  "todo": "object"\n}'}}}},description:"Keys for specific election",method:"get",path:"/election/{electionId}/keys",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Keys for specific election",description:{type:"text/plain"},url:{path:["election",":electionId","keys"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},m=void 0,f={unversionedId:"vocdoni/election-get-keys",id:"vocdoni/election-get-keys",title:"Keys for specific election",description:"Keys for specific election",source:"@site/docs/vocdoni/election-get-keys.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/election-get-keys",permalink:"/vocdoni-docs-demo/vocdoni/election-get-keys",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/election-get-keys.api.mdx",tags:[],version:"current",frontMatter:{id:"election-get-keys",title:"Keys for specific election",description:"Keys for specific election",sidebar_label:"Keys for specific election",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"electionGetKeys",tags:["election"],parameters:[{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}}],responses:{200:{description:"Return list of keys",content:{"application/json":{example:'{\n  "todo": "object"\n}'}}}},description:"Keys for specific election",method:"get",path:"/election/{electionId}/keys",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Keys for specific election",description:{type:"text/plain"},url:{path:["election",":electionId","keys"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Election Id on 0x format",type:"text/plain"},type:"any",value:"",key:"electionId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"Full election information",permalink:"/vocdoni-docs-demo/vocdoni/election-by-id"},next:{title:"Election paginated list of nullifiers (envelopes)",permalink:"/vocdoni-docs-demo/vocdoni/election-votes"}},y={},u=[{value:"Keys for specific election",id:"keys-for-specific-election",level:2}],h={toc:u};function b(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"keys-for-specific-election"},"Keys for specific election"),(0,n.kt)("p",null,"Keys for specific election"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"electionId",in:"path",description:"Election Id on 0x format",required:!0,schema:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Return list of keys")),(0,n.kt)("div",null,(0,n.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(r.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "todo": "object"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);