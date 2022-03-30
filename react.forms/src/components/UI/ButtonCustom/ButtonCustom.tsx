import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const ButtonCustom = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.MuiButton-root': {
    '&.MuiButton-containedPrimary': {
      backgroundColor: '#ffa5009c',
      '&.MuiButton-containedPrimary': {
        '&:hover, &.Mui-focusVisible': {
          color: 'white',
        },
        '&.Mui-active': {
          color: 'white',
        },
      },
    },
  },
}));

export default ButtonCustom;
