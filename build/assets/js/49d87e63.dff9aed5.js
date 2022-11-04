"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7375],{8859:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>b});var o=s(87462),a=(s(67294),s(3905)),n=s(26389),r=s(94891),i=s(74933),d=s(47507),c=(s(24310),s(63303)),u=(s(75035),s(85162));const l={id:"census-root",title:"Returns the merkle root for the census",description:"No require auth todo: describe what is merkle root and what is used for  (Is the hash of hashes of census public keys/addresses?)",sidebar_label:"Returns the merkle root for the census",hide_title:!0,hide_table_of_contents:!0,api:{description:"No require auth\ntodo: describe what is merkle root and what is used for \n(Is the hash of hashes of census public keys/addresses?)",operationId:"censusRoot",tags:["census"],parameters:[{name:"censusId",in:"path",description:"Census id",required:!0,schema:{type:"string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],responses:{200:{description:"Return Merkle Root",content:{"application/json":{example:'{\n  "root":"b4a875b03f6f993e9daf804f67a6fc183b7a4d9b6390abcb6d7f56ff14d394b6"\n}'}}}},method:"get",path:"/census/{censusId}/root",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Returns the merkle root for the census",description:{content:"No require auth\ntodo: describe what is merkle root and what is used for \n(Is the hash of hashes of census public keys/addresses?)",type:"text/plain"},url:{path:["census",":censusId","root"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},h=void 0,p={unversionedId:"vocdoni/census-root",id:"vocdoni/census-root",title:"Returns the merkle root for the census",description:"No require auth todo: describe what is merkle root and what is used for  (Is the hash of hashes of census public keys/addresses?)",source:"@site/docs/vocdoni/census-root.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/census-root",permalink:"/vocdoni/census-root",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/census-root.api.mdx",tags:[],version:"current",frontMatter:{id:"census-root",title:"Returns the merkle root for the census",description:"No require auth todo: describe what is merkle root and what is used for  (Is the hash of hashes of census public keys/addresses?)",sidebar_label:"Returns the merkle root for the census",hide_title:!0,hide_table_of_contents:!0,api:{description:"No require auth\ntodo: describe what is merkle root and what is used for \n(Is the hash of hashes of census public keys/addresses?)",operationId:"censusRoot",tags:["census"],parameters:[{name:"censusId",in:"path",description:"Census id",required:!0,schema:{type:"string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}}],responses:{200:{description:"Return Merkle Root",content:{"application/json":{example:'{\n  "root":"b4a875b03f6f993e9daf804f67a6fc183b7a4d9b6390abcb6d7f56ff14d394b6"\n}'}}}},method:"get",path:"/census/{censusId}/root",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Returns the merkle root for the census",description:{content:"No require auth\ntodo: describe what is merkle root and what is used for \n(Is the hash of hashes of census public keys/addresses?)",type:"text/plain"},url:{path:["census",":censusId","root"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Census id",type:"text/plain"},type:"any",value:"",key:"censusId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"Create new census",permalink:"/vocdoni/census-add-key"},next:{title:"Export census to JSON format",permalink:"/vocdoni/census-export"}},m={},b=[{value:"Returns the merkle root for the census",id:"returns-the-merkle-root-for-the-census",level:2}],f={toc:b};function k(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"returns-the-merkle-root-for-the-census"},"Returns the merkle root for the census"),(0,a.kt)("p",null,"No require auth\ntodo: describe what is merkle root and what is used for\n(Is the hash of hashes of census public keys/addresses?)"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(i.Z,{className:"paramsItem",param:{name:"censusId",in:"path",description:"Census id",required:!0,schema:{type:"string",example:"b547a9c83ad7d61b568cf10ebbb25338d680810fa219fa69477cfbd860b386c2"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Return Merkle Root")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(d.Z,{responseExample:'{\n  "root":"b4a875b03f6f993e9daf804f67a6fc183b7a4d9b6390abcb6d7f56ff14d394b6"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);