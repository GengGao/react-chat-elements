export type DataStatus = {
  download?: boolean;
  error?: boolean;
  loading?: number;
  click?: boolean;
};

export type Data = {
  status?: DataStatus;
  size?: number;
  width?: number;
  height?: number;
  uri?: string;
  alt?: string;
};

export type Theme = 'light' | 'dark';
