import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import commonService from '../../../_services/commonService';

export default class RequestDemo extends Component<any, any>{

  public fetchPostRequest() {
    commonService.fetchPostRequest({
      index: 1,
      isLoop: true,
    }).then((result) => {
      console.log(JSON.stringify(result));
    });
  }

  public fetchGetRequest() {
    commonService.fetchGetRequest({
      index: 2,
    }).then((result) => {
      console.log(JSON.stringify(result));
    });
  }

  public render() {
    return <View>
      <Button onClick={this.fetchPostRequest}>发送POST请求</Button>
      <Button onClick={this.fetchGetRequest}>发送GET请求</Button>
    </View>
  }
}