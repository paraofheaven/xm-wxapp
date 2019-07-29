import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import './index.less';

interface IICON {
  value: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: any;
}

export default class MyIcon extends Component<IICON, {}>{

  constructor() {
    super(...arguments)
  }

  static externalClasses = ['v-class'];

  public defaultProps = {
    value: '',
    size: 16,
    color: '',
    onClick: () => { },
  }
  render() {
    const { value, size = 16, color } = this.props;
    return <View
      className={classnames('v-icon', { [`v-icon-${value}`]: value }, 'v-class')}
      style={{ fontSize: `${size}px`, color: color }}
      onClick={this.props.onClick}></View >;
  }
}