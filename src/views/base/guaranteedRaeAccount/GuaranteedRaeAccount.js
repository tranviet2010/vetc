import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';
import '../RegisterCustom/style.css';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilDescription, cilLoop, cilReload, cilSearch} from "@coreui/icons";
import Settlement from "../guaranteedAccount/Settlement";
import SettlementRea from "./SettlementRea";

export default class guaranteedAccount extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          NGAY: "29/07/2022 17:45",
          SOTK: "107870081928",
          LOAI: "THU",
          TENTK: "NGUYEN THI MY HANH",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "200.000.000",
          TONGSDTKDBTAINGANHANG: "280.000.000"
        },
        {
          NGAY: "29/07/2022 13:00",
          SOTK: "107870081938",
          LOAI: "THU",
          TENTK: "NGUYEN THI NGA",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "40.000.000",
          TONGSDTKDBTAINGANHANG: "120.000.000"
        },
        {
          NGAY: "28/07/2022 12:45",
          SOTK: "107870081939",
          LOAI: "CHI",
          TENTK: "VU MANH HUNG",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "100.000.000",
          TONGSDTKDBTAINGANHANG: "180.000.000"
        },
        {
          NGAY: "28/07/2022 12:01",
          SOTK: "107870081940",
          LOAI: "THU",
          TENTK: "HOANG MINH TIEN",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "120.000.000",
          TONGSDTKDBTAINGANHANG: "200.000.000"
        },
        {
          NGAY: "26/07/2022 11:50",
          SOTK: "107870081929",
          LOAI: "CHI",
          TENTK: "NGUYEN THI NGA",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "30.000.000",
          TONGSDTKDBTAINGANHANG: "110.000.000"
        },
        {
          NGAY: "26/07/2022 11:09",
          SOTK: "107870081930",
          LOAI: "THU",
          TENTK: "NGUYEN THI LAN ANH ",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "400.000.000",
          TONGSDTKDBTAINGANHANG: "480.000.000"
        },
        {
          NGAY: "26/07/2022 11:05",
          SOTK: "107870081931",
          LOAI: "THU",
          TENTK: "LE THI HOA",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "247.000.000",
          TONGSDTKDBTAINGANHANG: "327.000.000"
        },
        {
          NGAY: "25/07/2022 11:00",
          SOTK: "107870081932",
          LOAI: "CHI",
          TENTK: "NGUYEN THI NHUNG",
          NGANHANG: "Vietinbank",
          TONGTHUCHIHO: "100.000.000",
          TONGSDTKDBTAINGANHANG: "180.000.000"
        }
       ],
      phone: "",
      checkDetail: false,
      dataCheck: [],
      settlementRea: false,

    };
  }
  settlementRae = () => {
    this.setState({
      settlementRae: true
    })
  }
  onSelectModal = () => {
    this.setState({
      settlementRae: false,
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
              <b>Danh sách tài khoản đảm bảo thu - chi hộ</b>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs = "3">
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Số tài khoản đảm bảo" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col xs = "3">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Ngân hàng liên kết</option>
              <option value="1">Vietinbank</option>
              <option value="2">VP bank</option>
              <option value="3">BIDV</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right"}}>
              <CIcon icon={cilReload} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Làm mới</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right", marginRight:"-10px"}} onClick={this.settlementRae}>
              <CIcon icon={cilDescription} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Quyết toán</Button>
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
        <p></p>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ngày</th>
              <th scope="col">Số tài khoản</th>
              <th scope="col">Loại</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Ngân hàng</th>
              <th scope="col">Tổng thu hộ/chi hộ</th>
              <th scope="col">Tổng số dư TKĐB tại NH</th>
              <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.NGAY}</td>
                  <td>{val.SOTK}</td>
                  <td>{val.LOAI}</td>
                  <td align={"left"}>{val.TENTK}</td>
                  <td>{val.NGANHANG}</td>
                  <td align={"right"}>{val.TONGTHUCHIHO}</td>
                  <td align={"right"}>{val.TONGSDTKDBTAINGANHANG}</td>
                  <td>
                    <CIcon icon={cilLoop} customClassName="nav-icon" style={{width:"20px", height:"20px"}} />
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
        {this.state.settlementRae == true ? <SettlementRea Data={data} onSelectModal={this.onSelectModal} /> : ""}

      </div>
    )
  }
}

