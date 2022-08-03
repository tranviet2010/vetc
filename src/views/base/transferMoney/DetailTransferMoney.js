import React, {Component} from "react";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class detailTransferMoney extends Component {
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
                <h5>Thông tin người chuyển</h5>
                <tr>
                  <td scope="col" style={{width:"28%"}}>Họ tên</td>
                  <td scope="col" style={{width:"28"}}></td>
                  <td scope="col" style={{width:"20%"}}>Số TK ví</td>
                  <td scope="col" style={{width:"27%"}}></td>
                </tr>
                <br/>
                </thead>
              </table>
              <hr/>
              <table>
                <thead>
                <h5> Thông tin người nhận</h5>
                <tr>
                  <td scope="col" style={{width:"28%"}}>Tên KH</td>
                  <td scope="col" style={{width:"28"}}></td>
                  <td scope="col" style={{width:"20%"}}>Số TK ví</td>
                  <td scope="col" style={{width:"27%"}}></td>
                </tr>
                <br/>
                </thead>
              </table>
              <hr/>
              <table>
                <thead>
                <h5> Thông tin giao dịch</h5>
                <tr>
                  <td scope="col" style={{width:"28%"}}>Mã GD</td>
                  <td scope="col" style={{width:"28"}}>{Data.maGd}</td>
                  <td scope="col" style={{width:"20%"}}>Số tiền</td>
                  <td scope="col" style={{width:"27%"}}>{Data.money}</td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu</td>
                  <td scope="col"></td>
                  <td scope="col">Phí</td>
                  <td scope="col">{Data.fee}</td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD</td>
                  <td scope="col">{Data.date}</td>
                  <td scope="col">Tổng tiền</td>
                  <td scope="col">{Data.totalMoney}</td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD</td>
                  <th scope="col">{Data.status}</th>
                  <td scope="col">Nội dung</td>
                  <td scope="col"></td>
                </tr>
                </thead>
              </table>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
