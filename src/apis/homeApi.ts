import request from './request';

export const homeApi = {
  getCarsList: (): Promise<any> => {
    return request.get('');
  },
};
