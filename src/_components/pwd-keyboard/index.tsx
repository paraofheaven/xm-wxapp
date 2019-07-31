import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import BottomUp from '../bottomup';
import KeyBoard from '../keyboard';
import PwdBox from '../pwd-keyboard';
import './index.less';

interface IPwdKeyBoard {
  disableClose?: boolean;
  withConfirm?: boolean;
}

export default class PwdKeyBoard extends Component<IPwdKeyBoard, any>{

  public static defaultProps = {
    disableClose: false,
    withConfirm: false,
  };

  public static externalClass = ['v-class'];

  public state = {
    animation1: undefined,
    animation2: undefined,
  };

  public onKeyboradNumber = (text) => {

  }

  render() {
    const { disableClose, withConfirm } = this.props;
    const { animation1, animation2 } = this.state;
    return (
      <BottomUp isOpen={true}>
        <View className="v-pwdKeyboard v-class">
          {!disableClose ? <View className="v-pwdKeyboard-close"></View> : null}
          <View className="v-pwdKeyboard-boxLyt">
            <View className="v-pwdKeyboard-boxItem" animation={animation1}>
              <PwdBox></PwdBox>
            </View>
            {withConfirm ? <View className="v-pwdKeyboard-boxItem" animation={animation2}>
              <PwdBox></PwdBox>
            </View> : null}

          </View>
          <View className="v-pwdKeyboard-lyt">
            <KeyBoard onKeyboradNumber={this.onKeyboradNumber}></KeyBoard>
          </View>
        </View>
      </BottomUp>
    );
  }
}