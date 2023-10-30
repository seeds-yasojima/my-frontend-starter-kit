import {
  PrefType,
  PrefResType,
  CitesResType,
  CitesType,
  PopulationResType,
} from '@/features/test/types';

import { axios } from '@/libs/axios';

import useSWRImmutable from 'swr/immutable'; // 一回取得して変わらないフェッチデータはuseSWRImmutable使う
import useSWRMutation from 'swr/mutation';

// 都道府県の取得
export const getPref = (url: string): Promise<PrefResType> => {
  return axios.get(url);
};

export const usePref = (): PrefType => {
  const { data, error, isLoading } = useSWRImmutable<PrefResType, Error>(
    'prefectures',
    getPref,
  );

  return {
    prefectures: data?.result || [],
    isLoading,
    isError: error,
  };
};

// 市区町村の取得
export const getCites = (url: string): Promise<CitesResType> => {
  return axios.get(url);
};

export const useCites = (code: string): CitesType => {
  const { data, error, isLoading } = useSWRImmutable<CitesResType, Error>(
    `cities?prefCode=${code}`,
    getCites,
  );

  return {
    cites: data?.result || [],
    isLoading,
    isError: error,
  };
};

export const usePopulation = () => {
  const { data, trigger } = useSWRMutation(
    '/population/composition/perYear',
    getPopulation,
  );

  return {
    populations: data?.result || [],
    trigger,
  };
};

// 人口の取得
export const getPopulation = (
  url: string,
  { arg }: { arg: { prefCode: string; cityCode: string } },
): Promise<PopulationResType> => {
  return axios.get(url, { params: arg });
};
