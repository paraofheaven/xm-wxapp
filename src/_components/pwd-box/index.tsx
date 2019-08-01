import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import './index.less';

interface IPwdBox {
  title?: string;
  subTitle?: string;
  showForgetPwd?: boolean;
  forgetPwdLink?: string;
  forgetPwdText?: string;
  onInputFinish: any;
}

const defaultNumbers = ['', '', '', '', '', ''];

export default class PwdBox extends Component<IPwdBox, any>{

  public static defaultProps = {
    title: '请输入支付密码',
    subTitle: '',
    showForgetPwd: false,
    forgetPwdLink: '',
    forgetPwdText: '忘记密码?',
    onInputFinish: () => { },
  }

  static externalClass = ['v-class'];

  public state = {
    pwdNumbers: defaultNumbers,
    pwdValue: '',
  }

  private onPwdInput = (e) => {
    const value = e.detail.value;
    this.setInputState(value);
  }

  /**
   * pwd-keyboard ref有引用
   */
  public setInputState = (value) => {
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

  public clearInputState = () => {
    this.setState({
      pwdNumbers: defaultNumbers,
      pwdValue: '',
    });
  }

  private _onInputFinish = (value) => {
    if (value.length !== 6) {
      return;
    }
    this.props.onInputFinish(value);
  }

  public forgetPwd = () => {
    const { showForgetPwd, forgetPwdLink } = this.props;
    if (showForgetPwd && !forgetPwdLink) {
      throw new Error('forgetPwdLink is undefined!')
    }
    Taro.showLoading();
    this.clearInputState();
    Taro.navigateTo({
      url: this.props.forgetPwdLink || '',
    });
    Taro.hideLoading();
  }

  render() {
    const { title, subTitle, showForgetPwd, forgetPwdText } = this.props;
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
            {showForgetPwd ? <View className="v-pwdbox-forgetPwd" onClick={this.forgetPwd}>{forgetPwdText}</View> : null}
          </View>
        </View>
      </View>
    );
  }
}