import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class detailWallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      data: this.props.Data

    }
  }
  handleClose = () => {
    this.setState({
      show: false
    })
    this.props.checkClose();
  }

  render() {
    const { show } = this.state;
    const { Data } = this.props;
    return (
      <div>
        <Modal show={show} onHide={this.handleClose} size='xl'>
          <Modal.Body>
            <Row>
              <Col sm={4}>
                <h5>{Data.fullName}</h5>
                <div>{Data.phone}</div>
                <div>{Data.identification}</div>
                <div>{Data.type}</div>
                <div>{Data.bank}</div>
                <div>{Data.numberAccountOfBank}</div>
                <div>{Data.status}</div>
              </Col>
            </Row>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
