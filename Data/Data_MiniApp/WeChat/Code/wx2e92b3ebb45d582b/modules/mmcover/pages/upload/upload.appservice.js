$gwx_XC_132=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_132 || [];
function gz$gwx_XC_132_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_132_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_132_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_132_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'navbar'])
Z([a,[3,'background-color: '],[[12],[[6],[[7],[3,'tools']],[3,'bgColor']],[[5],[[7],[3,'scrollTop']]]],[3,'; z-index: 100;font-size: 34rpx;']])
Z([1,true])
Z([3,'#fff'])
Z(z[2])
Z([3,'上传封面线索'])
Z([3,'handleIconTap'])
Z([3,'white'])
Z([3,'arrow-left'])
Z([3,'40rpx'])
Z([3,'left'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_132_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_132_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_132=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_132=true;
var x=['./modules/mmcover/pages/upload/upload.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_132_1()
var fO7=_mz(z,'navbar',['class',0,'customStyle',1,'fixed',1,'frontColor',2,'placeholder',3,'title',4],[],e,s,gg)
var cP7=_mz(z,'vant-icon',['catchtap',6,'color',1,'name',2,'size',3,'slot',4],[],e,s,gg)
_(fO7,cP7)
_(r,fO7)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_132";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_132();	if (__vd_version_info__.delayedGwx) __wxAppCode__['modules/mmcover/pages/upload/upload.wxml'] = [$gwx_XC_132, './modules/mmcover/pages/upload/upload.wxml'];else __wxAppCode__['modules/mmcover/pages/upload/upload.wxml'] = $gwx_XC_132( './modules/mmcover/pages/upload/upload.wxml' );
	;__wxRoute = "modules/mmcover/pages/upload/upload";__wxRouteBegin = true;__wxAppCurrentFile__="modules/mmcover/pages/upload/upload.js";define("modules/mmcover/pages/upload/upload.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=r(require("../../../../@babel/runtime/regenerator")),t=require("../../../../@babel/runtime/helpers/slicedToArray"),a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),n=r(require("../../logic/Controller"));function r(e){return e&&e.__esModule?e:{default:e}}var i=getApp({allowDefault:!0});Page({data:{form:{brandName:"",issueType:"",distributionTime:["",""],brief:"",coverImage:""},filePath:"",scrollTop:0},bindchange:function(e){var t=e.currentTarget,a=void 0===t?{}:t,n=e.detail,r=void 0===n?{}:n,i=a.dataset,o=(void 0===i?{}:i).type,c=void 0===o?"":o,s=r.value,u=void 0===s?"":s,l=this.data.form,d=void 0===l?{}:l;"date"===c?d.distributionTime[0]=u:"time"===c?d.distributionTime[1]=u:d[c]=u,this.setData({form:d})},handleImageTap:function(){var n=this;return a(e.default.mark((function a(){var r,o,c,s,u,l,d;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.tms.getLoginInfo();case 2:return r=e.sent,o=r.userId,e.prev=4,e.next=7,new Promise((function(e,t){wx.chooseMedia({count:1,mediaType:["image"],success:e,fail:t})}));case 7:return c=e.sent,s=c.tempFiles,u=t(void 0===s?[]:s,1),l=u[0].tempFilePath,d=void 0===l?"":l,e.next=13,n.uploadImage(o,d);case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(4);case 17:case"end":return e.stop()}}),a,null,[[4,15]])})))()},uploadImage:function(t,n){var r=this;return a(e.default.mark((function a(){var i,o,c,s,u,l;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(new Date).getTime(),o=n.split(".")[1],c="user-upload/images/".concat(t,"-").concat(i,".").concat(o),e.prev=3,e.next=6,new Promise((function(e,t){wx.cloud.uploadFile({cloudPath:c,filePath:n,success:e,fail:t})}));case 6:s=e.sent,u=s.fileID,l=void 0===u?"":u,r.setData({"form.coverImage":l,filePath:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),wx.showToast({icon:"none",title:"上传图片失败"});case 15:case"end":return e.stop()}}),a,null,[[3,12]])})))()},handleBtntap:function(){var t=this;return a(e.default.mark((function a(){var r,i,o,c,s,u,l,d;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.data.form,i=r.brandName,o=void 0===i?"":i,c=r.distributionTime,s=void 0===c?[]:c,u=r.issueType,l=void 0===u?"":u,o&&l){e.next=6;break}return d=o?"请填写红包封面发放方式":"请填写红包封面名称",wx.showToast({icon:"none",title:d}),e.abrupt("return");case 6:return s[0]&&s[1]?r.distributionTime="".concat(s[0]," ").concat(s[1]):r.distributionTime="",e.prev=8,e.next=11,n.default.uploadRedenv(r);case 11:wx.showModal({title:"上传成功",content:"感谢您的上传，为更多小伙伴们带来新的封面线索",showCancel:!1,confirmText:"我知道了",success:t.handleIconTap}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),wx.showToast({icon:"none",title:"上传失败"});case 17:case"end":return e.stop()}}),a,null,[[8,14]])})))()},handleIconTap:function(){wx.navigateBack()},onPageScroll:function(e){this.setData({scrollTop:e.scrollTop})}});
},{isPage:true,isComponent:true,currentFile:'modules/mmcover/pages/upload/upload.js'});require("modules/mmcover/pages/upload/upload.js");