var _sjsSupporter={compiler:!1};window.define("pages/booking/shopInfoPage/shopInfoPage.swan",(function(e,t){t.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="page"><view class="store-list-hd"><scroll-view scroll-y="true"><view s-if="{{storeListOften.length >0}}" class="{{\'Often\' === district ? \'active\' : \'\'}} swan-spider-tap" data-district="storeOften" on-bindtap="eventHappen(\'tap\', $event, \'districtIndexTap\', \'\', \'bind\')">常用门店</view><view s-if="{{storeListNear.length >0}}" class="{{\'Nearby\' === district ? \'active\' : \'\'}} swan-spider-tap" data-district="storeNearby" on-bindtap="eventHappen(\'tap\', $event, \'districtIndexTap\', \'\', \'bind\')">附近门店</view><view s-if="{{storeListAirportRailway.length >0}}" class="{{\'Traffic\' === district ? \'active\' : \'\'}} swan-spider-tap" data-district="storeTraffic" on-bindtap="eventHappen(\'tap\', $event, \'districtIndexTap\', \'\', \'bind\')">机场/火车站</view><template s-for="item, index in storeList" s-key="Id"><template s-if="{{index == 0}}"><view class="{{item.Id == district ? \'active\' : \'\'}} swan-spider-tap" data-district="store{{item.Id}}" on-bindtap="eventHappen(\'tap\', $event, \'districtIndexTap\', \'\', \'bind\')">{{item.DistrictName}}</view></template><template s-else><template s-if="{{item.DistrictName != storeList[index-1].DistrictName}}"><view class="{{item.Id == district ? \'active\' : \'\'}} swan-spider-tap" data-district="store{{item.Id}}" on-bindtap="eventHappen(\'tap\', $event, \'districtIndexTap\', \'\', \'bind\')">{{item.DistrictName}}</view></template></template></template></scroll-view></view><view class="store-list-bd"><scroll-view scroll-y="true" scroll-into-view="{{toView}}"><template s-if="{{storeListOften.length >0}}"><view class="store-title" id="storeOften">常用门店</view><template s-for="item, index in storeListOften" s-key="Id"><view class="store-list {{index !== storeListOften.length -1 ? \'border-bottom-px1\' : \'\'}}"><view class="flex"><view class="cell store-info swan-spider-tap" data-store="{{item}}" on-bindtap="eventHappen(\'tap\', $event, \'storeTap\', \'\', \'bind\')"><view class="store-info-title flex align-center"><view >{{item.Name}}</view></view><view class="store-info-panel"><view class="address"><view >地址：{{item.Address}}</view><view class="flex align-center"><text >营业时间：{{item.OpeningTime}} - {{item.ClosingTime}}</text></view></view></view></view><view class="store-more swan-spider-tap" data-phone="{{item.PhoneNumber}}" on-bindtap="eventHappen(\'tap\', $event, \'makePhoneCall\', \'\', \'bind\')"><image src="/images/phone.png" style="width:6.666666666666667vw;height:6.666666666666667vw;"></image></view></view></view></template></template><template s-if="{{storeListNear.length >0}}"><view class="store-title" id="storeNearby">附近门店</view><template s-for="item, index in storeListNear" s-key="Id"><view class="store-list {{index !== storeListNear.length -1 ? \'border-bottom-px1\' : \'\'}}"><view class="flex"><view class="cell store-info swan-spider-tap" data-store="{{item}}" on-bindtap="eventHappen(\'tap\', $event, \'storeTap\', \'\', \'bind\')"><view class="store-info-title flex align-center"><view >{{item.Name}}</view></view><view class="store-info-panel"><view class="address"><view >地址：{{item.Address}}</view><view class="flex align-center"><text >营业时间：{{item.OpeningTime}} - {{item.ClosingTime}}</text></view></view></view></view><view class="store-more swan-spider-tap" data-phone="{{item.PhoneNumber}}" on-bindtap="eventHappen(\'tap\', $event, \'makePhoneCall\', \'\', \'bind\')"><image src="/images/phone.png" style="width:6.666666666666667vw;height:6.666666666666667vw;"></image></view></view></view></template></template><template s-if="{{storeListAirportRailway.length >0}}"><view class="store-title" id="storeTraffic">机场/火车站</view><template s-for="item, index in storeListAirportRailway" s-key="Id"><view class="store-list {{index !== storeListAirportRailway.length -1 ? \'border-bottom-px1\' : \'\'}}"><view class="flex"><view class="cell store-info swan-spider-tap" data-store="{{item}}" on-bindtap="eventHappen(\'tap\', $event, \'storeTap\', \'\', \'bind\')"><view class="store-info-title flex align-center"><view >{{item.Name}}</view></view><view class="store-info-panel"><view class="address"><view >地址：{{item.Address}}</view><view class="flex align-center"><text >营业时间：{{item.OpeningTime}} - {{item.ClosingTime}}</text></view></view></view></view><view class="store-more swan-spider-tap" data-phone="{{item.PhoneNumber}}" on-bindtap="eventHappen(\'tap\', $event, \'makePhoneCall\', \'\', \'bind\')"><image src="/images/phone.png" style="width:6.666666666666667vw;height:6.666666666666667vw;"></image></view></view></view></template></template><template s-for="item, index in storeList" s-key="Id"><template s-if="{{index == 0}}"><view class="store-title" id="store{{item.Id}}">{{item.DistrictName}}</view><view class="store-list {{index !== storeList.length -1 ? \'border-bottom-px1\' : \'\'}}"><view class="flex"><view class="cell store-info swan-spider-tap" data-store="{{item}}" on-bindtap="eventHappen(\'tap\', $event, \'storeTap\', \'\', \'bind\')"><view class="store-info-title flex align-center"><view >{{item.Name}}</view></view><view class="store-info-panel"><view class="address"><view >地址：{{item.Address}}</view><view class="flex align-center"><text >营业时间：{{item.OpeningTime}} - {{item.ClosingTime}}</text></view></view></view></view><view class="store-more swan-spider-tap" data-phone="{{item.PhoneNumber}}" on-bindtap="eventHappen(\'tap\', $event, \'makePhoneCall\', \'\', \'bind\')"><image src="/images/phone.png" style="width:6.666666666666667vw;height:6.666666666666667vw;"></image></view></view></view></template><template s-else><template s-if="{{item.DistrictName != storeList[index-1].DistrictName}}"><view class="store-title" id="store{{item.Id}}">{{item.DistrictName}}</view><view class="store-list {{index !== storeList.length -1 ? \'border-bottom-px1\' : \'\'}}"><view class="flex"><view class="store-info swan-spider-tap" data-store="{{item}}" on-bindtap="eventHappen(\'tap\', $event, \'storeTap\', \'\', \'bind\')"><view class="store-info-title flex align-center"><view >{{item.Name}}</view></view><view class="store-info-panel"><view class="address"><view >地址：{{item.Address}}</view><view class="flex align-center"><text >营业时间：{{item.OpeningTime}} - {{item.ClosingTime}}</text></view></view></view></view><view class="store-more swan-spider-tap" data-phone="{{item.PhoneNumber}}" on-bindtap="eventHappen(\'tap\', $event, \'makePhoneCall\', \'\', \'bind\')"><image src="/images/phone.png" style="width:6.666666666666667vw;height:6.666666666666667vw;"></image></view></view></view></template><template s-else><view class="store-list {{index !== storeList.length -1 ? \'border-bottom-px1\' : \'\'}}"><view class="flex"><view class="cell store-info swan-spider-tap" data-store="{{item}}" on-bindtap="eventHappen(\'tap\', $event, \'storeTap\', \'\', \'bind\')"><view class="store-info-title flex align-center"><view >{{item.Name}}</view></view><view class="store-info-panel"><view class="address"><view >地址：{{item.Address}}</view><view class="flex align-center"><text >营业时间：{{item.OpeningTime}} - {{item.ClosingTime}}</text></view></view></view></view><view class="store-more swan-spider-tap" data-phone="{{item.PhoneNumber}}" on-bindtap="eventHappen(\'tap\', $event, \'makePhoneCall\', \'\', \'bind\')"><image src="/images/phone.png" style="width:6.666666666666667vw;height:6.666666666666667vw;"></image></view></view></view></template></template></template></scroll-view></view></view>',isComponent:!1,componentPath:"pages/booking/shopInfoPage/shopInfoPage.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));