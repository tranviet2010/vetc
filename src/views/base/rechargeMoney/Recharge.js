import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import DetailRecharge from "./DetailRecharge";

import './styleRecharge.css';

export default class recharge extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {maGd: "", numberAccountOfWallet: "", money: "100.000", bank: "Vietcombank", numberAccountOfBank: "123456xxxxxx1234",status:"", time: "" },
        {maGd: "", numberAccountOfWallet: "", money: "50.000.000", bank: "Techcombank", numberAccountOfBank: "",status:"", time: ""  },
      ],
      numberAccountOfWallet: "",
      checkDetailRecharge:false,
      dataCheckDetailRecharge:[],

    };
  }

  handleClickDetailRecharge=(t)=>{
    this.setState({
      checkDetailRecharge:true,
      dataCheckDetailRecharge:t
    })
  }
  checkCloseModal=()=>{
    this.setState({
      checkDetailRecharge:false
    })
  }


  componentDidMount(){

  }
  render() {
    const { data, dataCheckDetailRecharge } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch nạp tiền</b>
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
              <option selected>Trạng thái</option>
              <option value="1">Thành công</option>
              <option value="2">Thất bại</option>
              <option value="3">Đang xử lý</option>
              <option value="4">Timeout</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Ngân hàng liên kết</option>
              <option value="1">Vietcombank</option>
              <option value="2">BIDV</option>
              <option value="3">Techcombank</option>
              <option value="4">Viettinbank</option>
            </select>
          </Col>

          <Col>
            <Button variant="success" style={{ color: "#fff" }} className="button_flex">Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white button_flex">Xuất excel</Button>
          </Col>

        </Row>
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
              <th scope="col">Hành động</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.maGd}</td>
                  <td>{val.numberAccountOfWallet}</td>
                  <td>{val.money}</td>
                  <td>{val.bank}</td>
                  <td>{val.numberAccountOfBank}</td>
                  <td>{val.status}</td>
                  <td>{val.time}</td>
                  <td href="#" onClick={()=>this.handleClickDetailRecharge(val)}>Chi tiết nạp tiền</td>
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
              <option value="1">10</option>
              <option value="2">20</option>
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
        {this.state.checkDetailRecharge==true?<DetailRecharge Data={dataCheckDetailRecharge} checkCloseModal={this.checkCloseModal}/>:''}
      </div>
    )
  }
}
