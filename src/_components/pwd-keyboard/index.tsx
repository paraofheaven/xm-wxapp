import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import BottomUp from '../bottomup';
import KeyBoard from '../keyboard';
import PwdBox from '../pwd-box';
import './index.less';

interface IPwdKeyBoard {
  isOpen: boolean;
  withConfirm?: boolean;
  confirmErrorMsg?: string;
  onClose: any;
  closeOnClickOverlay?: boolean;
  onInputFinish: any;
  pwdbox1Config?: any;
  pwdbox2Config?: any;
}

export default class PwdKeyBoard extends Component<IPwdKeyBoard, any>{

  public bottomupRef;
  public pwdboxRef1;
  public pwdboxRef2;

  public code1;
  public screenWidth;

  public static defaultProps = {
    isOpen: false,
    closeOnClickOverlay: false,
    withConfirm: false,
    confirmErrorMsg: '两次输入不一致，请重新输入！',
    pwdbox1Config: {
      title: '请输入支付密码',
      subTitle: '',
      showForgetPwd: true,
    },
    pwdbox2Config: {
      title: '再次确认',
      subTitle: '',
      showForgetPwd: false,
    },
    onClose: () => { },
    onInputFinish: () => { },
  };

  public static externalClass = ['v-class'];

  public state = {
    animation1: undefined,
    animation2: undefined,
    pwdboxValue: '',
    confirm: false,
    message: '',
  };

  public componentDidMount() {
    try {
      const res = Taro.getSystemInfoSync();
      this.screenWidth = res.screenWidth || 375;
    } catch (error) {
      Taro.showToast({
        title: error.message || '获取系统信息失败',
        icon: 'failed'
      });
    }
  }

  public onKeyboradNumber = (value) => {
    let { pwdboxValue, confirm } = this.state;
    if (pwdboxValue.length < 6) {
      pwdboxValue += value;
      this.setState({
        pwdboxValue,
      });
      if (!confirm) {
        this.pwdboxRef1.setInputState(pwdboxValue);
      } else {
        this.pwdboxRef2.setInputState(pwdboxValue);
      }
    }
  }

  public onKeyboradDelete = () => {
    let { pwdboxValue, confirm } = this.state;
    if (pwdboxValue.length > 0) {
      pwdboxValue = pwdboxValue.substring(0, pwdboxValue.length - 1);
      this.setState({
        pwdboxValue,
      });
      if (!confirm) {
        this.pwdboxRef1.setInputState(pwdboxValue);
      } else {
        this.pwdboxRef2.setInputState(pwdboxValue);
      }
    }
  }

  public onBottomUpClose = () => {
    this.setState({
      confirm: false,
      pwdboxValue: '',
    });
    this.props.onClose();
    this.pwdboxRef1.clearInputState();
    if (this.props.withConfirm) {
      this.pwdboxRef2.clearInputState();
      this.resetBoxAnimation();
    }
  }

  public onInputFinish = (code1) => {
    const { withConfirm } = this.props;
    if (!withConfirm) {
      this.onBottomUpClose();
      this.props.onInputFinish(code1);
      return;
    }
    this.code1 = code1;
    this.setState({
      confirm: true,
    }, () => {
      this.createAnimation();
    });
  }

  public onInputFinishConfirm = (code2) => {
    if (this.code1 !== code2) {
      this.setState({
        message: this.props.confirmErrorMsg
      });
      setTimeout(() => {
        this.setState({
          message: '',
        });
        this.resetBoxAnimation();
      }, 1500);
      return;
    }
    this.onBottomUpClose();
    this.props.onInputFinish(this.code1);
  }

  public resetBoxAnimation = () => {
    this.setState({
      confirm: false,
    });
    this.createAnimation(true);
  }

  private createAnimation = (reset?: boolean) => {
    const translate = -this.screenWidth;
    const baseAnimateConfig = {
      duration: 500,
      timingFunction: 'ease',
      delay: 0,
    };

    const animation1 = Taro.createAnimation(baseAnimateConfig);
    const animation2 = Taro.createAnimation(baseAnimateConfig);

    animation1.translate(reset ? 0 : translate).step();
    animation2.translate(reset ? 0 : translate).step();

    this.setState({
      animation1: animation1.export(),
      animation2: animation2.export(),
    });

    this.pwdboxRef1.clearInputState();
    this.pwdboxRef2.clearInputState();

    this.setState({
      pwdboxValue: '',
    });
  }

  render() {
    const { isOpen, onClose, withConfirm, closeOnClickOverlay, pwdbox1Config, pwdbox2Config } = this.props;
    const { animation1, animation2, message } = this.state;
    return (
      <BottomUp
        ref={(ref) => { this.bottomupRef = ref }}
        isOpen={isOpen}
        closeOnClickOverlay={closeOnClickOverlay}
        onClose={onClose}>
        <View className="v-pwdKeyboard v-class">
          <View className="v-pwdKeyboard-boxLyt">
            <View className="v-pwdKeyboard-boxItem" animation={animation1}>
              <PwdBox
                ref={(ref) => { this.pwdboxRef1 = ref; }}
                {...pwdbox1Config}
                onInputFinish={this.onInputFinish}></PwdBox>
            </View>
            {withConfirm ? <View className="v-pwdKeyboard-boxItem" animation={animation2}>
              <PwdBox
                ref={(ref) => { this.pwdboxRef2 = ref; }}
                {...pwdbox2Config}
                onInputFinish={this.onInputFinishConfirm}></PwdBox>
            </View> : null}
            {message ? <View className="v-pwdKeyboard-message">{message}</View> : null}
          </View>
          <View className="v-pwdKeyboard-lyt">
            <KeyBoard
              hideFinishBtn
              onKeyboradNumber={this.onKeyboradNumber}
              onKeyboradDelete={this.onKeyboradDelete}></KeyBoard>
          </View>
        </View>
      </BottomUp>
    );
  }
}