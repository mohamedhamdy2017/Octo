import {useQuery} from 'react-query';
import {homeApi} from '../apis/homeApi';

export const useHome = () => {
  const {data: cars, isLoading: carsLoading} = useQuery(
    'getCarsList',
    homeApi.getCarsList,
    {
      select: (data) => JSON.stringify(data),
    },
  );

  return {
    cars,
    carsLoading,
  };
};
