export type PrefResultType = {
  prefCode: number;
  prefName: string;
}[];

export type PrefType = {
  prefectures: PrefResultType;
  isLoading: boolean;
  isError: Error | undefined;
};

export type PrefResType = {
  messege: string;
  result: PrefResultType;
};

export type CitesResultType = {
  prefCode: number;
  cityCode: string;
  cityName: string;
  bigCityFlag: '0' | '1' | '2';
}[];

export type CitesType = {
  cites: CitesResultType;
  isLoading: boolean;
  isError: Error | undefined;
};

export type CitesResType = {
  messege: string;
  result: CitesResultType;
};

export type PopulationResultType = {
  boundaryYear: string;
  data: {
    label: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
};

export type PopulationResType = {
  messege?: string;
  result: PopulationResultType;
};
