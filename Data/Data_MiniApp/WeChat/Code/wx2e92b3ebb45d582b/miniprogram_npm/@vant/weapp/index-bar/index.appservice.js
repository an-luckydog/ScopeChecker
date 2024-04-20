$gwx_XC_89=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_89 || [];
function gz$gwx_XC_89_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-index-bar'])
Z([[7],[3,'showSidebar']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_89=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_89=true;
var x=['./miniprogram_npm/@vant/weapp/index-bar/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_89_1()
var bOV=_n('view')
_rz(z,bOV,'class',0,e,s,gg)
var xQV=_n('slot')
_(bOV,xQV)
var oPV=_v()
_(bOV,oPV)
if(_oz(z,1,e,s,gg)){oPV.wxVkey=1
}
oPV.wxXCkey=1
_(r,bOV)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_89";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_89();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/index-bar/index.wxml'] = [$gwx_XC_89, './miniprogram_npm/@vant/weapp/index-bar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/index-bar/index.wxml'] = $gwx_XC_89( './miniprogram_npm/@vant/weapp/index-bar/index.wxml' );
	;__wxRoute = "miniprogram_npm/@vant/weapp/index-bar/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@vant/weapp/index-bar/index.js";define("miniprogram_npm/@vant/weapp/index-bar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/color"),e=require("../common/component"),n=require("../common/relation"),i=require("../common/utils"),o=require("../mixins/page-scroll");(0,e.VantComponent)({relation:(0,n.useChildren)("index-anchor",(function(){this.updateData()})),props:{sticky:{type:Boolean,value:!0},zIndex:{type:Number,value:1},highlightColor:{type:String,value:t.GREEN},stickyOffsetTop:{type:Number,value:0},indexList:{type:Array,value:function(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return t}()}},mixins:[(0,o.pageScrollMixin)((function(t){this.scrollTop=(null==t?void 0:t.scrollTop)||0,this.onScroll()}))],data:{activeAnchorIndex:null,showSidebar:!1},created:function(){this.scrollTop=0},methods:{updateData:function(){var t=this;wx.nextTick((function(){null!=t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.setData({showSidebar:!!t.children.length}),t.setRect().then((function(){t.onScroll()}))}),0)}))},setRect:function(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect:function(){var t=this;return Promise.all(this.children.map((function(e){return(0,i.getRect)(e,".van-index-anchor-wrapper").then((function(n){Object.assign(e,{height:n.height,top:n.top+t.scrollTop})}))})))},setListRect:function(){var t=this;return(0,i.getRect)(this,".van-index-bar").then((function(e){Object.assign(t,{height:e.height,top:e.top+t.scrollTop})}))},setSiderbarRect:function(){var t=this;return(0,i.getRect)(this,".van-index-bar__sidebar").then((function(e){(0,i.isDef)(e)&&(t.sidebar={height:e.height,top:e.top})}))},setDiffData:function(t){var e=t.target,n=t.data,i={};Object.keys(n).forEach((function(t){e.data[t]!==n[t]&&(i[t]=n[t])})),Object.keys(i).length&&e.setData(i)},getAnchorRect:function(t){return(0,i.getRect)(t,".van-index-anchor-wrapper").then((function(t){return{height:t.height,top:t.top}}))},getActiveAnchorIndex:function(){for(var t=this.children,e=this.scrollTop,n=this.data,i=n.sticky,o=n.stickyOffsetTop,r=this.children.length-1;r>=0;r--){var a=r>0?t[r-1].height:0;if((i?a+o:0)+e>=t[r].top)return r}return-1},onScroll:function(){var t=this,e=this.children,n=void 0===e?[]:e,i=this.scrollTop;if(n.length){var o=this.data,r=o.sticky,a=o.stickyOffsetTop,c=o.zIndex,h=o.highlightColor,s=this.getActiveAnchorIndex();if(this.setDiffData({target:this,data:{activeAnchorIndex:s}}),r){var l=!1;-1!==s&&(l=n[s].top<=a+i),n.forEach((function(e,i){if(i===s){var o="",r="\n              color: "+h+";\n            ";l&&(o="\n                height: "+n[i].height+"px;\n              ",r="\n                position: fixed;\n                top: "+a+"px;\n                z-index: "+c+";\n                color: "+h+";\n              "),t.setDiffData({target:e,data:{active:!0,anchorStyle:r,wrapperStyle:o}})}else if(i===s-1){var u=n[i],d=u.top;r="\n              position: relative;\n              transform: translate3d(0, "+((i===n.length-1?t.top:n[i+1].top)-d-u.height)+"px, 0);\n              z-index: "+c+";\n              color: "+h+";\n            ";t.setDiffData({target:e,data:{active:!0,anchorStyle:r}})}else t.setDiffData({target:e,data:{active:!1,anchorStyle:"",wrapperStyle:""}})}))}}},onClick:function(t){this.scrollToAnchor(t.target.dataset.index)},onTouchMove:function(t){var e=this.children.length,n=t.touches[0],i=this.sidebar.height/e,o=Math.floor((n.clientY-this.sidebar.top)/i);o<0?o=0:o>e-1&&(o=e-1),this.scrollToAnchor(o)},onTouchStop:function(){this.scrollToAnchorIndex=null},scrollToAnchor:function(t){var e=this;if("number"==typeof t&&this.scrollToAnchorIndex!==t){this.scrollToAnchorIndex=t;var n=this.children.find((function(n){return n.data.index===e.data.indexList[t]}));n&&(n.scrollIntoView(this.scrollTop),this.$emit("select",n.data.index))}}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@vant/weapp/index-bar/index.js'});require("miniprogram_npm/@vant/weapp/index-bar/index.js");