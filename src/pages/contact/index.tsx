import Taro, { Component, Config, showActionSheet } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem } from "taro-ui"
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
    navigationBarTitleText: '联系我们'
  }

  public state = {
    isActionOpened: false,
  }

  componentWillMount() {
    Taro.showLoading({
      title: '正在加载...'
    });
  }

  componentDidMount() {
    Taro.hideLoading();
  }

  public callingPhone = () => {
    Taro.makePhoneCall({
      phoneNumber: '17301631743',
    });
  }

  public joinus = () => {
    Taro.navigateTo({
      url: '/pages/joinus/index',
    });
  }

  public showActionSheet = () => {
    this.setState({
      isActionOpened: true,
    });
  }

  render() {
    const { isActionOpened } = this.state;
    return (
      <View className='contact'>
        <Image mode="widthFix" className="contact-image" src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b6be3707fcd1.png"></Image>
        <View className="contact-block">
          <Text className="cb-word1">地址  |  Address</Text>
          <View className="cb-word2">上海市嘉定区嘉行公路3188号8幢J274室</View>
          <View className="sb-icon itrung icon-address"></View>
        </View>
        <View className="contact-block" onClick={this.callingPhone}>
          <Text className="cb-word1">电话  |  Telephone</Text>
          <View className="cb-word2">17301631743</View>
          <View className="sb-icon icon-phone"></View>
        </View>
        <View className="contact-block">
          <Text className="cb-word1">邮箱  |  Email</Text>
          <View className="cb-word2">rodgersince2015@126.com</View>
          <View className="sb-icon icon-phone"></View>
        </View>
        <View className="contact-block" onClick={this.joinus}>
          <View className="cb-word3">加入我们</View>
          <View className="sb-icon icon-join-us"></View>
        </View>
        <View className="contact-block">
          <View className="cb-word3" onClick={this.callingPhone}>客服 | Serve</View>
          <View className="sb-icon icon-serve"></View>
        </View>
        <View className="contact-block">
          <View className="cb-word3" onClick={this.showActionSheet}>常见问题</View>
          <View className="sb-icon sh-io icon-question"></View>
        </View>

        <AtActionSheet className="contact-action-sheet" isOpened={isActionOpened}>
          <AtActionSheetItem>
            我想做后台OA系统，大数据整合系统，可以找你们吗？
          </AtActionSheetItem>
          <AtActionSheetItem>
            我想做多平台小程序和营销H5，可以找你们吗？
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}
