import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import DetailWithdrawMoney from "./DetailWithdrawMoney";

import './styleWithdraw.css';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";

export default class withdrawMoney extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {maGd: "", numberAccountOfWallet: "", money: "100.000", bank: "Vietcombank", numberAccountOfBank: "123456xxxxxx1234",status:"", time: "" },
        {maGd: "", numberAccountOfWallet: "", money: "50.000.000", bank: "Techcombank", numberAccountOfBank: "",status:"", time: ""  },
      ],
      numberAccountOfWallet: "",
      checkDetailWithdraw:false,
      dataCheckDetailWithdraw:[],

    };
  }

  handleClickDetailWithdraw=(t)=>{
    this.setState({
      checkDetailWithdraw:true,
      dataCheckDetailWithdraw:t
    })
  }
  checkCloseModal=()=>{
    this.setState({
      checkDetailWithdraw:false
    })
  }


  componentDidMount(){

  }
  render() {
    const { data, dataCheckDetailWithdraw } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch rút tiền</b>
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
              <input type="text" className="form-control" placeholder="Số tài khoản ví" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>

          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Trạng thái</option>
              <option value="1">Thành công</option>
              <option value="2">Thất bại</option>
              <option value="3">Đang xử lý</option>
              <option value="4">Timeout</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff", float: "left", paddingRight:"20px", marginLeft:"10px"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float :"left", paddingRight:"20px"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <Col xs = "2">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Ngân hàng liên kết</option>
              <option value="1">Vietcombank</option>
              <option value="2">BIDV</option>
              <option value="3">Techcombank</option>
              <option value="4">Viettinbank</option>
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
              <th scope="col">Số TK ví</th>
              <th scope="col">Số tiền</th>
              <th scope="col">Ngân hàng</th>
              <th scope="col">Số TK/Thẻ</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Ngày giao dịch</th>
              <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.maGd}</td>
                  <td>{val.numberAccountOfWallet}</td>
                  <td className="number">{val.money}</td>
                  <td className="text">{val.bank}</td>
                  <td>{val.numberAccountOfBank}</td>
                  <td className="text">{val.status}</td>
                  <td>{val.time}</td>
                  <td >
                    <button onClick={()=>this.handleClickDetailWithdraw(val)} className="button_chi_tiet">Xem chi tiết</button>
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
        {this.state.checkDetailWithdraw==true?<DetailWithdrawMoney Data={dataCheckDetailWithdraw} checkCloseModal={this.checkCloseModal}/>:''}
      </div>
    )
  }
}
