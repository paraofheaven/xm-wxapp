import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Modal from '../../../_components/modal';
import { AtButton } from 'taro-ui';
import './index.less';

export default class ModalDemo extends Component<any, any>{

  public state = {
    isOpen: false,
  }

  public openModal = () => {
    this.setState({
      isOpen: true,
    });
  }

  public render() {
    const { isOpen } = this.state;
    return <View className="modal-demo">
      <AtButton onClick={this.openModal}>打开弹窗</AtButton>
      <Modal isOpen={isOpen}>
        <View className="modal-block"></View>
        <View className="modal-block"></View>
      </Modal>
    </View>
  }
}