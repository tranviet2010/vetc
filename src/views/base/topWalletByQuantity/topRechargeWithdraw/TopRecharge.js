import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import "../style.css";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

export default class topRecharge extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {},
        {},
        {},
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
          <b>Top 10 ví điện tử</b>
        </Col>
        <br/>
        <Row>
          <Col xs="2" style={{width:"10%"}}>Loại báo cáo:</Col>
          <Col xs="2" className="fix-col" >
            <select className="form-select" aria-label="Default select example">
              <option selected>Số lượng giao dịch</option>
              <option value="1">Giá trị giao dịch</option>
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
          <Col xs = "2" style={{width:"10%"}}>Đối tượng:</Col>
          <Col xs = "3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Khách hàng cá nhân</option>
              <option value="1">Khách hàng tổ chức</option>
              <option value="2">Khách hàng ĐVCNTT</option>
            </select>
          </Col>

        </Row>
        <Row>
          <Col xs="2" style={{width:"10%"}}>Loại giao dịch:</Col>
          <Col xs="2" >
            <select className="form-select" aria-label="Default select example">
              <option selected>Nạp tiền</option>
            </select>
          </Col>
          <Col xs = "2" style={{width:"10%"}}>Ngân hàng:</Col>
          <Col xs = "2" >
            <select className="form-select" aria-label="Default select example">
              <option selected>Vietinbank</option>
              <option value="1">Techcombank</option>
              <option value="2">BIDV</option>
            </select>
          </Col>
          <Col xs = "4">
            <Button variant="success" style={{ color: "#fff",float:"right"}} >
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
              <th scope="col">Mã ví</th>
              <th scope="col">Tên KH</th>
              <th scope="col">Số dư đầu kỳ</th>
              <th scope="col">Số lượng giao dịch</th>
              <th scope="col">Giá trị giao dịch</th>
            </tr>
            </thead>


            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td className="text">0917</td>
                  <td className="text">Nguyễn A</td>
                  <td className="number">0</td>
                  <td className="number">10.000.000</td>
                  <td></td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Row>
        <Col className='d-flex'>
          <span>Số lượng bản ghi </span>
          <select className='add_option'>
            <option selected> {data.length}</option>
          </select>
        </Col>
      </div>

    )
  }
}
