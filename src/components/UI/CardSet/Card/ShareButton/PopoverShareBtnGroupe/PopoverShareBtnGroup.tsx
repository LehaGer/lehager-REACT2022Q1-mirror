import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { PopoverShareBtnGroupProps } from '../../../../../../types/types';
import BtnGropeTheme from '../../../../../../styles/BtnGropeTheme';
import PopoverCustom from '../../../../PopoverCustom/PopoverCustom';

export default class PopoverShareBtnGroup extends React.Component<PopoverShareBtnGroupProps> {
  constructor(props: PopoverShareBtnGroupProps) {
    super(props);
  }

  render() {
    return (
      <PopoverCustom
        anchorEl={this.props.anchorEl}
        isOpen={Boolean(this.props.anchorEl)}
        onClick={this.props.onClick}
        onClose={this.props.onClose}
      >
        <ThemeProvider theme={BtnGropeTheme}>
          <ButtonGroup
            variant="text"
            size="large"
            color="transparent"
            aria-label="large primary button group"
            data-testid="ShareLinksList"
          >
            <Button
              color={'primary'}
              onClick={() => {
                alert('some redirecting to Facebook =)');
              }}
            >
              <FacebookIcon />
            </Button>
            <Button
              color={'info'}
              onClick={() => {
                alert('some redirecting to Twitter =)');
              }}
            >
              <TwitterIcon />
            </Button>
            <Button
              color={'secondary'}
              onClick={() => {
                alert('some redirecting to Instagram =)');
              }}
            >
              <InstagramIcon />
            </Button>
          </ButtonGroup>
        </ThemeProvider>
      </PopoverCustom>
    );
  }
}
