import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import DetailPay from "./DetailPay";

import "./stylePay.css";




export default class pay extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {numberAccountOfWallet: "", maGd: "2021123456789", maHd: "FT000123456789", money: "100.000",status: "Thành công",service: "", supplier:"",  date: "07/12/2022 10:12" },
        {numberAccountOfWallet: "", maGd: "2021987654321", maHd: "FT000198765432", money: "50.000.000",status: "Không thành công",service: "", supplier:"",  date: "07/12/2022 11:12" },
      ],
      numberAccountOfWallet: "",
      checkDetailPay:false,
      dataCheckDetailPay:[],

    };
  }

  handleClickDetailPay=(t)=>{
    this.setState({
      checkDetailPay:true,
      dataCheckDetailPay:t
    })
  }
  checkCloseModal=()=>{
    this.setState({
      checkDetailPay:false
    })
  }


  componentDidMount(){

  }
  render() {
    const { data, dataCheckDetailPay } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch thanh toán</b>
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
              <input type="text" className="form-control" placeholder="Số TK ví" aria-label="Username" aria-describedby="basic-addon1" />
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
              <option selected>Dịch vụ</option>
              <option value="1">Thanh toán qua trạm</option>
              <option value="2">Mua vé tháng</option>
              <option value="3">Nạp tiền điện thoại</option>
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
              <th scope="col">Số tài khoản ví</th>
              <th scope="col">Mã GD</th>
              <th scope="col">Mã hóa đơn</th>
              <th scope="col">Số tiền</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Dịch vụ</th>
              <th scope="col">Nhà cung cấp</th>
              <th scope="col">Ngày GD</th>
              <th scope="col">Hành động</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.numberAccountOfWallet}</td>
                  <td>{val.maGd}</td>
                  <td>{val.maHd}</td>
                  <td>{val.money}</td>
                  <td>{val.status}</td>
                  <td>{val.service}</td>
                  <td>{val.supplier}</td>
                  <td>{val.date}</td>
                  <td href="#" onClick={()=>this.handleClickDetailPay(val)}>Chi tiết thanh toán</td>
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
        {this.state.checkDetailPay==true?<DetailPay Data={dataCheckDetailPay} checkCloseModal={this.checkCloseModal}/>:''}
      </div>
    )
  }
}
