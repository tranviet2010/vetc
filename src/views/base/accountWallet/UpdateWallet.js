import React,{Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class AddWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      data: this.props.Data,
      numberOfWallet: "",
    }
  }
  handleClose = () => {
    this.setState({
      show: false
    })
    this.props.onSelectModal()
  }
  handleInputChange = () => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  render() {
    const { show } = this.state;
    const { Data } = this.props;
    return (
      <div>

        <Modal show={show} onHide={this.handleClose} size='xl'>
          <Modal.Header>
            <Modal.Title><p style={{marginLeft:"330px"}}>Cập nhật tài khoản/ví điện tử hạn chế</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className='border_button'>
              <Row>
                <Col>
                  <table className="table table-bordered">

                    <tbody className="">
                    <tr className="">
                      <td>Số tài khoản/ví</td>
                      <td>{Data.numberOfWallet}</td>
                    </tr>
                    <tr>
                      <td>Tổ chức phát hành</td>
                      <td>{Data.bank}</td>
                    </tr>
                    <tr className="">
                      <td>Ngày áp dụng</td>
                      <td><input type="date" name="date_apply" placeholder='Nhập/chọn ngày áp dụng' onChange={this.handleInputChange}></input></td>
                    </tr>
                    <tr className="">
                      <td>Hình thức xử lý</td>
                      <td><select name="" id="" form="carform">
                        <option value="volvo">Chọn hình thức xử lý</option>
                        <option>Chặn giao dịch</option>
                        <option>Cảnh báo rủi ro</option>
                      </select></td>
                    </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning color_white" onClick={this.handleClose}>
              Hủy
            </Button>
            <Button variant="success color_white" onClick={this.handleClose}>
              Cập nhật
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

