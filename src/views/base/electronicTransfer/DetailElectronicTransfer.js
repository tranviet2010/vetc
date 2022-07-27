import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class detailElectronicTransfer extends Component {
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
    this.props.onSelectModal();
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
                <th>Thông tin người chuyển</th>
                <tr>
                  <td scope="col">Họ tên:</td>
                  <td scope="col"></td>
                  <td scope="col">Số TK ví:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Ngân hàng:</td>
                  <td scope="col"></td>
                  <td scope="col">Số thẻ/tài khoản:</td>
                  <td scope="col"></td>
                </tr>

                <th>Thông tin người nhận</th>
                <tr>
                  <td scope="col">Tên KH:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Số thẻ/TK nhận:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Ngân hàng:</td>
                  <td scope="col"></td>
                </tr>

                <th>Thông tin giao dịch</th>
                <tr>
                  <td scope="col">Mã GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Số tiền:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu:</td>
                  <td scope="col"></td>
                  <td scope="col">Phi:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Tổng tiền:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Nội dung:</td>
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
