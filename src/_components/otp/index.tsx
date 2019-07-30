import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import './index.less';

interface IOtp {
  totalTicks?: number;
  duration?: number;
  autoStart?: boolean;
  format?: string;
  sendTxt?: string;
  sentTxt?: string;
  processingTxt?: string;
  beforeSendRequest?: any;
  onSendRequest: () => Promise<any>;
}

export default class Otp extends Component<IOtp, any>{

  public static defaultProps = {
    totalTicks: 60,
    duration: 1000,
    autoStart: false,
    format: "{t}s后可重发",
    sendTxt: '获取验证码',
    sentTxt: '重新获取',
    processingTxt: '发送中...',
    beforeSendRequest: () => { return true },
    onSendRequest: () => { },
  }

  static externalClasses = ['v-class'];

  private ticksTimer;

  public state = {
    running: false,
    ticksNumber: '',
  }

  public componentDidMount() {
    const { sendTxt, autoStart } = this.props;
    if (this.ticksTimer) {
      clearTimeout(this.ticksTimer);
    }

    if (autoStart) {
      this.handleStart();
    } else {
      this.setState({
        ticksNumber: sendTxt,
      });
    }
  }

  public componentWillUnmount() {
    clearTimeout(this.ticksTimer);
  }

  public handleStart = () => {
    const { beforeSendRequest, processingTxt, onSendRequest, sendTxt, totalTicks } = this.props;

    // 如果该函数返回false，则不请求
    if (!beforeSendRequest()) {
      return;
    }
    if (this.state.running) {
      return;
    }
    this.setState({
      ticksNumber: processingTxt,
      running: true,
    });

    try {
      onSendRequest().then(() => {
        this._startTicker(totalTicks);
      });
    } catch (error) {
      this.setState({
        ticksNumber: sendTxt,
        running: false,
      })
    }
  }

  private _startTicker = (count) => {
    const { duration, sentTxt } = this.props;
    this.setState({
      ticksNumber: this._formatMessage(count),
      running: true,
    });
    this.ticksTimer = setTimeout(() => {
      if (count > 1) {
        this._startTicker(count - 1)
      } else {
        this.setState({
          ticksNumber: sentTxt,
          running: false,
        });
      }
    }, duration);
  }

  private _formatMessage = (count) => {
    const { format = '' } = this.props;
    return format.replace('{t}', count);
  }

  render() {
    const { running, ticksNumber } = this.state;
    return (
      <Text className={classnames('v-otp', 'v-class', { 'v-optlite-running': running })}
        onClick={this.handleStart}
      >{ticksNumber}</Text>
    );
  }
}