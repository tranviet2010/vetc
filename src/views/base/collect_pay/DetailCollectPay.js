import React, {Component} from "react";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class detailCollectPay extends Component {
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
                <th>Thông tin khách hàng</th>
                <tr>
                  <td scope="col">Họ tên:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Số TK ví:</td>
                  <td scope="col"></td>
                </tr>

                <th>Thông tin giao dịch</th>
                <tr>
                  <td scope="col">Mã GD:</td>
                  <td scope="col">{Data.magd}</td>
                  <td scope="col">Mã KH:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Thời gian giao dịch:</td>
                  <td scope="col">{Data.datecreate}</td>
                  <td scope="col">Số tiền:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Loại GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Phí:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Nhà cung cấp:</td>
                  <td scope="col"></td>
                  <td scope="col">Tổng tiền:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Nội dung:</td>
                  <td scope="col"></td>
                  <td scope="col">Trạng thái giao dịch:</td>
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
