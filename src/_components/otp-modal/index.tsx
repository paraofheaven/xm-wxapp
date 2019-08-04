import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import Modal from '../modal';
import PwdBox from '../pwd-box';
import Otp from '../otp';
import MyIcon from '../myicon';
import './index.less';

interface IOtpModal {
  isOpen: boolean;
  title?: string;
  desc?: string;
  closeOnClickOverlay?: boolean;
  onInputFinish: any;
  onSendRequest: () => Promise<any>;
}

export default class OtpModal extends Component<IOtpModal, any>{
  public static defaultProps = {
    title: '请输入短信验证码',
    desc: '请输入发送到您手机的验证码',
    closeOnClickOverlay: false,
    onInputFinish: () => { },
    onSendRequest: () => { },
  }

  public static externalClass = ['v-class'];

  public state = {
    btnDisabled: true,
  }

  public onInputFinish = (value) => {
    this.props.onInputFinish(value);
  }

  public render() {
    const { isOpen, title, desc, pwdboxProps, onSendRequest } = this.props;
    const { btnDisabled } = this.state;
    return (<Modal isOpen={isOpen} v-class="v-otp-modal">
      <MyIcon value="close" size={22} color="#999" v-class="v-otp-modal-close"></MyIcon>
      <View className="v-otp-modal-title">{title}</View>
      <View className="v-otp-modal-desc">{desc}</View>
      <View className="v-otp-modal-content">
        <PwdBox onInputFinish={this.onInputFinish}></PwdBox>
      </View>
      <View>
        <Otp onSendRequest={onSendRequest}></Otp>
      </View>
      <AtButton disabled={btnDisabled}>确定</AtButton>
    </Modal>);
  }
}