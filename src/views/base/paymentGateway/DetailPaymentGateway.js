import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { convertDate } from "src/views/helper/validate";

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
        <Modal show={show} onHide={this.handleClose} size='lg'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <table>
                <thead>
                <h5>Thông tin giao dịch</h5>
                <tr>
                  <td scope="col" style={{width:"28%"}}>Mã GD</td>
                  <td scope="col" style={{width: "23%"}}>{Data.MAGD}</td>
                  <td scope="col" style={{width:"20%"}}>Số tiền</td>
                  <td scope="col" >{Data.SOTIEN}</td>
                </tr>
                <tr>
                  <td scope="col">Mã đơn hàng</td>
                  <td scope="col">{Data.MADH}</td>
                  <td scope="col">Loại GD</td>
                  <td scope="col">Giao dịch cổng thanh toán</td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu</td>
                  <td scope="col">{Data.MAGD}</td>
                  <td scope="col">Mã lỗi CTT</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD</td>
                  <td scope="col">{Data.NGAYGD}</td>
                  <td scope="col">Mã lỗi TCPH</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD</td>
                  <th scope="col">{Data.TRANGTHAIGD}</th>
                </tr>
                <tr>
                  <td scope="col">Nội dung</td>
                  <td scope="col">Dịch vụ thanh toán qua cổng thanh toán</td>
                </tr>
<hr/>
                <h5>Thông tin khách hàng</h5>
                <tr>
                  <td scope="col">Tên khách hàng</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Số thẻ/tài khoản thanh toán</td>
                  <td scope="col">{Data.TKTHANHTOAN}</td>
                </tr>
                <tr>
                  <td scope="col">Phương thức thanh toán</td>
                  <td scope="col">{Data.PHUONGTHUCTT}</td>
                </tr>
                <tr>
                  <td scope="col">Tổ chức phát hành</td>
                  <td scope="col">Vietinbank</td>
                </tr>
                <tr>
                  <td scope="col">Kênh giao dịch</td>
                  <td scope="col">Web</td>
                </tr>
<hr/>
                <h5>Thông tin ĐVCNTT</h5>
                <tr>
                  <td scope="col">Mã ĐVCNTT</td>
                  <td scope="col">{Data.DVCNTT}</td>
                  <td scope="col">Tên ĐVCNTT</td>
                  <td scope="col">{Data.DVCNTT}</td>
                </tr>
                <tr>
                  <td scope="col">Số điện thoại</td>
                  <td scope="col"></td>
                  <td scope="col">Tên viết tắt</td>
                  <td scope="col">{Data.DVCNTT}</td>
                </tr>
                <tr>
                  <td scope="col">Email</td>
                  <td scope="col"></td>
                  <td scope="col">Địa chỉ</td>
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
