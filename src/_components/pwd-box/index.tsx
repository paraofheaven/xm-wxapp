import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import './index.less';

interface IPwdBox {
  title?: string;
  subTitle?: string;
  message?: string;
  showfooter?: boolean;
  footer?: string;
  onInputFinish: any;
}

const defaultNumbers = ['', '', '', '', '', ''];

export default class PwdBox extends Component<IPwdBox, any>{

  public static defaultProps = {
    title: '请输入支付密码',
    subTitle: '',
    message: '',
    showfooter: true,
    footer: '忘记密码?',
    onInputFinish: () => { },
  }

  static externalClass = ['v-class'];

  public state = {
    pwdNumbers: defaultNumbers,
    pwdValue: '',
  }

  public onPwdInput = (e) => {
    const value = e.detail.value;
    let pwdNumbers = Object.assign({ length: 6 }, defaultNumbers, value.split(''));
    pwdNumbers = Array.prototype.slice.call(pwdNumbers);
    this.setState({
      pwdNumbers,
      pwdValue: value,
    });
    if (value.length >= 6) {
      this._onInputFinish(value);
    }
  }

  public _onInputFinish = (value) => {
    if (value.length !== 6) {
      return;
    }
    this.props.onInputFinish(value);
  }

  render() {
    const { title, subTitle, message, showfooter, footer } = this.props;
    const { pwdNumbers, pwdValue } = this.state;
    return (
      <View className="v-pwdbox v-class">
        <View className="v-pwdbox-wrap">
          {title ? <View className="v-pwdbox-header">{title}</View> : null}
          {subTitle ? <View className="v-pwdbox-sub-header">{subTitle}</View> : null}
          <View className="v-pwdbox-content">
            <View className="v-pwdbox-num">
              {pwdNumbers.map((num) => {
                return (<View key={num}>
                  {num ? <Text>●</Text> : <Text space={"emsp"} decode={true}>&nbsp;</Text>}
                </View>);
              })}
            </View>
            <Input
              className="v-pwdbox-input"
              maxLength={6}
              disabled={false}
              focus={false}
              value={pwdValue}
              onInput={this.onPwdInput}
              type="number" />
          </View>
          <View className="v-pwdbox-footer">
            {message ? <View className="v-pwdbox-message">{message}</View> : null}
            {showfooter ? <View className="v-pwdbox-forgetPwd">{footer}</View> : null}
          </View>
        </View>
      </View>
    );
  }
}