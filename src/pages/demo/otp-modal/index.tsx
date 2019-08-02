import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import OtpModal from '../../../_components/otp-modal';
import { AtMessage } from 'taro-ui';
import './index.less';

export default class OtpDemo extends Component<any, any>{

  public state = {

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

  public render() {
    return <View>
      <View className="demo-otp-modal">
        <OtpModal onSendRequest={this.sendRequest}></OtpModal>
      </View>
      <AtMessage></AtMessage>
    </View>
  }
}