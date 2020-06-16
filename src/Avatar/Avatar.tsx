import React from 'react';
import classNames from 'classnames';
import './Avatar.css';

const loadedAvatars: string[] = [];

export type LetterItem = {
  id: string;
  letter: React.ReactNode;
};

type AvatarType = 'default' | 'circle' | 'rounded' | 'flexible';

export type AvatarProps = {
  lazyLoadingImage?: string;
  /** image size:
   * * default (25px)
   * * xsmall(30px)
   * * small(35px)
   * * medium(40px)
   * * large(45px)
   * * xlarge (55px)
   */
  size?: 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  type?: AvatarType | (AvatarType | undefined)[];
  src?: string;
  alt?: string;
  onError?: React.EventHandler<React.SyntheticEvent<HTMLImageElement, Event>>;
  className?: string;
  letterItem?: LetterItem;
  sideElement?: React.ReactNode;
};

export class Avatar extends React.Component<AvatarProps> {
  _isMounted = false;
  loading = false;

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  isLoaded = (src: string) => {
    return loadedAvatars.indexOf(src) !== -1;
  };

  requestImage = (src: string) => {
    this.loading = true;

    const loaded = () => {
      loadedAvatars.push(src);
      this.loading = false;
    };

    const img = document.createElement('img');
    img.src = src;
    img.onload = loaded;
    img.onerror = loaded;
  };

  stringToColor = (str: string) => {
    var hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xff;
      value = (value % 150) + 50;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  };

  render() {
    const {
      lazyLoadingImage,
      type = 'default',
      size = 'default',
      alt,
      className,
      letterItem,
      src: propSrc,
    } = this.props;
    let src = propSrc;
    let isLazyImage = false;

    if (!propSrc) {
      return null;
    }

    if (lazyLoadingImage) {
      isLazyImage = true;

      if (!this.isLoaded(propSrc)) {
        src = lazyLoadingImage;

        if (!this.loading) {
          this.requestImage(propSrc);
        }
      } else {
        isLazyImage = false;
      }
    }

    return (
      <div
        className={classNames('rce-avatar-container', type, size, className)}
      >
        {letterItem ? (
          <div
            className="rce-avatar-letter-background"
            style={{
              backgroundColor: this.stringToColor(letterItem.id),
            }}
          >
            <span className="rce-avatar-letter">{letterItem.letter}</span>
          </div>
        ) : (
          <img
            alt={alt}
            src={src}
            onError={this.props.onError}
            className={classNames('rce-avatar', {
              'rce-avatar-lazy': isLazyImage,
            })}
          />
        )}
        {this.props.sideElement}
      </div>
    );
  }
}

export default Avatar;
