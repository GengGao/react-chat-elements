import { CircularProgress } from '@material-ui/core';
import React from 'react';
import {
  FaCloudDownloadAlt as FaCloudDownload,
  FaExclamationTriangle as FaError,
  FaFile,
} from 'react-icons/fa';
import { Data } from '../types';
import './FileMessage.css';

export type FileMessageProps = {
  data: Data;
  text?: string;
  onDownload?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
  onOpen?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
};

export const FileMessage: React.FC<FileMessageProps> = ({
  data,
  text,
  onDownload,
  onOpen,
}) => {
  const onClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (!data.status) {
      return;
    }

    if (!data.status.download) {
      onDownload?.(e);
    } else if (data.status.download) {
      onOpen?.(e);
    }
  };

  const error = data.status?.error === true;
  const loadingStatus = data.status?.loading;

  return (
    <div className="rce-mbox-file">
      <button onClick={onClick}>
        <div className="rce-mbox-file--icon">
          <FaFile color="#aaa" />
          <div className="rce-mbox-file--size">{data.size}</div>
        </div>
        <div className="rce-mbox-file--text">{text}</div>
        <div className="rce-mbox-file--buttons">
          {error && (
            <span className="rce-error-button">
              <FaError color="#ff3d3d" />
            </span>
          )}
          {!error && !data.status?.download && !data.status?.click && (
            <FaCloudDownload color="#aaa" />
          )}
          {!error &&
            typeof loadingStatus === 'number' &&
            loadingStatus !== 0 && (
              <CircularProgress
                value={loadingStatus}
                variant="determinate"
                className={'rce-mbox-file--loading'}
              />
            )}
        </div>
      </button>
    </div>
  );
};
