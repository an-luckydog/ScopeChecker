$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
function gz$gwx_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./pages/daxiaoxie/daxiaoxie.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/daxiaoxie/daxiaoxie.wxml'] = [$gwx_XC_12, './pages/daxiaoxie/daxiaoxie.wxml'];else __wxAppCode__['pages/daxiaoxie/daxiaoxie.wxml'] = $gwx_XC_12( './pages/daxiaoxie/daxiaoxie.wxml' );
	;__wxRoute = "pages/daxiaoxie/daxiaoxie";__wxRouteBegin = true;__wxAppCurrentFile__="pages/daxiaoxie/daxiaoxie.js";define("pages/daxiaoxie/daxiaoxie.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Page({data:{num:0,result:0},yuan:function(t){var n=t.detail.value;return"0"==n[0]?n=1==n.length||"0"==n[1]?"0":"."==n[1]?2==n.length?"0.":3==n.length?parseFloat(n).toFixed(1):parseFloat(n).toFixed(2):n.substr(1,n.length):""==n?n=0:-1==n.indexOf(".")?n=n:-1!=n.substr(0,n.length-1).indexOf(".")&&"."==n[n.length-1]?"."==(n=n.substr(0,n.length-1))[n.length-4]&&(n=n.substr(0,n.length-1)):"."==n[n.length-4]&&(n=n.substr(0,n.length-1)),this.setData({num:n}),this.cals(n),n},cals:function(t){var n,e,r,a=new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖"),s=new Array("","拾","佰","仟"),o=new Array("","万","亿","兆"),u=new Array("角","分","毫","厘"),i="";if(""==t)return"";if((t=parseFloat(t))>=1e15)return"";if(0==t)return a[0]+"元整";if(-1==(t=t.toString()).indexOf(".")?(n=t,e=""):(n=(r=t.split("."))[0],e=r[1].substr(0,4)),parseInt(n,10)>0){for(var l=0,f=n.length,h=0;h<f;h++){var c=f-h-1,g=c/4,d=c%4;"0"==(p=n.substr(h,1))?l++:(l>0&&(i+=a[0]),l=0,i+=a[parseInt(p)]+s[d]),0==d&&l<4&&(i+=o[g])}i+="元"}if(""!=e){var b=e.length;for(h=0;h<b;h++){var p;"0"!=(p=e.substr(h,1))&&(i+=a[Number(p)]+u[h])}}return""==i?i+=a[0]+"元整":""==e&&(i+="整"),this.setData({result:i}),i},fuzhi:function(t){wx.setClipboardData({data:this.data.result,success:function(t){wx.getClipboardData({success:function(t){wx.showToast({title:"内容已复制"})}})}})},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/daxiaoxie/daxiaoxie.js'});require("pages/daxiaoxie/daxiaoxie.js");