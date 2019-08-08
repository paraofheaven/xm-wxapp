
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtMessage, AtButton } from 'taro-ui';
import { authorizeUserLocation } from '../../../_utils/common';
import './index.less';

export default class UtilsDemo extends Component<any, any>{

  public state = {

  }

  public componentDidMount() {
    this.authOrigin(false);
  }

  public authOrigin = (force) => {
    authorizeUserLocation((res) => {
      if (res.status === 'fail') {
        return;
      }
      Taro.showModal({
        title: '地理位置信息返回参数',
        content: JSON.stringify(res),
      });
    }, force);
  }

  public render() {
    return <View>
      <AtButton onClick={this.authOrigin.bind(this, true)}>获取授权</AtButton>
      <AtMessage></AtMessage>
    </View >
  }
}