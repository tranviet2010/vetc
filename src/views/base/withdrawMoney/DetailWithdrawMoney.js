import React, {Component} from "react";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class detailWithdrawMoney extends Component {
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
    this.props.checkCloseModal();
  }

  render() {
    const { show } = this.state;
    const { Data } = this.props;
    return (
      <div>
        <Modal show={show} onHide={this.handleClose} size='xl'>
          <Modal.Body>
            <Row>

              <table>
                <thead>
                <th>Thông tin giao dịch</th>
                <tr>
                  <td scope="col">Mã GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Số tiền:</td>
                  <td scope="col">{Data.money}</td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu:</td>
                  <td scope="col"></td>
                  <td scope="col">Phí:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD:</td>
                  <td scope="col">{Data.time}</td>
                  <td scope="col">Tổng tiền:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Ngân hàng nhận tiền:</td>
                  <td scope="col"></td>
                  <td scope="col">Trạng thái GD:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Số thẻ/tài khoản nhận tiền:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Họ tên tài khoản/thẻ nhận tiền:</td>
                  <td scope="col"></td>
                </tr>


                <th>Thông tin khách hàng</th>

                <tr>
                  <td scope="col">Họ tên:</td>
                  <td scope="col"></td>
                  <td scope="col">Số tài khoản ví:</td>
                  <td scope="col">{Data.numberAccountOfWallet}</td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái:</td>
                  <td scope="col">{Data.status}</td>
                  <td scope="col">Loại ví:</td>
                  <td scope="col"></td>
                </tr>
                </thead>
              </table>
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
