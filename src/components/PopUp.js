import React from "react";
import {styled, Box} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import {useSelector} from "react-redux";
import Store from "./Store";
import {NavLink} from "react-router-dom";

function PopUp(props) {
    const StyledModal = styled(ModalUnstyled)`
      position: fixed;
      z-index: 1300;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Backdrop = styled('div')`
      z-index: -1;
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-tap-highlight-color: transparent;
    `;

    const style = {
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        p: 2,
        px: 4,
        pb: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    let productStyle = {
        minHeight: "100px",
        width: "200px",
        margin: "10px",
        textAlign: "center"
    }

    const [open, setOpen] = React.useState(true);
    const handleClose = () => function () {
        setOpen(false);
    }

    const productEles = useSelector(state => state.products).filter(function (product) {
        try {
            return product.name === `${props.match.params.name}`;
        } catch (err) {
            return ""
        }
    }).map((product, index) =>
        <div key={index} style={productStyle}>
            <div>
                <img src={product.image} alt={product.name} width="200px" height="200px" style={{objectFit: "cover"}}/>
            </div>
            <div style={{
                marginTop: "-4px",
                padding: "5px",
                backgroundColor: product.stock <= 10 ? "skyblue" : "orange"
            }}>
                <h3>{product.name}</h3>
                <h3>{product.stock} in stock</h3>
                <h3>${product.price}</h3>
            </div>
        </div>
    );

    return (
        <div>
            <Store/>
            <NavLink to={"/"} style={{textDecoration: "none", color: "black"}}>
                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    BackdropComponent={Backdrop}
                >
                    <Box sx={style}>
                        {productEles}
                    </Box>
                </StyledModal>
            </NavLink>
        </div>
    );
}

export default PopUp;