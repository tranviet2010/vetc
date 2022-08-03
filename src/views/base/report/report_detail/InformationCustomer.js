import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";

export default class informationCustomer extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          STT: 1,
          NGANHANG: "Ngân hàng Vietinbank ",
          QUY: "Qúy 1 - 2022"
        },
        {
          STT: 2,
          NGANHANG: "Ngân hàng Vietcombank ",
          QUY: "Qúy 1 - 2022"
        },
        {
          STT: 3,
          NGANHANG: "Ngân hàng BIDV",
          QUY: "Qúy 1 - 2022"
        },
        {
          STT: 4,
          NGANHANG: "Ngân hàng ACB",
          QUY: "Qúy 1 - 2022"
        }
      ],
      dv_tt:[
        {
          SOLUONGDVCNTT:13000,
          QUY:"Qúy 1 - 2022"
        }
      ]
    };
  }
  render() {
    const { data,dv_tt } = this.state;
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
          <th>NGÂN HÀNG HỢP TÁC</th>
          <p></p>
          <Col>
            <table className="table table-bordered">
              <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Ngân hàng</th>
                <th scope="col">Quý</th>
              </tr>
              </thead>
              <tbody className="table-group-divider">
              {
                data.map((val,index) => (
                <tr className="last_tr">
                <th scope="row">{index + 1}</th>
                <td align="left">{val.NGANHANG}</td>
                <td>{val.QUY}</td>
                </tr>
                ))
              }
              </tbody>
            </table>
          </Col>
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
                dv_tt.map((val,index) => (
                  <tr className="last_tr">
                    <th scope="row">{index + 1}</th>
                    <td>{val.SOLUONGDVCNTT}</td>
                    <td>{val.QUY}</td>
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
