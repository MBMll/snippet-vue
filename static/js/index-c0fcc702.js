import{l as g,$ as W,p as j,e as $,n as d,j as I,k as V,ag as D,a6 as f,ah as w,ai as S,a7 as R,a8 as x,aa as z,aj as E,F as O,ak as k,al as H,ab as N,am as A,a9 as B,c as q,an as K}from"./index-a970fb9b.js";import{e as M,s as T,b as m,a as p,d as G,h as u,n as J,o as Q,i as y,j as F,N as U}from"./Icon-75eca1cc.js";const X=e=>{const{textColor2:o,cardColor:r,modalColor:n,popoverColor:l,dividerColor:t,borderRadius:a,fontSize:s}=e;return{textColor:o,color:r,colorModal:n,colorPopover:l,borderColor:t,borderColorModal:T(n,t),borderColorPopover:T(l,t),borderRadius:a,fontSize:s}},Y={name:"List",common:M,self:X};var Z=Y,ee={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};const oe=e=>{const{primaryColor:o,textColor2:r,borderColor:n,lineHeight:l,fontSize:t,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:h,textColor1:c,textColor3:i,infoColor:b,warningColor:C,errorColor:v,successColor:_,codeColor:P}=e;return Object.assign(Object.assign({},ee),{aTextColor:o,blockquoteTextColor:r,blockquotePrefixColor:n,blockquoteLineHeight:l,blockquoteFontSize:t,codeBorderRadius:a,liTextColor:r,liLineHeight:l,liFontSize:t,hrColor:s,headerFontWeight:h,headerTextColor:c,pTextColor:r,pTextColor1Depth:c,pTextColor2Depth:r,pTextColor3Depth:i,pLineHeight:l,pFontSize:t,headerBarColor:o,headerBarColorPrimary:o,headerBarColorInfo:b,headerBarColorError:v,headerBarColorWarning:C,headerBarColorSuccess:_,textColor:r,textColor1Depth:c,textColor2Depth:r,textColor3Depth:i,textColorPrimary:o,textColorInfo:b,textColorSuccess:_,textColorWarning:C,textColorError:v,codeTextColor:r,codeColor:P,codeBorder:"1px solid #0000"})},re={name:"Typography",common:M,self:oe};var te=re,ne=m([p("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color)
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[G("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[p("list-item",`
 padding: 12px 20px;
 `,[m("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),u("header, footer",`
 padding: 12px 20px;
 `,[m("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),u("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[m("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),p("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[u("prefix",`
 margin-right: 20px;
 flex: 0;
 `),u("suffix",`
 margin-left: 20px;
 flex: 0;
 `),u("main",`
 flex: 1;
 `),m("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),J(p("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),Q(p("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const le=Object.assign(Object.assign({},y.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),L=I("n-list");var ae=g({name:"List",props:le,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=W(e),n=y("List","-list",ne,Z,e,o);j(L,{mergedClsPrefixRef:o});const l=$(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:s,textColor:h,color:c,colorModal:i,colorPopover:b,borderColor:C,borderColorModal:v,borderColorPopover:_,borderRadius:P}}=n.value;return{"--n-font-size":s,"--n-bezier":a,"--n-text-color":h,"--n-color":c,"--n-border-radius":P,"--n-border-color":C,"--n-border-color-modal":v,"--n-border-color-popover":_,"--n-color-modal":i,"--n-color-popover":b}}),t=r?F("list",void 0,l,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:r,onRender:n}=this;return n==null||n(),d("ul",{class:[`${r}-list`,this.bordered&&`${r}-list--bordered`,this.themeClass],style:this.cssVars},o.header?d("div",{class:`${r}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?d("div",{class:`${r}-list__footer`},o.footer()):null)}}),se=g({name:"ListItem",setup(){const e=V(L,null);return e||D("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return d("li",{class:`${o}-list-item`},e.prefix?d("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?d("div",{class:`${o}-list-item__main`},e):null,e.suffix?d("div",{class:`${o}-list-item__suffix`},e.suffix()):null)}}),ie=p("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`);const de=Object.assign({},y.props);var ce=g({name:"A",props:de,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=W(e),n=y("Typography","-a",ie,te,e,o),l=$(()=>{const{common:{cubicBezierEaseInOut:a},self:{aTextColor:s}}=n.value;return{"--n-text-color":s,"--n-bezier":a}}),t=r?F("a",void 0,l,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});const pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},he=S("g",{fill:"none"},[S("path",{d:"M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12l-7.852-8.313z",fill:"currentColor"})],-1),xe=[he];var me=g({name:"IosArrowRtl24Filled",render:function(o,r){return f(),w("svg",pe,xe)}});const ge=g({setup(e){const o=H();N();const r=o.getRoutes().filter(n=>n.path==="/docs"?n.name:n.path.startsWith("/docs")).sort((n,l)=>n.path>=l.path?1:-1);return console.log(r),(n,l)=>{const t=U,a=ce,s=A("router-link"),h=se,c=ae;return f(),R(c,null,{default:x(()=>[Array.isArray(z(r))?(f(!0),w(O,{key:0},E(z(r),i=>(f(),R(h,null,{default:x(()=>[B(s,{to:{path:i.path}},{default:x(()=>[B(a,null,{default:x(()=>[z(o).currentRoute.value.path===i.path?(f(),R(t,{key:0},{default:x(()=>[B(z(me))]),_:1})):k("",!0),q(" "+K(i.name),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),256)):k("",!0)]),_:1})}}});export{ge as default};
