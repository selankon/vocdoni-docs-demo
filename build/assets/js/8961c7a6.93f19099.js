"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4588],{55212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var i=a(87462),o=(a(67294),a(3905)),r=a(26389),n=a(94891),s=a(74933),p=(a(47507),a(24310)),l=(a(63303),a(75035)),d=a(85162);const m={id:"update-pet",title:"Update an existing pet",description:"",sidebar_label:"Update an existing pet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"updatePet",responses:{400:{description:"Invalid ID supplied"},404:{description:"Pet not found"},405:{description:"Validation exception"}},security:[{petstore_auth:["write:pets","read:pets"]}],"x-codeSamples":[{lang:"PHP",source:'$form = new PetStoreEntitiesPet();\n$form->setPetId(1);\n$form->setPetType("Dog");\n$form->setName("Rex");\n// set other fields\ntry {\n    $pet = $client->pets()->update($form);\n} catch (UnprocessableEntityException $e) {\n    var_dump($e->getErrors());\n}\n'}],requestBody:{content:{"application/json":{schema:{allOf:[{description:"My Pet",title:"Pettie"},{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}}]},example:{category:{name:"Great Dane",sub:{prop1:"Just a test property"}},name:"Pepper",photoUrls:["https://assets.orvis.com/is/image/orvisprd/great-dane"],tags:[{name:"Great Danes"}],status:"pending",petType:{huntingSkill:"lazy"}}},"application/xml":{schema:{type:"object",properties:{name:{type:"string",description:"hooray"}}}}},description:"Pet object that needs to be added to the store",required:!0},parameters:[{name:"Accept-Language",in:"header",description:"The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US",example:"en-US",required:!1,schema:{type:"string",default:"en-AU"}},{name:"cookieParam",in:"cookie",description:"Some cookie",required:!0,schema:{type:"integer",format:"int64"}}],method:"put",path:"/pet",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Update an existing pet",description:{content:"",type:"text/plain"},url:{path:["pet"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US",type:"text/plain"},key:"Accept-Language",value:""},{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"put api-method",info_path:"petstore_versioned/swagger-petstore-yaml"},c=void 0,u={unversionedId:"petstore_versioned/update-pet",id:"petstore_versioned/update-pet",title:"Update an existing pet",description:"",source:"@site/docs/petstore_versioned/update-pet.api.mdx",sourceDirName:"petstore_versioned",slug:"/petstore_versioned/update-pet",permalink:"/vocdoni-docs-demo/petstore_versioned/update-pet",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/petstore_versioned/update-pet.api.mdx",tags:[],version:"current",frontMatter:{id:"update-pet",title:"Update an existing pet",description:"",sidebar_label:"Update an existing pet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"updatePet",responses:{400:{description:"Invalid ID supplied"},404:{description:"Pet not found"},405:{description:"Validation exception"}},security:[{petstore_auth:["write:pets","read:pets"]}],"x-codeSamples":[{lang:"PHP",source:'$form = new \\PetStore\\Entities\\Pet();\n$form->setPetId(1);\n$form->setPetType("Dog");\n$form->setName("Rex");\n// set other fields\ntry {\n    $pet = $client->pets()->update($form);\n} catch (UnprocessableEntityException $e) {\n    var_dump($e->getErrors());\n}\n'}],requestBody:{content:{"application/json":{schema:{allOf:[{description:"My Pet",title:"Pettie"},{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}}]},example:{category:{name:"Great Dane",sub:{prop1:"Just a test property"}},name:"Pepper",photoUrls:["https://assets.orvis.com/is/image/orvisprd/great-dane"],tags:[{name:"Great Danes"}],status:"pending",petType:{huntingSkill:"lazy"}}},"application/xml":{schema:{type:"object",properties:{name:{type:"string",description:"hooray"}}}}},description:"Pet object that needs to be added to the store",required:!0},parameters:[{name:"Accept-Language",in:"header",description:"The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US",example:"en-US",required:!1,schema:{type:"string",default:"en-AU"}},{name:"cookieParam",in:"cookie",description:"Some cookie",required:!0,schema:{type:"integer",format:"int64"}}],method:"put",path:"/pet",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Update an existing pet",description:{content:"",type:"text/plain"},url:{path:["pet"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US",type:"text/plain"},key:"Accept-Language",value:""},{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"put api-method",info_path:"petstore_versioned/swagger-petstore-yaml"},sidebar:"petstore-2.0.0",previous:{title:"Add a new pet to the store",permalink:"/vocdoni-docs-demo/petstore_versioned/add-pet"},next:{title:"Find pet by ID",permalink:"/vocdoni-docs-demo/petstore_versioned/get-pet-by-id"}},g={},y=[{value:"Update an existing pet",id:"update-an-existing-pet",level:2}],h={toc:y};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"update-an-existing-pet"},"Update an existing pet"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Header Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{name:"Accept-Language",in:"header",description:"The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US",example:"en-US",required:!1,schema:{type:"string",default:"en-AU"}},mdxType:"ParamsItem"})))),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Cookie Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{name:"cookieParam",in:"cookie",description:"Some cookie",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,o.kt)(n.Z,{schemaType:"request",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"Pet object that needs to be added to the store"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"category"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Category")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Categories this pet belongs to")),(0,o.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Category name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"sub"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Test Sub Category")),(0,o.kt)(p.Z,{collapsible:!1,name:"prop1",required:!1,schemaDescription:"Dumb Property",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:"The name given to a pet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"photoUrls",required:!0,schemaDescription:"The list of URL to a cute photos featuring pet",schemaName:"url[]",qualifierMessage:"**Possible values:** `<= 20`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"friend",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"tags"),(0,o.kt)("span",{style:{opacity:"0.6"}}," Tag[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,o.kt)("inlineCode",{parentName:"p"},">= 1"))),(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Tags attached to the pet")),(0,o.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Tag name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Pet status in the store",schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)("div",{className:"discriminatorItem"},(0,o.kt)("div",null,(0,o.kt)("strong",{style:{paddingLeft:"1rem"}},"petType"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{paddingLeft:"1rem"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,o.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bee"),"]")),(0,o.kt)("div",{style:{paddingLeft:"1rem"}},(0,o.kt)("p",null,"Type of a pet")),(0,o.kt)(l.Z,{mdxType:"DiscriminatorTabs"},(0,o.kt)(d.Z,{label:"cat",value:"0-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(p.Z,{collapsible:!1,name:"huntingSkill",required:!0,schemaDescription:"The measured skill for hunting",schemaName:"string",qualifierMessage:"**Possible values:** [`clueless`, `lazy`, `adventurous`, `aggressive`]",defaultValue:"lazy",mdxType:"SchemaItem"}))),(0,o.kt)(d.Z,{label:"dog",value:"1-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(p.Z,{collapsible:!1,name:"packSize",required:!0,schemaDescription:"The size of the pack the dog is from",schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}))),(0,o.kt)(d.Z,{label:"bee",value:"2-item-discriminator",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginLeft:"-4px"}},(0,o.kt)(p.Z,{collapsible:!1,name:"honeyPerDay",required:!0,schemaDescription:"Average amount of honey produced per day in ounces",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))),(0,o.kt)(d.Z,{label:"application/xml",value:"application/xml",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"Pet object that needs to be added to the store"))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"hooray",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid ID supplied")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Pet not found")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation exception")),(0,o.kt)("div",null)))))}f.isMDXComponent=!0}}]);