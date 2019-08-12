import { WxApi } from './wxapi';

const getHomeConfigDto = (result) => {
  return result;
}

export class CommonService extends WxApi {
  public getHomeConfig(param) {
    const req = this.$getReqData('homeApi', param);
    return this.$requestPost(req, {
      dto: getHomeConfigDto,
    });
  }

  public getDetailInfo(param) {
    const req = this.$getReqData('detailApi', param);
    return this.$requestGet(req, {
      dto: getHomeConfigDto,
    });
  }

  public $getYourCustomServiceConfig() {
    return {
      homeApi: {
        me: 'http://me.ly.com:9880/api/home',
        inte: 'http://jr.qa.para.com/api/home',
        rc: 'http://jr.t.para.com/api/home',
        prod: 'http://jr.para.com/api/home'
      },
      detailApi: {
        me: 'http://me.ly.com:9880/api/detail',
        inte: 'http://jr.qa.para.com/detail/api',
        rc: 'http://jr.t.para.com/detail/api',
        prod: 'http://jr.para.com/detail/api'
      }
    }
  }
}

export default new CommonService();