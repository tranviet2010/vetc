import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './style.css';

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
        <Modal show={show} onHide={this.handleClose} size='lg'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Row className="div_elect">
              <table>
                <thead>
                <h5>Thông tin người chuyển</h5>
                <tr>
                  <td scope="col" style={{width:"29%"}}>Họ tên</td>
                  <td scope="col" style={{width: "25%"}}>{Data.CHUTKVI}</td>
                  <td scope="col" style={{width:"23%"}}>Số TK ví</td>
                  <td scope="col" style={{width: "30%"}}>{Data.SOTKVI}</td>
                </tr>
                <tr>
                  <td scope="col">Ngân hàng</td>
                  <td scope="col">{Data.NHCHUYEN}</td>
                  <td scope="col">Số thẻ/tài khoản</td>
                  <td scope="col">{Data.SOTKCHUYEN}</td>
                </tr>
                <br/>
                </thead>
              </table>
              <hr/>
                <table>
                  <thead>
                <h5>Thông tin người nhận</h5>
                <tr>
                  <td scope="col" style={{width:"28%"}}>Tên KH</td>
                  <td scope="col" style={{float:"left"}}>{Data.CHUTKNHAN}</td>
                </tr>
                <tr>
                  <td scope="col">Số thẻ/TK nhận</td>
                  <td scope="col">{Data.STKNHAN}</td>
                </tr>
                <tr>
                  <td scope="col">Ngân hàng</td>
                  <td scope="col">{Data.NHNHAN}</td>
                </tr>
                  <br/>
                  </thead>
                </table>
              <hr/>
                <table>
                  <thead>
                <h5>Thông tin giao dịch</h5>
                <tr>
                  <td scope="col"style={{width:"29%"}}>Mã GD</td>
                  <td scope="col" style={{width: "25%"}}>{Data.MAGD}</td>
                  <td scope="col" style={{width:"23%"}}>Số tiền</td>
                  <td scope="col" style={{width: "30%"}}>{Data.SOTIEN}</td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu</td>
                  <td scope="col">{Data.MAGD}</td>
                  <td scope="col">Phí</td>
                  <td scope="col">{Data.PHI}</td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD</td>
                  <td scope="col">{Data.NGAYGD}</td>
                  <td scope="col">Tổng tiền</td>
                  <td scope="col">{Data.SOTIEN}</td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD</td>
                  <th scope="col">{Data.TRANGTHAIGD}</th>
                  <td scope="col">Nội dung</td>
                  <td scope="col">Thanh toán dịch vụ chuyển tiền điện tử</td>
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
