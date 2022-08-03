import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";

export default class reportTwoParty extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {date:"1/9/2021"},
        {date:"2/9/2021"},
        {date:"3/9/2021"},
      ],
    };
  }
  handleEdit=()=>{

  }
  render() {
    const {data} = this.state;
    return (
      <div className='backGround_main'>
        <Col>
          <b>Báo cáo Ví theo giao dịch 2 bên</b>
        </Col>
        <br/>
        <Row>
          <Col xs="2" style={{width:"10%"}}>Loại báo cáo:</Col>
          <Col xs="4">
            <select className="form-select" aria-label="Default select example">
              <option selected>Số lượng và giá trị Ví theo kỳ thống kê</option>
              <option value="1">Số lượng và giá trị giao dịch 2 bên</option>
            </select>
          </Col>
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
            <Button variant="success" style={{ color: "#fff",float:"right"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="2" style={{width:"10%"}}>Ngân hàng:</Col>
          <Col xs="2">
            <select className="form-select" aria-label="Default select example">
              <option selected>Vietinbank</option>
              <option value="1">BIDV</option>
            </select>
          </Col>
        </Row>
        <Row>
          <p></p>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">Ngày</th>
              <th scope="col" colSpan="4">Bên nợ</th>
              <th scope="col" colSpan="4">Bên có</th>
              <th scope="col">Chênh lệch nợ/có</th>
            </tr>
            </thead>
            <thead className="table-group-bordered">
            <tr className="last_right">
              <td></td>
              <td>Số lượng</td>
              <td>Giá trị GD (2)</td>
              <td>Phí (3)</td>
              <td>Tổng cộng (4)=(2)+(3)</td>
              <td>Số lượng</td>
              <td>Giá trị GD (5)</td>
              <td>Phí (6)</td>
              <td>Tổng cộng (7)=(5)+(6)</td>
              <td>(8)=(7)-(4)</td>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val) => (
                <tr className="last_tr">
                  <th>{val.date}</th>
                  <td></td>
                  <td></td>
                  <td></td>
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
      </div>
    )
  }
}
