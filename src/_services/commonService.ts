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

  public $getProtocol() {
    return {
      protocol: {
        fromPlatform: this.$getPlatform(),
        functionCode: 'a_bc',
      },
    };
  }

  public $getYourCustomServiceConfig() {
    return {
      homeApi: {
        me: 'http://me.ly.com:3000/api',
        inte: 'http://jr.qa.para.com/home/api',
        rc: 'http://jr.t.para.com/home/api',
        prod: 'http://jr.para.com/home/api'
      },
      detailApi: {
        me: 'http://me.ly.com:3000/api',
        inte: 'http://jr.qa.para.com/detail/api',
        rc: 'http://jr.t.para.com/detail/api',
        prod: 'http://jr.para.com/detail/api'
      }
    }
  }
}

export default new CommonService();