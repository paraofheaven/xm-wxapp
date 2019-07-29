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

  public resetDuration;

  static externalClasses = ['v-class'];

  public state = {
    visible: true,
    animation: null,
    duration: 6000,
    delay: 1000,
  }

  public componentDidMount() {
    const { loop } = this.props;
    if (loop) {
      Taro.createSelectorQuery().in(this).select('.v-noticebar-wrap').boundingClientRect().exec((rectWrap: any) => {
        const wrapWidth = rectWrap[0].width;
        Taro.createSelectorQuery().in(this).select('.v-noticebar-content').boundingClientRect().exec((rectContent: any) => {
          const contentWidth = rectContent[0].width;
          this.resetDuration = this.state.duration * wrapWidth / contentWidth;
          setTimeout(() => {
            this.initAnimation();
          }, this.state.delay);
        });
      });
    }
  }

  public initAnimation = () => {
    const animation = Taro.createAnimation({
      duration: this.resetDuration,
      timingFunction: 'linear',
    });
    animation.translateX('-100%').step();
  }


  render() {
    const { visible } = this.state;
    const { loop, closable } = this.props;
    if (!visible) {
      return;
    }
    return (
      <View className="v-class v-noticebar">
        <MyIcon value="horn" v-class="v-noticebar-notice" />
        <View className="v-noticebar-wrap">
          <View className={classnames('v-noticebar-content', { ['v-noticebar-loop']: loop })}>
            {this.props.children}
          </View>
        </View>
        {closable ? <MyIcon value="close" v-class="v-noticebar-close"></MyIcon> : <View className="v-noticebar-gap"></View>}
      </View>
    )
  }
}