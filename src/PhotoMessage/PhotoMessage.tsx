import React from 'react';
import {
  FaCloudDownloadAlt as FaCloudDownload,
  FaExclamationTriangle as FaError,
} from 'react-icons/fa';
//@ts-expect-error
import { Circle } from 'react-progress-bar.js';
import './PhotoMessage.css';
import { Data } from '../types';

const progressOptions = {
  strokeWidth: 2.3,
  color: '#efe',
  trailColor: '#aaa',
  trailWidth: 1,
  step: (state: any, circle: any) => {
    circle.path.setAttribute('trail', state.color);
    circle.path.setAttribute('trailwidth-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) circle.setText('');
    else circle.setText(value);
  },
};

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
                <Circle
                  progress={data.status.loading}
                  options={progressOptions}
                  initialAnimate={true}
                  containerClassName={'rce-mbox-photo--img__block-item'}
                />
              )}
          </div>
        )}
      </div>
      {text && <div className="rce-mbox-text">{text}</div>}
    </div>
  );
};

export default PhotoMessage;
