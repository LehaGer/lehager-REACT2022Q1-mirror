import React from 'react';
import { IShareButtonProps } from '../../../types/interfaces';
import ItemStyles from './ShareButton.module.css';

class ShareButton extends React.Component<IShareButtonProps> {
  constructor(props: IShareButtonProps) {
    super(props);
  }
  render() {
    return <button className={ItemStyles.shrBtn} />;
  }
}

export default ShareButton;
