import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import Modal from '../modal';
import Otp from '../otp';
import MyIcon from '../myicon';
import './index.less';

interface IOtpModal {
  isOpen: boolean;
  title?: string;
  desc?: string;
  closeOnClickOverlay?: boolean;
  onInputFinish: any;
  beforeSendRequest?: () => boolean;
  onSendRequest: () => Promise<any>;
}

const defaultNumbers = ['', '', '', '', '', ''];

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
    codeNumbers: defaultNumbers,
    codeValue: '',
    btnDisabled: true,
    btnLoading: false,
  }

  private handleInput = (e) => {
    const value = e.detail.value;
    this.setInputState(value);
  }

  public setInputState = (value) => {
    let codeNumbers = Object.assign({ length: 6 }, defaultNumbers, value.split(''));
    codeNumbers = Array.prototype.slice.call(codeNumbers);
    this.setState({
      codeNumbers,
      codeValue: value,
    });
    if (value.length >= 6) {
      this.setState({
        btnDisabled: false,
      });
    } else {
      this.setState({
        btnDisabled: true,
      });
    }
  }

  private submit = (value) => {
    if (value || value.length !== 6) {
      return;
    }
    this.props.onInputFinish(value);
  }

  public render() {
    const { isOpen, title, desc, onSendRequest } = this.props;
    const { codeNumbers, codeValue, btnDisabled, btnLoading } = this.state;
    return (<Modal isOpen={isOpen} v-class="v-otp-modal-class">
      <View className="v-otp-modal">
        <MyIcon value="close" size={22} color="#999" v-class="v-otp-modal-close"></MyIcon>
        <View className="v-otp-modal-header">{title}</View>
        <View className="v-otp-modal-desc">{desc}</View>
        <View className="v-otp-modal-content">
          <View className="v-otp-modal-number">
            {codeNumbers.map((item) => {
              return (<View className="v-class-num">
                {item ? <Text>{item}</Text> : <Text decode space="nbsp">&nbsp;</Text>}
              </View>);
            })}
          </View>
          <Input className="v-otp-modal-input"
            maxLength={6}
            focus
            value={codeValue}
            type="number"
            onInput={this.handleInput}></Input>
        </View>
        <View className="v-otp-modal-otp-wap">
          <Otp autoStart onSendRequest={onSendRequest} v-class="v-otp-modal-otp"></Otp>
        </View>
        <Button className="v-otp-modal-btn" disabled={btnDisabled} loading={btnLoading} onClick={this.submit}>  确定</Button>
      </View>
    </Modal>);
  }
}