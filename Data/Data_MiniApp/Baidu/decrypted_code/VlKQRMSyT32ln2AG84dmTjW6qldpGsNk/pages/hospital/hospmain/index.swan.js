var _sjsSupporter={compiler:!1};window.define("pages/hospital/hospmain/index.swan",(function(t,o){o.exports={componentUsingComponentMap:{"mars_modules/@baidu/med-ui/dist/swan/components/Label/LabelOld.swan":["c-label"],"mars_modules/@baidu/med-ui/dist/swan/components/Icon/Icon.swan":["c-icon"],"mars_modules/@baidu/med-ui/dist/swan/components/Avatar/Avatar.swan":["c-avatar"],"mars_modules/@baidu/med-ui/dist/swan/components/Button/Button.swan":["c-btn"],"mars_modules/@baidu/med-ui/dist/swan/components/Navs/Navs.swan":["c-navs"],"mars_modules/@baidu/med-ui/dist/swan/components/Dialog/Dialog.swan":["c-dialog"],"components/common/image.swan":["c-image"],"pages/hospital/hospmain/tool-item.swan":["tool-item"],"components/common/container.swan":["med-container"],"components/common/title.swan":["b-title"],"components/common/follow-btn.swan":["follow-btn"],"components/common/navigate.swan":["b-navigate"],"components/Hospital/Home/NewHeader.swan":["h-new-header"],"components/Hospital/Home/NewShowcase.swan":["h-new-showcase"],"components/Hospital/Home/Basics.swan":["h-basics"],"components/Hospital/Home/Department.swan":["h-department"],"components/Hospital/Home/Strategy.swan":["h-strategy"],"components/Hospital/Home/Card.swan":["h-card"],"components/doctor/feed.swan":["h-feed"],"components/common/topbar.swan":["topbar"],"components/Hospital/Home/Advantage.swan":["h-advantage"],"components/Hospital/Home/Doctor.swan":["h-doctor"],"components/Hospital/Home/NewOfficialApplet.swan":["h-new-official-applet"],"components/Hospital/Home/HosVisit.swan":["h-visit"],"components/Hospital/Home/notice.swan":["h-notice"],"components/Hospital/Home/ServiceInfo.swan":["h-service-info"],"components/Hospital/Home/Brocadeflag.swan":["h-brocadeflag"],"components/Hospital/Home/AskList.swan":["h-ask-list"],"mars_modules/@baidu/med-ui/dist/swan/components/Fab/Fab.swan":["c-fab"],"mars_modules/@baidu/med-ui/dist/swan/components/Swiper/Swiper.swan":["c-swiper"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},getAPack:function(){return[1,"swan-private-root-tag",4,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",2,1,"med-container",7,2,"menu",6,1,3,"menu",2,"class",3,"hos",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",0",2,"rootUID",6,1,3,"rootUID",38,11,33,6,1,3,"isUseNewTemplate",1,"topbar",10,2,"bar-class",3,"",2,"text-color",3,"black",2,"bar-bg",3,"#fff",2,"title",6,1,3,"title",2,"blank",12,6,1,3,"isH5",5,null,5,1,2,"datatopbarheighthandleeventproxy",3,"topbarHeightHandle",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",1",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindtopbarHeightHandle",8,6,1,3,"eventHappen",5,3,"topbarHeightHandle",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",4,2,"style",9,null,2,3,"padding-bottom:",7,null,12,6,2,3,"data",3,"buttomGuahaoEntrance",3,"50px",4,0,1,8,6,1,3,"_style",null,2,"class",3,"hos-wrap",1,"view",2,38,10,76,6,2,3,"data",3,"imgList",10,62,6,3,3,"data",3,"imgList",3,"length",4,0,1,"scroll-view",3,33,"scroll-x",9,null,null,2,"class",3,"hos-sw",1,"image",9,2,"key",6,1,3,"i",2,"src",6,1,3,"img",2,"class",9,null,3,3,"hos-sw-item ",7,null,12,10,183,6,3,3,"data",3,"imgList",3,"length",4,1,3,"hos-sw-img",12,10,183,6,1,3,"i",4,0,3,"",3,"c-gap-left-small",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"mode",3,"aspectFill",33,"lazy-load",9,null,null,2,"datatapargumentsproxy",16,1,17,6,1,3,"img",2,"datatapeventproxy",3,"onTapImg",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,37,"img","i",null,6,2,3,"data",3,"imgList",null,1,"view",9,2,"class",3,"\n                    c-gap-inner-left-boundary\n                    c-gap-inner-right-boundary\n                    c-gap-top\n                    swan-security-padding-bottom\n                    ",1,"view",6,2,"class",3,"c-gap-inner-bottom-large",1,"view",3,2,"class",3,"hos-txt-color c-font-sigma hos-info-bold hos-info-flex",1,"text",1,null,9,null,1,7,null,6,2,3,"data",3,"name",null,1,"view",3,2,"class",3,"follow-btn-wrap",38,6,2,3,"data",3,"hospId",1,"follow-btn",8,2,"follow",6,2,3,"data",3,"favoriteStatus",2,"type",4,2,2,"show-type",4,1,2,"relation-id",6,2,3,"data",3,"hospId",2,"favorite-id",6,2,3,"data",3,"favoriteId",2,"content",13,4,14,3,"name",10,248,6,2,3,"data",3,"name",3,"",14,3,"tag",10,248,6,2,3,"data",3,"tag",3,"",14,3,"address",10,248,6,2,3,"data",3,"address",3,"暂无详细地址",14,3,"logo",10,248,6,2,3,"data",3,"logo",3,"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2128139361,2499500856&fm=179&app=35&f=PNG?w=144&h=144",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",2",2,"rootUID",6,1,3,"rootUID",null,1,"c-label",8,2,"key",6,1,3,"i",2,"text",6,1,3,"t",2,"color",3,"blue",2,"class",3,"c-gap-right-small",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",3-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",37,"t","i",null,6,2,3,"data",3,"tag",38,10,76,6,2,3,"data",3,"tag",6,3,3,"data",3,"tag",3,"length",null,1,"view",6,2,"datatapeventproxy",3,"onTapExp",2,"class",3,"swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,38,10,76,6,2,3,"data",3,"desc",10,62,6,3,3,"data",3,"desc",3,"length",4,0,1,"view",3,2,"class",3,"hos-info-indent c-gap-top  c-color c-font-15 c-line-clamp3",38,11,33,6,1,3,"isExpDesc",null,9,null,1,7,null,6,3,3,"data",3,"desc",4,0,null,1,1,"view",3,2,"class",3,"c-gap-top  c-color c-font-15",40,1,"view",4,2,"key",6,1,3,"i",2,"class",3,"hos-info-indent",37,"o","i",null,6,2,3,"data",3,"desc",null,9,null,1,7,null,6,1,3,"o",null,1,"view",2,2,"class",3,"c-tac",1,"c-icon",5,2,"name",12,6,1,3,"isExpDesc",3,"up",3,"down",2,"font-size",3,"18px",2,"class",3,"c-color-gray c-tac c-blocka c-gap-bottom-small",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",4",2,"rootUID",6,1,3,"rootUID",null,1,"view",4,2,"class",3,"c-line-top c-color-normal",38,10,76,6,2,3,"data",3,"basic",10,62,6,3,3,"data",3,"basic",3,"length",4,0,1,"view",2,38,10,183,6,3,3,"data",3,"basic",3,"length",4,1,1,"view",8,2,"key",6,1,3,"i",2,"class",3,"c-row c-gap-top c-gap-bottom swan-spider-tap",2,"datatapargumentsproxy",16,1,17,6,1,3,"item",2,"datatapeventproxy",3,"onTapBasic",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,37,"item","i",null,6,2,3,"data",3,"basic",1,"view",3,2,"class",3,"c-span10",1,"c-icon",4,2,"name",6,2,3,"item",3,"icon",2,"font-size",3,"15px",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",5-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",1,"text",2,2,"class",3,"c-gap-left c-color c-font-15",null,9,null,1,7,null,6,2,3,"item",3,"name",null,1,"view",2,2,"class",3,"c-span2 c-tar",1,"c-icon",5,2,"name",3,"right",2,"font-size",3,"15px",2,"class",3,"c-bloacka",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",6-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",null,1,"view",3,2,"class",3,"c-gap-top-small",38,10,123,6,3,3,"data",3,"basic",3,"length",4,2,1,"view",2,2,"class",3,"c-row c-gap-top c-gap-bottom",1,"view",8,2,"key",6,1,3,"i",2,"class",9,null,3,3,"c-span12 c-tac ",7,null,12,10,155,6,1,3,"i",10,45,6,3,3,"data",3,"basic",3,"length",4,1,3,"hos-info-line",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"datatapargumentsproxy",16,1,17,6,1,3,"item",2,"datatapeventproxy",3,"onTapBasic",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,37,"item","i",null,6,2,3,"data",3,"basic",1,"c-icon",3,2,"name",6,2,3,"item",3,"icon",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",7-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",1,"text",2,2,"class",3,"c-gap-left-small c-color",null,9,null,1,7,null,6,2,3,"item",3,"name",null,null,null,1,"view",5,2,"class",7,null,12,10,62,6,3,3,"data",3,"entrance",3,"length",4,1,3,"c-line-top",3,"",1,8,6,1,3,"_class",null,38,10,76,6,2,3,"data",3,"entrance",10,62,6,3,3,"data",3,"entrance",3,"length",4,0,1,"view",5,2,"key",6,1,3,"i",2,"class",3,"c-gap-bottom-small",37,"item","i",null,6,2,3,"data",3,"entrance",38,10,183,6,3,3,"data",3,"entrance",3,"length",4,1,1,"view",6,2,"class",3,"c-row hos-entra-item c-gap-inner-top-small c-gap-inner-bottom-small swan-spider-tap",2,"datatapargumentsproxy",16,1,17,6,1,3,"item",2,"datatapeventproxy",3,"onTapTool",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",2,2,"class",3,"c-span8",1,"tool-item",3,2,"item",6,1,3,"item",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",8-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",1,"view",2,2,"class",3,"c-span4 c-color-gray c-span-middle",1,"view",3,2,"class",3,"c-tar c-gap-right",1,"text",2,2,"class",3,"c-font-13",null,3,"查看",1,"c-icon",5,2,"name",3,"play",2,"font-size",3,"12px",2,"class",3,"c-gap-left-small",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",9-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",null,1,"view",2,38,10,183,6,3,3,"data",3,"entrance",3,"length",4,2,1,"view",2,2,"class",3,"c-row c-gap-inner-top-large hos-info-tile",1,"view",7,2,"key",6,1,3,"i",2,"class",9,null,3,3,"c-span12 c-tac ",7,null,12,10,155,6,1,3,"i",10,45,6,3,3,"data",3,"entrance",3,"length",4,1,3,"hos-info-line",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"datatapargumentsproxy",16,1,17,6,1,3,"item",2,"datatapeventproxy",3,"onTapTool",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,37,"item","i",null,6,2,3,"data",3,"entrance",1,"tool-item",3,2,"item",6,1,3,"item",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",10-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",null,1,"view",4,2,"class",3,"hos-info-tile",38,10,62,6,3,3,"data",3,"entrance",3,"length",4,2,1,"swiper",6,2,"duration",4,300,2,"interval",4,5e3,2,"class",3,"hos-info-scroll swan-spider-tap",2,"datachangeeventproxy",3,"onToolChange",35,"bindchange",8,6,1,3,"eventHappen",5,3,"change",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"swiper-item",3,2,"key",6,1,3,"i",37,"group","i",null,6,1,3,"_entrance",1,"view",2,2,"class",3,"c-row c-gap-inner-top-large",1,"view",8,2,"key",6,1,3,"index",2,"class",3,"c-span12 c-tac swan-spider-tap",2,"datatapargumentsproxy",16,1,17,6,1,3,"o",2,"datatapeventproxy",3,"onTapTool",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,37,"o","index",null,6,1,3,"group",1,"c-image",9,2,"src",6,2,3,"o",3,"icon",2,"mode",3,"widthFix",2,"width",3,"30px",2,"height",3,"30px",2,"is-round",5,null,2,"hack-white-stroke",5,null,2,"class",3,"c-inline-block",2,"compId",10,43,10,43,10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",11-",6,1,3,"index",3,"_",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",1,"view",2,1,"view",2,2,"class",3,"c-font-15 c-color",null,9,null,1,7,null,6,2,3,"o",3,"name",null,1,"view",2,2,"class",3,"c-font-small c-color-gray",null,9,null,1,7,null,6,2,3,"o",3,"text",null,1,"view",2,2,"class",3,"c-tac hos-tool-nav-wrap",1,"text",4,2,"key",6,1,3,"i",2,"class",9,null,2,3,"hos-tool-nav ",7,null,16,2,17,12,10,155,6,1,3,"i",4,0,3,"c-gap-left-small",3,"",17,12,10,183,6,1,3,"curTool",6,1,3,"i",3,"hos-tool-nav-active",3,"",1,8,6,1,3,"_class",null,37,"item","i",null,6,1,3,"_entrance",38,10,76,6,1,3,"_entrance",10,62,6,2,3,"_entrance",3,"length",4,1,null,null,null,1,"view",3,38,6,2,3,"data",3,"xcx",1,"view",1,2,"class",3,"c-line-thick-top c-row-tile",1,"view",3,2,"class",3,"c-row c-gap-inner-top-large c-gap-inner-bottom-large",1,"view",4,2,"class",3,"c-span9",2,"style",3,"display: flex;",1,"c-avatar",5,2,"src",6,3,3,"data",3,"xcx",3,"img",2,"size",4,48,2,"class",3,"c-inline-block hos-xcx-img",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",12",2,"rootUID",6,1,3,"rootUID",1,"view",3,2,"class",3,"c-gap-inner-left c-inline-block hos-xcx-txt",1,"view",3,2,"class",3,"c-font-17 c-color-link",1,"text",3,2,"class",3,"c-inline-block",38,6,3,3,"data",3,"xcx",3,"name",null,9,null,1,7,null,6,3,3,"data",3,"xcx",3,"name",null,null,1,"c-label",6,2,"text",6,3,3,"data",3,"xcx",3,"tag",2,"color",3,"gray",2,"class",3,"c-gap-left-small c-inline-block",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",13",2,"rootUID",6,1,3,"rootUID",38,6,3,3,"data",3,"xcx",3,"tag",null,1,"view",3,2,"class",3,"c-font-13 c-color-gray c-line-clamp1",2,"style",3,"width: 70%;",null,9,null,1,7,null,6,3,3,"data",3,"xcx",3,"text",null,1,"view",2,2,"class",3,"c-span3 c-tar",1,"view",6,2,"class",3,"c-span-middle swan-spider-tap",2,"style",3,"display: inline-flex; height: 100%;",2,"datatapargumentsproxy",16,1,17,6,2,3,"data",3,"xcx",2,"datatapeventproxy",3,"onTapXcx",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"c-btn",10,2,"font-size",4,12,2,"type",3,"primary",2,"primary-color",3,"#03D0BF",2,"border-radius",3,"15px",2,"height",4,30,33,"auto",9,null,null,2,"class",3,"hos-xcx-btn",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",14",2,"rootUID",6,1,3,"rootUID",1,"text",2,2,"class",3,"c-gap-inner-left-small c-gap-inner-right-small",null,3,"打开",null,1,"view",5,2,"class",3,"c-blocka c-gap-inner-bottom-large",38,10,76,6,2,3,"data",3,"info",6,3,3,"data",3,"info",3,"basic",1,"view",1,2,"class",3,"c-line-thick-top c-row-tile c-gap-bottom-large",1,"b-title",4,2,"text",6,4,3,"data",3,"info",3,"basic",3,"title",2,"class",3,"c-gap-top-large",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",15",2,"rootUID",6,1,3,"rootUID",1,"view",3,2,"class",3,"c-gap-top-small",38,10,76,6,4,3,"data",3,"info",3,"basic",3,"list",10,62,6,5,3,"data",3,"info",3,"basic",3,"list",3,"length",4,0,1,"view",5,2,"key",6,1,3,"i",2,"class",7,null,12,10,183,6,1,3,"i",4,0,3,"",3,"c-gap-top",1,8,6,1,3,"_class",null,37,"item","i",null,6,4,3,"data",3,"info",3,"basic",3,"list",1,"view",2,2,"class",3,"c-font-15 hos-info-title",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"view",4,2,"key",6,1,3,"idx",2,"class",3,"c-font-15 c-color",37,"t","idx",null,6,2,3,"item",3,"text",null,9,null,1,7,null,6,1,3,"t",null,null,null,1,"view",6,2,"class",3,"c-blocka c-gap-inner-bottom-large",38,10,76,6,2,3,"data",3,"info",6,3,3,"data",3,"info",3,"detail",1,"view",1,2,"class",3,"c-line-thick-top c-row-tile c-gap-bottom-large",1,"b-title",4,2,"text",6,4,3,"data",3,"info",3,"detail",3,"title",2,"class",3,"c-gap-top-large",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",16",2,"rootUID",6,1,3,"rootUID",1,"view",3,2,"class",3,"c-gap-top-small",38,10,76,6,4,3,"data",3,"info",3,"detail",3,"list",10,62,6,5,3,"data",3,"info",3,"detail",3,"list",3,"length",4,0,1,"view",8,2,"key",6,1,3,"i",2,"class",9,null,2,7,null,12,10,183,6,1,3,"i",4,0,3,"",3,"c-gap-top",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"datatapargumentsproxy",16,2,17,6,4,3,"data",3,"info",3,"detail",3,"url",17,3,"hospmain_info",2,"datatapeventproxy",3,"onGo",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,37,"item","i",null,6,4,3,"data",3,"info",3,"detail",3,"list",1,"view",2,2,"class",3,"c-font-15 hos-info-title",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"view",5,2,"key",6,1,3,"idx",2,"class",3,"c-font-15 c-color c-line-clamp2",37,"o","idx",null,6,2,3,"item",3,"content",38,10,76,6,2,3,"item",3,"content",6,3,3,"item",3,"content",3,"length",null,9,null,1,7,null,6,1,3,"o",null,null,null,1,"view",5,2,"class",3,"c-tac c-gap-top-large c-gap-bottom-small swan-spider-tap",2,"datatapargumentsproxy",16,2,17,6,4,3,"data",3,"info",3,"detail",3,"url",17,3,"hospmain_info",2,"datatapeventproxy",3,"onGo",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",2,2,"class",3,"hos-info-more c-span-middle",1,"view",2,1,"text",2,2,"class",3,"c-font-normal c-color-link c-inline-block",null,3,"查看详情",1,"c-icon",5,2,"name",3,"right",2,"font-size",3,"12px",2,"class",3,"hos-info-more-icon c-gap-left-small",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",17",2,"rootUID",6,1,3,"rootUID",null,1,"view",5,2,"class",3,"c-blocka c-gap-inner-bottom",38,10,76,6,2,3,"data",3,"info",6,3,3,"data",3,"info",3,"jy",1,"view",1,2,"class",3,"c-line-thick-top c-row-tile c-gap-bottom-large",1,"b-title",4,2,"text",6,4,3,"data",3,"info",3,"jy",3,"title",2,"class",3,"c-gap-top-large",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",18",2,"rootUID",6,1,3,"rootUID",1,"view",3,2,"class",3,"c-gap-top-small",1,"view",4,2,"class",3,"c-gap-top-small",38,10,76,6,3,3,"data",3,"info",3,"jy",10,62,6,5,3,"data",3,"info",3,"jy",3,"tab",3,"length",4,1,1,"view",2,2,"class",3,"hos-info-tile",1,"c-navs",9,2,"options",6,4,3,"data",3,"info",3,"jy",3,"tab",33,"scroll",9,null,null,2,"selected-index",6,1,3,"curNav",2,"selected-color",3,"#00C8C8",2,"color",3,"#252525",2,"dataitemtapeventproxy",3,"onTapNav",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",19",2,"rootUID",6,1,3,"rootUID",35,"binditemtap",8,6,1,3,"eventHappen",5,3,"itemtap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",1,2,"class",3,"c-line-bottom c-gap-inner-left-boundary c-gap-inner-right-boundary",null,1,"view",4,2,"key",6,1,3,"i",2,"class",7,null,16,1,17,12,10,76,6,4,3,"data",3,"info",3,"jy",3,"tab",10,62,6,5,3,"data",3,"info",3,"jy",3,"tab",3,"length",4,1,3,"c-gap-top-large",3,"",1,8,6,1,3,"_class",null,37,"item","i",null,6,4,3,"data",3,"info",3,"jy",3,"tab",1,"view",7,2,"datatapargumentsproxy",16,1,17,6,1,3,"i",2,"datatapeventproxy",3,"onTapTabExp",2,"class",3,"swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,38,10,183,6,1,3,"curNav",6,1,3,"i",1,"view",6,2,"key",6,1,3,"index",2,"class",3,"c-color c-font-15",2,"v-show",12,6,2,3,"jyExp",6,1,3,"curNav",5,1,10,121,6,1,3,"index",4,3,2,"style",9,null,3,3,";display: ",7,null,12,6,2,3,"jyExp",6,1,3,"curNav",5,1,12,10,121,6,1,3,"index",4,3,3," ",3,"none",1,8,6,1,3,"_style",null,3,";",37,"o","index",null,6,2,3,"item",3,"content",null,9,null,1,7,null,6,1,3,"o",null,1,"view",3,2,"class",3,"c-tac",38,10,62,6,3,3,"item",3,"content",3,"length",4,4,1,"c-icon",5,2,"name",12,6,2,3,"jyExp",6,1,3,"curNav",3,"up",3,"down",2,"font-size",3,"18px",2,"class",3,"c-color-gray c-tac c-blocka c-gap-top-small",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",20-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",null,null,null,1,"view",5,2,"class",3,"c-blocka",38,10,76,6,2,3,"data",3,"info",6,3,3,"data",3,"info",3,"leader",1,"view",1,2,"class",3,"c-line-thick-top c-row-tile c-gap-bottom-large",1,"b-title",4,2,"text",6,4,3,"data",3,"info",3,"leader",3,"title",2,"class",3,"c-gap-top-large",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",21",2,"rootUID",6,1,3,"rootUID",1,"view",5,2,"class",3,"hos-info-tile swan-spider-tap",2,"datatapargumentsproxy",16,2,17,6,4,3,"data",3,"info",3,"leader",3,"url",17,3,"hospmain_leader",2,"datatapeventproxy",3,"onGo",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"scroll-view",8,2,"class",3,"scroll c-gap-top c-gap-bottom-large",2,"style",3,"height: auto;",33,"scroll-x",9,null,null,33,"scroll-with-animation",9,null,null,2,"scroll-into-view",6,1,3,"curTabIdx",1,"view",1,2,"class",3,"scroll-space",1,"view",7,2,"key",6,1,3,"i",2,"class",9,null,2,3,"c-inline-block leader-item ",7,null,12,10,183,6,1,3,"i",4,0,3,"",3,"c-gap-left-large",1,8,6,1,3,"_class",null,37,"item","i",null,6,4,3,"data",3,"info",3,"leader",3,"list",38,10,76,6,4,3,"data",3,"info",3,"leader",3,"list",10,62,6,5,3,"data",3,"info",3,"leader",3,"list",3,"length",4,0,1,"c-image",10,2,"src",6,2,3,"item",3,"img",2,"mode",3,"aspectFill",2,"class",3,"scroll-img",2,"width",3,"100%",2,"height",3,"130px",2,"radius",3,"6px",2,"is-round",5,null,2,"hack-white-stroke",5,null,2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",22-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",1,"view",2,2,"class",3,"c-font-15",null,9,null,1,7,null,6,2,3,"item",3,"name",null,1,"view",2,2,"class",3,"c-font-small c-color-gray c-line-clamp1",null,9,null,1,7,null,6,2,3,"item",3,"title",null,null,1,"view",1,2,"class",3,"scroll-space",null,1,"view",5,2,"class",3,"c-blocka",38,10,76,6,2,3,"data",3,"info",6,3,3,"data",3,"info",3,"expert",1,"view",1,2,"class",3,"c-line-thick-top c-row-tile c-gap-bottom-large",1,"b-title",4,2,"text",6,4,3,"data",3,"info",3,"expert",3,"title",2,"class",3,"c-gap-top-large",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",23",2,"rootUID",6,1,3,"rootUID",1,"view",5,2,"class",3,"hos-info-tile swan-spider-tap",2,"datatapargumentsproxy",16,2,17,6,4,3,"data",3,"info",3,"expert",3,"url",17,3,"hospmain_expert",2,"datatapeventproxy",3,"onGo",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"scroll-view",8,2,"class",3,"scroll c-gap-top c-gap-bottom-large",2,"style",3,"height: auto;",33,"scroll-x",9,null,null,33,"scroll-with-animation",9,null,null,2,"scroll-into-view",6,1,3,"curTabIdx",1,"view",1,2,"class",3,"scroll-space",1,"view",7,2,"key",6,1,3,"i",2,"class",9,null,2,3,"c-inline-block leader-item ",7,null,12,10,183,6,1,3,"i",4,0,3,"",3,"c-gap-left-large",1,8,6,1,3,"_class",null,37,"item","i",null,6,4,3,"data",3,"info",3,"expert",3,"list",38,10,76,6,4,3,"data",3,"info",3,"expert",3,"list",10,62,6,5,3,"data",3,"info",3,"expert",3,"list",3,"length",4,0,1,"c-image",10,2,"src",6,2,3,"item",3,"img",2,"mode",3,"aspectFill",2,"class",3,"scroll-img",2,"width",3,"100%",2,"height",3,"130px",2,"radius",3,"6px",2,"is-round",5,null,2,"hack-white-stroke",5,null,2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",24-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",1,"view",2,2,"class",3,"c-font-15",null,9,null,1,7,null,6,2,3,"item",3,"name",null,1,"view",2,2,"class",3,"c-font-small c-color-gray c-line-clamp1",null,9,null,1,7,null,6,2,3,"item",3,"title",null,null,1,"view",1,2,"class",3,"scroll-space",null,1,"view",3,2,"class",3,"hos-btombtn swan-security-padding-bottom",38,10,76,6,2,3,"data",3,"buttomGuahaoEntrance",6,3,3,"data",3,"buttomGuahaoEntrance",3,"length",1,"b-navigate",8,2,"key",6,1,3,"i",2,"url",6,2,3,"item",3,"url",2,"extra",13,1,14,3,"name",6,2,3,"sendData",6,2,3,"item",3,"text",2,"class",3,"hos-btombtn-item",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",25-",6,1,3,"i",2,"rootUID",6,1,3,"rootUID",37,"item","i",null,6,2,3,"data",3,"buttomGuahaoEntrance",1,"view",3,2,"style",9,null,2,3,"background:",7,null,6,2,3,"item",3,"bgColor",1,8,6,1,3,"_style",null,2,"class",3,"hos-btombtn-item-cont",null,9,null,1,7,null,6,2,3,"item",3,"text",null,null,null,1,"med-container",21,2,"ref",3,"container",2,"skt-tpl",3,"activity",2,"feedback-is-show",5,1,2,"is-skt-show",11,33,6,1,3,"isPageRendered",2,"bg-color",3,"#f4f4f4",33,"hide-header",9,null,null,2,"complaint-text",3,"信息",2,"feedback-text",3,"纠错",2,"no-jump",5,1,2,"delay-set-nav-bar",6,1,3,"delaySetNavBar",2,"datanojumpeventproxy",3,"handleNoJump",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",26",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindnoJump",8,6,1,3,"eventHappen",5,3,"noJump",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,38,6,1,3,"isUseNewTemplate",1,"topbar",11,2,"bar-class",3,"transparent",2,"text-color",3,"#333",2,"hide-title",5,1,2,"blank",5,null,2,"delay-set-header-color",6,1,3,"delaySetHeaderColor",2,"delay-compate-devices",6,1,3,"delayCompateDevices",2,"datatopbarheighthandleeventproxy",3,"topbarHeightHandle",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",27",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindtopbarHeightHandle",8,6,1,3,"eventHappen",5,3,"topbarHeightHandle",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",2,2,"class",3,"custom-header-topbar-bg",2,"style",9,null,4,3,"height:",7,null,10,43,6,1,3,"topbarHeight",3,"px",1,8,6,1,3,"_style",null,3,";background:",7,null,6,1,3,"topBarBg",1,8,6,1,3,"_style",null,1,"view",4,2,"style",7,null,6,4,3,"_f_",3,"0",3,"_p",3,"style",1,8,6,1,3,"_style",null,2,"class",3,"med-container-inner",1,"h-new-header",4,2,"media",6,2,3,"showcase",3,"media",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",28",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"isSettledHospital",10,76,6,1,3,"showcase",10,76,6,2,3,"showcase",3,"media",6,4,3,"showcase",3,"media",3,"srcList",3,"length",null,1,"view",16,2,"style",9,null,6,3,"position:",7,null,3,"relative",1,8,6,1,3,"_style",null,3,";z-index:",7,null,3,"5",1,8,6,1,3,"_style",null,3,";top:",7,null,12,10,76,6,1,3,"isSettledHospital",10,62,6,4,3,"showcase",3,"media",3,"srcList",3,"length",4,0,3,"-.66rem",3,"",1,8,6,1,3,"_style",null,1,"h-notice",9,2,"health-notice",6,1,3,"healthNotice",2,"notice-text",3,"官方认领",2,"feed-bg",3,"#f5f5f5",2,"datahandletapeventproxy",3,"residentQuestionnaire",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",29",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindhandleTap",8,6,1,3,"eventHappen",5,3,"handleTap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,38,10,76,11,33,6,1,3,"isShowHealthNotice",10,76,11,33,6,1,3,"isSettledHospital",10,76,6,1,3,"healthNotice",6,2,3,"healthNotice",3,"text",null,1,"h-new-showcase",14,2,"hospital-name",6,2,3,"showcase",3,"name",2,"hospital-logo",6,2,3,"showcase",3,"logo",2,"tags",6,2,3,"showcase",3,"tags",2,"rank-text",6,2,3,"showcase",3,"rankText",2,"show-dialog",6,1,3,"showDialog",2,"card-rank-type",6,1,3,"cardRankType",2,"ranks",6,2,3,"showcase",3,"rankTextList",2,"auth",6,2,3,"showcase",3,"auth",2,"outpatient-services",6,2,3,"basicInfo",3,"outpatientServices",2,"is-settled-hospital",6,1,3,"isSettledHospital",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",30",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"showcase",6,2,3,"showcase",3,"name",null,1,"h-service-info",6,2,"page",3,"pages/hospital/hospmain/index",2,"advantage",6,2,3,"showcase",3,"advantage",2,"service-info",6,2,3,"showcase",3,"serviceInfo",2,"sign",6,1,3,"sign",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",31",2,"rootUID",6,1,3,"rootUID",1,"h-card",7,2,"has-more",6,1,3,"noMore",2,"class",7,null,6,1,3,"sign",1,8,6,1,3,"_class",null,2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",32",2,"rootUID",6,1,3,"rootUID",38,10,248,10,76,6,1,3,"showcase",10,76,6,2,3,"showcase",3,"applets",10,76,6,3,3,"showcase",3,"applets",3,"guidePage",6,3,3,"showcase",3,"applets",3,"swanUrl",10,76,6,1,3,"showcase",10,76,6,2,3,"showcase",3,"baijiahao",10,76,6,3,3,"showcase",3,"baijiahao",3,"guidePage",6,3,3,"showcase",3,"baijiahao",3,"swanUrl",1,"slot",2,2,"slot",3,"content",1,"h-new-official-applet",4,2,"applets",6,2,3,"showcase",3,"applets",2,"baijiahao",6,2,3,"showcase",3,"baijiahao",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",33",2,"rootUID",6,1,3,"rootUID",null,1,"view",3,2,"class",3,"c-gap-top c-gap-left c-gap-right",38,10,76,6,1,3,"carousel",6,2,3,"carousel",3,"length",1,"c-swiper",6,2,"data",6,1,3,"carousel",2,"height-percent",10,47,4,1,4,4.75,2,"bottom-dot-gap",4,6,2,"width-gap",4,20,2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",34",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",8,2,"title",3,"医院优势",2,"has-more",6,1,3,"noMore",2,"class",7,null,6,1,3,"sign",1,8,6,1,3,"_class",null,2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",35",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"advantages",10,76,6,2,3,"advantages",3,"length",10,62,6,2,3,"advantages",3,"length",4,0,1,"slot",2,2,"slot",3,"content",1,"h-advantage",3,2,"advantages",6,1,3,"advantages",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",36",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",9,2,"title",6,2,3,"basicInfo",3,"title",2,"has-more",6,1,3,"noMore",2,"class",7,null,6,1,3,"sign",1,8,6,1,3,"_class",null,2,"data-show",3,"baseInfo",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",37",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"basicInfo",6,2,3,"basicInfo",3,"title",1,"slot",2,2,"slot",3,"content",1,"h-basics",17,2,"description",6,2,3,"basicInfo",3,"description",2,"open-time",6,2,3,"basicInfo",3,"openTime",2,"tel-list",6,2,3,"basicInfo",3,"telList",2,"location",6,2,3,"basicInfo",3,"location",2,"coordinate",6,2,3,"basicInfo",3,"coordinate",2,"desc-link",6,2,3,"basicInfo",3,"descLink",2,"pos-app",6,2,3,"basicInfo",3,"posApp",2,"desc-line",10,76,6,2,3,"showcase",3,"serviceInfo",6,3,3,"showcase",3,"serviceInfo",3,"length",2,"website-wap",6,2,3,"showcase",3,"officialWebsiteWap",2,"websitedomain",6,2,3,"showcase",3,"websitedomain",2,"hospital-name",10,76,6,1,3,"showcase",6,2,3,"showcase",3,"name",2,"address-url",6,2,3,"basicInfo",3,"multiAddrUrl",2,"tel-url",6,2,3,"basicInfo",3,"multiPhoneUrl",2,"tel-app",6,2,3,"basicInfo",3,"telAppUrl",2,"outpatient-services",6,2,3,"basicInfo",3,"outpatientServices",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",38",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",11,2,"title",6,2,3,"department",3,"title",2,"more",6,2,3,"department",3,"more",2,"class",7,null,6,1,3,"sign",1,8,6,1,3,"_class",null,2,"data-show",3,"department",2,"has-more",10,76,6,2,3,"department",3,"list",10,123,6,3,3,"department",3,"list",3,"length",6,1,3,"showMoreLength",2,"logtype",10,76,6,1,3,"department",6,2,3,"department",3,"tracedata",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",39",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"department",10,76,6,2,3,"department",3,"title",10,76,6,2,3,"department",3,"list",10,62,6,3,3,"department",3,"list",3,"length",4,0,1,"slot",2,2,"slot",3,"content",1,"h-department",5,2,"list",6,2,3,"department",3,"list",2,"hospital-name",6,2,3,"showcase",3,"name",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",40",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",10,2,"title",6,2,3,"consultationInfo",3,"title",2,"more",6,2,3,"consultationInfo",3,"more",2,"data-show",3,"visitInfo",2,"has-more",10,62,6,3,3,"consultationInfo",3,"list",3,"length",4,0,2,"logtype",3,"ChuZhenXinXi_Department_more",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",41",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"consultationInfo",10,76,6,2,3,"consultationInfo",3,"title",10,76,6,2,3,"consultationInfo",3,"list",10,62,6,3,3,"consultationInfo",3,"list",3,"length",4,0,1,"slot",2,2,"slot",3,"content",1,"h-visit",4,2,"visit-info",6,2,3,"consultationInfo",3,"list",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",42",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",11,2,"title",6,2,3,"expertList",3,"title",2,"more",6,2,3,"expertList",3,"more",2,"class",7,null,6,1,3,"sign",1,8,6,1,3,"_class",null,2,"data-show",3,"expertList",2,"has-more",12,10,76,6,2,3,"expertList",3,"more",6,3,3,"expertList",3,"more",3,"link",5,1,5,null,2,"logtype",10,76,6,1,3,"expertList",6,2,3,"expertList",3,"tracedata",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",43",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"expertList",10,76,6,2,3,"expertList",3,"title",10,76,6,2,3,"expertList",3,"list",10,62,6,3,3,"expertList",3,"list",3,"length",4,0,1,"slot",2,2,"slot",3,"content",1,"h-doctor",4,2,"expert-list",6,1,3,"expertList",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",44",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",10,2,"title",6,2,3,"askdata",3,"title",2,"has-more",12,10,76,6,2,3,"askdata",3,"question",10,62,6,3,3,"askdata",3,"question",3,"length",4,0,5,1,5,null,2,"more",6,2,3,"askdata",3,"more",2,"count",6,2,3,"askdata",3,"count",2,"logtype",3,"hos_wdj_more",2,"data-show",3,"askEveryone",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",45",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"askdata",6,2,3,"askdata",3,"title",1,"slot",2,2,"slot",3,"content",1,"h-ask-list",4,2,"question",6,2,3,"askdata",3,"question",2,"more",6,2,3,"askdata",3,"more",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",46",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",5,2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",47",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"pennant",6,2,3,"pennant",3,"title",1,"slot",2,2,"slot",3,"content",1,"h-brocadeflag",6,2,"pennant",6,1,3,"pennant",2,"jq-type",3,"hospital",2,"trace-data",6,1,3,"traceData",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",48",2,"rootUID",6,1,3,"rootUID",null,1,"h-card",11,2,"title",6,2,3,"strategy",3,"title",2,"more",6,2,3,"strategy",3,"more",2,"class",7,null,6,1,3,"sign",1,8,6,1,3,"_class",null,2,"data-show",3,"strategy",2,"has-more",10,76,6,2,3,"strategy",3,"cardList",10,123,6,3,3,"strategy",3,"cardList",3,"length",6,1,3,"showMoreLength",2,"logtype",3,"strategy_more",2,"page",3,"pages/hospital/hospmain/index",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",49",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"strategy",10,76,6,2,3,"strategy",3,"title",10,76,6,2,3,"strategy",3,"cardList",10,62,6,3,3,"strategy",3,"cardList",3,"length",4,0,1,"slot",2,2,"slot",3,"content",1,"h-strategy",5,2,"page",3,"pages/hospital/hospmain/index",2,"tab-list",6,2,3,"strategy",3,"tabList",2,"card-list",6,2,3,"strategy",3,"cardList",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",50",2,"rootUID",6,1,3,"rootUID",null,1,"view",3,2,"class",3,"c-gap-left c-gap-right c-gap-top",38,10,76,6,1,3,"news",10,76,6,2,3,"news",3,"title",10,76,6,2,3,"news",3,"content",10,62,6,3,3,"news",3,"content",3,"length",4,0,1,"h-feed",14,2,"id",3,"contents-tab",2,"page",3,"pages/hospital/hospmain/index",2,"feed-id",6,1,3,"feedId",2,"redirect-action",6,1,3,"redirectAction",2,"topbar-height",6,1,3,"topbarHeight",2,"title",6,2,3,"news",3,"title",2,"default-list",6,2,3,"news",3,"content",2,"more-url",6,2,3,"news",3,"moreUrl",2,"tab-type",6,2,3,"options",3,"tabType",2,"prompt-message",6,1,3,"promptMessage",2,"show-log-class",6,1,3,"sign",2,"source-hospital",6,1,3,"sourceHospital",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",51",2,"rootUID",6,1,3,"rootUID",null,1,"view",3,2,"class",3,"hospital-bottom-logo c-width c-tac",38,6,1,3,"bottomImg",1,"c-image",12,33,"has-compress",9,null,null,2,"class",3,"logo c-filter-gray",2,"src",6,1,3,"bottomImg",2,"width",3,"0.93rem",2,"height",3,"0.23rem",2,"mode",3,"widthFix",2,"display",3,"inline-block",2,"hack-white-stroke",5,null,2,"is-round",5,null,2,"extra",13,1,14,3,"column",4,3,2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",52",2,"rootUID",6,1,3,"rootUID",null,1,"c-dialog",12,2,"show",6,1,3,"feedbackDialog",2,"btn-opts",6,1,3,"feedbackDialogBtn",2,"content-text-align",3,"center",2,"datacloseeventproxy",3,"handleClose",2,"databtntapeventproxy",3,"handleDialogBtnTap",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",53",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindclose",8,6,1,3,"eventHappen",5,3,"close",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,35,"bindbtntap",8,6,1,3,"eventHappen",5,3,"btntap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",2,2,"class",3,"content-area",null,3,"此功能不支持咨询和挂号",1,"view",2,2,"class",3,"content-area",null,3,"仅限于纠正医院信息错误",1,"c-fab",18,2,"ref",3,"fab",2,"type",3,"image",2,"init-state",13,2,14,3,"top",3,"37%",14,3,"right",3,"0",2,"oper-ation-state",6,1,3,"operAtionState",2,"image-url",6,2,3,"wrsjqButton",3,"imgUrl",2,"width",3,"0.79rem",2,"height",3,"0.52rem",2,"box-shadow",3,"0",2,"background",3,"transparent",2,"border-radius",3,"0",2,"datafabscrollchangeeventproxy",3,"handleFabScrollChange",2,"datafabtapargumentsproxy",16,1,17,6,1,3,"wrsjqButton",2,"datafabtapeventproxy",3,"navigateActivity",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",54",2,"rootUID",6,1,3,"rootUID",35,"bindfabScrollChange",8,6,1,3,"eventHappen",5,3,"fabScrollChange",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,35,"bindfabTap",8,6,1,3,"eventHappen",5,3,"fabTap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,38,10,76,6,1,3,"wrsjqButton",6,2,3,"wrsjqButton",3,"imgUrl",null,null]},isComponent:!1,componentPath:"pages/hospital/hospmain/index.swan",customComponentCss:[],createTemplateComponent:function(t){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));