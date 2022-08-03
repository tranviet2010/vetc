import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";

export default class informationCustomer extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {thang:1,soluong:300,giatri:"120,000,000",soluong:5,giatri:"100,000"},
        {thang:2,soluong:450,giatri:"200,000,000",soluong:15,giatri:"1,000,000"},
        {thang:3,soluong:550,giatri:"500,000,000",soluong:20,giatri:"800,000"},
      ],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Col>
          <b>Thông tin đối tác</b>
        </Col>
        <br/>
        <Row>
          <Col xs = "1">Quý:</Col>
          <Col xs = "2" style={{marginLeft:"-40px"}}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Quý 1</option>
              <option value="1">Quý 2</option>
              <option value="2">Quý 3</option>
              <option value="3">Quý 4</option>
            </select>
          </Col>
          <Col xs = "1">Năm:</Col>
          <Col xs = "2" style={{marginLeft:"-40px"}}>
            <select className="form-select" aria-label="Default select example">
              <option selected>2021</option>
              <option value="1">2022</option>
            </select>
          </Col>
          <Col xs = "2">Loại báo cáo:</Col>
          <Col xs = "2" style={{marginLeft:"-90px"}}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Ngân hàng hợp tác</option>
              <option value="1">ĐVCNTT</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff", float:"right", marginRight:"-55px"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <th>ĐƠN VỊ CHẤP NHẬN THANH TOÁN</th>
          <p></p>
          <Col>
            <table className="table table-bordered">
              <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Số lượng ĐVCNTT</th>
                <th scope="col">Quý</th>
              </tr>
              </thead>
              <tbody className="table-group-divider">
              {
                data.map((val,index) => (
                  <tr className="last_tr">
                    <th scope="row">{index + 1}</th>
                    <td></td>
                    <td>{val.date}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    )
  }
}
