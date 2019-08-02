import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton } from 'taro-ui';
import PwdBox from '../pwd-box';
import Otp from '../otp';
import './index.less';

interface IOtpModal {
  title?: string;
  closeOnClickOverlay?: boolean;
  pwdboxProps?: any;
  onInputFinish: any;
  onSendRequest: () => Promise<any>;
}

export default class OtpModal extends Component<IOtpModal, any>{
  public static defaultProps = {
    title: '请输入短信验证码',
    closeOnClickOverlay: false,
    pwdboxProps: {
      title: '请输入短信验证码',
      subTitle: '请输入发送到您手机的验证码'
    },
    onInputFinish: () => { },
    onSendRequest: () => { },
  }

  public static externalClass = ['v-class'];

  public state = {

  }

  public render() {
    const { title, pwdboxProps, onInputFinish, onSendRequest } = this.props;
    return (<AtModal isOpened={true} className="otp-modal">
      <AtModalHeader>{title}</AtModalHeader>
      <AtModalContent>
        <View className="pwd-box-wap">
          <PwdBox {...pwdboxProps} onInputFinish={onInputFinish}></PwdBox>
        </View>
        <View className="otp-wap">
          <Otp onSendRequest={onSendRequest}></Otp>
        </View>
      </AtModalContent>
      <AtModalAction><AtButton>确定</AtButton></AtModalAction>
    </AtModal>);
  }
}