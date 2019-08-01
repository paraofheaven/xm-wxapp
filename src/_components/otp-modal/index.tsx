import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtModal } from 'taro-ui';
import PwdBox from '../pwd-box';
import Otp from '../otp';
import './index.less';

interface IOtpModal {
  title?: string;
  closeOnClickOverlay?: boolean;
  onInputFinish: any;
}

export default class OtpModal extends Component<IOtpModal, any>{
  public static defaultProps = {
    title: '输入短信验证码',
    closeOnClickOverlay: false,
    onInputFinish: () => { }
  }

  public static externalClass = ['v-class'];

  public state = {

  }

  public render() {
    const { title, onInputFinish } = this.props;
    return (<AtModal isOpened={true} title={title}>
      <View>
        <PwdBox onInputFinish={onInputFinish}></PwdBox>
      </View>
    </AtModal>);
  }
}