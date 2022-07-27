import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import CIcon from "@coreui/icons-react";
import {cilApple} from "@coreui/icons";

export default class reportWallet extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {},
        {},
      ],
      phone: "",
      checkDetail:false,
      dataCheck:[],
      checkDetailTransaction:false,
      dataCheckDetailTransaction:[],

    };
  }
  // handleClick=(t)=>{
  //   this.setState({
  //     checkDetail:true,
  //     dataCheck:t
  //   })
  // }
  // checkClose=()=>{
  //   this.setState({
  //     checkDetail:false
  //   })
  // }
  //
  // handleClickDetailTransaction=(t)=>{
  //   this.setState({
  //     checkDetailTransaction:true,
  //     dataCheckDetailTransaction:t
  //   })
  // }
  // checkCloseModal=()=>{
  //   this.setState({
  //     checkDetailTransaction:false
  //   })
  // }


  componentDidMount(){

  }
  render() {
    const { data, dataCheck, dataCheckDetailTransaction } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch liên kết ví</b>
            </Col>

          </Row>
        </div>
        <Row>
          <Col>
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Từ ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Đến ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff", marginLeft:"140px"}}  >Tìm kiếm</Button>

            <Button variant="success" className="color_white" style={{marginLeft:"20px"}}>Xuất excel</Button>
          </Col>

        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Loại ví</th>
              <th scope="col">Đã phát hành</th>
              <th scope="col">Đã kích hoạt</th>
              <th scope="col">Đang hoạt động</th>
              <th scope="col">Đã liên kết tài khoản ngân hàng</th>
              <th scope="col">Tổng số dư ví</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Row>

        {/*{this.state.checkDetail==true?<DetailWallet Data={dataCheck} checkClose={this.checkClose} />:''}*/}
        {/*{this.state.checkDetailTransaction==true?<DetailTransaction Data={dataCheckDetailTransaction} checkCloseModal={this.checkCloseModal}/>:''}*/}
      </div>
    )
  }
}
