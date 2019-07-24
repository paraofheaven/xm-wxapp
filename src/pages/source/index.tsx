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
              return <View className={classnames('swiper-dot', { 'swiper-active': index === current })}></View>
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
            <Image mode="scaleToFill" className="sli-ave" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b87bca3a6fb2.png"></Image>
            <View className="sli-title">OSS平台</View>
            <View className="sli-tips">
              <Text className="slit-word">OA系统</Text>
              <Text className="slit-word">OSS后台</Text>
              <Text className="slit-word">流量监控</Text>
            </View>
            <View className="sli-desc">覆盖个行业解决方案，提供数据录入、数据可视化、数据分析</View>
          </View>
          <View className="empty-padding"></View>
          <View className="sl-item">
            <Image mode="scaleToFill" className="sli-ave" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b87bca3a6fb2.png"></Image>
            <View className="sli-title">美业类小程序</View>
            <View className="sli-tips">
              <Text className="slit-word">美容服务</Text>
              <Text className="slit-word">一键预定</Text>
              <Text className="slit-word">广告营销</Text>
            </View>
            <View className="sli-desc">覆盖微信端强大的社交生态，高效实现拉新和导流</View>
          </View>
        </View>
        <View className="wantOccu">期待与您的合作</View>
      </View>
    )
  }
}
