import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import MyIcon from '../../_components/myicon';
import classnames from 'classnames';
import './index.less';

interface INoticeBar {
  closable?: boolean;
  loop?: boolean;
}

export default class NoticeBar extends Component<INoticeBar, {}>{

  public defaultProps = {
    closable: true,
    loop: true
  }
  render() {
    const { loop, closable } = this.props;
    return (
      <View className="v-class v-noticebar">
        <MyIcon value="horn" v-class="v-noticebar-notice" />
        <View className="v-noticebar-wrap">
          <View className={classnames('v-noticebar-content', { ['v-noticebar-loop']: loop })}></View>
          {this.props.children}
        </View>
        {closable ? <MyIcon value="close" v-class="v-noticebar-close"></MyIcon> : <View className="v-noticebar-gap"></View>}
      </View>
    )
  }
}