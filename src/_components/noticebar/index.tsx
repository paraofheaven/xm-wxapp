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
  public wrapWidth;

  static externalClasses = ['v-class'];

  public state = {
    visible: true,
    animationData: undefined,
    duration: 6000,
    delay: 1000,
  }

  public componentDidMount() {
    const { loop } = this.props;
    if (loop) {
      Taro.createSelectorQuery().in(this.$scope).select('.v-noticebar-wrap').boundingClientRect().exec((rectWrap: any) => {
        this.wrapWidth = rectWrap[0].width;
        Taro.createSelectorQuery().in(this.$scope).select('.v-noticebar-content').boundingClientRect().exec((rectContent: any) => {
          const contentWidth = rectContent[0].width;
          this.resetDuration = this.state.duration * this.wrapWidth / contentWidth;
          setTimeout(() => {
            this.initAnimation();
          }, this.state.delay);
        });
      });
    }
  }

  public initAnimation = () => {
    const { duration } = this.state;
    const animation = Taro.createAnimation({
      duration: duration,
      timingFunction: 'linear',
    });
    animation.translateX('-100%').step();
    this.setState({
      animationData: animation.export()
    });
    setTimeout(() => {
      const animation = Taro.createAnimation({
        duration: 0
      });
      animation.translateX(this.wrapWidth).step();
      this.setState({
        animationData: animation.export()
      });

      setTimeout(() => {
        const animation = Taro.createAnimation({
          duration: this.resetDuration,
        });
        animation.translateX(0).step();
        this.setState({
          animationData: animation.export()
        });
        setTimeout(() => {
          this.initAnimation();
        }, this.resetDuration);
      }, 100)
    }, duration);
  }


  render() {
    const { visible, animationData } = this.state;
    const { loop, closable } = this.props;
    if (!visible) {
      return;
    }
    return (
      <View className="v-class v-noticebar">
        <MyIcon value="horn" v-class="v-noticebar-notice" />
        <View className="v-noticebar-wrap">
          <View className={classnames('v-noticebar-content', { ['v-noticebar-loop']: loop })} animation={animationData}>
            {this.props.children}
          </View>
        </View>
        {closable ? <MyIcon value="close" v-class="v-noticebar-close"></MyIcon> : <View className="v-noticebar-gap"></View>}
      </View>
    )
  }
}