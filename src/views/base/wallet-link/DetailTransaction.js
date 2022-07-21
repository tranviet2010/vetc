import React, {Component} from "react";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class detailTransaction extends Component {
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
                  <td scope="col">Ngân hàng liên kết:</td>
                  <td scope="col">{Data.bank}</td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu:</td>
                  <td scope="col"></td>
                  <td scope="col">Số thẻ/số tài khoản:</td>
                  <td scope="col">{Data.numberAccountOfBank}</td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD:</td>
                  <td scope="col"></td>
                  <td scope="col">Họ tên chủ thẻ:</td>
                  <td scope="col">{Data.fullName}</td>
                </tr>
                <tr>
                  <td scope="col">Loại GD:</td>
                  <td scope="col">{Data.type}</td>
                  <td scope="col">Ngày phát hành:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD:</td>
                  <td scope="col">{Data.status}</td>
                  <td scope="col">Loại ví:</td>
                  <td scope="col">Khách hàng cá nhân</td>
                </tr>

                <th>Thông tin khách hàng</th>

                <tr>
                  <td scope="col">Họ tên:</td>
                  <td scope="col"></td>
                  <td scope="col">Số tài khoản ví:</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái:</td>
                  <td scope="col"></td>
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
