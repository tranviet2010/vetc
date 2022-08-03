import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';
import DetailPaymentGateway from './DetailPaymentGateway';

import '../RegisterCustom/style.css';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";
import "./style.css";
import { convertDate } from 'src/views/helper/validate';

export default class paymentGateway extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
         MAGD: 463,
         NGAYGD: "29/07/2022 14:01",
         DVCNTT: "Viettel",
         SOTIEN: "10.000",
         MADH: 49381991,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "107006xxxx4141",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 477,
         NGAYGD: "29/07/2022 14:00",
         DVCNTT: "Viettel",
         SOTIEN: "10.000",
         MADH: 49381992,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "106870xxxx1959",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 407,
         NGAYGD: "29/07/2022 13:57",
         DVCNTT: "Viettel",
         SOTIEN: "10.000",
         MADH: 49381993,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "106870xxxx1960",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 408,
         NGAYGD: "29/07/2022 13:56",
         DVCNTT: "Viettel",
         SOTIEN: "2.000.000",
         MADH: 49381994,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "106870xxxx1922",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 411,
         NGAYGD: "29/07/2022 13:55",
         DVCNTT: "Vetc",
         SOTIEN: "10.000",
         MADH: 49381995,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "106870xxxx1709",
         TRANGTHAIGD: "Thất bại "
        },
        {
         MAGD: 412,
         NGAYGD: "29/07/2022 13:41",
         DVCNTT: "Vetc",
         SOTIEN: "100.000",
         MADH: 49381996,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "107006xxxx4142",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 476,
         NGAYGD: "29/07/2022 13:40",
         DVCNTT: "Vetc",
         SOTIEN: "100.000",
         MADH: 49381997,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "106870xxxx1971",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 619,
         NGAYGD: "29/07/2022 13:39",
         DVCNTT: "Vetc",
         SOTIEN: "10.000",
         MADH: 49381998,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "106870xxxx1944",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 815,
         NGAYGD: "29/07/2022 13:37",
         DVCNTT: "Vetc",
         SOTIEN: "2.000.000",
         MADH: 49381999,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "106870xxxx1989",
         TRANGTHAIGD: "Thành công "
        },
        {
         MAGD: 816,
         NGAYGD: "29/07/2022 11:20",
         DVCNTT: "Viettel",
         SOTIEN: "5.000.000",
         MADH: 49382000,
         PHUONGTHUCTT: "Thẻ nội địa",
         TKTHANHTOAN: "107006xxxx4100",
         TRANGTHAIGD: "Thành công "
        }
       ],
      phone: "",
      checkDetail: false,
      dataCheck: [],

    };
  }
  handleClick = (t) => {
    this.setState({
      checkDetail: true,
      dataCheck: t
    })
  }
  onSelectModal = () => {
    this.setState({
      checkDetail: false,
    })
  }
  componentDidMount() {
  }

  render() {
    const { data, dataCheck } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch cổng thanh toán</b>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div className="input-group">
              <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Mã GD" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">ĐVCNTT</option>
              <option value="1">Viettel</option>
              <option value="2">VETC</option>
            </select>
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
            <Button variant="success" style={{ color: "#fff", float:"right", marginRight:"-15px"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right", paddingRight:"5px", marginLeft:"-5px"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Mã GD</th>
              <th scope="col">Thời gian giao dịch</th>
              <th scope="col">ĐVCNTT</th>
              <th scope="col">Số tiền</th>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Phương thức TT</th>
              <th scope="col">Tài khoản TT</th>
              <th scope="col">Trạng thái GD</th>
              <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr" >
                  <th scope="row">{index + 1}</th>
                  <td>{val.MAGD}</td>
                  <td>{val.NGAYGD}</td>
                  <td>{val.DVCNTT}</td>
                  <td align={"right"}>{val.SOTIEN}</td>
                  <td>{val.MADH}</td>
                  <td>{val.PHUONGTHUCTT}</td>
                  <td>{val.TKTHANHTOAN}</td>
                  <td>{val.TRANGTHAIGD}</td>
                  <td >
                    <button onClick={() => this.handleClick(val)} className="button_chi_tiet">Xem chi tiết</button>
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
        {this.state.checkDetail == true ? <DetailPaymentGateway Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}

      </div>
    )
  }
}
