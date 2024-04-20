$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'formConf']])
Z([3,'name'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'formType']],[1,'group']])
Z([3,'margin-bottom: 40rpx;'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isHideLabel']]])
Z([[6],[[7],[3,'item']],[3,'required']])
Z([3,'child'])
Z([[6],[[7],[3,'item']],[3,'children']])
Z(z[1])
Z([[9],[[8],'formData',[[7],[3,'formData']]],[[8],'formObject',[[7],[3,'child']]]])
Z([3,'formGroup'])
Z([[9],[[8],'formData',[[7],[3,'formData']]],[[8],'formObject',[[7],[3,'item']]]])
Z(z[10])
Z([[2,'&&'],[[7],[3,'privacy']],[[2,'!'],[[6],[[7],[3,'footer']],[3,'text']]]])
Z([[2,'&&'],[[6],[[7],[3,'footer']],[3,'text']],[[7],[3,'privacy']]])
Z(z[10])
Z([[6],[[7],[3,'formObject']],[3,'isCode']])
Z([3,'codeFieldValid'])
Z([3,'sendCode'])
Z([[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'dependentPropertyName']]])
Z([3,'fieldChange'])
Z([[2,'?:'],[[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'dependentPropertyName']]],[[6],[[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'dependentPropertyName']]],[3,'value']],[1,'']])
Z([[7],[3,'formObject']])
Z([[6],[[6],[[7],[3,'formData']],[[6],[[7],[3,'formObject']],[3,'name']]],[3,'setError']])
Z([3,'doRequest'])
Z(z[20])
Z([3,'getOption'])
Z([3,'initOption'])
Z(z[21])
Z(z[22])
Z(z[23])
Z([3,'closepop'])
Z([[7],[3,'showpop']])
Z([[7],[3,'word']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./components/form-box/form/index.wxml'];d_[x[0]]={}
d_[x[0]]["formGroup"]=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var b=x[0]+':formGroup'
r.wxVkey=b
gg.f=$gdc(f_["./components/form-box/form/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,16,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'form-code-view',['bind:codeFieldValid',17,'bind:sendCode',1,'dependentObject',2],[],e,s,gg)
var oD=_mz(z,'form-group',['bind:fieldChange',20,'dependentValue',1,'formObject',2,'setError',3],[],e,s,gg)
_(xC,oD)
_(oB,xC)
}
else{oB.wxVkey=2
var fE=_mz(z,'form-group',['bind:doRequest',24,'bind:fieldChange',1,'bind:getOption',2,'bind:initOption',3,'dependentValue',4,'formObject',5,'setError',6],[],e,s,gg)
_(oB,fE)
}
oB.wxXCkey=1
oB.wxXCkey=3
oB.wxXCkey=3
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var aPD=_v()
_(r,aPD)
var tQD=function(bSD,eRD,oTD,gg){
var oVD=_v()
_(oTD,oVD)
if(_oz(z,2,bSD,eRD,gg)){oVD.wxVkey=1
var fWD=_n('view')
_rz(z,fWD,'style',3,bSD,eRD,gg)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,4,bSD,eRD,gg)){cXD.wxVkey=1
var hYD=_v()
_(cXD,hYD)
if(_oz(z,5,bSD,eRD,gg)){hYD.wxVkey=1
}
hYD.wxXCkey=1
}
var oZD=_v()
_(fWD,oZD)
var c1D=function(l3D,o2D,a4D,gg){
var e6D=_v()
_(a4D,e6D)
var b7D=_oz(z,10,l3D,o2D,gg)
var o8D=_gd(x[0],b7D,e_,d_)
if(o8D){
var x9D=_1z(z,9,l3D,o2D,gg) || {}
var cur_globalf=gg.f
e6D.wxXCkey=3
o8D(x9D,x9D,e6D,gg)
gg.f=cur_globalf
}
else _w(b7D,x[0],3,377)
return a4D
}
oZD.wxXCkey=2
_2z(z,7,c1D,bSD,eRD,gg,oZD,'child','index','name')
cXD.wxXCkey=1
_(oVD,fWD)
}
else{oVD.wxVkey=2
var o0D=_v()
_(oVD,o0D)
var fAE=_oz(z,12,bSD,eRD,gg)
var cBE=_gd(x[0],fAE,e_,d_)
if(cBE){
var hCE=_1z(z,11,bSD,eRD,gg) || {}
var cur_globalf=gg.f
o0D.wxXCkey=3
cBE(hCE,hCE,o0D,gg)
gg.f=cur_globalf
}
else _w(fAE,x[0],3,512)
}
oVD.wxXCkey=1
return oTD
}
aPD.wxXCkey=2
_2z(z,0,tQD,e,s,gg,aPD,'item','index','name')
var oND=_v()
_(r,oND)
if(_oz(z,13,e,s,gg)){oND.wxVkey=1
}
var lOD=_v()
_(r,lOD)
if(_oz(z,14,e,s,gg)){lOD.wxVkey=1
}
var oDE=_mz(z,'popup',['btntap',31,'isShow',1,'word',2],[],e,s,gg)
_(r,oDE)
oND.wxXCkey=1
lOD.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form-box/form/index.wxml'] = [$gwx_XC_16, './components/form-box/form/index.wxml'];else __wxAppCode__['components/form-box/form/index.wxml'] = $gwx_XC_16( './components/form-box/form/index.wxml' );
	;__wxRoute = "components/form-box/form/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/form-box/form/index.js";define("components/form-box/form/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/defineProperty"),e=require("miniprogram-computed");Component({behaviors:[e],properties:{formConf:{type:Array,value:[]},privacy:{type:Boolean,value:!1},footer:{type:Object,default:{}},mode:{type:String,value:""}},data:{formData:{},formValid:{},showpop:!1,word:"本次活动由腾讯云计算（北京）有限责任公司（以下简称“我们”）作为主办方进行组织运营和管理。当您在访问活动信息、注册报名及参与活动时（以下简称“服务”），请您务必仔细阅读本隐私政策。此隐私政策旨在帮助您了解我们会收集哪些数据、为什么收集这些数据，会利用这些数据做些什么及如何保护这些数据。请您务必认真阅读本隐私政策，在确认充分了解并同意后使用本服务。\n一、个人信息的收集和使用 \n我们提供服务时，可能会收集下列与您有关的个人信息： \n1、您在本页面所涉及的表单中输入/选择的信息包括：姓名、手机号、公司、职务。请您注意，具体需要填写的信息可能会根据我们提供的产品/服务的不同而有所差异，请以届时向您展示的服务以及所对应的要求填写相关个人信息，但我们会在下文向您说明相关个人信息的收集和使用规则。 \n2、行为数据:在您使用本服务过程中您的行为信息。我们会收集您在访问、使用本服务时的终端行为和表现，在此过程中收集并储存的数据包括但不限于：您的浏览、分享、转发、点击以及从哪个渠道点击进入本界面等行为信息。 \n3、您需要注意的是，以上个人信息均是您自愿提供。这些信息对于我们组织运营和管理本次活动而言是必需的，您可以拒绝向我们提供这些信息，但可能无法正常使用相应的服务、功能或者无法达到服务拟达到的效果。 \n4、我们将使用上述收集的个人信息自行或委托我们的技术合作伙伴通过邮件、短信、电销等方法与您取得联系，并通过人工或语音机器人的方式与您沟通本次或其他的服务、产品、活动等相关事宜。如果您不愿意接收这些讯息，可以根据邮件、短信、电话中的提示拒绝接收这些讯息，我们将不会再向您发送此类讯息。 \n二、我们如何存储信息 \n1、信息存储的地点 \n我们会按照法律法规规定，将境内收集的用户个人信息存储于中国境内。 \n2、信息存储的期限 \n一般而言，我们仅为实现目的所必需的时间保留您的个人信息，在超过上述期限后，我们会对您的信息进行删除或进行匿名化处理（即会对您的个人信息进行处理以使您的身份无法被任何第三方识别）。请您注意，如果法律、行政法规规定的保存期限未届满，或者删除个人信息从技术上难以实现的，我们会停止除存储和采取必要的安全保护措施之外的个人信息处理。 \n3、安全措施 \n为了保障您的信息安全，我们将按照行业通行标准、努力采取合理的物理、电子和管理方面的安全措施来保护您的信息，并尽商业上的合理努力使您的信息不会被泄漏、毁损或者丢失，包括但不限于SSL、信息加密存储、数据中心的访问控制。您个人信息的访问权限仅限于为根据本政策完成工作任务或进行技术维护工作需要处理您个人信息的人员。我们收集的信息保存于不向公众开放的安全运行环境之中。为避免未经授权的访问，我们将其保存在有防火墙保护并可能加密的服务器之中。 \n三、您的权利 \n1、\t查阅、复制、转移权 \n您可以联系我们以查阅、复制您的个人信息。您也有权根据法律法规的规定要求我们将个人信息转移至其他个人信息处理者。 \n2、更正、补充权 \n您有权联系我们对错误或不完整的个人信息作出更正或补充。 \n3、撤回同意权 \n您可以联系我们以撤回对我们处理您的个人信息的同意。 \n4、删除权 \n如果您主动删除您的个人信息，我们将依据法律法规规定删除您的信息做匿名化处理。 \n5、获得解释的权利 \n您有权要求我们对本隐私政策以及我们如何处理您的个人信息作出解释。 \n四、未成年人保护 \n我们重视未成年人的个人信息保护。根据相关法律法规的规定，如您为未成年人，在访问、使用本服务前应事先征得您的监护人同意。 \n五、联系我们 \n如果您对本政策有任何问题、建议或投诉或打算行使三中您的权利，您可以发送邮件至 CSIG_Marketing@tencent.com或拨打我们的客服电话 021-54569595等多种方式与我们联系。 \n六、适用法律 \n本隐私政策适用中华人民共和国法律。 \n七、变更 \n我们会适时对本隐私政策进行修订，公司会将修改后的隐私政策予以发布。但未经您明确同意，我们不会削减您按照本隐私政策所应享有的权利。若您在新版本隐私政策生效后继续使用本服务，即表示同意接受经修订的隐私政策的约束。 \n"},computed:{fieldList:function(t){var e=[];return t.formConf.forEach((function(t){"group"===t.formType?t.children.forEach((function(t){e.push(t)})):e.push(t)})),e}},methods:{closepop:function(){this.setData({showpop:!1})},popupin:function(){this.setData({showpop:!0})},checkchange:function(t){this.data.privacyok=t.detail.value.length>0},fieldChange:function(e){var n=e.detail,i=n.name,o=n.value,a=void 0===o?"":o,r=n.checkText,c=n.checkStatus,s=n.skipSubmit;this.setData(t({},"formData.".concat(i),{name:i,value:a,checkStatus:c,checkText:r,skipSubmit:s})),this.triggerEvent("fieldChange",{name:i,value:a,skipSubmit:s})},fieldValidate:function(t){var e=this.data.formData[t];return!!e.checkStatus||(wx.showToast({title:e.checkText,icon:"none"}),!1)},codeFieldValid:function(e){this.setData(t({},"formData.".concat(e.detail.name,".setError"),!this.fieldValidate(e.detail.name)))},formCheck:function(){var e=this;return this.data.fieldList.every((function(n,i){var o="group"===n.formType||e.fieldValidate(n.name);return n.isCombined?e.setData(t({},"formData.".concat(n.dependentPropertyName,".setError"),!o)):e.setData(t({},"formData.".concat(n.name,".setError"),!o)),o}))},formSubmit:function(){var t=this.data,e=t.formData,n=t.privacy;if(this.formCheck()){if(console.log("点击提交",e),!n)return void this.triggerEvent("formSubmit",e);this.data.privacyok?this.triggerEvent("formSubmit",e):wx.showToast({title:"请勾选隐私声明",icon:"none"})}else console.log("表单验证失败",e)},sendCode:function(t){this.triggerEvent("sendCode",t.detail)},getOption:function(t){this.triggerEvent("getOption",t.detail)},initOption:function(t){this.triggerEvent("initOption",t.detail)},doRequest:function(t){this.triggerEvent("doRequest",t.detail)},jumpPrivicy:function(){wx.navigateTo({url:"/pages/common/webview/index?url=".concat(encodeURIComponent(this.data.footer.url))})}}});
},{isPage:false,isComponent:true,currentFile:'components/form-box/form/index.js'});require("components/form-box/form/index.js");