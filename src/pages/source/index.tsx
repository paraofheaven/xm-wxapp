import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'
import classnames from 'classnames';
import './index.less'

export default class Source extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '公司业务'
  }
  public state = {
    current: 0,
  }

  componentWillMount() {
    Taro.showLoading({
      title: '正在加载...'
    });
  }

  componentDidMount() {
    Taro.hideLoading();
  }

  public changeSwiperIndex = (e) => {
    this.setState({
      current: e.detail.current,
    });
  }

  render() {
    const { current } = this.state;
    return (
      <View className='source'>
        <View className="swiper-wap">
          <Swiper
            indicator-dots={false}
            autoplay={true}
            circular={true}
            onChange={this.changeSwiperIndex}>
            <SwiperItem>
              <Image className="swiper-image" mode={'scaleToFill'} src={'https://img.zhichiwangluo.com/zcimgdir/album/file_5b6bf1aa298fc.png'}></Image>
            </SwiperItem>
            <SwiperItem>
              <Image className="swiper-image" mode={'scaleToFill'} src={'https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d654d93e73.png'}></Image>
            </SwiperItem>
            <SwiperItem>
              <Image className="swiper-image" mode={'scaleToFill'} src={'https://img.zhichiwangluo.com/zcimgdir/album/file_5b695409bab59.jpg'}></Image>
            </SwiperItem>
          </Swiper>
          <View className="swiper-dots">
            {['', '', ''].map((item, index) => {
              return <View className={classnames('swiper-dot', { 'swiper-active': index === current })} key={item}></View>
            })}
          </View>
        </View>
        {/* <Image className="souce-image" mode="widthFix" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b6bf1aa298fc.png"></Image> */}
        <View className="source-pan">
          <View className="sp-title">公司服务</View>
          <View className="sp-content">开辟属于自己的稳定的营销渠道，能扩大市场份额，建立连锁、分销的统一电商运营管理系统。</View>
        </View>
        <View className="content-title">
          <View className="ct-word1">精选案例</View>
          <View className="ct-word2">company development</View>
        </View>
        <View className="source-list">
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b87bca3a6fb2.png"></Image>
            <View className="sli-title">网上商城</View>
            <View className="sli-tips">
              <Text className="slit-word">在线销售</Text>
              <Text className="slit-word">运营管理</Text>
              <Text className="slit-word">活动营销</Text>
            </View>
            <View className="sli-desc">提供稳定的营销渠道，扩大市场份额</View>
          </View>
          <View className="empty-padding"></View>
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://www.elizhuo.com/static/media/cy@2x.23a3c1b0.png"></Image>
            <View className="sli-title">微餐饮</View>
            <View className="sli-tips">
              <Text className="slit-word">智慧餐厅</Text>
              <Text className="slit-word">外卖商城</Text>
              <Text className="slit-word">会员支付</Text>
            </View>
            <View className="sli-desc">为餐饮商户提供国内领先餐厅O2O解决方案</View>
          </View>
          <View className="empty-padding"></View>
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://www.elizhuo.com/static/media/my@2x.c503d6b6.png"></Image>
            <View className="sli-title">微美业</View>
            <View className="sli-tips">
              <Text className="slit-word">美容SPA</Text>
              <Text className="slit-word">一键预定</Text>
              <Text className="slit-word">广告营销</Text>
            </View>
            <View className="sli-desc">深度对接商家微信公众号和小程序，支持线上下单购买，线下到店消费</View>
          </View>
          <View className="empty-padding"></View>
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://www.elizhuo.com/static/media/ls@2x.fc789854.png"></Image>
            <View className="sli-title">微零售</View>
            <View className="sli-tips">
              <Text className="slit-word">在线商城</Text>
              <Text className="slit-word">多渠道销存</Text>
              <Text className="slit-word">数据分析</Text>
            </View>
            <View className="sli-desc">助推企业快速实现营销、服务、效率转型升级</View>
          </View>
          <View className="empty-padding"></View>
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://www.elizhuo.com/static/media/jr@2x.c9ec059b.png"></Image>
            <View className="sli-title">微金融</View>
            <View className="sli-tips">
              <Text className="slit-word">智慧金融</Text>
              <Text className="slit-word">合规安全</Text>
              <Text className="slit-word">低成本 高性能</Text>
            </View>
            <View className="sli-desc">运用领先技术助力客户科技升级，打造云上金融，智创未来</View>
          </View>
          <View className="empty-padding"></View>
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://www.elizhuo.com/static/media/ly@2x.c5b7de66.png"></Image>
            <View className="sli-title">微旅游</View>
            <View className="sli-tips">
              <Text className="slit-word">在线OTA</Text>
              <Text className="slit-word">线上预订</Text>
              <Text className="slit-word">会员营销</Text>
            </View>
            <View className="sli-desc">帮助旅游企业将传统线下门店销售方式转移到线上旅游电商平台</View>
          </View>
          <View className="empty-padding"></View>
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5c062f7f02f71.jpg"></Image>
            <View className="sli-title">其他</View>
            <View className="sli-tips">
              <Text className="slit-word">专业定制</Text>
              <Text className="slit-word">敏捷开发</Text>
              <Text className="slit-word">快速响应</Text>
            </View>
            <View className="sli-desc">湘昕科技为各行各业量身定制各类微信公众号和小程序解决方案。</View>
          </View>
        </View>
        <View className="wantOccu">期待与您的合作</View>
      </View>
    )
  }
}
