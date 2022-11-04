"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7],{3644:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>b,metadata:()=>p,toc:()=>k});var a=o(87462),i=(o(67294),o(3905)),n=o(26389),l=o(94891),s=o(74933),c=o(47507),h=(o(24310),o(63303)),r=(o(75035),o(85162));const b={id:"block-by-hash",title:"Get full block information by block hash",description:"Get full block information by block hash",sidebar_label:"Get full block information by block hash",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"blockByHash",tags:["chain"],parameters:[{name:"hash",in:"path",description:"Block hash",required:!0,schema:{type:"string",example:"0x8617ef5bef3551ab1386845ff03ee2f43e13377d6b75e9e2d656bfb0276c0170"}}],responses:{200:{description:"Full block information",content:{"application/json":{example:'{\n  "todo": "object"\n}'}}}},description:"Get full block information by block hash",method:"get",path:"/chain/block/hash/{hash}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Get full block information by block hash",description:{type:"text/plain"},url:{path:["chain","block","hash",":hash"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block hash",type:"text/plain"},type:"any",value:"",key:"hash"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},d=void 0,p={unversionedId:"vocdoni/block-by-hash",id:"vocdoni/block-by-hash",title:"Get full block information by block hash",description:"Get full block information by block hash",source:"@site/docs/vocdoni/block-by-hash.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/block-by-hash",permalink:"/vocdoni-docs-demo/vocdoni/block-by-hash",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/block-by-hash.api.mdx",tags:[],version:"current",frontMatter:{id:"block-by-hash",title:"Get full block information by block hash",description:"Get full block information by block hash",sidebar_label:"Get full block information by block hash",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"blockByHash",tags:["chain"],parameters:[{name:"hash",in:"path",description:"Block hash",required:!0,schema:{type:"string",example:"0x8617ef5bef3551ab1386845ff03ee2f43e13377d6b75e9e2d656bfb0276c0170"}}],responses:{200:{description:"Full block information",content:{"application/json":{example:'{\n  "todo": "object"\n}'}}}},description:"Get full block information by block hash",method:"get",path:"/chain/block/hash/{hash}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Get full block information by block hash",description:{type:"text/plain"},url:{path:["chain","block","hash",":hash"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block hash",type:"text/plain"},type:"any",value:"",key:"hash"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"Get full block information by height",permalink:"/vocdoni-docs-demo/vocdoni/block-by-height"},next:{title:"Get list of blocks with its height, hash and number of transactions",permalink:"/vocdoni-docs-demo/vocdoni/block-list"}},m={},k=[{value:"Get full block information by block hash",id:"get-full-block-information-by-block-hash",level:2}],u={toc:k};function f(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-full-block-information-by-block-hash"},"Get full block information by block hash"),(0,i.kt)("p",null,"Get full block information by block hash"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"hash",in:"path",description:"Block hash",required:!0,schema:{type:"string",example:"0x8617ef5bef3551ab1386845ff03ee2f43e13377d6b75e9e2d656bfb0276c0170"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Full block information")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(h.Z,{mdxType:"SchemaTabs"},(0,i.kt)(r.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "todo": "object"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);