var _sjsSupporter={compiler:!1};window.define("pages/order/list.swan",(function(e,t){t.exports={componentUsingComponentMap:{"components/common/mescroll-uni/mescroll-body.swan":["mescroll-body"],"components/common/mescroll-uni/mescroll-uni.swan":["mescroll-uni"],"components/common/login-modal/login.swan":["login-modal"],"components/common/vip-tips-modal/vip-tips.swan":["vip-tips-modal"],"uni_modules/uni-countdown/components/uni-countdown/uni-countdown.swan":["uni-countdown"],"components/common/header/header-bar.swan":["header-bar"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:"<view class=\"base-page\"><header-bar vue-id=\"4394c642-1\" showSpaceBetween=\"{{1}}\" backName=\"backPage\" centerText=\"我的订单\" backgroundColor=\"#FFFFFF\" data-event-opts=\"{{[['^backPage',[['backPage']]]]}}\" on-bindbackPage=\"eventHappen('backPage', $event, '__e', '', 'bind')\"></header-bar><template s-if=\"{{orderList.length>0}}\"><view class=\"list\"><template s-for=\"item, index in orderList\" s-for-item=\"item\" s-for-index=\"index\"><view data-event-opts=\"{{[['tap',[['goToInfo',['$0','$1'],[[['orderList','',index,'id']],[['orderList','',index,'orderNumber']]]]]]]}}\" class=\"info swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, '__e', '', 'catch')\"><view class=\"top\"><view class=\"shop\">{{''+item.shopInfo.shopName+''}}</view><template s-if=\"{{item.orderStatus===1&&item.expireSec>0}}\"><view class=\"shop-time\"><text style=\"margin-right:1.3333333333333333vw;\">待付款</text><uni-countdown vue-id=\"{{'4394c642-2-'+index}}\" show-day=\"{{false}}\" second=\"{{item.expireSec}}\" showColon=\"{{false}}\" color=\"#FC5531\" splitorColor=\"#FC5531\" font-size=\"{{12}}\"></uni-countdown></view></template><template s-else><view class=\"shop-time\" style=\"color:#555666;\">{{''+item.orderStatusStr+''}}</view></template></view><template s-if=\"{{item.goodsInfo.length>0}}\"><view class=\"center\"><view class=\"center-left\" style=\"{{('background-image: url('+(item.goodsInfo[0].goodsImg?item.goodsInfo[0].goodsImg:defaultGoodsImg)+')')}}\"></view><view class=\"center-center\"><view class=\"center-right\"><view class=\"name\">{{''+item.goodsInfo[0].goodsName+''}}</view><view class=\"price\"><view class=\"now-price\">{{'¥'+item.realPrice+''}}</view><view class=\"old-price\">{{'¥'+item.totalPrice+''}}</view></view></view><view class=\"count\">{{''+(item.goodsInfo.length>1?\"共\"+item.goodsInfo.length+\"件商品\":\"数量\"+item.goodsInfo[0].goodsBuyNum)+''}}</view></view></view></template><template s-if=\"{{item.childOrder.length>0}}\"><view class=\"center\"><view class=\"center-left\" style=\"{{('background-image: url('+(item.childOrder[0].goodsInfo[0].goodsImg?item.childOrder[0].goodsInfo[0].goodsImg:defaultGoodsImg)+')')}}\"></view><view class=\"center-center\"><view class=\"center-right\"><view class=\"name\">{{''+item.childOrder[0].goodsInfo[0].goodsName+''}}</view><view class=\"price\"><view class=\"now-price\">{{'¥'+item.realPrice+''}}</view><view class=\"old-price\">{{'¥'+item.totalPrice+''}}</view></view></view><view class=\"count\">{{''+(item.childOrder[0].goodsInfo.length>1?\"共\"+item.childOrder[0].goodsInfo.length+\"件商品\":\"数量\"+item.childOrder[0].goodsInfo[0].goodsBuyNum)+''}}</view></view></view></template><template s-if=\"{{item.showToPay.notPayTips.length>0}}\"><view class=\"tips\">{{item.showToPay.notPayTips}}</view></template><template s-if=\"{{item.orderStatus===1||item.hasExpressInfo==1||item.giftStatus>1&&item.giftStatus<4}}\"><view class=\"bottom\"><template s-if=\"{{item.giftStatus>1&&item.giftStatus<4}}\"><view data-event-opts=\"{{[['tap',[['selectGift',['$0','$1','$2','$3'],[[['orderList','',index,'id']],[['orderList','',index,'orderNumber']],[['orderList','',index,'goodsInfo.__$n0.realPrice']],[['orderList','',index,'goodsInfo.__$n0.goodsId']]]]]]]}}\" class=\"submit-order submit-order-other swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, '__e', '', 'catch')\"><template s-if=\"{{item.giftStatus==2}}\"><text >选择赠品</text></template><template s-if=\"{{item.giftStatus==3}}\"><text >修改规格</text></template></view></template><template s-if=\"{{item.hasExpressInfo==1}}\"><view data-event-opts=\"{{[['tap',[['jumpToLogisticsDetail',['$0','$1','$2'],[[['orderList','',index,'orderNumber']],[['orderList','',index,'goodsInfo.__$n0.realPrice']],[['orderList','',index,'goodsInfo.__$n0.goodsId']]]]]]]}}\" class=\"cancel-order swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, '__e', '', 'catch')\">查看物流</view></template><template s-if=\"{{item.orderStatus===1}}\"><view data-event-opts=\"{{[['tap',[['orderCancel',['$0','$1','$2','$3','$4'],[[['orderList','',index]],[['orderList','',index,'id']],[['orderList','',index,'orderNumber']],[['orderList','',index,'goodsInfo.__$n0.realPrice']],[['orderList','',index,'goodsInfo.__$n0.goodsId']]]]]]]}}\" class=\"cancel-order swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, '__e', '', 'catch')\">取消订单</view></template><template s-if=\"{{item.showToPay.canPay&&item.orderStatus===1&&item.isContract!=1}}\"><view data-event-opts=\"{{[['tap',[['submitOrder',['$0'],[[['orderList','',index]]]]]]]}}\" class=\"submit-order swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, '__e', '', 'catch')\">立即支付</view></template></view></template></view></template></view></template><template s-if=\"{{orderList.length===0}}\"><view class=\"empty-list\"><image src=\"https://csdn-market.oss-cn-beijing.aliyuncs.com/app/vip/order-list-empty.png\"></image></view></template></view>",isComponent:!0,componentPath:"pages/order/list.swan",customComponentCss:[[1],"body","{height: 100%; width: 100%; background: #f1f2f3; }",".",[0],"base-page ",".",[0],"list","{padding: 4.266666666666667vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info","{margin-bottom: 4.266666666666667vw; padding: 4.266666666666667vw; background: #fff; border-radius: 0.5333333333333333vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"top","{margin-bottom: 4.266666666666667vw; display: flex; justify-content: space-between; align-items: center; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"top ",".",[0],"shop","{font-size: 3.7333333333333334vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #222226; line-height: 5.333333333333333vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"top ",".",[0],"shop-time","{display: flex; justify-content: center; align-items: center; font-size: 3.2vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #fc5531; line-height: 5.333333333333333vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center","{display: flex; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-left","{margin-right: 3.2vw; width: 17.066666666666666vw; height: 17.066666666666666vw; border-radius: 0.5333333333333333vw; border: 0.26666666666666666vw solid #f0f0f2; background-repeat: no-repeat; background-position: 50%; background-size: 100%; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-left swan-image","{width: 17.066666666666666vw; height: 17.066666666666666vw; border-radius: 0.5333333333333333vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-center ",".",[0],"center-right","{margin-bottom: 2.1333333333333333vw; display: flex; align-items: flex-start; justify-content: space-between; width: calc(100vw - 17.066666666666666vw - 3.2vw - 8.533333333333333vw - 8.533333333333333vw); }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-center ",".",[0],"center-right ",".",[0],"name","{display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; width: 44vw; height: 10.666666666666666vw; font-size: 3.7333333333333334vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #222226; line-height: 5.333333333333333vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-center ",".",[0],"center-right ",".",[0],"price","{width: 17.066666666666666vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-center ",".",[0],"center-right ",".",[0],"price ",".",[0],"now-price","{font-size: 4.266666666666667vw; font-family: PingFangSC-Medium,PingFang SC; font-weight: 500; color: #555666; line-height: 5.866666666666666vw; text-align: right; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-center ",".",[0],"center-right ",".",[0],"price ",".",[0],"old-price","{text-decoration: line-through; font-size: 3.2vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #999aaa; line-height: 4.533333333333333vw; text-align: right; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"center ",".",[0],"center-center ",".",[0],"count","{font-size: 3.2vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #999aaa; line-height: 4.533333333333333vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"tips","{margin-top: 1.0666666666666667vw; padding: 1.6vw 0 1.6vw 3.2vw; background: #fdf2e2; border-radius: 0.5333333333333333vw; font-size: 3.2vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #b87100; line-height: 4.266666666666667vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"bottom","{margin-top: 4.266666666666667vw; display: flex; justify-content: flex-end; align-items: center; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"bottom ",".",[0],"submit-order","{padding: 1.6vw 4.266666666666667vw; margin-left: 1.3333333333333333vw; font-size: 3.7333333333333334vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #f8e3c3; line-height: 5.333333333333333vw; background: #444555; border-radius: 5.333333333333333vw; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"bottom ",".",[0],"submit-order-other","{background: #fff; border: 0.26666666666666666vw solid #fc5531; color: #fc5531; }",".",[0],"base-page ",".",[0],"list ",".",[0],"info ",".",[0],"bottom ",".",[0],"cancel-order","{margin-left: 1.3333333333333333vw; padding: 1.6vw 4.266666666666667vw; font-size: 3.7333333333333334vw; font-family: PingFangSC-Regular,PingFang SC; font-weight: 400; color: #222226; line-height: 5.333333333333333vw; border-radius: 5.333333333333333vw; border: 0.26666666666666666vw solid #444555; }",".",[0],"base-page ",".",[0],"empty-list","{margin-top: 53.333333333333336vw; display: flex; justify-content: center; align-items: center; }",".",[0],"base-page ",".",[0],"empty-list swan-image","{width: 32vw; height: 32vw; }"],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));