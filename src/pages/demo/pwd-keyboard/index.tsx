import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PwdKeyBoard from '../../../_components/pwd-keyboard';
import './index.less';

export default class PwdKeyBoardDemo extends Component<any, any>{
  render() {
    return <View className="pwd-keyboard-demo">
      <PwdKeyBoard />
    </View>
  }
}