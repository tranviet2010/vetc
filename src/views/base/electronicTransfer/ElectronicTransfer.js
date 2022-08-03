import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';
import DetailElectronicTransfer from "./DetailElectronicTransfer";

import '../RegisterCustom/style.css';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";
import "./style.css";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
         MAGD: "460",
         SOTKVI: "21072022030711",
         CHUTKVI: "Vũ Lan Anh",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "107006xxxx4141",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "107870081921",
         CHUTKNHAN: "Nguyen Thi Nga",
         SOTIEN: "250.000",
         PHI: "0",
         NGAYGD: "28/07/2022 14:16",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "480",
         SOTKVI: "21072022010724",
         CHUTKVI: "Hoàng Minh Tiến",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "106870xxxx1959",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "106870081922",
         CHUTKNHAN: "Nguyen Thi My Hanh",
         SOTIEN: "91.000",
         PHI: "0",
         NGAYGD: "28/07/2022 14:15",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "488",
         SOTKVI: "21072022010724",
         CHUTKVI: "Hoàng Minh Tiến",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "106870xxxx1959",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "106870081922",
         CHUTKNHAN: "Nguyen Thi My Hanh",
         SOTIEN: "91.000",
         PHI: "0",
         NGAYGD: "28/07/2022 14:11",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "494",
         SOTKVI: "21072022030738",
         CHUTKVI: "Nguyễn Thị Mỹ Hạnh",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "106870xxxx1922",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "107870081921",
         CHUTKNHAN: "Nguyen Thi Nga",
         SOTIEN: "91.000",
         PHI: "0",
         NGAYGD: "28/07/2022 13:39",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "495",
         SOTKVI: "21072022010724",
         CHUTKVI: "Hoàng Minh Tiến",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "106870xxxx1959",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "106870081922",
         CHUTKNHAN: "Nguyen Thi My Hanh",
         SOTIEN: "91.000",
         PHI: "0",
         NGAYGD: "28/07/2022 12:01",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "496",
         SOTKVI: "21072022030711",
         CHUTKVI: "Vũ Lan Anh",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "107006xxxx4141",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "107870081921",
         CHUTKNHAN: "Nguyen Thi Nga",
         SOTIEN: "250.000",
         PHI: "0",
         NGAYGD: "28/07/2022 11:59",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "497",
         SOTKVI: "21072022010724",
         CHUTKVI: "Hoàng Minh Tiến",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "106870xxxx1959",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "106870081922",
         CHUTKNHAN: "Nguyen Thi My Hanh",
         SOTIEN: "91.000",
         PHI: "0",
         NGAYGD: "28/07/2022 11:51",
         TRANGTHAIGD: "Đang xử lý"
        },
        {
         MAGD: "498",
         SOTKVI: "21072022030738",
         CHUTKVI: "Nguyễn Thị Mỹ Hạnh",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "106870xxxx1922",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "107870081921",
         CHUTKNHAN: "Nguyen Thi Nga",
         SOTIEN: "500.000",
         PHI: "3000",
         NGAYGD: "28/07/2022 11:50",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "499",
         SOTKVI: "21072022010724",
         CHUTKVI: "Hoàng Minh Tiến",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "106870xxxx1959",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "106870081922",
         CHUTKNHAN: "Nguyen Thi My Hanh",
         SOTIEN: "50.000",
         PHI: "0",
         NGAYGD: "28/07/2022 11:42",
         TRANGTHAIGD: "Thành công"
        },
        {
         MAGD: "500",
         SOTKVI: "21072022030711",
         CHUTKVI: "Vũ Lan Anh",
         NHCHUYEN: "Ngân hàng VietinBank (VTB)",
         SOTKCHUYEN: "107006xxxx4141",
         NHNHAN: "Ngân hàng VietinBank (VTB)",
         STKNHAN: "107870081921",
         CHUTKNHAN: "Nguyen Thi Nga",
         SOTIEN: "250.000",
         PHI: "0",
         NGAYGD: "28/07/2022 11:42",
         TRANGTHAIGD: "Thành công"
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
                  <b>Danh sách giao dịch chuyển tiền điện tử</b>
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
              </select>
            </Col>
              <Col>
                <Button variant="success" style={{ color: "#fff", float:"right", marginRight:"-10px"}} >
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
                  <th scope="col">Số TK ví</th>
                  <th scope="col">Chủ tài khoản ví</th>
                  <th scope="col">Ngân hàng chuyển</th>
                  <th scope="col">Số TK/thẻ chuyển</th>
                  <th scope="col">Ngân hàng nhận</th>
                  <th scope="col">Số TK/thẻ nhận</th>
                  <th scope="col">Chủ tài khoản nhận</th>
                  <th scope="col">Số tiền</th>
                  <th scope="col">Phí</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col">Ngày giao dịch</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Tác vụ</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {
                  data.map((val, index) => (
                    <tr className="last_tr" >
                      <th scope="row">{index + 1}</th>
                      <td>{val.MAGD}</td>
                      <td>{val.SOTKVI}</td>
                      <td>{val.CHUTKVI}</td>
                      <td>{val.NHCHUYEN}</td>
                      <td>{val.SOTKCHUYEN}</td>
                      <td>{val.NHNHAN}</td>
                      <td>{val.STKNHAN}</td>
                      <td>{val.CHUTKNHAN}</td>
                      <td>{val.SOTIEN}</td>
                      <td>{val.PHI}</td>
                      <td>{val.SOTIEN}</td>
                      <td>{val.NGAYGD}</td>
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
          {this.state.checkDetail == true ? <DetailElectronicTransfer Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}

        </div>
      )
  }
}
