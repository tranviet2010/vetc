import React,{Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {ValidateDateTime} from "../../helper/validate";
import {number} from "prop-types";

export default class Settlement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      data: this.props.Data,
      numberOfWallet: "",
    }
  }
  handleClose = () => {
    this.setState({
      show: false
    })
    this.props.onSelectModal()
  }
  // handleInputChange = () => {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   })
  // }
  render() {
    const { show } = this.state;
    const { Data } = this.props;
    return (
      <div>

        <Modal show={show} onHide={this.handleClose} size='lg'>
          <Modal.Header>
            <Modal.Title><p>Cập nhật tài khoản/ví điện tử hạn chế</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className='border_button'>
              <Row>
                <Col>
                  <table className="table table-bordered">

                    <tbody className="">

                    <tr className="">
                      <td>Ngày quyết toán</td>
                      <td><input type="date" defaultValue={ValidateDateTime(Data[0].NGAY)}></input></td>
                    </tr>
                    <tr>
                      <td>Tổng số ví</td>
                      <td>{Data.length}</td>
                    </tr>
                    <tr>
                      <td>Tổng số dư ví</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Số dư TKĐB tại Ngân hàng</td>
                      <td></td>
                    </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning color_white" onClick={this.handleClose}>
              Hủy
            </Button>
            <Button variant="success color_white" onClick={this.handleClose}>
              Quyết toán
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

