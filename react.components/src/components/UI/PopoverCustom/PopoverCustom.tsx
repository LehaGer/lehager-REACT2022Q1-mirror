import * as React from 'react';
import Popover from '@mui/material/Popover';
import { PopoverCustomProps } from '../../../types/types';

export default class PopoverCustom extends React.Component<PopoverCustomProps> {
  render() {
    return (
      <Popover
        anchorEl={this.props.anchorEl}
        id="account-menu"
        open={Boolean(this.props.anchorEl)}
        onClose={this.props.onClose}
        onClick={this.props.onClick}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: this.props.arrowOffset ? this.props.arrowOffset : 'calc(50% - 7px)',
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        {this.props.children}
      </Popover>
    );
  }
}
