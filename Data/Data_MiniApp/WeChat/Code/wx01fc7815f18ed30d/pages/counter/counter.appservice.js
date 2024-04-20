$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'all'])
Z([[7],[3,'setting']])
Z([[2,'=='],[[7],[3,'active1']],[1,false]])
Z([[2,'=='],[[7],[3,'active1']],[1,true]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./pages/counter/counter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var x5=_n('view')
_rz(z,x5,'class',0,e,s,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,1,e,s,gg)){o6.wxVkey=1
}
var f7=_v()
_(x5,f7)
if(_oz(z,2,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(x5,c8)
if(_oz(z,3,e,s,gg)){c8.wxVkey=1
}
o6.wxXCkey=1
f7.wxXCkey=1
c8.wxXCkey=1
_(r,x5)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/counter/counter.wxml'] = [$gwx_XC_10, './pages/counter/counter.wxml'];else __wxAppCode__['pages/counter/counter.wxml'] = $gwx_XC_10( './pages/counter/counter.wxml' );
	;__wxRoute = "pages/counter/counter";__wxRouteBegin = true;__wxAppCurrentFile__="pages/counter/counter.js";define("pages/counter/counter.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{guiling:!1,setting:!1,active1:!1,active2:!0,res:0,num:1,nums:1,sn1:0,sn2:0},guiling:function(){var t=this;this.setData({res:0,sn1:0,sn2:0,guiling:!0}),setTimeout((function(){t.setData({guiling:!1})}),300)},setting:function(){this.setData({setting:!this.data.setting})},changenum:function(t){this.setData({num:t.detail.value,nums:t.detail.value})},sorts:function(){this.setData({active1:!this.data.active1,res:0,num:1,nums:1,sn1:0,sn2:0})},sounds:function(){this.setData({active2:!this.data.active2})},click1:function(){if(this.setData({setting:!1}),1==this.data.active2){var t=wx.createInnerAudioContext();t.autoplay=!0,t.src="/audio/week.mp3",t.onPlay((function(){})),this.setData({res:this.data.res+this.data.num})}else this.setData({res:this.data.res+this.data.num})},click2:function(){if(this.setData({setting:!1}),1==this.data.active2){var t=wx.createInnerAudioContext();t.autoplay=!0,t.src="/images/week.mp3",t.onPlay((function(){})),this.setData({res:this.data.res+this.data.num,sn1:this.data.num+this.data.sn1})}else this.setData({res:this.data.res+this.data.num,sn1:this.data.num+this.data.sn1})},click3:function(){if(this.setData({setting:!1}),1==this.data.active2){var t=wx.createInnerAudioContext();t.autoplay=!0,t.src="/audio/week.mp3",t.onPlay((function(){})),this.setData({res:this.data.res+this.data.nums,sn2:this.data.num+this.data.sn2})}else this.setData({res:this.data.res+this.data.nums,sn2:this.data.num+this.data.sn2})},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/counter/counter.js'});require("pages/counter/counter.js");