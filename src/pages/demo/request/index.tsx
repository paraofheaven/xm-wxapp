import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import commonService from '../../../_services/commonService';

export default class RequestDemo extends Component<any, any>{

  public state = {

  }

  public getHomeInfo() {
    commonService.getHomeConfig({
      index: 1,
      isLoop: true,
    }).then((result) => {
      console.log(JSON.stringify(result));
    });
  }

  public render() {
    return <View>
      <Button onClick={this.getHomeInfo}>发送请求</Button>
    </View>
  }
}