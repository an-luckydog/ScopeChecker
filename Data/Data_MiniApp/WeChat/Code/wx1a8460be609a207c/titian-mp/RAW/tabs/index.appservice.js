$gwx_XC_113=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_113 || [];
function gz$gwx_XC_113_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'ext-class '],[[12],[[6],[[7],[3,'namespace']],[3,'join']],[[5],[1,'tabs']]]])
Z([3,'tasidx_1'])
Z([[7],[3,'extStyle']])
Z([3,'onFixed'])
Z([[2,'!'],[[7],[3,'sticky']]])
Z([3,'tasidx_2'])
Z([[7],[3,'offsetTop']])
Z([[7],[3,'usePureCss']])
Z([[7],[3,'tabs']])
Z([3,'*this'])
Z([3,'onClick'])
Z([a,[3,'tab-class '],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'activeIndex']]],[1,'tab-active-class'],[1,'']],[3,' '],[[12],[[6],[[7],[3,'namespace']],[3,'join']],[[5],[[5],[1,'tabs-nav']],[[4],[[5],[[5],[[5],[[5],[[5],[[7],[3,'index']]],[[7],[3,'variant']]],[[8],'active',[[2,'==='],[[7],[3,'index']],[[7],[3,'activeIndex']]]]],[[8],'disabled',[[12],[[6],[[7],[3,'tool']],[3,'includes']],[[5],[[5],[[7],[3,'disabledTabs']]],[[7],[3,'index']]]]]],[[8],'gap',[[2,'>='],[[7],[3,'gap']],[1,0]]]]]]]])
Z([[7],[3,'index']])
Z([a,[3,'item-'],z[12]])
Z([[6],[[7],[3,'item']],[[2,'||'],[[6],[[7],[3,'alias']],[3,'description']],[1,'description']]])
Z([[7],[3,'useSlot']])
Z([3,'onAnimationfinish'])
Z([3,'onChange'])
Z([a,[3,'swiper-class '],[[12],[[6],[[7],[3,'namespace']],[3,'join']],[[5],[1,'tabs-swiper']]]])
Z([[7],[3,'activeIndex']])
Z([[7],[3,'duration']])
Z([3,'tasidx_b'])
Z([[7],[3,'tabsLength']])
Z(z[9])
Z([[2,'!'],[[12],[[6],[[7],[3,'tool']],[3,'includes']],[[5],[[5],[[7],[3,'disabledTabs']]],[[7],[3,'index']]]]])
Z([a,[3,'tab-content-'],z[12]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_113=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_113=true;
var x=['./titian-mp/RAW/tabs/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_113_1()
var o8CB=_mz(z,'view',['class',0,'id',1,'style',1],[],e,s,gg)
var o0CB=_mz(z,'ti-sticky',['bind:fixed',3,'disabled',1,'id',2,'offsetTop',3,'usePureCss',4],[],e,s,gg)
var fADB=_v()
_(o0CB,fADB)
var cBDB=function(oDDB,hCDB,cEDB,gg){
var lGDB=_mz(z,'view',['bind:tap',10,'class',1,'data-index',2,'id',3],[],oDDB,hCDB,gg)
var aHDB=_v()
_(lGDB,aHDB)
if(_oz(z,14,oDDB,hCDB,gg)){aHDB.wxVkey=1
}
aHDB.wxXCkey=1
_(cEDB,lGDB)
return cEDB
}
fADB.wxXCkey=2
_2z(z,8,cBDB,e,s,gg,fADB,'item','index','*this')
_(o8CB,o0CB)
var x9CB=_v()
_(o8CB,x9CB)
if(_oz(z,15,e,s,gg)){x9CB.wxVkey=1
var tIDB=_mz(z,'swiper',['bind:animationfinish',16,'bind:change',1,'class',2,'current',3,'duration',4,'id',5],[],e,s,gg)
var eJDB=_v()
_(tIDB,eJDB)
var bKDB=function(xMDB,oLDB,oNDB,gg){
var cPDB=_v()
_(oNDB,cPDB)
if(_oz(z,24,xMDB,oLDB,gg)){cPDB.wxVkey=1
var hQDB=_n('slot')
_rz(z,hQDB,'name',25,xMDB,oLDB,gg)
_(cPDB,hQDB)
}
cPDB.wxXCkey=1
return oNDB
}
eJDB.wxXCkey=2
_2z(z,22,bKDB,e,s,gg,eJDB,'item','index','*this')
_(x9CB,tIDB)
}
x9CB.wxXCkey=1
_(r,o8CB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_113";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_113();	if (__vd_version_info__.delayedGwx) __wxAppCode__['titian-mp/RAW/tabs/index.wxml'] = [$gwx_XC_113, './titian-mp/RAW/tabs/index.wxml'];else __wxAppCode__['titian-mp/RAW/tabs/index.wxml'] = $gwx_XC_113( './titian-mp/RAW/tabs/index.wxml' );
	;__wxRoute = "titian-mp/RAW/tabs/index";__wxRouteBegin = true;__wxAppCurrentFile__="titian-mp/RAW/tabs/index.js";define("titian-mp/RAW/tabs/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/objectSpread2");require("../titan.bootstrap.js");var a,e,i,n=global.bc("platform","titian-mp"),s=require("../titan-scoped-env.js"),r=(a=require("../common/basic/BasicComponent"))&&a.__esModule?a:{default:a},d=require("../common/utils/index");!function(t){t.LINE="line",t.SHADOW="shadow",t.DEFAULT="default"}(e||(e={})),function(t){t.BLOCK="block",t.PURE="pure",t.MULTI="multi",t.DOUBLE="calendar"}(i||(i={})),(0,r.default)({externalClasses:["tab-active-class","swiper-class","tabs-class","tab-class","tabs-mark-class","tab-text-class","tab-text-active-class"],options:{pureDataPattern:/^_/},properties:{tabs:Array,disabledTabs:Array,duration:{type:Number,value:500},count:{type:Number,value:5},divider:{type:String,value:"default"},variant:{type:String,value:"pure"},activeTab:{type:Number,optionalTypes:[String],value:0},sticky:Boolean,tabWidth:Number,tabKey:{type:String,value:"label"},useSlot:Boolean,extStyle:String,focusUpdate:{type:Boolean,value:!0},gap:{type:Number,value:-1},autoGap:{type:Boolean,value:!0},offsetTop:{type:Number,value:0},usePureCss:Boolean,alias:{type:Object,value:{}},scrollWithAnimation:{type:Boolean,value:!0},asyncChange:Boolean},data:{currentTabWidth:0,systemInfo:s.wx.getSystemInfoSync(),preTranslateX:0,unit:"",tabsName:[],tabsLength:[],currentCount:0,translateList:[],isReady:!1,activeIndex:0},observers:{"count, tabs, activeTab":function(a,e,i){var n=this,s=e,r=this.data.tabsLength,u=i||0;e.length>0&&(0,d.isPlainObject)(e[0])&&(s=e.map((function(t){return t[n.data.alias.label||n.data.tabKey]}))),e.length>0&&(0,d.isString)(i)&&(u=s.findIndex((function(t){return i===t}))),(this.data.focusUpdate||r.length!==s.length)&&(r=s.map((function(t,a){return a})));var o=r!==this.data.tabsLength;this.setData(t({activeIndex:u},o?{tabsLength:r}:{})),a!==this.data.count||JSON.stringify(s)!==JSON.stringify(this.data.tabsName)?(this.setData({tabsName:s}),e.length<=a&&this.data.autoGap&&(a=e.length),(0,d.nextTick)((function(){return n.setTabWidth(a)}))):this.setData({activeIndex:u,tabsName:s})},tabWidth:function(t){if(!(t<=0)){var a=this.data.count;this.data.tabs.length<=a&&this.data.autoGap&&(a=this.data.tabs.length),this.setTabWidth(a)}}},methods:{onClick:function(t){var a=t.currentTarget.dataset.index,e={index:a,item:this.data.tabs[a]};this.triggerEvent("click",e),this.data.disabledTabs.includes(a)?this.triggerEvent("disabled",e):(a!==this.data.activeIndex&&(this.setData({duration:0}),this.data.asyncChange||this.setData({activeIndex:a})),this.triggerEvent("change",e))},onChange:function(t){var a=t.detail.current;if(a!==this.data.activeIndex){this.data.disabledTabs.includes(a)&&(this.data.activeIndex<a?(a+=1)>this.data.tabs.length-1&&(a=this.data.activeIndex):this.data.activeIndex>a&&(a-=1)<0&&(a=this.data.activeIndex)),this.setData({activeIndex:a});var e={index:a,item:this.data.tabs[a]};this.triggerEvent("change",e)}},onAnimationfinish:function(){this.setData({duration:500})},setTabWidth:function(t){var a=this,e=t,i=this.data.systemInfo.windowWidth;(0,d.getRect)(this,".titian-tabs-scroll").then((function(n){var s=Math.min(n.width,i)||i,r=t>0?s/t:0,u="px";if(a.data.tabWidth>0){r=a.data.tabWidth;var o=Math.floor(r*i/750);e=Math.floor(s/o),e=Math.max(e,3),u="rpx",t&&o*t<s&&a.data.autoGap&&(r=s/t,e=t,u="px")}a.data.gap<0?(a.setData({currentTabWidth:r,unit:u,isReady:!0}),(0,d.nextTick)((function(){return a.setData({currentCount:e})}))):a.createSelectorQuery().selectAll(".titian-tabs-nav-gap").boundingClientRect((function(t){if(t&&0!==t.length){var n=[];e=t.length;var r=!1,o=t.reduce((function(t,a,i){var d=t+a.width/2;n.push(d);var u=t+a.width;return!r&&u>s&&(e=Math.max(i,3),r=!0),u}),0),l=a.data.gap;if(u="rpx",a.data.autoGap&&!r){u="px",e=t.length;var c=(s-o)/e,h=2*Math.floor(a.data.gap/2*i/750);a.data.gap>0&&(h=Math.max(1,h)),l=h+c,n=n.map((function(t,a){return t+c*a+c/2}))}a.setData({translateList:n,gap:l,unit:u,isReady:!0}),(0,d.nextTick)((function(){return a.setData({currentCount:e})}))}})).exec()}))},onFixed:function(t){this.triggerEvent("fixed",t.detail)}}}),global.ec(n);
},{isPage:false,isComponent:true,currentFile:'titian-mp/RAW/tabs/index.js'});require("titian-mp/RAW/tabs/index.js");