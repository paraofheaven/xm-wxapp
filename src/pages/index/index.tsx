import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import classnames from 'classnames';
import './index.less'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
  }

  public state = {
    current: 0,
  }

  componentDidMount() { }

  public changeSwiperIndex = (e) => {
    this.setState({
      current: e.detail.current,
    })
  }

  render() {
    const { current } = this.state;
    return (
      <View className='index'>
        <View className="swiper-wap">
          <Swiper
            indicator-dots={false}
            autoplay={true}
            circular={true}
            onChange={this.changeSwiperIndex}>
            <SwiperItem>
              <Image className="swiper-image" mode={'scaleToFill'} src={'https://img.zhichiwangluo.com/zcimgdir/album/file_5b6d529765dba.png'}></Image>
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
        <View className="portal-list">
          <View className="portal-item">
            <View className="portal-item-icon pi-icon-1"></View>
            <Text className="portal-item-text">公司简介</Text>
          </View>
          <View className="portal-item">
            <View className="portal-item-icon pi-icon-2"></View>
            <Text className="portal-item-text">产品介绍</Text>
          </View>
          <View className="portal-item">
            <View className="portal-item-icon pi-icon-3"></View>
            <Text className="portal-item-text">成功案例</Text>
          </View>
          <View className="portal-item">
            <View className="portal-item-icon pi-icon-4"></View>
            <Text className="portal-item-text">联系我们</Text>
          </View>
        </View>
        <View className="empty-padding"></View>
        <View className="block">
          <View className="block-head">
            <View className="iff-icon left"></View>
            <Text className="bh-word">公司简介</Text>
            <View className="iff-icon right"></View>
          </View>
          <View>
            <Image className="block-image" mode="center" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b7d08801e46b.png"></Image>
          </View>
        </View>
        <View className="empty-padding"></View>
        <View className="block">
          <View className="block-head">
            <View className="iff-icon left"></View>
            <Text className="bh-word">主要产品</Text>
            <View className="iff-icon right"></View>
          </View>
          <View className="empty-padding ep-small"></View>
          <View className="band-block">
            <Image className="bb bb-1" mode="widthFix" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5ca30ed3589d5.png">
              <Text className="bb-title">品牌战略</Text>
              <Text className="bb-subtitle">树立品牌形象和风格</Text>
            </Image>
            <Image className="bb bb-2" mode="widthFix" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5ca30f149cc3d.png">
              <Text className="bb-title">VI标志</Text>
              <Text className="bb-subtitle">用品牌驱动持续发展。</Text>
            </Image>
            <Image className="bb bb-3" mode="widthFix" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5ca30f0cbaf66.png">
              <Text className="bb-title">空间设计</Text>
              <Text className="bb-subtitle">会场的地面布置和搭配</Text>
            </Image>
            <Image className="bb bb-4" mode="widthFix" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5ca30f324f13e.png">
              <Text className="bb-title">策划案</Text>
              <Text className="bb-subtitle">用策划创造成功，创造未来</Text>
            </Image>
          </View>
        </View>
        <View className="empty-padding"></View>
        <View className="block">
          <View className="block-head">
            <View className="iff-icon left"></View>
            <Text className="bh-word">成功案例</Text>
            <View className="iff-icon right"></View>
          </View>
          <View className="empty-padding ep-small"></View>
          <View className="success-block">
            <Image className="sb" mode="scaleToFill" src="https://img.zhichiwangluo.com/zcimgdir/thumb/t_15337859895b6bb785c4303.jpg">
              <Text className="sb-title">小创优品</Text>
            </Image>
            <Image className="sb" mode="scaleToFill" src="https://img.zhichiwangluo.com/zcimgdir/thumb/t_15337230795b6ac1c709fba.png">
              <Text className="sb-title">小创优品</Text>
            </Image>
          </View>
        </View>
        <View className="empty-padding"></View>
        <View className="block">
          <View className="block-head">
            <View className="iff-icon left"></View>
            <Text className="bh-word">联系我们</Text>
            <View className="iff-icon right"></View>
          </View>
          <View className="empty-padding ep-small"></View>
          <View className="contact-block">
            <Text className="cb-word1">地址  |  Address</Text>
            <View className="cb-word2">广东省深圳市南山区芒果网大厦</View>
            <View className="sb-icon icon-address"></View>
          </View>
          <View className="contact-block">
            <Text className="cb-word1">电话  |  Telephone</Text>
            <View className="cb-word2">13860677744</View>
            <View className="sb-icon icon-phone"></View>
          </View>
        </View>
        <View className="company-ties">由xxx提供技术服务支持</View>
      </View>
    )
  }
}
