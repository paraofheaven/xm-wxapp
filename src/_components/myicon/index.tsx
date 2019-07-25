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

export default class Icon extends Component<IICON, {}>{

  constructor() {
    super(...arguments)
  }

  public defaultProps = {
    value: '',
    size: 20,
    color: '',
    className: '',
    onClick: () => { },
  }
  render() {
    const { value, size, color, className } = this.props;
    return <View
      className={classnames('v-icon', { [`v-icon-${value}`]: value }, className)}
      style={{ fontSize: `${size}px`, color: color }}
      onClick={this.props.onClick}></View >;
  }
}