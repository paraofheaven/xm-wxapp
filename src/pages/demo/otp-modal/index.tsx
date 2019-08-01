import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import OtpModal from '../../../_components/otp-modal';
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

  public render() {
    return <View>
      <View className="demo-otp-modal">
        <OtpModal></OtpModal>
      </View>
    </View>
  }
}