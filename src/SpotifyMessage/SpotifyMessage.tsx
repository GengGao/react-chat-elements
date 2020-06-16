import React from 'react';
import './SpotifyMessage.css';

export type SpotifyMessageProps = {
  theme?: 'black' | 'white';
  view?: 'list' | 'coverart';
  uri?: string;
  width?: number | string;
  height?: number | string;
};

export const SpotifyMessage: React.FC<SpotifyMessageProps> = ({
  uri,
  theme = 'black',
  view = 'list',
  width = 300,
  height = 380,
}) => {
  const toUrl = () => {
    var data = { uri, theme, view };
    return Object.entries(data)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value!)}`,
      )
      .join('&');
  };

  if (!uri) {
    return null;
  }
  return (
    <div className="rce-mbox-spotify">
      <iframe
        src={'https://open.spotify.com/embed?' + toUrl()}
        width={width}
        height={height}
        frameBorder="0"
        allowTransparency
      ></iframe>
    </div>
  );
};

export default SpotifyMessage;
