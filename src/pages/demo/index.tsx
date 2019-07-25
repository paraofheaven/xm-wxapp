import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import BottomUp from '../../_components/bottomup';
import './index.less';

export default class Demo extends Component {

  config: Config = {
    navigationBarTitleText: 'demo',
  }

  public state = {
    bottomupOpen: false,
  }

  openBottomUp = () => {
    this.setState({
      bottomupOpen: true,
    });
  }

  render() {
    const { bottomupOpen } = this.state;
    return (
      <View className="demo">
        <AtButton onClick={this.openBottomUp}>底部弹窗</AtButton>
        <View>
          <BottomUp className="demo-bottomup" title="标题" isOpen={bottomupOpen} closeOnClickOverlay onClose={() => { console.log('1111') }}>
            <View className="bottom-block"></View>
            <View className="bottom-block"></View>
            <View className="bottom-block"></View>
          </BottomUp>
        </View>
      </View>
    )
  }
}

