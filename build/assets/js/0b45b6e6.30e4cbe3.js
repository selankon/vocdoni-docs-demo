"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9253],{46229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=a(87462),o=(a(67294),a(3905)),s=a(26389),n=a(94891),r=a(74933),m=a(47507),p=a(24310),l=a(63303),c=(a(75035),a(85162));const d={id:"block-from-date",title:"Estimates future or past block height by given timestamp.",description:"Estimates future or past block height by given timestamp.",sidebar_label:"Estimates future or past block height by given timestamp.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"blockFromDate",tags:["chain"],parameters:[{name:"timestamp",in:"path",description:"Timestamp on XX format",required:!0,schema:{type:"string",format:"date-time",example:"2017-07-21T17:32:28Z"}}],responses:{200:{description:"For every block it return height, hash and number of transactions",content:{"application/json":{schema:{type:"object",properties:{height:{type:"integer",format:"int32",example:64924}}}}}}},description:"Estimates future or past block height by given timestamp.",method:"get",path:"/chain/blockdate/{timestamp}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Estimates future or past block height by given timestamp.",description:{type:"text/plain"},url:{path:["chain","blockdate",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Timestamp on XX format",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},h=void 0,u={unversionedId:"vocdoni/block-from-date",id:"vocdoni/block-from-date",title:"Estimates future or past block height by given timestamp.",description:"Estimates future or past block height by given timestamp.",source:"@site/docs/vocdoni/block-from-date.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/block-from-date",permalink:"/vocdoni-docs-demo/vocdoni/block-from-date",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/block-from-date.api.mdx",tags:[],version:"current",frontMatter:{id:"block-from-date",title:"Estimates future or past block height by given timestamp.",description:"Estimates future or past block height by given timestamp.",sidebar_label:"Estimates future or past block height by given timestamp.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"blockFromDate",tags:["chain"],parameters:[{name:"timestamp",in:"path",description:"Timestamp on XX format",required:!0,schema:{type:"string",format:"date-time",example:"2017-07-21T17:32:28Z"}}],responses:{200:{description:"For every block it return height, hash and number of transactions",content:{"application/json":{schema:{type:"object",properties:{height:{type:"integer",format:"int32",example:64924}}}}}}},description:"Estimates future or past block height by given timestamp.",method:"get",path:"/chain/blockdate/{timestamp}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Estimates future or past block height by given timestamp.",description:{type:"text/plain"},url:{path:["chain","blockdate",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Timestamp on XX format",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"Get list of blocks with its height, hash and number of transactions",permalink:"/vocdoni-docs-demo/vocdoni/block-list"},next:{title:"Get blockchain statistics",permalink:"/vocdoni-docs-demo/vocdoni/stats"}},b={},g=[{value:"Estimates future or past block height by given timestamp.",id:"estimates-future-or-past-block-height-by-given-timestamp",level:2}],v={toc:g};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"estimates-future-or-past-block-height-by-given-timestamp"},"Estimates future or past block height by given timestamp."),(0,o.kt)("p",null,"Estimates future or past block height by given timestamp."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"timestamp",in:"path",description:"Timestamp on XX format",required:!0,schema:{type:"string",format:"date-time",example:"2017-07-21T17:32:28Z"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"For every block it return height, hash and number of transactions")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"height",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(m.Z,{responseExample:'{\n  "height": 64924\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);