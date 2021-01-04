import { CircularProgress } from '@material-ui/core';
import React from 'react';
import {
  FaCloudDownloadAlt as FaCloudDownload,
  FaExclamationTriangle as FaError,
} from 'react-icons/fa';
import { Data } from '../types';
import './PhotoMessage.css';

export type PhotoMessageProps = {
  data: Data;
  text?: string;
  onDownload?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
  onOpen?: React.EventHandler<React.MouseEvent<HTMLImageElement>>;
  onLoad?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
  onPhotoError?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
};

export const PhotoMessage: React.FC<PhotoMessageProps> = ({
  data,
  text,
  onOpen,
  onLoad,
  onPhotoError,
  onDownload,
}) => {
  const error = data.status && data.status.error === true;

  return (
    <div className="rce-mbox-photo">
      <div
        className="rce-mbox-photo--img"
        style={
          (data.width &&
            data.height && {
              width: data.width,
              height: data.height,
            }) ||
          undefined
        }
      >
        <img
          src={data.uri}
          alt={data.alt}
          onClick={onOpen}
          onLoad={onLoad}
          onError={onPhotoError}
        />
        {error && (
          <div className="rce-mbox-photo--img__block">
            <span className="rce-mbox-photo--img__block-item rce-mbox-photo--error">
              <FaError />
            </span>
          </div>
        )}
        {!error && data.status && !data.status.download && (
          <div className="rce-mbox-photo--img__block">
            {!data.status.click && (
              <button
                onClick={onDownload}
                className="rce-mbox-photo--img__block-item rce-mbox-photo--download"
              >
                <FaCloudDownload />
              </button>
            )}
            {typeof data.status.loading === 'number' &&
              data.status.loading !== 0 && (
                <CircularProgress
                  value={data.status.loading}
                  variant="determinate"
                  className={'rce-mbox-photo--img__block-item'}
                />
              )}
          </div>
        )}
      </div>
      {text && <div className="rce-mbox-text">{text}</div>}
    </div>
  );
};
