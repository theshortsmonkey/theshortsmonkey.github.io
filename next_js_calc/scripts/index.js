(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1852)}])},8243:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}});var n=s(5893),a=s(7294),l=s(2003),r=s.n(l),c=s(6213),i=s(4738),o=s(8595),u=s(4456),h=s.n(u);class d extends a.Component{render(){return(0,n.jsxs)("div",{className:r().grid,onKeyDown:this.handleKeyDown,children:[(0,n.jsxs)("section",{itemID:"display",className:r().display,children:[(0,n.jsx)(o.default,{history:this.state.history}),(0,n.jsxs)("div",{className:h().className,children:[(0,n.jsx)("p",{className:r().calc,children:this.state.isCalculationComplete?this.state.history.length>0?(0,n.jsx)(n.Fragment,{children:this.state.history[0].calculation}):(0,n.jsx)(n.Fragment,{children:"\xa0"}):this.state.currentCalculation?(0,n.jsx)(n.Fragment,{children:this.state.currentCalculation}):(0,n.jsx)(n.Fragment,{children:"\xa0"})}),(0,n.jsx)("p",{className:r().result,children:this.state.isCalculationComplete&&this.state.history.length>0?(0,n.jsx)(n.Fragment,{children:this.state.history[0].output}):(0,n.jsx)(n.Fragment,{children:"\xa0"})})]})]}),(0,n.jsx)(i.default,{runCalculation:this.runCalculation,keyPressed:this.state.keyPressed,clear:this.clear,clearAll:this.clearAll,updateCalculation:this.updateCalculation})]})}constructor(...t){super(...t),this.state={currentCalculation:"",history:[],keyPressed:"",isCalculationComplete:!1},this.updateCalculation=t=>{let e="".concat(this.state.currentCalculation);if(this.state.isCalculationComplete&&(e=""),"del"===t||"Backspace"===t){let t=-1;isNaN(e.trim().slice(-1))&&(t=-3),e=e.slice(0,t)}else t.match(/[0-9.]/)?e="".concat(e).concat(t):t.match(/[\+\-\*\/]/)&&(isNaN(e.trim().slice(-1))&&(e=e.slice(0,-3)),e="".concat(e," ").concat(t," "));this.setState(t=>{let s={...t};return s.currentCalculation=e,s.isCalculationComplete=!1,s})},this.runCalculation=()=>{let t=this.state.currentCalculation.split(" ").map(t=>Number(t)||t);Number(t[0])||t.unshift(this.output);let e=["/","*","+","-"],s=t;for(let t=0;"number"!=typeof s&&t<e.length;t++)s=(0,c.processArrayWithFilter)(s,e[t]);this.setState(t=>{let e={...t};return e.history.unshift({calculation:e.currentCalculation,output:s}),e.currentCalculation="",e.isCalculationComplete=!0,e})},this.clear=()=>{this.setState(t=>{let e={...t};return e.calculation="",e})},this.clearAll=()=>{this.setState(t=>{let e={...t};return e.calculation="",e.history=[],e})},this.handleKeyDown=t=>{t.preventDefault(),this.setState(e=>{let s={...e};return s.keyPressed=t.key,s})}}}},8595:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return o}});var n=s(5893),a=s(2003),l=s.n(a),r=s(4456),c=s.n(r),i=s(7294);function o(t){let{history:e}=t,[s,a]=(0,i.useState)(1),r=t=>{console.log("in func"),a(e=>{let s=e;return"up"===t?s+=1:s-=1,s})};return(0,n.jsxs)("section",{className:l().history,children:[(0,n.jsxs)("div",{className:l().historybuttons,children:[(0,n.jsx)("button",{className:l().card,onClick:()=>{r("up")},children:"More Rows"},"upButton"),(0,n.jsx)("button",{className:l().card,onClick:()=>{r("down")},children:"Less Rows"},"downButton")]}),(0,n.jsx)("div",{className:l().reverse,children:e.map((t,e)=>e>=s||0===e?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:c().className,children:[(0,n.jsx)("p",{className:l().calc,children:t.calculation}),(0,n.jsx)("p",{className:l().result,children:t.output})]},"".concat(t.calculation).concat(e)))})]})}},9104:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return r}});var n=s(5893),a=s(2003),l=s.n(a);function r(){return(0,n.jsx)("header",{className:l().description,children:(0,n.jsx)("h1",{children:"A Simple Calculator"})})}},4738:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return c}});var n=s(5893),a=s(7294),l=s(2003),r=s.n(l);function c(t){let{runCalculation:e,keyPressed:s,clear:l,clearAll:c,updateCalculation:i}=t,[o,u]=(0,a.useState)("");return(0,a.useEffect)(()=>{"="===s||"Enter"===s?e():(s.match(/[0-9.\+\-\*\/]/)||"Backspace"===s)&&i(s)},[s]),(0,n.jsxs)("section",{className:r().keyboard,children:[(0,n.jsxs)("div",{className:r().functions,children:[(0,n.jsx)("button",{className:r().card,onClick:l,children:"Clear"}),(0,n.jsx)("button",{className:r().card,onClick:c,children:"Clear All"}),(0,n.jsx)("button",{className:r().card,onClick:()=>i("del"),children:"DEL"})]}),(0,n.jsxs)("div",{className:r().calcButtons,children:[(0,n.jsxs)("div",{className:r().numbers,children:[["7","8","9","4","5","6","1","2","3","0","."].map(t=>(0,n.jsx)("button",{className:r().card,onClick:()=>i(t),children:t},t)),(0,n.jsx)("button",{className:r().card,onClick:e,children:"="})]}),(0,n.jsx)("div",{className:r().symbols,children:["/","*","-","+"].map(t=>(0,n.jsx)("button",{className:r().card,onClick:()=>i(t),children:t},t))})]})]})}},1852:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return u}});var n=s(5893),a=s(2003),l=s.n(a),r=s(9104),c=s(8243),i=s(477),o=s.n(i);function u(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"".concat(l().main," ").concat(o().className),children:[(0,n.jsx)(r.default,{}),(0,n.jsx)(c.default,{})]})})}},6213:function(t){"use strict";let e=function(t){for(var e=arguments.length,s=Array(e>1?e-1:0),n=1;n<e;n++)s[n-1]=arguments[n];if(1===s.length&&"number"==typeof s[0])return s[0];if("number"==typeof s[0]&&"number"==typeof s[1])switch(t){case"+":return s[0]+s[1];case"-":return s[0]-s[1];case"*":return s[0]*s[1];case"/":return s[0]/s[1]}return 0};t.exports={processArrayWithFilter:(t,s)=>{let n=[];if(1===t.length)return t[0];if("number"==typeof t)return t;t[1]!==s?(n.push(t[0]),n.push(t[1]),n.push(t[2])):n.push(e(s,t[0],t[2]));for(let a=3;a<t.length;a+=2){let l=a===t.length-2;if(t[a]!==s)n.push(t[a]),l?n.push(t[t.length-1]):n.push(t[a+1]);else{let l=t[a-1];Number(n[n.length-1])&&(l=n.pop()),n.push(e(s,l,t[a+1]))}}return 1===n.length?n[0]:n}}},477:function(t){t.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},4456:function(t){t.exports={style:{fontFamily:"'__seg7Font_2b1e03', '__seg7Font_Fallback_2b1e03'"},className:"__className_2b1e03"}},2003:function(t){t.exports={main:"Home_main__2uIek",description:"Home_description__zHUB6",grid:"Home_grid__vo_ES",display:"Home_display__KQGeh",reverse:"Home_reverse__dZWY7",history:"Home_history__NVgin",historybuttons:"Home_historybuttons__OPEMt",calc:"Home_calc__a_IDH",result:"Home_result__gvc8K",keyboard:"Home_keyboard__jRbYJ",functions:"Home_functions__DQfMD",calcButtons:"Home_calcButtons__vRiZr",numbers:"Home_numbers__JvZJx",symbols:"Home_symbols__CDlFd",card:"Home_card__HIlp_",center:"Home_center__Y_rV4",logo:"Home_logo__ZEOng",content:"Home_content__Qnbja",vercelLogo:"Home_vercelLogo__fCw7S",rotate:"Home_rotate__x60Ft"}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=5557)}),_N_E=t.O()}]);