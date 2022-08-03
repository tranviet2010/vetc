import React, {Component} from "react";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class detailRecharge extends Component {
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
        <Modal show={show} onHide={this.handleClose} size='lg'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <table>
                <thead>
                <h5>Thông tin giao dịch</h5>
                <tr>
                  <td scope="col" style={{width: "26%"}}>Mã GD</td>
                  <td scope="col" style={{width: "15%"}}></td>
                  <td scope="col" style={{width: "30%"}}>Số tiền</td>
                  <td scope="col">{Data.money}</td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu</td>
                  <td scope="col"></td>
                  <td scope="col">Phí</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD</td>
                  <td scope="col">{Data.time}</td>
                  <td scope="col">Tổng tiền</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Loại GD</td>
                  <td scope="col"></td>
                  <td scope="col">Ngân hàng liên kết</td>
                  <td scope="col">{Data.bank}</td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD</td>
                  <th scope="col">Thành công</th>
                  <td scope="col">Số thẻ/Số tài khoản liên kết</td>
                  <td scope="col">{Data.numberAccountOfBank}</td>
                </tr>
                <tr>
                  <td scope="col"></td>
                  <th scope="col"></th>
                  <td scope="col">Họ tên chủ thẻ</td>
                  <td scope="col"></td>
                </tr>
                <br/>
                </thead>
              </table>
              <hr/>
                <table>
                  <thead>
                <h5>Thông tin khách hàng</h5>

                <tr>
                  <td scope="col" style={{width: "26%"}}>Họ tên</td>
                  <td scope="col" style={{width: "15%"}}></td>
                  <td scope="col" style={{width: "30%"}}>Số tài khoản ví</td>
                  <td scope="col">{Data.numberAccountOfWallet}</td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái</td>
                  <td scope="col">{Data.status}</td>
                  <td scope="col">Loại ví</td>
                  <td scope="col"></td>
                </tr>
                </thead>
              </table>
            </Row>




          </Modal.Body>

          {/*<Modal.Footer>*/}
          {/*  <Button variant="secondary" onClick={this.handleClose}>*/}
          {/*    Đóng*/}
          {/*  </Button>*/}
          {/*</Modal.Footer>*/}

        </Modal>
      </div>
    )
  }
}
