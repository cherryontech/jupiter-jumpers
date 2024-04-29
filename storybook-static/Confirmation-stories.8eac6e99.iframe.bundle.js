(self.webpackChunkjupiter_jumpers=self.webpackChunkjupiter_jumpers||[]).push([[108],{"./stories/Confirmation.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Confirmation:()=>Confirmation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Confirmation_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Button=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./stories/Button.tsx")),Icons=__webpack_require__("./stories/Icons.tsx"),CloudSun=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/CloudSun.mjs");const ConfirmationMessage=param=>{let{userDisplayName,hideConfirmationMessage}=param;return(0,jsx_runtime.jsxs)("div",{className:"absolute left-1/2 top-1/2 flex h-[45rem] w-[33rem] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-14 rounded-md  p-12 ring-2 ring-gray-400 ring-opacity-20 ring-offset-2",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center gap-8",children:[(0,jsx_runtime.jsxs)("div",{className:"flex w-[23rem] flex-col items-center justify-center gap-6",children:[(0,jsx_runtime.jsx)(CloudSun.S,{size:96}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2",children:[(0,jsx_runtime.jsxs)("h4",{children:["Welcome in ",userDisplayName," "]}),(0,jsx_runtime.jsx)("p",{className:"text-center",children:"You can now start logging your reflections. Let’s get started with your first one!"})]})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("hr",{className:"bg-lineColor h-0.25"})}),(0,jsx_runtime.jsxs)("div",{className:"flex w-[23rem] flex-col items-center justify-center gap-4",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,jsx_runtime.jsx)(Icons.I,{type:"sun",size:"32",weight:"light"}),(0,jsx_runtime.jsx)("p",{children:"Select your current career emotion from the icons on our homepage."})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,jsx_runtime.jsx)(Icons.I,{type:"lightbulb-filament",size:"32",weight:"light"}),(0,jsx_runtime.jsx)("p",{children:"Explore prompts and content tailored to your chosen emotion."})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,jsx_runtime.jsx)(Icons.I,{type:"chart-line-up",size:"32",weight:"light"}),(0,jsx_runtime.jsx)("p",{children:"Gain clarity on your goals and identify areas for focus through these exercises."})]})]})]}),(0,jsx_runtime.jsx)(Button.$,{onClick:hideConfirmationMessage,label:"Get started",primary:!0,size:"medium"})]})};var _Confirmation_parameters,_Confirmation_parameters_docs,_Confirmation_parameters1;ConfirmationMessage.__docgenInfo={description:"",methods:[],displayName:"ConfirmationMessage",props:{userDisplayName:{required:!0,tsType:{name:"string"},description:""},hideConfirmationMessage:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Confirmation_stories={title:"Confirmation",component:ConfirmationMessage,parameters:{layout:"centered"},tags:["autodocs"]},Confirmation={args:{userDisplayName:"Jane Doe"}};Confirmation.parameters={...Confirmation.parameters,docs:{...null===(_Confirmation_parameters=Confirmation.parameters)||void 0===_Confirmation_parameters?void 0:_Confirmation_parameters.docs,source:{originalSource:"{\n  args: {\n    userDisplayName: 'Jane Doe'\n  }\n}",...null===(_Confirmation_parameters1=Confirmation.parameters)||void 0===_Confirmation_parameters1||null===(_Confirmation_parameters_docs=_Confirmation_parameters1.docs)||void 0===_Confirmation_parameters_docs?void 0:_Confirmation_parameters_docs.source}}};const __namedExportsOrder=["Confirmation"]},"./stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),style=__webpack_require__("./node_modules/styled-jsx/style.js"),style_default=__webpack_require__.n(style),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cjs_js_stories_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cjs_js_stories_button.A,options);cjs_js_stories_button.A&&cjs_js_stories_button.A.locals&&cjs_js_stories_button.A.locals;const Button=param=>{let{primary=!1,size="medium",backgroundColor,label,...props}=param;const mode=primary?"button--primary":"button--secondary";return(0,jsx_runtime.jsxs)("button",{type:props.type||"button",...props,className:style_default().dynamic([["8a1479a9b333bf39",[backgroundColor,primary?"white":"black"]]])+" "+(props&&null!=props.className&&props.className||["button","button--".concat(size),mode,"block","w-full","mt-2","py-2"].join(" ")||""),children:[label,(0,jsx_runtime.jsx)(style_default(),{id:"8a1479a9b333bf39",dynamic:[backgroundColor,primary?"white":"black"],children:"button.__jsx-style-dynamic-selector{background-color:".concat(backgroundColor,";color:").concat(primary?"white":"black","}")})]})};Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:""}}}},"./stories/Icons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/ChartLineUp.mjs")),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/LightbulbFilament.mjs"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/Sun.mjs"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/CloudSun.mjs");const Icon=param=>{let{color,label,weight,type,size}=param,icon=null;switch(type){case"chart-line-up":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.k,{weight,size:parseInt(size),color});break;case"lightbulb-filament":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__.A,{weight,size:parseInt(size),color});break;case"sun":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__.b,{weight,size:parseInt(size),color});break;case"cloud-sun":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__.S,{weight,size:parseInt(size),color})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:["icon"].join(" "),children:icon})};Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{color:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},weight:{required:!0,tsType:{name:"union",raw:"'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'",elements:[{name:"literal",value:"'thin'"},{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'duotone'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'chart-line-up' | 'lightbulb-filament' | 'sun' | 'cloud-sun'",elements:[{name:"literal",value:"'chart-line-up'"},{name:"literal",value:"'lightbulb-filament'"},{name:"literal",value:"'sun'"},{name:"literal",value:"'cloud-sun'"}]},description:""},size:{required:!0,tsType:{name:"union",raw:"'16' | '24' | '32'",elements:[{name:"literal",value:"'16'"},{name:"literal",value:"'24'"},{name:"literal",value:"'32'"}]},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button {\n\tfont-family: 'Open Sans', 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,\n\t\tsans-serif;\n\tfont-weight: 700;\n\tborder: 0;\n\tborder-radius: 3em;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tline-height: 1;\n}\n.button--primary {\n\tcolor: white;\n\tbackground-color: #2c2c2c;\n}\n.button--secondary {\n\tcolor: #333;\n\tbackground-color: transparent;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.button--small {\n\tfont-size: 12px;\n\tpadding: 10px 16px;\n}\n.button--medium {\n\tfont-size: 14px;\n\tpadding: 11px 20px;\n}\n.button--large {\n\tfont-size: 16px;\n\tpadding: 12px 24px;\n}\n","",{version:3,sources:["webpack://./stories/button.css"],names:[],mappings:"AAAA;CACC;YACW;CACX,gBAAgB;CAChB,SAAS;CACT,kBAAkB;CAClB,eAAe;CACf,qBAAqB;CACrB,cAAc;AACf;AACA;CACC,YAAY;CACZ,yBAAyB;AAC1B;AACA;CACC,WAAW;CACX,6BAA6B;CAC7B,qDAAqD;AACtD;AACA;CACC,eAAe;CACf,kBAAkB;AACnB;AACA;CACC,eAAe;CACf,kBAAkB;AACnB;AACA;CACC,eAAe;CACf,kBAAkB;AACnB",sourcesContent:[".button {\n\tfont-family: 'Open Sans', 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,\n\t\tsans-serif;\n\tfont-weight: 700;\n\tborder: 0;\n\tborder-radius: 3em;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tline-height: 1;\n}\n.button--primary {\n\tcolor: white;\n\tbackground-color: #2c2c2c;\n}\n.button--secondary {\n\tcolor: #333;\n\tbackground-color: transparent;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.button--small {\n\tfont-size: 12px;\n\tpadding: 10px 16px;\n}\n.button--medium {\n\tfont-size: 14px;\n\tpadding: 11px 20px;\n}\n.button--large {\n\tfont-size: 16px;\n\tpadding: 12px 24px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/styled-jsx/style.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/styled-jsx/dist/index/index.js").style}}]);