import{s as $,a9 as b,m as t,l as d,n as y,v as a,x as R,y as L,d as p,A as M,B as f,M as j,c as I,D as B,h as i,aa as w,I as E,ab as O}from"./index-14d43fb4.js";const S=o=>{const{textColor2:r,cardColor:l,modalColor:s,popoverColor:n,dividerColor:e,borderRadius:c,fontSize:m}=o;return{textColor:r,color:l,colorModal:s,colorPopover:n,borderColor:e,borderColorModal:b(s,e),borderColorPopover:b(n,e),borderRadius:c,fontSize:m}},T={name:"List",common:$,self:S};var V=T,k=t([d("list",`
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
 `,[y("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[d("list-item",`
 padding: 12px 20px;
 `,[t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),a("header, footer",`
 padding: 12px 20px;
 `,[t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),a("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),d("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[a("prefix",`
 margin-right: 20px;
 flex: 0;
 `),a("suffix",`
 margin-left: 20px;
 flex: 0;
 `),a("main",`
 flex: 1;
 `),t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),R(d("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),L(d("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const D=Object.assign(Object.assign({},f.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),v=w("n-list");var A=p({name:"List",props:D,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:l}=M(o),s=f("List","-list",k,V,o,r);j(v,{mergedClsPrefixRef:r});const n=I(()=>{const{common:{cubicBezierEaseInOut:c},self:{fontSize:m,textColor:u,color:x,colorModal:g,colorPopover:h,borderColor:C,borderColorModal:_,borderColorPopover:z,borderRadius:P}}=s.value;return{"--n-font-size":m,"--n-bezier":c,"--n-text-color":u,"--n-color":x,"--n-border-radius":P,"--n-border-color":C,"--n-border-color-modal":_,"--n-border-color-popover":z,"--n-color-modal":g,"--n-color-popover":h}}),e=l?B("list",void 0,n,o):void 0;return{mergedClsPrefix:r,cssVars:l?void 0:n,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var o;const{$slots:r,mergedClsPrefix:l,onRender:s}=this;return s==null||s(),i("ul",{class:[`${l}-list`,this.bordered&&`${l}-list--bordered`,this.themeClass],style:this.cssVars},r.header?i("div",{class:`${l}-list__header`},r.header()):null,(o=r.default)===null||o===void 0?void 0:o.call(r),r.footer?i("div",{class:`${l}-list__footer`},r.footer()):null)}}),H=p({name:"ListItem",setup(){const o=E(v,null);return o||O("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:r}=this;return i("li",{class:`${r}-list-item`},o.prefix?i("div",{class:`${r}-list-item__prefix`},o.prefix()):null,o.default?i("div",{class:`${r}-list-item__main`},o):null,o.suffix?i("div",{class:`${r}-list-item__suffix`},o.suffix()):null)}});export{A as _,H as a};
