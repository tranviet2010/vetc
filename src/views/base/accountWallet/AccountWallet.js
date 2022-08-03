import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';
import {color} from "chart.js/helpers";
import AddWallet from "./AddWallet";
import UpdateWallet from "./UpdateWallet";
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilNoteAdd, cilPlus, cilSearch} from "@coreui/icons";

export default class AccountWallet extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          SOTK_VI: "220801xxxx0290",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "29/07/2022 17:45",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220802xxxx0039",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "29/07/2022 13:00",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220731xxxx1002",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "28/07/2022 12:45",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220733xxxx4900",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "28/07/2022 12:01",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220703xxxx4000",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "26/07/2022 11:50",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220783xxxx1200",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "26/07/2022 11:09",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220798xxxx1191",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "26/07/2022 11:05",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220707xxxx4999",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "25/07/2022 11:00",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        },
        {
          SOTK_VI: "220709xxxx1900",
          TOCHUCPHATHANH: "Ngân hàng TMCP ngoại thương Việt Nam ",
          NGAYAPDUNG: "24/07/2022 10:00",
          DOITUONGAPDUNG: "Hệ thống ",
          HINHTHUCXULI: "Chặn giao dịch ",
          TKTAO: "Test Nhân viên ",
          TRANGTHAI: "Hiệu lực "
        }
       ],
      checkDetail: false,
      addWallet: false,
      dataCheck: [],

    };
  }
  updateClick = (t) => {
    this.setState({
      checkDetail: true,
      dataCheck: t
    })
  }
  addWallet = () => {
    this.setState({
      addWallet: true
    })
  }
  onSelectModal = () => {
    this.setState({
      addWallet: false,
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
              <b>Danh sách tài khoản/ví điện tử hạn chế</b>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs = "2">
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Số tài khoản ví" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col xs = "2">
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Tổ chức phát hành</option>
              <option value="1">a</option>
              <option value="2">b</option>
            </select>
          </Col>
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
            <Button variant="success" style={{ color: "#fff", float:"right"}} onClick={this.addWallet} >
              <CIcon icon={cilPlus} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Thêm mới</Button>
          </Col>
        </Row>
          <Row>
            <Col xs = "2">
              <select className="form-select" aria-label="Default select example">
                <option selected disabled="disabled">Hình thức xử lý</option>
                <option value="1">Chặn giao dịch</option>
                <option value="2">Cảnh báo rủi ro</option>
              </select>
            </Col>
            <Col xs = "2">
              <select className="form-select" aria-label="Default select example">
                <option selected disabled="disabled">Trạng thái</option>
                <option value="1">Hiệu lực</option>
                <option value="2">Không hiệu lực</option>
              </select>
            </Col>
            <Col >
              <Button variant="success" style={{ color: "#fff", float:"right", marginRight:"-48px"}} >
                <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
            </Col>
            <Col xs = "2">
              <Button variant="success" className="color_white" style={{float:"right"}}>
                <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
            </Col>
          </Row>
        <br/>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Số tài khoản/ví</th>
              <th scope="col">Tổ chức phát hành</th>
              <th scope="col">Ngày áp dụng</th>
              <th scope="col">Đối tượng áp dụng</th>
              <th scope="col">Hình thức xử lý</th>
              <th scope="col">Tài khoản tạo</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Tác vụ</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.SOTK_VI}</td>
                  <td>{val.TOCHUCPHATHANH}</td>
                  <td>{val.NGAYAPDUNG}</td>
                  <td>{val.DOITUONGAPDUNG}</td>
                  <td>{val.HINHTHUCXULI}</td>
                  <td>{val.TKTAO}</td>
                  <td><td className="status">Hiệu lực</td></td>
                  <td onClick={() => this.updateClick(val)}>...</td>
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
        {this.state.checkDetail == true ? <UpdateWallet Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}
        {this.state.addWallet == true ? <AddWallet onSelectModal={this.onSelectModal} /> : ""}

      </div>
    )
  }
}
