$gwx_XC_89=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_89 || [];
function gz$gwx_XC_89_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-uploader__wrapper'])
Z([[7],[3,'lists']])
Z([3,'index'])
Z([[7],[3,'previewImage']])
Z([3,'onClickPreview'])
Z([3,'van-uploader__preview'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'isImage']])
Z([[6],[[7],[3,'item']],[3,'isVideo']])
Z([3,'onPreviewFile'])
Z([3,'van-uploader__file'])
Z(z[6])
Z([[12],[[6],[[7],[3,'computed']],[3,'sizeStyle']],[[5],[[8],'previewSize',[[7],[3,'previewSize']]]]])
Z([3,'van-uploader__file-icon'])
Z([3,'description'])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'uploading']],[[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'failed']]])
Z([3,'van-uploader__mask'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'failed']])
Z([3,'van-uploader__mask-icon'])
Z([3,'close'])
Z([3,'van-uploader__loading'])
Z([[6],[[7],[3,'item']],[3,'message']])
Z([[2,'&&'],[[7],[3,'deletable']],[[6],[[7],[3,'item']],[3,'deletable']]])
Z([3,'deleteItem'])
Z([3,'van-uploader__preview-delete'])
Z(z[6])
Z([3,'van-uploader__preview-delete-icon'])
Z([3,'cross'])
Z([[7],[3,'isInCount']])
Z([3,'startUpload'])
Z([3,'van-uploader__slot'])
Z([[7],[3,'showUpload']])
Z(z[29])
Z([a,[3,'van-uploader__upload '],[[2,'?:'],[[7],[3,'disabled']],[1,'van-uploader__upload--disabled'],[1,'']]])
Z(z[12])
Z([3,'van-uploader__upload-icon'])
Z([[7],[3,'uploadIcon']])
Z([[7],[3,'uploadText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_89=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_89=true;
var x=['./wxcomponents/vant/uploader/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_89_1()
var c9X=_n('view')
_rz(z,c9X,'class',0,e,s,gg)
var lAY=_v()
_(c9X,lAY)
var aBY=function(eDY,tCY,bEY,gg){
var xGY=_v()
_(bEY,xGY)
if(_oz(z,3,eDY,tCY,gg)){xGY.wxVkey=1
var oHY=_mz(z,'view',['bindtap',4,'class',1,'data-index',2],[],eDY,tCY,gg)
var fIY=_v()
_(oHY,fIY)
if(_oz(z,7,eDY,tCY,gg)){fIY.wxVkey=1
}
else if(_oz(z,8,eDY,tCY,gg)){fIY.wxVkey=2
}
else{fIY.wxVkey=3
var oLY=_mz(z,'view',['bindtap',9,'class',1,'data-index',2,'style',3],[],eDY,tCY,gg)
var cMY=_mz(z,'van-icon',['class',13,'name',1],[],eDY,tCY,gg)
_(oLY,cMY)
_(fIY,oLY)
}
var cJY=_v()
_(oHY,cJY)
if(_oz(z,15,eDY,tCY,gg)){cJY.wxVkey=1
var oNY=_n('view')
_rz(z,oNY,'class',16,eDY,tCY,gg)
var lOY=_v()
_(oNY,lOY)
if(_oz(z,17,eDY,tCY,gg)){lOY.wxVkey=1
var tQY=_mz(z,'van-icon',['class',18,'name',1],[],eDY,tCY,gg)
_(lOY,tQY)
}
else{lOY.wxVkey=2
var eRY=_n('van-loading')
_rz(z,eRY,'customClass',20,eDY,tCY,gg)
_(lOY,eRY)
}
var aPY=_v()
_(oNY,aPY)
if(_oz(z,21,eDY,tCY,gg)){aPY.wxVkey=1
}
lOY.wxXCkey=1
lOY.wxXCkey=3
lOY.wxXCkey=3
aPY.wxXCkey=1
_(cJY,oNY)
}
var hKY=_v()
_(oHY,hKY)
if(_oz(z,22,eDY,tCY,gg)){hKY.wxVkey=1
var bSY=_mz(z,'view',['catch:tap',23,'class',1,'data-index',2],[],eDY,tCY,gg)
var oTY=_mz(z,'van-icon',['class',26,'name',1],[],eDY,tCY,gg)
_(bSY,oTY)
_(hKY,bSY)
}
fIY.wxXCkey=1
fIY.wxXCkey=3
cJY.wxXCkey=1
cJY.wxXCkey=3
hKY.wxXCkey=1
hKY.wxXCkey=3
_(xGY,oHY)
}
xGY.wxXCkey=1
xGY.wxXCkey=3
return bEY
}
lAY.wxXCkey=4
_2z(z,1,aBY,e,s,gg,lAY,'item','index','index')
var o0X=_v()
_(c9X,o0X)
if(_oz(z,28,e,s,gg)){o0X.wxVkey=1
var oVY=_mz(z,'view',['bindtap',29,'class',1],[],e,s,gg)
var fWY=_n('slot')
_(oVY,fWY)
_(o0X,oVY)
var xUY=_v()
_(o0X,xUY)
if(_oz(z,31,e,s,gg)){xUY.wxVkey=1
var cXY=_mz(z,'view',['bindtap',32,'class',1,'style',2],[],e,s,gg)
var oZY=_mz(z,'van-icon',['class',35,'name',1],[],e,s,gg)
_(cXY,oZY)
var hYY=_v()
_(cXY,hYY)
if(_oz(z,37,e,s,gg)){hYY.wxVkey=1
}
hYY.wxXCkey=1
_(xUY,cXY)
}
xUY.wxXCkey=1
xUY.wxXCkey=3
}
o0X.wxXCkey=1
o0X.wxXCkey=3
_(r,c9X)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_89";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_89();	if (__vd_version_info__.delayedGwx) __wxAppCode__['wxcomponents/vant/uploader/index.wxml'] = [$gwx_XC_89, './wxcomponents/vant/uploader/index.wxml'];else __wxAppCode__['wxcomponents/vant/uploader/index.wxml'] = $gwx_XC_89( './wxcomponents/vant/uploader/index.wxml' );
	;__wxRoute = "wxcomponents/vant/uploader/index";__wxRouteBegin = true;__wxAppCurrentFile__="wxcomponents/vant/uploader/index.js";define("wxcomponents/vant/uploader/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../common/component"),t=require("./utils"),i=require("./shared"),a=require("../common/validator");(0,e.VantComponent)({props:Object.assign(Object.assign(Object.assign(Object.assign({disabled:Boolean,multiple:Boolean,uploadText:String,useBeforeRead:Boolean,afterRead:null,beforeRead:null,previewSize:{type:null,value:80},name:{type:null,value:""},accept:{type:String,value:"image"},fileList:{type:Array,value:[],observer:"formatFileList"},maxSize:{type:Number,value:Number.MAX_VALUE},maxCount:{type:Number,value:100},deletable:{type:Boolean,value:!0},showUpload:{type:Boolean,value:!0},previewImage:{type:Boolean,value:!0},previewFullImage:{type:Boolean,value:!0},videoFit:{type:String,value:"contain"},imageFit:{type:String,value:"scaleToFill"},uploadIcon:{type:String,value:"photograph"}},i.imageProps),i.videoProps),i.mediaProps),i.messageFileProps),data:{lists:[],isInCount:!0},methods:{formatFileList:function(){var e=this.data,i=e.fileList,n=void 0===i?[]:i,s=e.maxCount,o=n.map((function(e){return Object.assign(Object.assign({},e),{isImage:(0,t.isImageFile)(e),isVideo:(0,t.isVideoFile)(e),deletable:!(0,a.isBoolean)(e.deletable)||e.deletable})}));this.setData({lists:o,isInCount:o.length<s})},getDetail:function(e){return{name:this.data.name,index:null==e?this.data.fileList.length:e}},startUpload:function(){var e=this,i=this.data,a=i.maxCount,n=i.multiple,s=i.lists;i.disabled||(0,t.chooseFile)(Object.assign(Object.assign({},this.data),{maxCount:a-s.length})).then((function(t){e.onBeforeRead(n?t:t[0])})).catch((function(t){e.$emit("error",t)}))},onBeforeRead:function(e){var t=this,i=this.data,n=i.beforeRead,s=i.useBeforeRead,o=!0;"function"==typeof n&&(o=n(e,this.getDetail())),s&&(o=new Promise((function(i,a){t.$emit("before-read",Object.assign(Object.assign({file:e},t.getDetail()),{callback:function(e){e?i():a()}}))}))),o&&((0,a.isPromise)(o)?o.then((function(i){return t.onAfterRead(i||e)})):this.onAfterRead(e))},onAfterRead:function(e){var t=this.data,i=t.maxSize,a=t.afterRead;(Array.isArray(e)?e.some((function(e){return e.size>i})):e.size>i)?this.$emit("oversize",Object.assign({file:e},this.getDetail())):("function"==typeof a&&a(e,this.getDetail()),this.$emit("after-read",Object.assign({file:e},this.getDetail())))},deleteItem:function(e){var t=e.currentTarget.dataset.index;this.$emit("delete",Object.assign(Object.assign({},this.getDetail(t)),{file:this.data.fileList[t]}))},onPreviewImage:function(e){if(this.data.previewFullImage){var i=e.currentTarget.dataset.index,a=this.data,n=a.lists,s=a.showmenu,o=n[i];wx.previewImage({urls:n.filter((function(e){return(0,t.isImageFile)(e)})).map((function(e){return e.url})),current:o.url,showmenu:s,fail:function(){wx.showToast({title:"预览图片失败",icon:"none"})}})}},onPreviewVideo:function(e){if(this.data.previewFullImage){var i=e.currentTarget.dataset.index,a=this.data.lists,n=[],s=a.reduce((function(e,a,s){return(0,t.isVideoFile)(a)?(n.push(Object.assign(Object.assign({},a),{type:"video"})),s<i&&e++,e):e}),0);wx.previewMedia({sources:n,current:s,fail:function(){wx.showToast({title:"预览视频失败",icon:"none"})}})}},onPreviewFile:function(e){var t=e.currentTarget.dataset.index;wx.openDocument({filePath:this.data.lists[t].url,showMenu:!0})},onClickPreview:function(e){var t=e.currentTarget.dataset.index,i=this.data.lists[t];this.$emit("click-preview",Object.assign(Object.assign({},i),this.getDetail(t)))}}});
},{isPage:false,isComponent:true,currentFile:'wxcomponents/vant/uploader/index.js'});require("wxcomponents/vant/uploader/index.js");