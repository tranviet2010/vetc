import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import "./style.css";
import {cilDataTransferDown, cilExpandDown, cilNotes, cilSearch} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

export default class reportTwoParty extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {
          STT: 1,
          MAVI: 348,
          TENKH: "Vũ Mạnh Hùng",
          SODUDAUKI: "20.000.000",
          SODUCUOIKI: "30.000.000",
          SLGD: 20,
          GTGD: "10.000.000"
        },
        {
          STT: 2,
          MAVI: 350,
          TENKH: "Vũ lan anh",
          SODUDAUKI: "15.000.000",
          SODUCUOIKI: "27.000.000",
          SLGD: 17,
          GTGD: "12.000.000"
        },
        {
          STT: 3,
          MAVI: 351,
          TENKH: "Nguyễn Thị Ngà",
          SODUDAUKI: "13.000.000",
          SODUCUOIKI: "18.000.000",
          SLGD: 15,
          GTGD: "5.000.000"
        },
        {
          STT: 4,
          MAVI: 352,
          TENKH: "Nguyễn Kim Nga",
          SODUDAUKI: "10.000.000",
          SODUCUOIKI: "15.000.000",
          SLGD: 10,
          GTGD: "5.000.000"
        },
        {
          STT: 5,
          MAVI: 353,
          TENKH: "Đỗ Mạnh Cường",
          SODUDAUKI: "8.000.000",
          SODUCUOIKI: "12.000.000",
          SLGD: 6,
          GTGD: "4.000.000"
        },
        {
          STT: 6,
          MAVI: 354,
          TENKH: "Lê Tuyết Linh",
          SODUDAUKI: "5.000.000",
          SODUCUOIKI: "9.000.000",
          SLGD: 4,
          GTGD: "4.000.000"
        },
        {
          STT: 7,
          MAVI: 355,
          TENKH: "Nguyễn Hữu Hà ",
          SODUDAUKI: "2.000.000",
          SODUCUOIKI: "3.000.000",
          SLGD: 2,
          GTGD: "1.000.000"
        },
        {
          STT: 8,
          MAVI: 356,
          TENKH: "Ngô Thị Ngọc ",
          SODUDAUKI: 0,
          SODUCUOIKI: "1.000.000",
          SLGD: 2,
          GTGD: "1.000.000"
        }
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
          <Col xs = "3" >
            <select className="form-select" aria-label="Default select example">
              <option selected>Khách hàng cá nhân</option>
              <option value="1">Khách hàng tổ chức</option>
              <option value="2">Khách hàng ĐVCNTT</option>
            </select>
          </Col>

        </Row>
        <Row>
          <Col xs="2" style={{width:"10%"}}>Loại giao dịch:</Col>
          <Col xs="2">
            <select className="form-select" aria-label="Default select example">
              <option selected>Tất cả</option>
              <option value="1">Nạp tiền</option>
              <option value="2">Rút tiền</option>
            </select>
          </Col>
          <Col xs = "7">
            <Button variant="success" style={{ color: "#fff",float:"right", marginRight:"-20px"}} >
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
              <th scope="col">Số dư cuối kỳ</th>
              <th scope="col">Số lượng giao dịch</th>
              <th scope="col">Giá trị giao dịch</th>
            </tr>
            </thead>


            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.MAVI}</td>
                  <td align={"left"}>{val.TENKH}</td>
                  <td align={"right"}>{val.SODUDAUKI}</td>
                  <td align={"right"}>{val.SODUCUOIKI}</td>
                  <td >{val.SLGD}</td>
                  <td align={"right"}>{val.GTGD}</td>
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
