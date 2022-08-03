import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";

export default class transactionSituation extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {thang:"Tháng 1",soluong:300,giatri:"120,000,000",notsoluong:5,notgiatri:"100,000"},
        {thang:"Tháng 2",soluong:450,giatri:"200,000,000",notsoluong:15,notgiatri:"1,000,000"},
        {thang:"Tháng 3",soluong:550,giatri:"500,000,000",notsoluong:10,notgiatri:"800,000"},
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
          <b>Báo cáo tình hình giao dịch ví</b>
          <p></p>
        </Col>
        <Row>
          <Col xs = "1">Quý:</Col>
          <Col style={{marginLeft:"-40px"}}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Quý 1</option>
              <option value="1">Quý 2</option>
              <option value="2">Quý 3</option>
              <option value="3">Quý 4</option>
            </select>
          </Col>
          <Col xs = "1">Năm:</Col>
          <Col style={{marginLeft:"-40px"}}>
            <select className="form-select" aria-label="Default select example">
              <option selected>2021</option>
              <option value="1">2022</option>
            </select>
          </Col>
          <Col>Loại báo cáo:</Col>
          <Col xs = "3" style={{marginLeft:"-50px"}}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Giao dịch toàn hệ thông</option>
              <option value="1">Giao dịch của KH tổ chức</option>
              <option value="2">Giao dịch của KH cá nhân</option>
              <option value="3">Giao dịch của ĐVCNTT</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff", float:"right"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <p></p>
          <th>GIAO DỊCH TOÀN HỆ THỐNG</th>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tháng</th>
              <th scope="col" colSpan="2">Giao dịch xử lý thành công</th>
              <th scope="col" colSpan="2">Giao dịch xử lý không thành công</th>
              <th scope="col" colSpan="2">Giao dịch thanh toán, chuyển tiền bằng VĐT</th>
              <th scope="col" colSpan="2">Giao dịch nạp tiền vào VĐT</th>
              <th scope="col" colSpan="2">Giao dịch rút tiền VĐT</th>
              <th scope="col" colSpan="2">Giao dịch trong ngày cao điểm</th>
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
              <td>Số lượng</td>
              <td>Giá trị</td>
              <td>Số lượng</td>
              <td>Giá trị</td>
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
                  <td></td>
                  <td></td>
                  <td ></td>
                  <td></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            }
            </tbody>
          </table>

        </Row>
        <Row>
          <p></p>
          <th>GIAO DỊCH CỦA KHÁCH HÀNG TỔ CHỨC (KHÔNG BAO GỒM TỔ CHỨC LÀ ĐVCNTT)</th>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tháng</th>
              <th scope="col" colSpan="2">Khách hàng tổ chức</th>
              <th scope="col" colSpan="2">Giao dịch thanh toán, chuyển tiền bằng VĐT</th>
              <th scope="col" colSpan="2">Giao dịch nạp tiền vào VĐT</th>
              <th scope="col" colSpan="2">Giao dịch rút tiền VĐT</th>
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
                  <td></td>
                  <td></td>
                  <td ></td>
                  <td></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                </tr>
              ))
            }
            </tbody>
          </table>

        </Row>
        <Row>
          <p></p>
          <th>GIAO DỊCH CỦA KHÁCH HÀNG CÁ NHÂN (KHÔNG BAO GỒM CÁ NHÂN LÀ ĐVCNTT)</th>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tháng</th>
              <th scope="col" colSpan="2">Giao dịch cá nhân</th>
              <th scope="col" colSpan="2">Giao dịch thanh toán, chuyển tiền bằng VĐT</th>
              <th scope="col" colSpan="2">Giao dịch nạp tiền vào VĐT</th>
              <th scope="col" colSpan="2">Giao dịch rút tiền VĐT</th>
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
                  <td></td>
                  <td></td>
                  <td ></td>
                  <td></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Row>
        <Row>
          <p></p>
          <th>GIAO DỊCH CỦA ĐƠN VỊ CHẤP NHẬN THANH TOÁN</th>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tháng</th>
              <th scope="col" colSpan="2">GD của ĐVCNTT</th>
              <th scope="col" colSpan="2">Giao dịch thanh toán, chuyển tiền bằng VĐT</th>
              <th scope="col" colSpan="2">Giao dịch nạp tiền vào VĐT</th>
              <th scope="col" colSpan="2">Giao dịch rút tiền VĐT</th>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
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
