var _sjsSupporter={compiler:!1};window.define("pages/videoDetail.swan",(function(e,i){i.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n<view class="recipe-detail-page" s-scope-data="{{...scopeData}}"><view s-if="{{!model.video.url}}"><view class="skeleton-info-box"><view class="item1" /><view class="item2" /><view class="item3" /></view></view><form report-submit="false" s-else class="swan-spider-tap" on-bindsubmit="eventHappen(\'submit\', $event, \'submit\', \'\', \'bind\')"><view class="con"><template class="video-cloum {{model.video.width/model.video.height <= 1 ? \'\' : \'video-row\'}}"></template><view class="kc-info"><view class="kc-author-info-box clearfix"><view class="author-head-box"><image s-if="{{!model.customer.img}}" class="author-head" src="/images/user-defa-icon.png" /><image s-else class="author-head" src="{{model.customer.img}}"><image s-if="{{model.customer.isGiurmet}}" class="msj-icon" src="/images/meishijia-yuan-icon.png" /></image></view><view class="author-info"><text class="name ellipsis">{{model.customer.nickName}}</text><view class="qm ellipsis">{{model.allClick}}次观看</view></view><view class="sc-btn sc-gray swan-spider-tap" s-if="{{model.isFav == 2}}" on-bindtap="eventHappen(\'tap\', $event, \'setLike\', \'\', \'bind\')">已收藏</view><view class="sc-btn swan-spider-tap" s-else on-bindtap="eventHappen(\'tap\', $event, \'setLike\', \'\', \'bind\')">收藏</view></view><view class="video-title">{{model.name}}\n      </view><view class="comment" s-if="{{model.comment.content}}"><text class="name">{{model.comment.customer.nickName}}:</text><text class="contnet">{{model.comment.content}}</text><view class="go-comment swan-spider-tap" s-if="{{model.commentNum >1}}" data-wpygocomment-a="{{model.code}}" data-wpygocomment-b="{{model.commentNum}}" on-bindtap="eventHappen(\'tap\', $event, \'goComment\', \'\', \'bind\')">查看{{model.commentNum}}条评论>></view></view></view><view class="recomm-box" s-if="{{recipeList.length}}"><view class="recomm-title-box clearfix"><view class="title">热门推荐</view></view><view class="caipu-list-box clearfix"><template s-for="item, index in $recipesComCList$caipuList" s-key="{{item.index}}"><view s-if="{{index == 0}}"><view class="baiduad" s-if="{{$recipesComCList$xhAdBox0$adInfo[$recipesComCList$xhAdBox0$adPos].apid}}"><view style="width:{{$recipesComCList$xhAdBox0$adInfo[$recipesComCList$xhAdBox0$adPos].width*2}}rpx;" class="ad-style"><ad appid="{{$recipesComCList$xhAdBox0$adInfo[$recipesComCList$xhAdBox0$adPos].appid}}" apid="{{$recipesComCList$xhAdBox0$adInfo[$recipesComCList$xhAdBox0$adPos].apid}}" type="{{$recipesComCList$xhAdBox0$adInfo[$recipesComCList$xhAdBox0$adPos].type}}" class="ad" /></view></view></view><view s-if="{{index == 5}}"><view class="baiduad" s-if="{{$recipesComCList$xhAdBox1$adInfo[$recipesComCList$xhAdBox1$adPos].apid}}"><view style="width:{{$recipesComCList$xhAdBox1$adInfo[$recipesComCList$xhAdBox1$adPos].width*2}}rpx;" class="ad-style"><ad appid="{{$recipesComCList$xhAdBox1$adInfo[$recipesComCList$xhAdBox1$adPos].appid}}" apid="{{$recipesComCList$xhAdBox1$adInfo[$recipesComCList$xhAdBox1$adPos].apid}}" type="{{$recipesComCList$xhAdBox1$adInfo[$recipesComCList$xhAdBox1$adPos].type}}" class="ad" /></view></view></view><view s-if="{{index == 11}}"><view class="baiduad" s-if="{{$recipesComCList$xhAdBox2$adInfo[$recipesComCList$xhAdBox2$adPos].apid}}"><view style="width:{{$recipesComCList$xhAdBox2$adInfo[$recipesComCList$xhAdBox2$adPos].width*2}}rpx;" class="ad-style"><ad appid="{{$recipesComCList$xhAdBox2$adInfo[$recipesComCList$xhAdBox2$adPos].appid}}" apid="{{$recipesComCList$xhAdBox2$adInfo[$recipesComCList$xhAdBox2$adPos].apid}}" type="{{$recipesComCList$xhAdBox2$adInfo[$recipesComCList$xhAdBox2$adPos].type}}" class="ad" /></view></view></view><view class="item-one clearfix swan-spider-tap" data-wpynavto-a="/pages/videoDetail?dishCode={{item.code}}" data-wpynavto-b="{{$recipesComCList$openType}}" on-bindtap="eventHappen(\'tap\', $event, \'$recipesComCList$navTo\', \'\', \'bind\')"><view class="con-l type_green" style="background:url({{item.img}});background-size:100%;border-radius:0.8vw;"></view><view class="con-r"><text class="title">{{item.name}}</text><view class="min-con"><text class="author">{{item.customer.nickName}}</text><text class="see">{{item.allClick}}次观看</text></view></view></view></template></view><view class="loadMoreGif" s-if="{{$bottomLoadMore$show}}"><image src="/images/loadding.gif" /><text >{{$bottomLoadMore$message}}</text></view><view class="xh-text" s-if="{{$bottomText$show}}"><text class="line" /><text class="text">{{$bottomText$message}}</text></view></view><view ><view class="more-wrap swan-spider-tap" s-if="{{$bottomBar$type == \'dish\'}}" on-bindtap="eventHappen(\'tap\', $event, \'$bottomBar$goPage\', \'\', \'bind\')"><image src="/images/logo-200.png" mode="aspectFit" /><view class="text-wrap {{$bottomBar$isAndroid ? \'android-len\' : \'\'}}"><view class="normal">更多</view><view class="bold">「</view><view class="bold bold-len">{{$bottomBar$text}}</view><view class="bold">」</view><view class="normal">做法</view></view></view><view class="more-wrap swan-spider-tap" s-if="{{$bottomBar$type == \'video\'}}" on-bindtap="eventHappen(\'tap\', $event, \'$bottomBar$goPage\', \'\', \'bind\')"><image src="/images/go-comment.png" mode="aspectFit" /><view class="text-wrap"><view class="normal">与哈友互动交流吧~</view></view></view></view></view></form></view>',isComponent:!1,componentPath:"pages/videoDetail.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));