import * as React from 'react';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { IShareButtonProps, IShareButtonState } from '../../../../../types/types';
import ShareIcon from '@mui/icons-material/Share';
import PopoverShareBtnGroup from './PopoverShareBtnGroupe/PopoverShareBtnGroup';

class ShareButton extends React.Component<IShareButtonProps, IShareButtonState> {
  constructor(props: IShareButtonProps) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    return (
      <div>
        <Tooltip title={'Share'}>
          <IconButton
            aria-label="Share"
            onClick={this.handleClick}
            aria-controls={Boolean(this.state.anchorEl) ? 'account-menu' : undefined}
            aria-haspopup="false"
            aria-expanded={Boolean(this.state.anchorEl) ? 'true' : undefined}
            data-testid="ShareBtn"
          >
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <PopoverShareBtnGroup
          anchorEl={this.state.anchorEl}
          onClick={this.handleClose}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default ShareButton;
