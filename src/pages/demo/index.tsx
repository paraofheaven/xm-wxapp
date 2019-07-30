import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components';
import { AtButton, AtInput, AtForm, AtMessage } from 'taro-ui';
import BottomUp from '../../_components/bottomup';
import KeyBoard from '../../_components/keyboard';
import Otp from '../../_components/otp';
import './index.less';

export default class Demo extends Component {

  config: Config = {
    navigationBarTitleText: 'demo',
  }

  public state = {
    bottomupOpen: false,
    value1: '',
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

  public handleChange = (value) => {
    this.setState({
      value1: value,
    });
  }

  public handleInputDelete = () => {
    this.setState({
      value1: this.state.value1.substring(0, this.state.value1.length - 1)
    });
  }

  public handleInputConfirm = () => {
    Taro.atMessage({
      message: `当前input值:${this.state.value1}`
    });
  }

  public handleInput = (text) => {
    this.setState({
      value1: this.state.value1 + text
    });
  }

  public sendRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  public handleOtpClick = (e) => {

  }

  render() {
    const { bottomupOpen, value1 } = this.state;
    return (
      <View className="demo">
        <AtButton onClick={this.openBottomUp}>底部弹窗</AtButton>
        <AtForm>
          <AtInput
            name='value1'
            type='text'
            disabled
            placeholder='点击键盘输入'
            value={value1}
            onChange={this.handleChange.bind(this)}
          />
        </AtForm>
        <View>
          <Otp totalTicks={100} format={"{t}s后重发"} sendTxt={'获取动态码'} processingTxt={'短信发送中'} onSendRequest={this.sendRequest}></Otp>
        </View>
        <View>
          <BottomUp title="标题" isOpen={bottomupOpen} closeOnClickOverlay onClose={this.closeBottomUp}>
            <View className="bottom-block"></View>
            <View className="bottom-block"></View>
            <View className="bottom-block"></View>
          </BottomUp>
        </View>
        <View>
          <KeyBoard
            v-class="demo-keyboard"
            onKeyboradClear={this.handleInputDelete}
            onKeyboradFinish={this.handleInputConfirm}
            onKeyboradNumber={this.handleInput}
          ></KeyBoard>
        </View>

        <AtMessage />
      </View>
    )
  }
}

