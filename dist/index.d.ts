declare module 'react-chat-elements' {
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';

  interface AvatarProps extends React.Props<Avatar> {
    src: string;
    alt?: string;
    /** image size:
     * * default (25px)
     * * xsmall(30px)
     * * small(35px)
     * * medium(40px)
     * * large(45px)
     * * xlarge (55px)
     */
    size?: 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    type?: 'default' | 'circle' | 'rounded' | 'flexible';
    letterItem?: Object;
    sideElement?: React.ReactNode;
    onError?: () => void;
    lazyLoadingImage?: string;
  }

  interface Avatar extends React.ComponentClass<AvatarProps> {}
  export const Avatar: Avatar;

  interface ButtonProps extends React.Props<Button> {
    type?: 'outlined' | 'transparent';
    disabled?: boolean;
    title?: string;
    text: string;
    buttonRef?: React.Ref<HTMLButtonElement>;
    onClick?: () => void;
  }

  interface Button extends React.ComponentClass<ButtonProps> {}
  export const Button: Button;

  interface ChatListProps extends React.Props<ChatList> {
    className?: string;
    dataSource: ChatItemProps[];
    onClick?: (value: any) => void;
    onContextMenu?: () => void;
    onAvatarError?: () => void;
    lazyLoadingImage?: string;
  }

  interface ChatList extends React.ComponentClass<ChatListProps> {}
  export const ChatList: ChatList;

  interface ChatItemProps extends React.Props<ChatItem> {
    avatar: string;
    avatarFlexible?: boolean;
    alt?: string;
    title: string;
    subtitle?: string;
    date: Date;
    dateString?: string;
    unread?: number;
    onClick?: (value: any) => void;
    onContextMenu?: () => void;
    statusColor?: string;
    statusColorType?: 'badge' | 'encircle';
    statusText?: string;
    /** lazy loading image path */
    lazyLoadingImage?: string;
  }

  interface ChatItem extends React.ComponentClass<ChatItemProps> {}
  export const ChatItem: ChatItem;

  interface DropDownItem {
    icon?: Icon;
    text?: string;
  }

  interface DropdownProps extends React.Props<Dropdown> {
    animationType?: 'fade' | 'default';
    animationPosition?: 'nortwest' | 'norteast' | 'southwest' | 'southeast';
    items: DropDownItem[];
    onSelect?: () => void;
    buttonProps?: ButtonProps;
  }

  interface Dropdown extends React.ComponentClass<DropdownProps> {}
  export const Dropdown: Dropdown;

  interface InputProps extends React.Props<Input> {
    className?: string;
    placeholder?: string;
    defaultValue?: string;
    onChange?: () => void;
    multiline?: boolean;
    autoHeight?: boolean;
    minHeight?: number;
    maxHeight?: number;
    inputStyle?: Object;
    leftButtons?: React.ReactNode;
    rightButtons?: React.ReactNode;
    ref?: React.Ref;
    maxlength?: number;
    onMaxLengthExceed?: () => void;
    autofocus?: boolean;
  }

  interface Input extends React.ComponentClass<InputProps> {}
  export const Input: Input;

  interface LocationData {
    latitude: string;
    longitude: string;
    staticURL?: string;
    mapURL?: string;
  }

  interface LocationMessageProps extends React.Props<LocationMessage> {
    src?: string;
    /** google staticmap api key */
    apiKey?: string;
    /** google staticmap zoom level */
    zoom?: number;
    /** google staticmap marker color*/
    markerColor?: string;
    data: LocationData;
    target?: string;
    onOpen?: () => void;
  }

  interface LocationMessage
    extends React.ComponentClass<LocationMessageProps> {}
  export const LocationMessage: LocationMessage;

  interface SpotifyMessageProps extends React.Props<SpotifyMessage> {
    uri: string;
    theme?: 'black' | 'white';
    view?: 'list' | 'coverart';
    data?: Object;
    width?: number;
    height?: number;
  }
  interface SpotifyMessage extends React.ComponentClass<SpotifyMessageProps> {}
  export const SpotifyMessage: SpotifyMessage;

  interface MessageBoxProps extends React.Props<MessageBox> {
    id?: string;
    position?: 'left' | 'right';
    type?: 'text' | 'photo' | 'file' | 'location' | 'spotify';
    text: string;
    title: string;
    titleColor?: string;
    data: Object;
    date?: Date;
    dateString?: string;
    onClick?: () => void;
    onOpen?: () => void;
    onDownload?: () => void;
    onLoad?: () => void;
    onPhotoError?: () => void;
    onTitleClick?: () => void;
    onForwardClick?: () => void;
    onReplyClick?: () => void;
    onReplyMessageClick?: () => void;
    onContextMenu?: () => void;
    forwarded?: boolean;
    status?: 'waiting' | 'sent' | 'received' | 'read';
    notch?: boolean;
    /** message box avatar url */
    avatar?: string;
    renderAddCmp?: React.ReactNode | (() => React.ReactNode);
    copiableDate?: boolean;
    focus?: boolean;
    onMessageFocused?: () => void;
    reply?: Object;
  }

  interface MessageBox extends React.ComponentClass<MessageBoxProps> {}
  export const MessageBox: MessageBox;

  interface Icon {
    component?: React.ReactNode;
    float?: 'left' | 'right';
    color?: string;
    size?: number;
  }

  interface MessageListProps extends React.Props<MessageList> {
    className?: string;
    dataSource: MessageBoxProps[];
    lockable?: boolean;
    toBottomHeight?: number | '100%';
    onClick?: () => void;
    onOpen?: () => void;
    onDownload?: () => void;
    onScroll?: () => void;
    onForwardClick?: () => void;
    onReplyClick?: () => void;
    onReplyMessageClick?: () => void;
    downButton?: boolean;
    downButtonBadge?: boolean;
    onDownButtonClick?: () => void;
    onContextMenu?: () => void;
    onPhotoError?: () => void;
  }

  interface MessageList extends React.ComponentClass<MessageListProps> {}
  export const MessageList: MessageList;

  interface NavBarProps extends React.Props<NavBar> {
    type?: 'light' | 'dark';
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
  }

  interface NavBar extends React.ComponentClass<NavBarProps> {}
  export const NavBar: NavBar;

  interface PopupProps extends React.Props<Popup> {
    show?: boolean;
    header: string;
    headerButtons?: Object[];
    text: string;
    color?: string;
    footerButtons?: Object[];
    renderHeader?: () => React.ReactNode;
    renderContent?: () => React.ReactNode;
    renderFooter?: () => React.ReactNode;
  }

  interface Popup extends React.ComponentClass<PopupProps> {}
  export const Popup: Popup;

  interface SideBarProps extends React.Props<SideBar> {
    type?: 'light' | 'dark';
    top?: React.ReactNode;
    center?: React.ReactNode;
    bottom?: React.ReactNode;
  }

  interface SideBar extends React.ComponentClass<SideBarProps> {}
  export const SideBar: SideBar;

  interface SystemMessageProps extends React.Props<SystemMessage> {
    text: string;
  }

  interface SystemMessage extends React.ComponentClass<SystemMessageProps> {}
  export const SystemMessage: SystemMessage;
  }