import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton, AtMessage } from 'taro-ui';
import PwdKeyBoard from '../../../_components/pwd-keyboard';
import './index.less';

export default class PwdKeyBoardDemo extends Component<any, any>{

  public state = {
    isPwdOpen: false,
    test: '',
  }

  public openPwdKeyBoard = () => {
    this.setState({
      isPwdOpen: true,
    });
  }

  public test = () => {
    this.setState({
      test: 'haohaoah'
    }, () => {
      Taro.atMessage({
        message: this.state.test
      });
    });
  }

  public onClose = () => {
    this.setState({
      isPwdOpen: false,
    });
  }

  public onInputFinish = (value) => {
    Taro.atMessage({
      message: `设置密码为:${value}`
    });
  }

  render() {
    const { isPwdOpen } = this.state;
    return <View className="pwd-keyboard-demo">
      <AtButton onClick={this.openPwdKeyBoard}>支付密码带键盘</AtButton>
      <AtButton onClick={this.test}>test</AtButton>
      <PwdKeyBoard isOpen={isPwdOpen} onClose={this.onClose} onInputFinish={this.onInputFinish} />
      <AtMessage />
    </View>
  }
}