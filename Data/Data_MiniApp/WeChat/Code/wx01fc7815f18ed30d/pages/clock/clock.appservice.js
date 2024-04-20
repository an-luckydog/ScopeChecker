$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./pages/clock/clock.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/clock/clock.wxml'] = [$gwx_XC_8, './pages/clock/clock.wxml'];else __wxAppCode__['pages/clock/clock.wxml'] = $gwx_XC_8( './pages/clock/clock.wxml' );
	;__wxRoute = "pages/clock/clock";__wxRouteBegin = true;__wxAppCurrentFile__="pages/clock/clock.js";define("pages/clock/clock.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{width:0,height:0},onLoad:function(){var t=this;wx.getSystemInfo({success:function(e){t.width=e.windowWidth,t.height=e.windowHeight}})},onReady:function(){this.canvasClock(),this.interval=setInterval(this.canvasClock,1e3)},canvasClock:function(){var t=wx.createContext(),e=this.width,a=this.height,i=e/2-55;t.height=t.height,t.translate(e/2,a/2),t.save(),t.setLineWidth(2),t.beginPath(),t.arc(0,0,e/2-30,0,2*Math.PI,!0),t.closePath(),t.stroke(),t.beginPath(),t.arc(0,0,8,0,2*Math.PI,!0),t.closePath(),t.stroke(),function(){t.setFontSize(20),t.textBaseline="middle";for(var e=1;e<13;e++){var a=i*Math.cos(e*Math.PI/6-Math.PI/2),n=i*Math.sin(e*Math.PI/6-Math.PI/2);11==e||12==e?t.fillText(e,a-12,n+9):t.fillText(e,a-6,n+9)}}(),function(){t.setLineWidth(1),t.rotate(-Math.PI/2);for(var a=0;a<60;a++)t.beginPath(),t.rotate(Math.PI/30),t.moveTo(e/2-30,0),t.lineTo(e/2-40,0),t.stroke()}(),function(){t.setLineWidth(5);for(var a=0;a<12;a++)t.beginPath(),t.rotate(Math.PI/6),t.moveTo(e/2-30,0),t.lineTo(e/2-45,0),t.stroke()}(),function(){var a=new Date,i=a.getHours();i=i>12?i-12:i;var n=a.getMinutes(),o=a.getSeconds();t.save(),t.setLineWidth(7),t.beginPath(),t.rotate(Math.PI/6*(i+n/60+o/3600)),t.moveTo(-20,0),t.lineTo(e/4.5-20,0),t.stroke(),t.restore(),t.save(),t.setLineWidth(5),t.beginPath(),t.rotate(Math.PI/30*(n+o/60)),t.moveTo(-20,0),t.lineTo(e/3.5-20,0),t.stroke(),t.restore(),t.save(),t.setLineWidth(2),t.beginPath(),t.rotate(Math.PI/30*o),t.moveTo(-20,0),t.lineTo(e/3-20,0),t.stroke()}(),wx.drawCanvas({canvasId:"myCanvas",actions:t.getActions()})},onUnload:function(){clearInterval(this.interval)}});
},{isPage:true,isComponent:true,currentFile:'pages/clock/clock.js'});require("pages/clock/clock.js");