$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'fileList']])
Z([3,'index'])
Z([3,'file_name touch_action'])
Z([[7],[3,'isEdit']])
Z([[2,'!'],[[7],[3,'isEdit']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./pages/downloadList/downloadList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var xC=_v()
_(r,xC)
var oD=function(cF,fE,hG,gg){
var cI=_n('view')
_rz(z,cI,'class',2,cF,fE,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,3,cF,fE,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,4,cF,fE,gg)){lK.wxVkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,0,oD,e,s,gg,xC,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/downloadList/downloadList.wxml'] = [$gwx_XC_1, './pages/downloadList/downloadList.wxml'];else __wxAppCode__['pages/downloadList/downloadList.wxml'] = $gwx_XC_1( './pages/downloadList/downloadList.wxml' );
	;__wxRoute = "pages/downloadList/downloadList";__wxRouteBegin = true;__wxAppCurrentFile__="pages/downloadList/downloadList.js";define("pages/downloadList/downloadList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),o=require("../../@babel/runtime/helpers/asyncToGenerator");getApp();Page({data:{fileList:[],currentInfo:{},isEdit:!1,isAuthSavePhoto:!1},onLoad:function(e){var o=this;console.log("onload-options:",e);var t=JSON.parse(e.listInfo);console.log("listInfo:",t);t.fileList;var n=t.currentInfo;this.setData({currentInfo:n}),this.getSetting().then((function(e){console.log("onLoad-settingRes:",e),e.authSetting["scope.writePhotosAlbum"]?(console.log("早就同意了"),o.setData({isAuthSavePhoto:!0}),o.getList().then((function(e){o.downloadFile(null,n)})).catch((function(e){console.log("onload-getList-err:",e)}))):o.authorize("scope.writePhotosAlbum").then((function(){console.log("同意1"),o.setData({isAuthSavePhoto:!0}),o.getList().then((function(e){o.downloadFile(null,n)}))})).catch((function(){o.getList(),wx.showToast({title:"您拒绝了授权",icon:"none",duration:1500}),o.setData({isAuthSavePhoto:!1})}))}))},handleList:function(e){for(var o=[],t=0;t<e.length;t++)e[t].photoUrl&&(e[t].isVideo=this.checkVideoType(e[t].type),o.push(e[t]));this.setData({fileList:o})},getList:function(){var e=this;return new Promise((function(o,t){var n=getApp().globalData.baseUrl+"/media/console/api/processCore/queryUploadFile";console.log("getList-url:",n);var i=e;wx.request({url:n,method:"POST",data:{mediaId:i.data.currentInfo.mediaId,componentId:i.data.currentInfo.componentId},header:{"Content-Type":"application/json;charset=UTF-8","Mk-Sys-Source":"MARKET","Mk-Sys-Token":i.data.currentInfo.theTk},success:function(e){var t;console.log("获取列表数据res:",e);var n=(null===(t=e.data)||void 0===t?void 0:t.data)||[];i.handleList(n),o()},fail:function(e){console.log("getlist-请求失败：",e),t()}})}))},downloadFile:function(t,n){var i=this;console.log("downFile:",t);var s,a=this;s=n?{id:n.currentid,photoUrl:n.currentUrl,name:n.currentName,percent:0,type:n.currentType}:t.currentTarget.dataset.row,console.log("final-row:",s);var l,c=s,r=c.id,u=c.photoUrl,f=c.percent,g=c.name;f&&f>0?console.log("当前在下载中..."):wx.downloadFile({url:u,success:(l=o(e().mark((function o(t){var n,i,l,c,u;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.statusCode&&(console.log("downloadFile-res:",t),n=t.tempFilePath,i=wx.env.USER_DATA_PATH+"/"+g,l=wx.getFileSystemManager(),console.log("row:",s),s.type.includes("video")||s.type.includes("image")?(c=a.data.fileList,(u=c.findIndex((function(e){return e.id===r})))>=0&&(c[u].filePath=n,a.setData({fileList:c})),a.getSetting().then((function(e){console.log("settingRes:",e),e.authSetting["scope.writePhotosAlbum"]?(console.log("早就同意了2"),a.setData({isAuthSavePhoto:!0})):a.onOpenSetting().then((function(){console.log("同意2"),a.setData({isAuthSavePhoto:!0})})).catch((function(){wx.showToast({title:"您拒绝了授权",icon:"none",duration:1500}),a.setData({isAuthSavePhoto:!1})}))})).then((function(){a.data.isAuthSavePhoto&&(console.log("用户已经授权"),s.type.includes("video")?(console.log("是视频格式"),wx.saveVideoToPhotosAlbum({filePath:t.tempFilePath,success:function(e){console.log("videores:",e),wx.showToast({title:"已保存至相册",icon:"none",duration:1500})},fail:function(e){console.log("saveVideoToPhotosAlbum失败：",e)}})):s.type.includes("image")&&(console.log("是图片格式"),wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(e){console.log("saveImageToPhotosAlbum-res:",e),wx.showToast({title:"已保存至相册",icon:"none",duration:1500})},fail:function(e){console.log("fail-saveImageToPhotosAlbum",e)}})))}))):l.saveFile({tempFilePath:t.tempFilePath,filePath:i,success:function(e){console.log("文件保存成功",e);var o=e.savedFilePath,t=a.data.fileList,n=t.findIndex((function(e){return e.id===r}));n>=0&&(t[n].filePath=o,a.setData({fileList:t})),console.log("currentInfo的操作"),wx.showModal({title:"文件保存成功",content:"是否打开文件？",success:function(e){e.confirm?wx.openDocument({filePath:o,showMenu:!0,success:function(e){console.log("打开文档成功-res:",e)},fail:function(e){console.log("打开文档失败1：",e),wx.showToast({title:"暂不支持此格式文件预览",icon:"none",duration:1500})}}):e.cancel&&console.log("用户点击取消")}})},fail:function(e){console.log("文件保存失败",e)}}));case 1:case"end":return e.stop()}}),o)}))),function(e){return l.apply(this,arguments)})}).onProgressUpdate((function(e){console.log("下载进度",e.progress);for(var o=i.data.fileList,t=0;t<o.length;t++)if(o[t].id===r){o[t].percent=e.progress,console.log("fileList[i].percent:",o[t].percent),i.setData({fileList:o});break}}))},getSetting:function(){return new Promise((function(e,o){wx.getSetting({success:function(o){e(o)}})}))},authorize:function(e){return new Promise((function(o,t){wx.authorize({scope:e,success:function(){o()},fail:function(e){console.log("拒绝授权"),t()}})}))},onOpenSetting:function(){var e=this;return new Promise((function(o,t){wx.openSetting({success:function(t){console.log(t.authSetting),t.authSetting["scope.writePhotosAlbum"]?(e.setData({isAuthSavePhoto:!0}),o()):(wx.showToast({title:"您未授权",icon:"none",duration:1500}),e.setData({isAuthSavePhoto:!1}))}})}))},openFile:function(e){var o=e.currentTarget.dataset.row;console.log("data:",o);var t=o.filePath||wx.env.USER_DATA_PATH+"/"+o.name;console.log("filePath:",t),wx.openDocument({filePath:t,showMenu:!0,success:function(e){console.log("打开文档成功-res:",e)},fail:function(e){console.log("打开文档失败2：",e),wx.showToast({title:"暂不支持此格式文件预览",icon:"none",duration:1500})}})},fileSave:function(e,o,t){return new Promise((function(n,i){wx.getFileSystemManager().saveFile({tempFilePath:e,filePath:o+"/"+t,success:function(e){console.log("fileSave-res:",e),console.log("文件路径1：",o+"/"+t),n(e)},fail:function(e){i(e)}})}))},fileMkdir:function(e){return new Promise((function(o,t){wx.getFileSystemManager().mkdir({dirPath:e,success:function(e){o(e)},fail:function(e){t(e)}})}))},fileExist:function(e){return new Promise((function(o,t){wx.getFileSystemManager().access({path:e,success:function(e){o(e)},fail:function(e){t(e)}})}))},getImgTypeByUrl:function(e){var o;if(!e)return"images/filetype/other.svg";switch(e){case"doc":case"docx":o="images/filetype/doc.svg";break;case"pdf":o="images/filetype/pdf.svg";break;case"ppt":case"pptx":o="images/filetype/ppt.svg";break;case"xls":case"xlsx":o="images/filetype/excel.svg";break;case"rar":o="images/filetype/rar.svg";break;case"zip":o="images/filetype/zip.svg";break;default:o="images/filetype/other.svg"}return o},checkVideoType:function(e){console.log("type----\x3e",e);return["video/mp4","video/webm","video/ogg","video/quicktime"].includes(e)},handlePostMessage:function(e){var o=e.detail;console.log(222,o)}});
},{isPage:true,isComponent:true,currentFile:'pages/downloadList/downloadList.js'});require("pages/downloadList/downloadList.js");