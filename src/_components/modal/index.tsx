import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import _isFunction from 'lodash/isFunction';
import './index.less';

interface IModal {
  isOpen?: boolean;
  zIndex?: number;
  hideMask?: boolean;
  fullScreen?: boolean;
  closeOnClickOverlay?: boolean;
  onClose: any;
}

export default class Modal extends Component<IModal, any>{

  public constructor(props) {
    super(...arguments);
    const { isOpen } = props;
    this.state = {
      _isOpen: isOpen,
      visible: isOpen
    }
  }
  public static defaultProps = {
    isOpen: false,
    zIndex: 100,
    hideMask: false,
    fullScreen: false,
    closeOnClickOverlay: true,
    onClose: () => { }
  }

  public static externalClass = ['v-class'];

  public modalTimer;

  public state = {
    visible: false,
    _isOpen: false,
  }

  public componentWillReceiveProps(nextProps) {
    const { isOpen } = nextProps;

    if (isOpen !== this.state._isOpen) {
      this.setState({
        _isOpen: isOpen,
      }, () => {
        this.modalTimer = setTimeout(() => {
          this.setState({ visible: isOpen });
        }, 400);
      });
    }
  }

  public componentWillUnmount() {
    clearTimeout(this.modalTimer);
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
        this.modalTimer = setTimeout(() => {
          this.setState({ visible: false });
          if (_isFunction(this.props.onClose)) {
            this.props.onClose();
          }
        }, 400);
      }
    )
  }

  public render() {
    const { zIndex, hideMask, fullScreen } = this.props;
    const { visible, _isOpen } = this.state;
    if (!visible) {
      return;
    }
    const actionClassName = `v-modal ${_isOpen ? 'v-modal-open' : 'v-modal-close'} v-class`;
    return <View className={actionClassName} style={{ zIndex }}>
      {hideMask ? null : <View className="v-modal-mask" onClick={this.closeByDocument}></View>}
      <View className={classnames('v-modal-wrap', { 'v-modal-fullScreen': fullScreen })}>
        <View className="v-modal-content">{this.props.children}</View>
      </View>
    </View>
  }
}