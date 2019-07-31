import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtMessage } from 'taro-ui';
import PwdBox from '../../../_components/pwd-box';
import './index.less';

export default class PwdBoxDemo extends Component<any, any>{

  public state = {

  }

  public onPwdInputFinish = (value) => {
    Taro.atMessage({
      message: `输入的密码为：${value}`
    });
  }

  public render() {
    return <View>
      <View className="demo-pwd">
        <PwdBox onInputFinish={this.onPwdInputFinish}></PwdBox>
      </View>
      <AtMessage />
    </View>
  }
}