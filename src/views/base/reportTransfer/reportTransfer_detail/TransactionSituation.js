import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";

export default class transactionSituation extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {thang:"Tháng 1",soluong:300,giatri:"120.000.000",notsoluong:5,notgiatri:"100.000"},
        {thang:"Tháng 2",soluong:450,giatri:"200.000.000",notsoluong:15,notgiatri:"1.000.000"},
        {thang:"Tháng 3",soluong:550,giatri:"500.000.000",notsoluong:10,notgiatri:"800.000"},
      ],
    };
  }
  handleEdit=()=>{

  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <Col>
          <b>Tình hình giao dịch</b>
          <p></p>
        </Col>
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
          <Col>
            <Button variant="success" style={{ color: "#fff", float:"right", marginRight:"-210px"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <p></p>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tháng</th>
              <th scope="col" colSpan="2">Giao dịch xử lý thành công</th>
              <th scope="col" colSpan="2">Giao dịch xử lý không thành công</th>
            </tr>
            </thead>
            <thead className="table-group-bordered">
            <tr className="last_right">
              <td></td>
              <td></td>
              <td>Số lượng</td>
              <td>Giá trị</td>
              <td>Số lượng</td>
              <td>Giá trị</td>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val,index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.thang}</td>
                  <td>{val.soluong}</td>
                  <td align={"right"}>{val.giatri}</td>
                  <td>{val.notsoluong}</td>
                  <td align={"right"}>{val.notgiatri}</td>
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
