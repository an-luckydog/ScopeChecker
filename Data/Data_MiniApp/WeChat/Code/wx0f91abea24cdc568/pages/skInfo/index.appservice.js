$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./pages/skInfo/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/skInfo/index.wxml'] = [$gwx_XC_4, './pages/skInfo/index.wxml'];else __wxAppCode__['pages/skInfo/index.wxml'] = $gwx_XC_4( './pages/skInfo/index.wxml' );
	;__wxRoute = "pages/skInfo/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/skInfo/index.js";define("pages/skInfo/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n=require("../../@babel/runtime/helpers/defineProperty"),d=require("../../utils/request");Page({data:{scanCode:null,labelcodeimg1:"",latitude:"",longitude:"",markers:[{id:0,latitude:"",longitude:"",width:20,height:30,callout:{content:"",padding:10,display:"ALWAYS",textAlign:"center",color:"#FF0000",fontSize:16}},{id:1,latitude:"",longitude:"",width:20,height:30,callout:{content:"",padding:10,display:"ALWAYS",textAlign:"center",color:"#429FEA",fontSize:16}},{id:2,latitude:"",longitude:"",width:20,height:30,callout:{content:"",padding:10,display:"ALWAYS",textAlign:"center",color:"#8BC34A",fontSize:16}}],info:{rwdbh:null,gcmc:null,dwgc:null,jdzch:null,ghdw:null,jzrname:null,qyrname:null,upload:"未上传",fl:null,dbsl:null,sccj:null,ljfs:null,dj:null,ssfs:null,jtcj:null,qddj:null,jzbw:null,yplx:null,skbh:null,ggxh:null,yhtj:null,sfcm:null,cxrq:null,qybh:null,jgbw:null,pz:null,jb:null,gg:null,qynr:null,gjph:null,qybz:null,qysj:null,kzdj:null,lhph:null,labelcode1:null,labelcode2:null,labelcode3:null},ghdwdis:"",fldis:"",dbsldis:"",sccjdis:"",ssfsdis:"",qddjdis:"",djdis:"",jzbwdis:"",yplxdis:"",ggxhdis:"",yhtjdis:"",sfcmdis:"",cxrqdis:"",ljfsdis:"",qybhdis:"",jgbwdis:"",pzdis:"",jbdis:"",gjphdis:"",ggdis:"",qynrdis:"",qybzdis:"",qysjdis:"",jtcjdis:"",kzdjdis:"",lhphdis:"",labelcode1dis:"",labelcode2dis:"",labelcode3dis:"",jzqy_accno:""},toPicOfCNOne:function(){wx.previewImage({urls:[this.data.labelcodeimg2]})},toPicOfTwo:function(){wx.previewImage({urls:[this.data.labelcodeimg3]})},toPicOfzn:function(){wx.previewImage({urls:[this.data.labelcodeimg1]})},onLoad:function(n){var d=getCurrentPages();15==(n=d[d.length-1].options).scanCode.length&&(n.scanCode=n.scanCode.substring(0,n.scanCode.lastIndexOf("-"))),this.setData({scanCode:n.scanCode}),console.log(this.data.scanCode)},onReady:function(){},onShow:function(){var a=this,e=this,l={labelcode:e.data.scanCode};d.postForm("/Index/verificationTestBlock",l,(function(d){var l;console.log(d,"------");e.setData((n(l={},"markers[0].latitude",d.data.JZRLATITUDE),n(l,"jzqy_accno",d.data.jzqy_accno),n(l,"markers[0].longitude",d.data.JZRLONGITUDE),n(l,"markers[0].callout.content","见证人地址："+d.data.JZRADDRESS),n(l,"markers[1].latitude",d.data.QYRLATITUDE),n(l,"markers[1].longitude",d.data.QYRLONGITUDE),n(l,"markers[1].callout.content","取样人地址："+d.data.QYRADDRESS),n(l,"markers[2].latitude",d.data.latitude),n(l,"markers[2].longitude",d.data.longitude),n(l,"markers[2].callout.content","取样地址："+d.data.QYADDRESS),n(l,"info.rwdbh",d.data.XMBH),n(l,"labelcodeimg1",d.data.labelcodeimg1),n(l,"labelcodeimg2",d.data.labelcodeimg2),n(l,"labelcodeimg3",d.data.labelcodeimg3),n(l,"latitude",d.data.latitude),n(l,"longitude",d.data.longitude),n(l,"info.gcmc",d.data.GCMC),n(l,"info.jdzch",d.data.JDZCH),n(l,"info.ljfs",d.data.LJFS),n(l,"info.gjph",d.data.SHARE4),n(l,"info.jtcj",d.data.SCCJ),n(l,"info.dwgc",d.data.DWGCMC),n(l,"info.ghdw",d.data.GHDWMC),n(l,"info.jzrname",d.data.JZRNAME),n(l,"info.qyrname",d.data.QYRNAME),n(l,"info.upload",d.data.upload),n(l,"info.fl",d.data.GYFL),n(l,"info.dbsl",d.data.GYFL),n(l,"info.sccj",d.data.GHDWMC),n(l,"info.pz",d.data.PZ),n(l,"info.gg",d.data.GG),n(l,"info.jb",d.data.JB),n(l,"info.dj",d.data.YHTJ),n(l,"info.kzdj",d.data.SHARE7),n(l,"info.lhph",d.data.PH_BH),n(l,"info.qybh",d.data.QYBH),n(l,"info.qynr",d.data.QYNR),n(l,"info.qybz",d.data.BZ),n(l,"info.qysj",d.data.QYRQ),n(l,"info.skbh",d.data.XMBH_GD),n(l,"info.ssfs",d.data.SSFS),n(l,"info.qddj",d.data.QDDJ),n(l,"info.jzbw",d.data.JZBW),n(l,"info.yplx",d.data.YPTYPE),n(l,"info.ggxh",d.data.GG),n(l,"info.yhtj",d.data.YHTJ),n(l,"info.sfcm",d.data.SFCM),n(l,"info.cxrq",d.data.CXRQ),n(l,"info.jgbw",d.data.JGBW),n(l,"info.labelcode1",d.data.labelcode1),n(l,"info.labelcode2",d.data.labelcode2),n(l,"info.labelcode3",d.data.labelcode3),l)),console.log(d.data.YPTYPE),"混凝土试块"==d.data.YPTYPE?a.setData({dbsldis:"none",sccjdis:"none",yplxdis:"none",pzdis:"none",jbdis:"none",ggdis:"none",qynrdis:"none",qybzdis:"none",qysjdis:"none",kzdjdis:"none",lhphdis:"none",gjphdis:"none",ljfsdis:"none",djdis:"none",jtcjdis:"none",qybhdis:"none"}):"钢筋原材"==d.data.YPTYPE?a.setData({ghdwdis:"none",fldis:"none",ssfsdis:"none",qddjdis:"none",jzbwdis:"none",yhtjdis:"none",sfcmdis:"none",cxrqdis:"none",labelcode2dis:"none",labelcode3dis:"none",gjphdis:"none",ljfsdis:"none",djdis:"none",jtcjdis:"none",jbdis:"none",qybhdis:"none"}):"钢筋焊接"==d.data.YPTYPE?a.setData({ghdwdis:"none",fldis:"none",ssfsdis:"none",qddjdis:"none",jzbwdis:"none",yhtjdis:"none",sfcmdis:"none",cxrqdis:"none",jgbwdis:"none",djdis:"none",jtcjdis:"none",labelcode2dis:"none",labelcode3dis:"none",jbdis:"none",lhphdis:"none",qybhdis:"none"}):"钢筋机械连接"==d.data.YPTYPE&&a.setData({ghdwdis:"none",fldis:"none",ssfsdis:"none",qddjdis:"none",jzbwdis:"none",yhtjdis:"none",sfcmdis:"none",cxrqdis:"none",gjphdis:"none",jbdis:"none",kzdjdis:"none",sccjdis:"none",qybhdis:"none",labelcode2dis:"none",labelcode3dis:"none"})}))},onHide:function(){},onUnload:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/skInfo/index.js'});require("pages/skInfo/index.js");