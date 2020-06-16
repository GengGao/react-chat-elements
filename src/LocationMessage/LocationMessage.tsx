import classNames from 'classnames';
import React from 'react';
import './LocationMessage.css';

const STATIC_URL =
  'https://maps.googleapis.com/maps/api/staticmap?markers=color:MARKER_COLOR|LATITUDE,LONGITUDE&zoom=ZOOM&size=270x200&scale=2&key=KEY';
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=LATITUDE,LONGITUDE&zoom=ZOOM';

export type LocationMessageData = {
  staticURL?: string;
  mapURL?: string;
  latitude: string;
  longitude: string;
};

export type LocationMessageProps = Pick<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'target' | 'href'
> & {
  className?: string;
  markerColor?: string;
  zoom?: number;
  apiKey?: string;
  src?: string;
  data: LocationMessageData;
  text?: string;
  onOpen?: React.AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
  onError?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
};

export const LocationMessage: React.FC<LocationMessageProps> = ({
  className,
  data,
  text,
  markerColor = 'red',
  zoom = 14,
  apiKey = '',
  target = '_blank',
  href,
  src,
  onOpen,
  onError,
}) => {
  const buildURL = (url: string) =>
    url
      .replace(/LATITUDE/g, data?.latitude ?? '')
      .replace(/LONGITUDE/g, data?.longitude ?? '')
      .replace('MARKER_COLOR', markerColor)
      .replace('ZOOM', zoom.toString())
      .replace('KEY', apiKey);

  return (
    <div className="rce-container-lmsg">
      <a
        onClick={onOpen}
        target={target}
        href={href || src || buildURL(data?.mapURL ?? MAP_URL)}
        className={classNames(
          'rce-mbox-location',
          className,
          text && 'rce-mbox-location-has-text',
        )}
      >
        <img
          onError={onError}
          className="rce-mbox-location-img"
          src={src || buildURL(data.staticURL ?? STATIC_URL)}
        />
      </a>
      {text && (
        <div className="rce-mbox-text rce-mbox-location-text">{text}</div>
      )}
    </div>
  );
};

export default LocationMessage;
