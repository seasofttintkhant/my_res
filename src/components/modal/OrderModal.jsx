import React from "react";
import "./Style.css";
import "../../App.css"
import {connect} from "react-redux";
import {CLOSE_MODAL} from "../../store/action_types";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TableCell from '@material-ui/core/TableCell';
import Box from "@material-ui/core/Box";


class OrderModal extends React.Component{
  render() {
    let total = 0;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={"modal"}
        open={this.props.open}
        onClose={this.props.closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.props.open}>
          <Box className={"order-modal"}>
            <Grid container justify={"space-between"} alignItems={"center"}>
              <Typography variant={"h5"} component={"h5"}>
                Your Orders
              </Typography>
              <IconButton size={"medium"} onClick={this.props.closeModal}>
                <CloseIcon fontSize={"small"}/>
              </IconButton>
            </Grid>
            <TableContainer component={Paper}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell size={"small"} align={"center"}>No</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Count</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    this.props.orders.length > 0 &&
                    this.props.orders.map((item,index) => {
                      total += item.count * item.menu.price;
                      return (
                        <TableRow hover key={item.menu.id}>
                          <TableCell align={"center"}>
                            {index + 1}
                          </TableCell>
                          <TableCell>
                            {item.menu.name}
                          </TableCell>
                          <TableCell align={"center"}>
                            {item.count}
                          </TableCell>
                          <TableCell align={"right"}>
                              &times;
                              {item.menu.price}
                          </TableCell>
                          <TableCell align={"right"}>
                            {item.count * item.menu.price}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  }
                  <TableRow>
                    <TableCell colSpan={4} align={"right"}>
                      Total
                    </TableCell>
                    <TableCell align={"right"}>
                      {total}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Fade>
      </Modal>
    );
  }
}

let ReduxOrderModal = connect(state => {
  return {
    orders: state.orders,
    open: state.order_modal
  }
}, dispatch => {
  return {
    closeModal: () => dispatch({type: CLOSE_MODAL})
  }
})(OrderModal);

export default ReduxOrderModal;
