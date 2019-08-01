import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import BottomUp from '../../../_components/bottomup';
import './index.less';

export default class BottomUpDemo extends Component<any, any>{

  public state = {
    bottomupOpen: false,
  }

  openBottomUp = () => {
    this.setState({
      bottomupOpen: true,
    });
  }

  closeBottomUp = () => {
    this.setState({
      bottomupOpen: false,
    });
  }

  public render() {
    const { bottomupOpen } = this.state;
    return (<View className="bottomup-demo">
      <AtButton onClick={this.openBottomUp}>底部弹窗</AtButton>
      <View>
        <BottomUp title="标题" isOpen={bottomupOpen} onClose={this.closeBottomUp} >
          <View className="bottom-block"></View>
          <View className="bottom-block"></View>
          <View className="bottom-block"></View>
        </BottomUp>
      </View>
    </View>);
  }
}