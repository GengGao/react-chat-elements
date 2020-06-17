export declare type DataStatus = {
    download?: boolean;
    error?: boolean;
    loading?: number;
    click?: boolean;
};
export declare type Data = {
    status?: DataStatus;
    size?: number;
    width?: number;
    height?: number;
    uri?: string;
    alt?: string;
};
export declare type Theme = 'light' | 'dark';
