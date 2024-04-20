$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./pages/tax/tax.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tax/tax.wxml'] = [$gwx_XC_30, './pages/tax/tax.wxml'];else __wxAppCode__['pages/tax/tax.wxml'] = $gwx_XC_30( './pages/tax/tax.wxml' );
	;__wxRoute = "pages/tax/tax";__wxRouteBegin = true;__wxAppCurrentFile__="pages/tax/tax.js";define("pages/tax/tax.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{array:["5%","6%","7%","8%","9%","10%","11%","12%"],n:0,num:"",gongji:!0,shebao:!0,result:0,tax:0,social:0,pub:0,yibao:0,yangbao:0,shibao:0},salarys:function(a){var t=a.detail.value;return t.length>=2&&(t.slice(0,1)==t.slice(1,2)&&"0"==t.slice(0,1)?t=0:"0"==t.slice(0,1)&&"0"!=t.slice(1,2)&&(t=parseInt(t))),this.setData({num:t}),this.cal(),t},gongjichange:function(a){if(this.setData({gongji:a.detail.value}),""!=this.data.num)if(1==this.data.gongji)this.cal();else{this.setData({yibao:parseInt(.02*this.data.num),yangbao:parseInt(.08*this.data.num),shibao:parseInt(.005*this.data.num),social:parseInt(.02*this.data.num)+parseInt(.08*this.data.num)+parseInt(.005*this.data.num)});var t=this.data.num-(parseInt(.02*this.data.num)+parseInt(.08*this.data.num)+parseInt(.005*this.data.num)),s=this.shuishou(t);this.setData({tax:parseInt(s)}),this.setData({pub:0,result:parseInt(this.data.num-this.data.tax-this.data.social)})}},shebaochange:function(a){if(this.setData({shebao:a.detail.value}),""!=this.data.num)if(1==this.data.shebao)this.cal();else{this.setData({pub:parseInt(this.data.num*parseInt(this.data.array[this.data.n])/100)});var t=this.data.num-parseInt(this.data.num*parseInt(this.data.array[this.data.n])/100),s=this.shuishou(t);this.setData({tax:parseInt(s)}),this.setData({social:0,result:parseInt(this.data.num-this.data.tax-this.data.pub)})}},changenum:function(a){this.setData({n:a.detail.value}),this.cal()},cal:function(){if(""!=this.data.num)if(1==this.data.gongji)if(1==this.data.shebao){this.setData({pub:parseInt(this.data.num*parseInt(this.data.array[this.data.n])/100),yibao:parseInt(.02*this.data.num),yangbao:parseInt(.08*this.data.num),shibao:parseInt(.005*this.data.num),social:parseInt(.02*this.data.num)+parseInt(.08*this.data.num)+parseInt(.005*this.data.num)});var a=this.data.num-(parseInt(.02*this.data.num)+parseInt(.08*this.data.num)+parseInt(.005*this.data.num))-parseInt(this.data.num*parseInt(this.data.array[this.data.n])/100),t=this.shuishou(a);this.setData({tax:parseInt(t)}),this.setData({result:parseInt(this.data.num-this.data.tax-this.data.social-this.data.pub)})}else{this.setData({pub:parseInt(this.data.num*parseInt(this.data.array[this.data.n])/100)});var s=this.data.num-parseInt(this.data.num*parseInt(this.data.array[this.data.n])/100),i=this.shuishou(s);this.setData({tax:parseInt(i)}),this.setData({result:parseInt(this.data.num-this.data.tax-this.data.social-this.data.pub)})}else if(1==this.data.shebao){this.setData({yibao:parseInt(.02*this.data.num),yangbao:parseInt(.08*this.data.num),shibao:parseInt(.005*this.data.num),social:parseInt(.02*this.data.num)+parseInt(.08*this.data.num)+parseInt(.005*this.data.num)});var n=this.data.num-(parseInt(.02*this.data.num)+parseInt(.08*this.data.num)+parseInt(.005*this.data.num)),e=this.shuishou(n);this.setData({tax:parseInt(e)}),this.setData({result:parseInt(this.data.num-this.data.tax-this.data.social)})}else{var h=this.data.num,u=this.shuishou(h);this.setData({tax:parseInt(u)}),this.setData({result:parseInt(this.data.num-this.data.tax)})}else this.setData({result:0})},shuishou:function(a){return a<=5e3?0:5e3<a&&a<=8e3?.03*(a-5e3):8e3<a&&a<=17e3?.1*(a-5e3)-210:17e3<a&&a<=3e4?.2*(a-5e3)-1410:3e4<a&&a<=4e4?.25*(a-5e3)-2660:4e4<a&&a<=6e4?.3*(a-5e3)-4410:6e4<a&&a<85e3?.35*(a-5e3)-7160:.4*(a-5e3)-15160},onLoad:function(a){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/tax/tax.js'});require("pages/tax/tax.js");