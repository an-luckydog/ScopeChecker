$gwx_XC_41=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];
function gz$gwx_XC_41_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'_root '],[[2,'?:'],[[7],[3,'selectable']],[1,'_select'],[1,'']]])
Z([[7],[3,'containerStyle']])
Z([[2,'!'],[[6],[[7],[3,'nodes']],[1,0]]])
Z([3,'_add'])
Z([[7],[3,'nodes']])
Z([3,'_root'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[7],[3,'lazyLoad']]],[[7],[3,'loadingImg']]],[[7],[3,'errorImg']]],[[7],[3,'showImgMenu']]],[[7],[3,'selectable']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_41=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_41=true;
var x=['./miniprogram_npm/mp-html/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_41_1()
var aFG=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tGG=_v()
_(aFG,tGG)
if(_oz(z,2,e,s,gg)){tGG.wxVkey=1
var eHG=_n('slot')
_(tGG,eHG)
}
var bIG=_mz(z,'node',['catchadd',3,'childs',1,'id',2,'opts',3],[],e,s,gg)
_(aFG,bIG)
tGG.wxXCkey=1
_(r,aFG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_41";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_41();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/mp-html/index.wxml'] = [$gwx_XC_41, './miniprogram_npm/mp-html/index.wxml'];else __wxAppCode__['miniprogram_npm/mp-html/index.wxml'] = $gwx_XC_41( './miniprogram_npm/mp-html/index.wxml' );
	;__wxRoute = "miniprogram_npm/mp-html/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/mp-html/index.js";define("miniprogram_npm/mp-html/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("./parser"),t=[];Component({data:{nodes:[]},properties:{containerStyle:String,content:{type:String,value:"",observer:function(e){this.setContent(e)}},copyLink:{type:Boolean,value:!0},domain:String,errorImg:String,lazyLoad:Boolean,loadingImg:String,pauseVideo:{type:Boolean,value:!0},previewImg:{type:Boolean,value:!0},scrollTable:Boolean,selectable:null,setTitle:{type:Boolean,value:!0},showImgMenu:{type:Boolean,value:!0},tagStyle:Object,useAnchor:null},created:function(){this.plugins=[];for(var e=t.length;e--;)this.plugins.push(new t[e](this))},detached:function(){clearInterval(this._timer),this._hook("onDetached")},methods:{in:function(e,t,n){e&&t&&n&&(this._in={page:e,selector:t,scrollTop:n})},navigateTo:function(e,t){var n=this;return new Promise((function(o,i){if(n.data.useAnchor){var r=wx.createSelectorQuery().in(n._in?n._in.page:n).select((n._in?n._in.selector:"._root")+(e?"".concat(">>>","#").concat(e):"")).boundingClientRect();n._in?r.select(n._in.selector).scrollOffset().select(n._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(e){if(e[0]){var r=e[1].scrollTop+e[0].top-(e[2]?e[2].top:0)+(t||parseInt(n.data.useAnchor)||0);n._in?n._in.page.setData(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n._in.scrollTop,r)):wx.pageScrollTo({scrollTop:r,duration:300}),o()}else i(Error("Label not found"))}))}else i(Error("Anchor is disabled"))}))},getText:function(e){var t="";return function e(n){for(var o=0;o<n.length;o++){var i=n[o];if("text"===i.type)t+=i.text.replace(/&amp;/g,"&");else if("br"===i.name)t+="\n";else{var r="p"===i.name||"div"===i.name||"tr"===i.name||"li"===i.name||"h"===i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";r&&t&&"\n"!==t[t.length-1]&&(t+="\n"),i.children&&e(i.children),r&&"\n"!==t[t.length-1]?t+="\n":"td"!==i.name&&"th"!==i.name||(t+="\t")}}}(e||this.data.nodes),t},getRect:function(){var e=this;return new Promise((function(t,n){wx.createSelectorQuery().in(e).select("._root").boundingClientRect().exec((function(e){return e[0]?t(e[0]):n(Error("Root label not found"))}))}))},pauseMedia:function(){for(var e=(this._videos||[]).length;e--;)this._videos[e].pause()},setContent:function(t,n){var o=this;this.imgList&&n||(this.imgList=[]),this._videos=[];var i,r={},a=new e(this).parse(t);if(n)for(var l=this.data.nodes.length,s=a.length;s--;)r["nodes[".concat(l+s,"]")]=a[s];else r.nodes=a;this.setData(r,(function(){o._hook("onLoad"),o.triggerEvent("load")})),clearInterval(this._timer),this._timer=setInterval((function(){o.getRect().then((function(e){e.height===i&&(o.triggerEvent("ready",e),clearInterval(o._timer)),i=e.height})).catch((function(){}))}),350)},_hook:function(e){for(var n=t.length;n--;)this.plugins[n][e]&&this.plugins[n][e]()},_add:function(e){e.detail.root=this}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/mp-html/index.js'});require("miniprogram_npm/mp-html/index.js");