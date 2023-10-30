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
export const getPref = async (url: string): Promise<PrefResType> => {
  const response = await axios.get(url);
  return response.data;
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
export const getCites = async (url: string): Promise<CitesResType> => {
  const response = await axios.get(url);
  return response.data;
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
export const getPopulation = async (
  url: string,
  { arg }: { arg: { prefCode: string; cityCode: string } },
): Promise<PopulationResType> => {
  const response = await axios.get(url, { params: arg });
  return response.data;
};
