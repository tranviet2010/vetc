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
  componentDidMount(){
    console.log("data",this.props.Data)
  }

  render() {
    const { show } = this.state;
    const { Data } = this.props;
    return (
      <div>
        <Modal show={show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <table >
                <thead>
                <h5>Thông tin giao dịch</h5>
                <tr>
                  <td scope="col" style={{width:"27%"}}>Mã GD</td>
                  <td scope="col" style={{width:"23%"}}></td>
                  <td scope="col" style={{width:"25%"}}>Ngân hàng liên kết</td>
                  <td scope="col" style={{width:"25%"}}>{Data.bank}</td>
                </tr>
                <tr>
                  <td scope="col">Mã GD tham chiếu</td>
                  <td scope="col"></td>
                  <td scope="col">Số thẻ/số tài khoản</td>
                  <td scope="col">{Data.numberAccountOfBank}</td>
                </tr>
                <tr>
                  <td scope="col">Thời gian GD</td>
                  <td scope="col"></td>
                  <td scope="col">Họ tên chủ thẻ</td>
                  <td scope="col">{Data.fullName}</td>
                </tr>
                <tr>
                  <td scope="col">Loại GD</td>
                  <td scope="col">{Data.type}</td>
                  <td scope="col">Ngày phát hành</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái GD</td>
                  <td scope="col">{Data.status}</td>
                  <td scope="col">Loại ví</td>
                  <td scope="col">Khách hàng cá nhân</td>
                </tr>
              {/*  </thead>*/}
              {/*</table>*/}
                <hr/>

                {/*<table >*/}
                {/*  <thead>*/}
                  <h5>Thông tin khách hàng</h5>
                <tr>
                  <td scope="col" >Họ tên</td>
                  <td scope="col" >{Data.fullName}</td>
                  <td scope="col" >Số tài khoản ví</td>
                  <td scope="col" >{Data.numberAccountOfBank}</td>
                </tr>
                <tr>
                  <td scope="col">Trạng thái</td>
                  <td scope="col">{Data.status}</td>
                  <td scope="col">Loại ví</td>
                  <td scope="col"></td>
                </tr>
                </thead>
              </table>


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
