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
        <Modal show={show} onHide={this.handleClose} size='lg'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Row>

              <table>
                <thead>
                <h5>Thông tin khách hàng</h5>
                <tr>
                  <td scope="col" style={{width:"26%"}}>Họ tên</td>
                  <td scope="col" style={{float:"left"}}>{Data.HOTEN}</td>
                </tr>
                <tr>
                  <td scope="col">Số TK ví</td>
                  <td scope="col">{Data.TKVI}</td>
                </tr>
                <br/>
                </thead>
              </table>
              <hr/>
                <table>
                  <thead>
                <h5>Thông tin giao dịch</h5>
                <tr>
                  <td scope="col" style={{width:"26%"}}>Mã GD</td>
                  <td scope="col" style={{width:"23%"}}>{Data.MAGD}</td>
                  <td scope="col" style={{width: "26%"}}>Mã KH</td>
                  <td scope="col" style={{float:"left"}}>{Data.MAKH}</td>
                </tr>
                <tr>
                  <td scope="col">Thời gian giao dịch</td>
                  <td scope="col">{Data.NGAYGD}</td>
                  <td scope="col">Số tiền</td>
                  <td scope="col">{Data.SOTIEN}</td>
                </tr>
                <tr>
                  <td scope="col">Loại GD</td>
                  <td scope="col">{Data.LOAIGD}</td>
                  <td scope="col">Phí</td>
                  <td scope="col">{Data.PHI}</td>
                </tr>
                <tr>
                  <td scope="col">Nhà cung cấp</td>
                  <td scope="col">{Data.NHA_CC}</td>
                  <td scope="col">Tổng tiền</td>
                  <td scope="col">{Data.SOTIEN}</td>
                </tr>
                <tr>
                  <td scope="col">Nội dung</td>
                  <td scope="col">Dịch vụ thu hộ/chi hộ</td>
                  <td scope="col">Trạng thái giao dịch</td>
                  <th scope="col">{Data.TRANGTHAI}</th>
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
