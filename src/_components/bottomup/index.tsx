import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import _isFunction from 'lodash/isFunction';
import MyIcon from '../myicon';
import './index.less';

interface IBottomUp {
  isOpen: boolean;
  className?: string;
  hideMask?: boolean;
  title?: string;
  closeOnClickOverlay?: boolean;
  onClose?: any;
}

export default class BottomUp extends Component<IBottomUp, {}> {

  constructor(props) {
    super(...arguments)
    const { isOpen } = props
    this.state = {
      _isOpened: isOpen,
      visible: isOpen
    }
  }

  public defaultProps = {
    closeOnClickOverlay: true,
    isOpen: false,
    className: '',
    hideMask: true,
    title: ''
  }

  public state = {
    _isOpened: false,
    visible: false,
  }

  public componentWillReceiveProps(nextProps) {
    const { isOpen } = nextProps;

    if (isOpen !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpen,
        visible: isOpen,
      })
    }
  }

  public closeByDocument = () => {
    if (this.props.closeOnClickOverlay) {
      this.handleClose();
    }
  }

  public handleClose = () => {
    if (!this.state._isOpened) {
      return;
    }
    this.setState({
      _isOpened: false,
    },
      () => {
        setTimeout(() => {
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

  render() {
    const { _isOpened, visible } = this.state;
    const { className, hideMask, title } = this.props;
    const bottomClassName = `v-bottomup ${_isOpened ? 'v-bottomup-open' : 'v-bottomup-close'} ${className}`;
    if (!visible) {
      return;
    }
    return (
      <View className={bottomClassName} onTouchMove={this.handleTouchMove}>
        {hideMask ? null : <View className="v-bottomup-mask" onClick={this.closeByDocument}></View>}
        <View className="v-bottomup-wrap">
          <View className="v-bottomup-content">
            {title ? <View className="v-class-title v-bottomup-header">
              <Text className="v-bottomup-title">{title}</Text>
              <MyIcon value="close" size={22} color="#999" v-class="v-icon-bottom-close" onClick={this.handleClose}></MyIcon>
            </View> : null}
            {this.props.children}
          </View>
        </View>
      </View >
    );
  }
}
