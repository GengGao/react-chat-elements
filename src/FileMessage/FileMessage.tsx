import React from 'react';
import './FileMessage.css';

import {
  FaCloudDownloadAlt as FaCloudDownload,
  FaExclamationTriangle as FaError,
  FaFile,
} from 'react-icons/fa';
//@ts-expect-error
import { Circle } from 'react-progress-bar.js';
import { Data } from '../types';

export type FileMessageProps = {
  data: Data;
  text?: string;
  onDownload?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
  onOpen?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
};

const progressOptions = {
  strokeWidth: 5,
  color: '#333',
  trailColor: '#aaa',
  trailWidth: 5,
  step: (state: any, circle: any) => {
    circle.path.setAttribute('trail', state.color);
    circle.path.setAttribute('trailwidth-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  },
};

export const FileMessage: React.FC<FileMessageProps> = ({
  data,
  text,
  onDownload,
  onOpen,
}) => {
  const onClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (!data.status) return;

    if (!data.status.download) {
      onDownload?.(e);
    } else if (data.status.download) {
      onOpen?.(e);
    }
  };

  const error = data.status?.error === true;

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
            typeof data.status?.loading === 'number' &&
            data.status.loading !== 0 && (
              <Circle
                progress={data.status.loading}
                options={progressOptions}
                initialAnimate={true}
                containerClassName={'rce-mbox-file--loading'}
              />
            )}
        </div>
      </button>
    </div>
  );
};

export default FileMessage;
