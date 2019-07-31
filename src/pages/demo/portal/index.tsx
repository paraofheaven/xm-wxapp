import Taro, { Component, Config } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components';
import MyIcon from '../../../_components/myicon';
import './index.less';

export default class Demo extends Component {

  config: Config = {
    navigationBarTitleText: 'demo',
  }

  public state = {
    bottomupOpen: false,
    value1: '',
  }

  render() {

    return (
      <View className="demo">
        <View className="demo-item">
          <Navigator url={"/pages/demo/bottomup/index"}># 底部弹窗</Navigator>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <Navigator url={"/pages/demo/keyboard/index"}># 自定义键盘</Navigator>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <Navigator url={"/pages/demo/pwd-box/index"}># 密码输入框</Navigator>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <Navigator url={"/pages/demo/otp/index"}># 短信验证码</Navigator>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <Navigator url={"/pages/demo/pwd-keyboard/index"}># 密码输入带键盘</Navigator>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
      </View>
    )
  }
}

