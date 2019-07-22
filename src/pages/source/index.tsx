import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
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

  componentDidMount() { }

  public changeSwiperIndex = (e) => {
    this.setState({
      current: e.detail.current,
    });
  }

  render() {
    const { current } = this.state;
    return (
      <View className='source'>
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
    )
  }
}
