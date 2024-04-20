$gwx_XC_37=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_37 || [];
function gz$gwx_XC_37_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dialog'])
Z([3,'pupup-box'])
Z([[7],[3,'type']])
Z([3,'kefu-box'])
Z([3,'onContact'])
Z([3,'hide'])
Z([3,'confirm'])
Z([3,'contact'])
Z([3,'https://lucky-cdn.nocode.com/mina/lottery/clickme.jpeg'])
Z([a,[3,'/pages/customer/serviceloading/serviceloading?'],[[7],[3,'key']],[3,'\x3d'],[[7],[3,'id']]])
Z([3,'正在查询，请留意客服回复'])
Z([[7],[3,'sessionFrom']])
Z([[2,'==='],[[7],[3,'type']],[1,'image_official']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_37=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_37=true;
var x=['./components/KefuSponsorDialog/KefuSponsorDialog.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_37_1()
var cEE=_mz(z,'PopupBox',['class',0,'customClass',1],[],e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,2,e,s,gg)){oFE.wxVkey=1
var lGE=_n('view')
_rz(z,lGE,'class',3,e,s,gg)
var tIE=_mz(z,'ClickButton',['showMessageCard',-1,'bindcontact',4,'bindtap',1,'class',2,'openType',3,'sendMessageImg',4,'sendMessagePath',5,'sendMessageTitle',6,'sessionFrom',7],[],e,s,gg)
_(lGE,tIE)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,12,e,s,gg)){aHE.wxVkey=1
}
aHE.wxXCkey=1
_(oFE,lGE)
}
oFE.wxXCkey=1
oFE.wxXCkey=3
_(r,cEE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_37";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_37();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/KefuSponsorDialog/KefuSponsorDialog.wxml'] = [$gwx_XC_37, './components/KefuSponsorDialog/KefuSponsorDialog.wxml'];else __wxAppCode__['components/KefuSponsorDialog/KefuSponsorDialog.wxml'] = $gwx_XC_37( './components/KefuSponsorDialog/KefuSponsorDialog.wxml' );
	;__wxRoute = "components/KefuSponsorDialog/KefuSponsorDialog";__wxRouteBegin = true;__wxAppCurrentFile__="components/KefuSponsorDialog/KefuSponsorDialog.js";define("components/KefuSponsorDialog/KefuSponsorDialog.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=(e=require("@behavior/dialog"))&&e.__esModule?e:{default:e},o=require("@utils/tools");Component({behaviors:[t.default],data:{type:"",id:"",key:"",sessionFrom:'{"open_reply":"off"}'},methods:{onContact:function(e){var t=e.detail,a=t.path,i=t.query,r="".concat(a,"?").concat((0,o.queryString)(i));wx.navigateTo({url:r})}},lifetimes:{attached:function(){this.setData({sessionFrom:(0,o.getSessionFrom)({open_reply:"off"})})}}});
},{isPage:false,isComponent:true,currentFile:'components/KefuSponsorDialog/KefuSponsorDialog.js'});require("components/KefuSponsorDialog/KefuSponsorDialog.js");