import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtInput, AtForm, AtMessage } from 'taro-ui';
import KeyBoard from '../../../_components/keyboard';
import './index.less';

export default class KeyboardDemo extends Component<any, any>{

  public state = {
    value1: '',
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


  public render() {
    const { value1 } = this.state;
    return <View className="keyboard-demo-wap">
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
        <KeyBoard
          v-class="demo-keyboard"
          onKeyboradDelete={this.handleInputDelete}
          onKeyboradFinish={this.handleInputConfirm}
          onKeyboradNumber={this.handleInput}
        ></KeyBoard>
      </View>
      <AtMessage />
    </View>
  }
}