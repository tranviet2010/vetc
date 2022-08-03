import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';
import '../RegisterCustom/style.css';
import DetailCollectPay from "./DetailCollectPay";
import CIcon from "@coreui/icons-react";
import { cilDataTransferDown, cilSearch } from "@coreui/icons";
import "./style.css";
import callApi from "src/api/config";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
         MAGD: "734",
         MAKH: "0930490202",
         SOTIEN: "50.000",
         HOTEN: "Nguyễn Lan Anh",
         TKVI: "21072022030710",
         LOAIGD: "Thu hộ",
         PHI: "0",
         TRANGTHAI: "Thành công",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 14:16"
        },
        {
         MAGD: "736",
         MAKH: "0375250327",
         SOTIEN: "30.000",
         HOTEN: "Nguyễn Ngọc Minh ",
         TKVI: "21072022030709",
         LOAIGD: "Chi hộ",
         PHI: "0",
         TRANGTHAI: "Đang Xử Lý",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 14:15"
        },
        {
         MAGD: "738",
         MAKH: "0879989548",
         SOTIEN: "20.000",
         HOTEN: "Nguyễn Văn Cừ ",
         TKVI: "21072022030711",
         LOAIGD: "Thu hộ",
         PHI: "0",
         TRANGTHAI: "Thành Công",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 14:11"
        },
        {
         MAGD: "739",
         MAKH: "0433529423",
         SOTIEN: "30.000",
         HOTEN: "Nguyễn Văn Nam ",
         TKVI: "21072022030709",
         LOAIGD: "Thu hộ",
         PHI: "0",
         TRANGTHAI: "Đang Xử Lý",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 13:39"
        },
        {
         MAGD: "740",
         MAKH: "0835979981",
         SOTIEN: "20.000",
         HOTEN: "Lê Thị Hoa",
         TKVI: "21072022030711",
         LOAIGD: "Thu hộ",
         PHI: "0",
         TRANGTHAI: "Đang Xử Lý",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 12:01"
        },
        {
         MAGD: "741",
         MAKH: "0935979901",
         SOTIEN: "100.000",
         HOTEN: "Đỗ Minh Hùng ",
         TKVI: "21072022030738",
         LOAIGD: "Thu hộ",
         PHI: "0",
         TRANGTHAI: "Đang Xử Lý",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 11:59"
        },
        {
         MAGD: "742",
         MAKH: "0355979950",
         SOTIEN: "20.000",
         HOTEN: "Đỗ Văn Bách ",
         TKVI: "21072022030711",
         LOAIGD: "Thu hộ",
         PHI: "0",
         TRANGTHAI: "Thành công",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 11:51"
        },
        {
         MAGD: "743",
         MAKH: "0945979981",
         SOTIEN: "100.000",
         HOTEN: "Trần Thùy Dương ",
         TKVI: "21072022030738",
         LOAIGD: "Thu hộ",
         PHI: "0",
         TRANGTHAI: "Thành công",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 11:50"
        },
        {
         MAGD: "744",
         MAKH: "0435977921",
         SOTIEN: "50.000",
         HOTEN: "Đỗ Văn Khánh ",
         TKVI: "21072022030713",
         LOAIGD: "Chi hộ",
         PHI: "0",
         TRANGTHAI: "Thành công",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 11:42"
        },
        {
         MAGD: "745",
         MAKH: "0845979981",
         SOTIEN: "50.000",
         HOTEN: "Đặng Tiến Hưng ",
         TKVI: "21072022030713",
         LOAIGD: "Chi hộ",
         PHI: "0",
         TRANGTHAI: "Đang Xử Lý",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "28/07/2022 11:42"
        },
        {
         MAGD: "746",
         MAKH: "0926941200",
         SOTIEN: "30.000",
         HOTEN: "Nguyễn Thị Diệu Linh ",
         TKVI: "21072022030709",
         LOAIGD: "Chi hộ",
         PHI: "0",
         TRANGTHAI: "Đang Xử Lý",
         NHA_CC: "Điện Hà Nội",
         NGAYGD: "27/07/2022 15:02"
        }
       ],
      phone: "",
      checkDetail: false,
      addCus: false,
      dataCheck: [],
      ma_gd: "",
      totalCount: "",
      page: 10

    };
  }
  handleClick = (t) => {
    this.setState({
      checkDetail: true,
      dataCheck: t
    })
  }
  addCustom = () => {
    this.setState({
      addCus: true
    })
  }
  handleChange = (event) => {
    console.log("abcc", event)
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    })

  }
  onSelectModal = () => {
    this.setState({
      addCus: false,
      checkDetail: false,
    })
    this.componentDidMount();
  }
  searchParam = () => {
    const { data, ma_gd } = this.state;
    let dataSearch = data.filter((val, index) => (
      val.MAGD == ma_gd
    ))
    // console.log("dataSearch",dataSearch)
    this.setState({
      data: dataSearch
    })
  }
  panigationHandle = (e) => {
    let indexPani = e.target.value

    callApi(`customer-views?limit=${indexPani}`).then((res) => {
      this.setState({
        data: res.data.data,
        totalCount: res.data.totalCount,
        page: indexPani
      })
    })
  }

  componentDidMount() {


  }


  render() {
    const { data, dataCheck, totalCount } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch thu hộ chi hộ</b>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs="2">
            <div className="input-group">
              <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col xs="2">
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="phone" className="form-control" onChange={this.handleChange} placeholder="Mã GD" name="ma_gd" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Mã KH" aria-label="Username" aria-describedby="basic-addon1" />
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
            <Button variant="success" style={{ color: "#fff", float: "right", marginRight: "-15px" }} onClick={this.searchParam}>
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{ width: "20px", height: "20px" }} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{ float: "right", paddingRight: "10px" }}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{ width: "20px", height: "20px" }} /> Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="2">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled" >Loại giao dịch</option>
              <option value="1">Thu hộ</option>
              <option value="2">Chi hộ</option>
            </select>
          </Col>
          <Col xs="2">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Nhà cung cấp</option>
              <option value="1">Điện hà nội</option>
            </select>
          </Col>
        </Row>
        <br />
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã GD</th>
                <th scope="col">Loại GD</th>
                <th scope="col">Mã KH</th>
                <th scope="col">Số tiền</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Nhà cung cấp</th>
                <th scope="col">Ngày GD</th>
                <th scope="col">Tác vụ</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                data.map((val, index) => (
                  <tr className="last_tr" >
                    <th scope="row">{index + 1}</th>
                    <td>{val.MAGD}</td>
                    <td >{val.LOAIGD}</td>
                    <td>{val.MAKH}</td>
                    <td className="number">{val.SOTIEN}</td>
                    <td>{val.TRANGTHAI}</td>
                    <td>{val.NHA_CC}</td>
                    <td>{val.NGAYGD}</td>
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
            <select className='add_option' onChange={this.panigationHandle}>
              <option selected>10</option>
              <option value="1">20</option>
              <option value="2">30</option>
              <option value="3">50</option>
              <option value="4">100</option>
            </select>
            <span> trên tổng số {totalCount} bản ghi</span>
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
        {this.state.checkDetail == true ? <DetailCollectPay Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}

      </div>
    )
  }
}
