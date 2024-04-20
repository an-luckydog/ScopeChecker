$gwx_XC_127=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_127 || [];
function gz$gwx_XC_127_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_127_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_127_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_127_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_127_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_127_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_127=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_127=true;
var x=['./modules/mmcover/components/share-mask/share-mask.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_127_1()
var f55=_v()
_(r,f55)
if(_oz(z,0,e,s,gg)){f55.wxVkey=1
}
f55.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_127";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_127();	if (__vd_version_info__.delayedGwx) __wxAppCode__['modules/mmcover/components/share-mask/share-mask.wxml'] = [$gwx_XC_127, './modules/mmcover/components/share-mask/share-mask.wxml'];else __wxAppCode__['modules/mmcover/components/share-mask/share-mask.wxml'] = $gwx_XC_127( './modules/mmcover/components/share-mask/share-mask.wxml' );
	;__wxRoute = "modules/mmcover/components/share-mask/share-mask";__wxRouteBegin = true;__wxAppCurrentFile__="modules/mmcover/components/share-mask/share-mask.js";define("modules/mmcover/components/share-mask/share-mask.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=a(require("../../../../@babel/runtime/regenerator")),e=require("../../../../@babel/runtime/helpers/asyncToGenerator"),n=a(require("../../logic/Controller"));function a(t){return t&&t.__esModule?t:{default:t}}Component({properties:{show:{type:Boolean,value:!1},getShareParam:{type:Object,value:{}}},data:{sharePath:""},attached:function(){this.getSharePath()},show:function(){this.getSharePath()},methods:{hideShareView:function(){this.setData({show:!1})},addFavorite:function(){this.showLoading("收藏中");var t=this.data.sharePath,e=void 0===t?"":t;console.log(e),wx.addFileToFavorites({filePath:e,fileName:"红包封面闹钟",success:function(){return wx.showToast({title:"已收藏"})},fail:function(){return wx.showToast({icon:"none",title:"收藏失败"})}})},saveSharePic:function(){var n=this;return e(t.default.mark((function e(){var a,o;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.data.sharePath,o=void 0===a?"":a,n.getAlbumAuth().catch((function(){return n.guideAuthAlbum()})).then((function(){n.showLoading("保存中");wx.saveImageToPhotosAlbum({filePath:o,success:function(){return wx.showToast({title:"保存成功"})},fail:function(t){if(/cancel/.test(null==t?void 0:t.errMsg))return wx.hideLoading();wx.showToast({icon:"none",title:"保存失败"})}})})).catch((function(t){return!t.cancel&&wx.showToast({icon:"none",title:"获取授权失败，无法保存到相册"})}));case 2:case"end":return t.stop()}}),e)})))()},getAlbumAuth:function(){return new Promise((function(t,e){wx.getSetting({success:function(n){if(n.authSetting["scope.writePhotosAlbum"])return t();wx.authorize({scope:"scope.writePhotosAlbum",success:t,fail:e})}})}))},getSharePath:function(){var a=this;return e(t.default.mark((function e(){var o,r,i,s,u,c,h,l;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.data.getShareParam,r=void 0===o?{}:o,t.next=3,n.default.getShareImg(r);case 3:return i=t.sent,s=i.fileID,u=void 0===s?"":s,t.next=8,new Promise((function(t){return wx.cloud.downloadFile({fileID:u,success:t})}));case 8:c=t.sent,h=c.tempFilePath,l=void 0===h?"":h,a.setData({sharePath:l});case 12:case"end":return t.stop()}}),e)})))()},showLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请稍候...",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];wx.showLoading({title:t,mask:e})},handleMaskTap:function(){this.data.show&&this.setData({show:!1})},touchmove:function(){return!1}}});
},{isPage:false,isComponent:true,currentFile:'modules/mmcover/components/share-mask/share-mask.js'});require("modules/mmcover/components/share-mask/share-mask.js");