import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import BottomUp from '../bottomup';
import KeyBoard from '../keyboard';
import PwdBox from '../pwd-box';
import './index.less';

interface IPwdKeyBoard {
  isOpen: boolean;
  disableClose?: boolean;
  withConfirm?: boolean;
  onClose?: any;
  closeOnClickOverlay?: boolean;
  onInputFinish?: any;
}

export default class PwdKeyBoard extends Component<IPwdKeyBoard, any>{

  public pwdboxRef1;

  public pwdboxRef2;

  public static defaultProps = {
    isOpen: false,
    closeOnClickOverlay: false,
    disableClose: false,
    withConfirm: false,
    onClose: () => { },
    onInputFinish: () => { },
  };

  public static externalClass = ['v-class'];

  public state = {
    animation1: undefined,
    animation2: undefined,
    pwdboxValue: '',
    confirm: false,
  };

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

  public onKeyboradClear = () => {
    let { pwdboxValue, confirm } = this.state;
    if (pwdboxValue.length > 0) {
      pwdboxValue = pwdboxValue.substring(0, pwdboxValue.length - 1);
      this.setState({
        pwdboxValue,
      });
      if (!confirm) {
        this.pwdboxRef1.clearInputState();
      } else {
        this.pwdboxRef2.clearInputState();
      }
    }
  }

  public onBottomUpClose = () => {
    this.setState({
      isOpen: false,
    });
  }

  public onInputFinish = (code) => {
    const { withConfirm } = this.props;
    if (!withConfirm) {
      this.props.onInputFinish(code);
    }
    this.setState({
      confirm: true,
    }, () => {
      this.createAnimation();
    });
  }

  private createAnimation = (reset?: boolean) => {
    const screenWidth = 375;
    const translate = -screenWidth;
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
    const { isOpen, withConfirm, onClose, closeOnClickOverlay } = this.props;
    const { animation1, animation2 } = this.state;
    return (
      <BottomUp isOpen={isOpen} closeOnClickOverlay={closeOnClickOverlay} onClose={onClose}>
        <View className="v-pwdKeyboard v-class">
          <View className="v-pwdKeyboard-boxLyt">
            <View className="v-pwdKeyboard-boxItem" animation={animation1}>
              <PwdBox ref={(ref) => { this.pwdboxRef1 = ref; }} onInputFinish={this.onInputFinish}></PwdBox>
            </View>
            {withConfirm ? <View className="v-pwdKeyboard-boxItem" animation={animation2}>
              <PwdBox ref={(ref) => { this.pwdboxRef2 = ref; }}></PwdBox>
            </View> : null}

          </View>
          <View className="v-pwdKeyboard-lyt">
            <KeyBoard
              hideFinishBtn
              onKeyboradNumber={this.onKeyboradNumber}
              onKeyboradClear={this.onKeyboradClear}></KeyBoard>
          </View>
        </View>
      </BottomUp>
    );
  }
}