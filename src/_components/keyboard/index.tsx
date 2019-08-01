import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';

interface IKeyboard {
  hideFinishBtn?: boolean;
  onKeyboradDelete: any;
  onKeyboradFinish?: any;
  onKeyboradNumber: any;
}

const NUMBER_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const OPERATE_KEYS = ['C', 'F'];

export default class KeyBoard extends Component<IKeyboard, {}>{

  constructor() {
    super(...arguments);
    this.state = {
      finalKeys: this.concatFinalKeys(),
    }
  }

  public static externalClasses = ['v-class'];

  public defaultProps = {
    hideFinishBtn: false,
    onKeyboradDelete: () => { },
    onKeyboradFinish: () => { },
    onKeyboradNumber: () => { }
  }

  public state = {
    finalKeys: [] as string[],
  }

  public concatFinalKeys = (numberkeys?) => {
    const { hideFinishBtn } = this.props;
    numberkeys = numberkeys || NUMBER_KEYS;
    return [
      ...numberkeys.slice(0, numberkeys.length - 1),
      hideFinishBtn ? OPERATE_KEYS[1] : OPERATE_KEYS[0],
      numberkeys[numberkeys.length - 1],
      hideFinishBtn ? OPERATE_KEYS[0] : OPERATE_KEYS[1]
    ];
  }

  public shffuleBoard = () => {
    const numberkeys = NUMBER_KEYS.sort(() => {
      return Math.random() > .5 ? -1 : 1;
    });
    this.setState({
      finalKeys: this.concatFinalKeys(numberkeys)
    });
  }

  public handleKeyboradDelete = () => {
    this.props.onKeyboradDelete();
  }

  public handleKeyboradFinish = () => {
    if (this.props.hideFinishBtn) {
      return;
    }
    if (!this.props.onKeyboradFinish) {
      throw new Error('onKeyboradFinish is undefined!');
    }
    this.props.onKeyboradFinish();
  }

  public handleKeyboradNumber = (e) => {
    const innerText = e.target.dataset.item;
    this.props.onKeyboradNumber(innerText);
  }

  public render() {
    const { finalKeys } = this.state;
    const { hideFinishBtn } = this.props;
    return (
      <View className="v-class v-keyboard">
        <View className="v-keyboard-container">
          <View className="v-keyboard-grid">
            {finalKeys.map((key) => {
              if (key === 'C') {
                return <Text className="v-keyboard-item v-keyboard-item-c" key={key} onClick={this.handleKeyboradDelete}> 清除</Text>
              } else if (key === 'F' && hideFinishBtn) {
                return <Text className="v-keyboard-item v-keyboard-item-f v-keyboard-disabled" key={key}>&nbsp;</Text>
              } else if (key === 'F') {
                return <Text className="v-keyboard-item v-keyboard-item-f" key={key} onClick={this.handleKeyboradFinish}>完成</Text>
              }
              return <Text className="v-keyboard-item" data-item={key} key={key} onClick={this.handleKeyboradNumber}>{key}</Text>
            })}
          </View>
          <View className="v-keyboard-conversion" onClick={this.shffuleBoard}>安全键盘</View>
        </View>
      </View>
    )
  }
}