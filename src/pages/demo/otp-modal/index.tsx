import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import OtpModal from '../../../_components/otp-modal';
import { AtMessage, AtButton } from 'taro-ui';
import './index.less';

export default class OtpDemo extends Component<any, any>{

  public state = {
    isOpen: false
  }

  public sendRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  public onInputFinish = (code) => {
    Taro.atMessage({
      message: `输入短信验证码为${code}`,
    });
  }

  public openOtpModal = () => {
    this.setState({
      isOpen: true
    });
  }

  public render() {
    const { isOpen } = this.state;
    return <View>
      <AtButton onClick={this.openOtpModal}>打开验证码弹窗</AtButton>
      <View className="demo-otp-modal">
        <OtpModal isOpen={isOpen} onSendRequest={this.sendRequest}></OtpModal>
      </View>
      <AtMessage></AtMessage>
    </View>
  }
}