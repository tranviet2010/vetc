import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import DetailTransferMoney from "./DetailTransferMoney";
import "./styleTransfer.css";
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";




export default class transferMoney extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {maGd: "2021123456789", numberAccountOfTransferWallet: "", numberAccountOfRecceivingWallet: "", date: "07/12/2022 10:12", money: "100.000",fee:"1.000", totalMoney: "101.000",status: "Thành công" },
        {maGd: "2021987654321", numberAccountOfTransferWallet: "", numberAccountOfRecceivingWallet: "", date: "07/12/2022 11:12", money: "50.000.000",fee:"2.000", totalMoney: "50.002.000",status: "Thất bại" },
      ],
      numberAccountOfTransferWallet: "",
      checkDetailTransfer:false,
      dataCheckDetailTransfer:[],

    };
  }

  handleClickDetailTransfer=(t)=>{
    this.setState({
      checkDetailTransfer:true,
      dataCheckDetailTransfer:t
    })
  }
  checkCloseModal=()=>{
    this.setState({
      checkDetailTransfer:false
    })
  }


  componentDidMount(){

  }
  render() {
    const { data, dataCheckDetailTransfer } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch chuyển tiền</b>
            </Col>

          </Row>
        </div>
        <Row>
          <Col xs = "2">
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Từ ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col xs = "2">
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Đến ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Mã GD" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Số TK ví chuyển" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Số TK ví nhận" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff", float:"left", paddingRight:"20px", marginLeft:"10px"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"left", paddingRight:"20px"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <Col xs = "2">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Trạng thái</option>
              <option value="1">Thành công</option>
              <option value="2">Thất bại</option>
              <option value="3">Đang xử lý</option>
              <option value="4">Timeout</option>
            </select>
          </Col>
        </Row>
        <br/>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Mã GD</th>
              <th scope="col">Số TK ví chuyển</th>
              <th scope="col">Số TK ví nhận</th>
              <th scope="col">Ngày GD</th>
              <th scope="col">Số tiền</th>
              <th scope="col">Phí</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr" >
                  <th scope="row">{index + 1}</th>
                  <td>{val.maGd}</td>
                  <td>{val.numberAccountOfTransferWallet}</td>
                  <td>{val.numberAccountOfRecceivingWallet}</td>
                  <td>{val.date}</td>
                  <td className="number">{val.money}</td>
                  <td className="number">{val.fee}</td>
                  <td className="number">{val.totalMoney}</td>
                  <td>{val.status}</td>
                  <td >
                    <button onClick={()=>this.handleClickDetailTransfer(val)} className="button_chi_tiet">Xem chi tiết</button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Row>
        <Row>
          <Col className='d-flex'>
            <span>Xem</span>
            <select className='add_option'>
              <option selected>10</option>
              <option value="1">20</option>
              <option value="2">30</option>
              <option value="3">50</option>
              <option value="4">100</option>
            </select>
            <span> trên tổng số {data.length} bản ghi</span>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />

              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>

              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
        {this.state.checkDetailTransfer==true?<DetailTransferMoney Data={dataCheckDetailTransfer} checkCloseModal={this.checkCloseModal}/>:''}
      </div>
    )
  }
}
