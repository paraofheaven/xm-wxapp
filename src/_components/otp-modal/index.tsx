import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtModal } from 'taro-ui';
import './index.less';

interface IOtpModal {
  title?: string;
  closeOnClickOverlay?: boolean;
}

export default class OtpModal extends Component<IOtpModal, any>{
  public static defaultProps = {
    title: '输入短信验证码',
    closeOnClickOverlay: false,
  }

  public static externalClass = ['v-class'];

  public state = {

  }

  public render() {
    const { title } = this.props;
    return (<AtModal isOpened={true} title={title}>

    </AtModal>);
  }
}