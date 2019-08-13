import { WxApi } from './wxapi';

const getRequestDto = (result) => {
  return result;
}

export class CommonService extends WxApi {
  public fetchPostRequest(param) {
    const req = this.$getReqData('postApi', param);
    return this.$requestPost(req, {
      dto: getRequestDto,
    });
  }

  public fetchGetRequest(param) {
    const req = this.$getReqData('getApi', param);
    return this.$requestGet(req, {
      dto: getRequestDto,
    });
  }

  public $getYourCustomServiceConfig() {
    return {
      postApi: {
        me: 'http://me.ly.com:9880/api/home',
        inte: 'http://jr.qa.para.com/api/home',
        rc: 'http://jr.t.para.com/api/home',
        prod: 'http://jr.para.com/api/home'
      },
      getApi: {
        me: 'http://me.ly.com:9880/api/detail',
        inte: 'http://jr.qa.para.com/api/detail',
        rc: 'http://jr.t.para.com/api/detail',
        prod: 'http://jr.para.com/api/detail'
      }
    }
  }
}

export default new CommonService();