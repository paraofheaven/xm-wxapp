import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Otp from '../../../_components/otp';
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
      <View className="demo-otp">
        <Otp
          autoStart
          totalTicks={100}
          format={"{t}s后重发"}
          sendTxt={'获取动态码'}
          processingTxt={'短信发送中'}
          onSendRequest={this.sendRequest}></Otp>
      </View>
    </View>
  }
}