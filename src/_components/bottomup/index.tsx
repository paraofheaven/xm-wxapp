import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import _isFunction from 'lodash/isFunction';
import MyIcon from '../myicon';
import './index.less';

interface IBottomUp {
  isOpen: boolean;
  hideMask?: boolean;
  title?: string;
  closeOnClickOverlay?: boolean;
  onClose: any;
}

export default class BottomUp extends Component<IBottomUp, {}> {

  constructor(props) {
    super(...arguments)
    const { isOpen } = props
    this.state = {
      _isOpen: isOpen,
      visible: isOpen
    }
  }

  public defaultProps = {
    isOpen: false,
    hideMask: true,
    title: '',
    closeOnClickOverlay: false,
    onClose: () => { },
  }

  public state = {
    _isOpen: false,
    visible: false,
  }

  public bottomupTimer;

  public static externalClasses = ['v-class'];

  public componentWillReceiveProps(nextProps) {
    const { isOpen } = nextProps;

    if (isOpen !== this.state._isOpen) {
      this.setState({
        _isOpen: isOpen,
      }, () => {
        this.bottomupTimer = setTimeout(() => {
          this.setState({ visible: isOpen });
        }, 400);
      });
    }
  }

  public closeByDocument = () => {
    if (this.props.closeOnClickOverlay) {
      this.handleClose();
    }
  }

  public handleClose = () => {
    if (!this.state._isOpen) {
      return;
    }
    this.setState({
      _isOpen: false,
    },
      () => {
        this.bottomupTimer = setTimeout(() => {
          this.setState({ visible: false });
          if (_isFunction(this.props.onClose)) {
            this.props.onClose();
          }
        }, 400);
      }
    )
  }

  public handleTouchMove = (e) => {
    e.stopPropagation();
  }

  public componentWillUnmount() {
    clearTimeout(this.bottomupTimer);
  }

  render() {
    const { _isOpen, visible } = this.state;
    const { hideMask, title } = this.props;
    const bottomClassName = `v-bottomup ${_isOpen ? 'v-bottomup-open' : 'v-bottomup-close'} v-class`;
    if (!visible) {
      return;
    }
    return (
      <View className={bottomClassName} onTouchMove={this.handleTouchMove}>
        {hideMask ? null : <View className="v-bottomup-mask" onClick={this.closeByDocument}></View>}
        <View className="v-bottomup-wrap">
          <View className="v-bottomup-content">
            <View className="v-class-title v-bottomup-header">
              {title ? <Text className="v-bottomup-title">{title}</Text> : null}
              <MyIcon value="close" size={22} color="#999" v-class="v-icon-class" onClick={this.handleClose}></MyIcon>
            </View>
            {this.props.children}
          </View>
        </View>
      </View >
    );
  }
}
