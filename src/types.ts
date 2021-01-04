export type DataStatus = {
  download?: boolean;
  error?: boolean;
  /** Loading percentage 0 - 100 */
  loading?: number;
  click?: boolean;
};

export type Data = {
  status?: DataStatus;
  size?: string;
  width?: number;
  height?: number;
  uri?: string;
  alt?: string;
};

export type Theme = 'light' | 'dark';
