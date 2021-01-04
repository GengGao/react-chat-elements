import classNames from 'classnames';
import React from 'react';
import './SystemMessage.css';

export type SystemMessageProps = {
  className?: string;
  text?: string;
};

export const SystemMessage: React.FC<SystemMessageProps> = ({
  className,
  text,
}) => (
  <div className={classNames('rce-container-smsg', className)}>
    <div className="rce-smsg">
      <div className="rce-smsg-text">{text}</div>
    </div>
  </div>
);
