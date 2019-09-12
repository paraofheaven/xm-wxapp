import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components';
import MyIcon from '../../../_components/myicon';
import { navigateTo } from '../../../_utils/uri';
import './index.less';

export default class Demo extends Component {

  config: Config = {
    navigationBarTitleText: 'demo',
  }

  public state = {
    bottomupOpen: false,
    value1: '',
  }

  public skipToModule = (url) => {
    navigateTo(url);
  }

  render() {

    return (
      <View className="demo">
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/modal/index')}># 弹窗</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/bottomup/index')}># 底部弹窗</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/keyboard/index')}># 自定义键盘</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/otp/index')}># 短信验证码</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/otp-modal/index')}># 短信验证码弹窗</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/pwd-box/index')}># 密码输入框</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/pwd-keyboard/index')}># 密码输入带键盘</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/utils/index')}># 工具</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/native/index')}># 原生小程序</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/request/index')}># 请求</View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
        <View className="demo-item">
          <View onClick={this.skipToModule.bind(this, '/pages/demo/wxlogin/index')}># 微信授权登录 </View>
          <MyIcon v-class="demo-right" value="right"></MyIcon>
        </View>
      </View>
    )
  }
}

