import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class detailPaymentGateway extends Component {
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
                <th>Thông tin giao dịch</th>
                <tr>
                  <td scope="col">Mã GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Số tiền:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Mã đơn hàng:</td>
                  <td scope="col"></td>
                  <td scope="col">Loại GD:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu:</td>
                  <td scope="col"></td>
                  <td scope="col">Mã lỗi CTT:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Mã lỗi TCPH:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Nội dung:</td>
                  <td scope="col"></td>
                </tr>

                <th>Thông tin khách hàng</th>
                <tr>
                  <td scope="col">Tên khách hàng:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Số thẻ/tài khoản thanh toán:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Phương thức thanh toán:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Tổ chức phát hành:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Kênh giao dịch:</td>
                  <td scope="col"></td>
                </tr>

                <th>Thông tin ĐVCNTT</th>
                <tr>
                  <td scope="col">Mã ĐVCNTT:</td>
                  <td scope="col"></td>
                  <td scope="col">Tên ĐVCNTT:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Số điện thoại:</td>
                  <td scope="col"></td>
                  <td scope="col">Tên viết tắt:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Email:</td>
                  <td scope="col"></td>
                  <td scope="col">Địa chỉ:</td>
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
