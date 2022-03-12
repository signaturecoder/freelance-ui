import React from 'react';
import Button from '@mui/material/Button';


const StyledButton = ({variant, btnName, btnClicked}) => {
    return (
        <Button variant={variant} onClick={btnClicked}>{btnName}</Button>
    )
}

export default StyledButton
