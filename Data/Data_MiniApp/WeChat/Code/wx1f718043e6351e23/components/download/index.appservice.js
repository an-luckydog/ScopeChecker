$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'ready']])
Z([3,'file-download'])
Z([[2,'!'],[[7],[3,'pic']]])
Z([[2,'!'],[[7],[3,'error']]])
Z(z[3])
Z([[7],[3,'previewStatus']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./components/download/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var c3B=_v()
_(r,c3B)
if(_oz(z,0,e,s,gg)){c3B.wxVkey=1
var o4B=_n('view')
_rz(z,o4B,'class',1,e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,2,e,s,gg)){l5B.wxVkey=1
var t7B=_v()
_(l5B,t7B)
if(_oz(z,3,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(l5B,e8B)
if(_oz(z,4,e,s,gg)){e8B.wxVkey=1
}
t7B.wxXCkey=1
e8B.wxXCkey=1
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,5,e,s,gg)){a6B.wxVkey=1
}
l5B.wxXCkey=1
a6B.wxXCkey=1
_(c3B,o4B)
}
var b9B=_n('Privacy')
_(r,b9B)
c3B.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/download/index.wxml'] = [$gwx_XC_9, './components/download/index.wxml'];else __wxAppCode__['components/download/index.wxml'] = $gwx_XC_9( './components/download/index.wxml' );
	;__wxRoute = "components/download/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/download/index.js";define("components/download/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=getApp(),t=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,i=["ppt","pptx","pdf","doc","docx","xls","xlsx","png","jpg","jpeg","bmp","gif"];Component({properties:{info:{type:Object}},data:{ready:!0,fileType:"default",downloadStatus:1,errorText:"",progress:0,isHiddenEmailDialog:!0,email:""},attached:function(){this.initFile(),this.getFormTplEmail()},methods:{getFileType:function(e){var t=e.replace(/^.*\.(.*)$/,"$1"),a="";switch(i.indexOf(t)){case 0:case 1:a="ppt";break;case 2:a="pdf";break;case 3:case 4:a="word";break;case 5:case 6:a="excel";break;case 7:case 8:case 9:case 10:case 11:a="pic",this.setData({pic:!0});break;default:a="default"}return a},initFile:function(){var t=this.getFileId(this.data.info.file_url),i=e.globalData.fileCollect[t];this.setData({fileId:t}),i?this.setData({progress:100,tempFilePath:i.tempFilePath,size:i.size,fileType:i.fileType,status:"下载完成",previewStatus:!0}):this.downloadFile()},formatFileSize:function(e){var t="K",i=Math.floor(e/1024);return i>1024&&(i=(i/1024).toFixed(2),t="M"),i+t},openFile:function(){var e=this.data.tempFilePath;wx.openDocument({filePath:e,showMenu:!0})},copyUrl:function(){var e=this.data.info;wx.setClipboardData({data:e.file_url,success:function(e){wx.getClipboardData({success:function(e){wx.showToast({title:"下载链接复制成功，请到浏览器粘贴下载",icon:"none",duration:2e3})}})}})},previewImg:function(){var e=this.data.info.file_url;wx.previewImage({urls:[e]})},getFileId:function(e){return e.replace(/^(.*)\..*$/,"$1").slice(-30,-1)},downloadFile:function(){var t=this,i=this.data,a=i.info,s=i.fileId,l=a.file_url,o=this.getFileType(l);if(this.setData({status:"下载中...",ready:!0,fileType:o}),"default"===o)this.setData({status:"小程序暂不支持此类型文件预览",error:!0,ready:!0});else if("pic"===o)this.setData({previewStatus:!0,ready:!0});else{wx.downloadFile({url:l,success:function(i){var a=i.tempFilePath;if(200===i.statusCode){var l=t.data.size;e.globalData.fileCollect[s]={size:l,fileType:o,tempFilePath:a},t.setData({status:"下载完成",previewStatus:!0,tempFilePath:a})}else t.setData({status:"下载失败，文件无效或者过期",error:!0})},fail:function(e){console.log("下载错误",e)}}).onProgressUpdate((function(e){var i=e.progress,a=e.totalBytesWritten;t.setData({progress:i,size:t.formatFileSize(a)})}))}},getFormTplEmail:function(){var t=this,i=wx.getStorageSync("_download_tpl_");i&&e.API.getFormTpl(i).then((function(e){var i=e.content.itemList.filter((function(e){return["mail","email"].includes(e.name)}));i.length&&t.setData({email:i[0].historyData})}))},openEmailDialog:function(){this.setData({isHiddenEmailDialog:!1})},closeEmailDialog:function(){this.setData({isHiddenEmailDialog:!0})},emailChange:function(e){this.setData({email:e.detail.value})},validtorEmail:function(){var e=this.data.email;return e?!!t.test(e)||(wx.showToast({title:"请输入正确的邮箱",icon:"none"}),!1):(wx.showToast({title:"请输入邮箱",icon:"none"}),!1)},sendFileByEmail:function(){var t=this,i=this.data.email,a=this.data.info,s=a.id,l=a.source_id;if(this.validtorEmail()){var o=getCurrentPages(),n="pages/scene/download_list/index"===o[o.length-2].route;e.API.sendFileByEmail({email:i,source_id:l,file_id:s,type:n?"scene":""}).then((function(){t.closeEmailDialog(),wx.showToast({title:"发送成功!",icon:"none"})})).catch((function(){wx.showToast({title:"发送失败!",icon:"none"})}))}}}});
},{isPage:false,isComponent:true,currentFile:'components/download/index.js'});require("components/download/index.js");