import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
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
    navigationBarTitleText: '加入我们'
  }

  public onShareAppMessage() {
    return {
      title: '湘昕科技公司，认真提供技术服务，提供各领域专业的解决方案',
      path: 'pages/index/index',
    }
  }

  public callingPhone = () => {
    Taro.makePhoneCall({
      phoneNumber: '17301631743',
    });
  }

  render() {
    return (
      <View className='joinus'>
        <Image className="joinus-image" mode="scaleToFill" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b695409bab59.jpg"></Image>
        <View className="block-title">招聘英才 | Join Us</View>
        <View className="ju-block">
          <View className="jub-me">UI设计师</View>
          <View>岗位要求 </View>
          <View>1、视觉传达/平面设计专业，本科学历，2年至以上 UI设计经验； </View>
          <View>2、精通Photoshop、AI、Axure等软件； </View>
          <View>3、能根据需求文档作出产品原型，对互联网产品风格有独立的见解。 </View>
          <View>4、对移动终端人机交互、界面设计和其他相关理论有较系统的认识； </View>
          <View>5、对色彩运用有深刻的把握力、创新的设计风格，有创新和服务意识；</View>
          <View>6、善于发现和提出给用户带来方便的界面特性设计； </View>
          <View>7、独立工作和学习能力强，有良好的沟通能力、团队协作能力，富有责任心。</View>
        </View>
        <View className="float-phone" onClick={this.callingPhone}></View>
      </View>
    )
  }
}
