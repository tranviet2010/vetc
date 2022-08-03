import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import CIcon from "@coreui/icons-react";
import { cilApple, cilDataTransferDown, cilSearch } from "@coreui/icons";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import "./style.css";


export default class reportWallet extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          LOAIVI: "Ví điện tử cá nhân",
          DAPHATHANH: 217,
          DAKICHHOAT: 215,
          DANGHOATDONG: 215,
          DALIENKETNH: 6,
          NGAY: "01/08/2022",
          TONGSODUVI: "4.125.720.000"
        },
        {
          LOAIVI: "Ví điện tử KHDN",
          DAPHATHANH: 41,
          DAKICHHOAT: 41,
          DANGHOATDONG: 40,

          DALIENKETNH: 4,
          TONGSODUVI: "200,001,018,000"

        },
        {
          LOAIVI: "Ví điện tử ĐVCNTT",
          DAPHATHANH: 10,
          DAKICHHOAT: 8,
          DANGHOATDONG: 8,

          DALIENKETNH: 2,
          TONGSODUVI: "12,500,000"

        }
      ],
      phone: "",
      checkDetail: false,
      dataCheck: [],
      checkDetailTransaction: false,
      dataCheckDetailTransaction: [],

    };
  }
  downLoad = () => {

  }

  componentDidMount() {

  }
  render() {
    function total(t, c) {
      let sum = 0;
      if (c == 1) {
        for (let i = 0; i < data.length; i++) {
          sum = sum + data[i].DAPHATHANH;
        }
        return sum;
      }
      if (c == 2) {
        for (let i = 0; i < data.length; i++) {
          sum = sum + data[i].DAKICHHOAT;
        }
        return sum;
      }
      if (c == 3) {
        for (let i = 0; i < data.length; i++) {
          sum = sum + data[i].DANGHOATDONG;
        }
        return sum;
      }
      if (c == 4) {
        for (let i = 0; i < data.length; i++) {
          sum = sum + data[i].DALIENKETNH;
        }
        return sum;
      }

    }
    const { data, dataCheck, dataCheckDetailTransaction } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch liên kết ví</b>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs="2">
            <div className="input-group mb-3"  >
              <input type="date" className="form-control" placeholder="Từ ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col xs="2">
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Đến ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col xs="6">
            <Button variant="success" style={{ color: "#fff", float: "right", marginRight: "-70px" }} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{ width: "20px", height: "20px" }} /> Tìm kiếm</Button>
          </Col>
          <Col>
            {/* <Button variant="success" className="color_white" style={{ float: "right" }}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{ width: "20px", height: "20px" }} onClick={this.downLoad} /> Xuất excel</Button> */}

              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="btn btn-success"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText={<CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{ width: "20px", height: "20px" }} /> }
                />
              </Col>

        </Row>
        <Row>
          <table className="table table-bordered" id="table-to-xls">
            <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Loại ví</th>
                <th scope="col">Đã phát hành</th>
                <th scope="col">Đã kích hoạt</th>
                <th scope="col">Đang hoạt động</th>
                <th scope="col">Đã liên kết tài khoản ngân hàng</th>
                <th scope="col">Tổng số dư ví</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                data.map((val, index) => (
                  <tr className="last_tr">
                    <th scope="row">{index + 1}</th>
                    <td className="text">{val.LOAIVI}</td>
                    <td>{val.DAPHATHANH}</td>
                    <td>{val.DAKICHHOAT}</td>
                    <td>{val.DANGHOATDONG}</td>
                    <td>{val.DALIENKETNH}</td>
                    <td className="number">{val.TONGSODUVI}</td>
                  </tr>
                ))
              }
            </tbody>
            <tbody>
              <tr>
                <th></th>
                <th>Tổng</th>
                <td align={"center"}>{total(data, 1)}</td>
                <td align={"center"}>{total(data, 2)}</td>
                <td align={"center"}>{total(data, 3)}</td>
                <td align={"center"}>{total(data, 4)}</td>
                <td align={"right"}>204,139,238,000</td>
              </tr>
            </tbody>
          </table>
        </Row>

        {/*{this.state.checkDetail==true?<DetailWallet Data={dataCheck} checkClose={this.checkClose} />:''}*/}
        {/*{this.state.checkDetailTransaction==true?<DetailTransaction Data={dataCheckDetailTransaction} checkCloseModal={this.checkCloseModal}/>:''}*/}
      </div>
    )
  }
}
