import classNames from 'classnames';
import React, { createRef, Component } from 'react';
import './Input.css';

export type InputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  | 'type'
  | 'onCopy'
  | 'onCut'
  | 'onPaste'
  | 'onChange'
  | 'placeholder'
  | 'onBlur'
  | 'onFocus'
  | 'onSelect'
  | 'onSubmit'
  | 'onReset'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onKeyPress'
> & {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  multiline?: boolean;
  autoHeight?: boolean;
  minHeight?: number;
  maxHeight?: number;
  inputStyle?: Record<string, any>;
  leftButtons?: React.ReactNode;
  rightButtons?: React.ReactNode;
  inputRef?: (instance: HTMLInputElement | HTMLTextAreaElement | null) => void;
  maxLength?: number;
  onMaxLengthExceed?: () => void;
  autofocus?: boolean;
};

type InputState = {
  value: string;
};

export class Input extends Component<InputProps, InputState> {
  state = {
    value: this.props.defaultValue ?? '',
  };
  input = createRef<HTMLInputElement | HTMLTextAreaElement>();

  clear = () => {
    this.setState({ value: '' });
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {
      maxLength,
      onMaxLengthExceed,
      onChange,
      multiline,
      minHeight = 25,
      maxHeight = 200,
      autoHeight = true,
    } = this.props;

    if (maxLength && e.target.value.length > maxLength) {
      onMaxLengthExceed?.();
    }
    this.setState({ value: e.target.value });

    onChange?.(e);

    if (multiline && autoHeight) {
      e.target.style.height = minHeight + 'px';

      if (!maxHeight || e.target.scrollHeight <= maxHeight) {
        e.target.style.height = e.target.scrollHeight + 'px';
      } else {
        e.target.style.height = maxHeight + 'px';
      }
    }
  };

  componentDidUpdate(prevProps: InputProps) {
    if (this.props.autofocus && !prevProps.autofocus) {
      this.input.current?.focus();
    }
  }

  render() {
    const {
      className,
      placeholder,
      inputStyle,
      multiline,
      inputRef,
      type = 'text',
      leftButtons,
      rightButtons,
      onCopy,
      onCut,
      onPaste,
      onBlur,
      onFocus,
      onSelect,
      onSubmit,
      onReset,
      onKeyDown,
      onKeyUp,
      onKeyPress,
    } = this.props;
    const { value } = this.state;

    return (
      <div className={classNames('rce-container-input', className)}>
        {leftButtons && <div className="rce-input-buttons">{leftButtons}</div>}
        {multiline ? (
          <textarea
            ref={ref => {
              inputRef?.(ref);
              (this.input as any).current = ref;
            }}
            className={classNames('rce-input', 'rce-input-textarea')}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            onChange={this.handleChange}
            onCopy={onCopy}
            onCut={onCut}
            onPaste={onPaste}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            onSubmit={onSubmit}
            onReset={onReset}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
          />
        ) : (
          <input
            ref={ref => {
              inputRef?.(ref);
              (this.input as any).current = ref;
            }}
            type={type}
            className={classNames('rce-input')}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            onChange={this.handleChange}
            onCopy={onCopy}
            onCut={onCut}
            onPaste={onPaste}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            onSubmit={onSubmit}
            onReset={onReset}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
          />
        )}
        {rightButtons && (
          <div className="rce-input-buttons">{rightButtons}</div>
        )}
      </div>
    );
  }
}
