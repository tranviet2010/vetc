import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';
import DetailElectronicTransfer from "./DetailElectronicTransfer";

import '../RegisterCustom/style.css';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {},
        {}
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
                <option selected>Trạng thái</option>
                <option value="1">Thành công</option>
                <option value="2">Thất bại</option>
                <option value="3">Đang xử lý</option>
              </select>
            </Col>
              <Col>
                <Button variant="success" style={{ color: "#fff", marginLeft:"30px" }}>Tìm kiếm</Button>
              </Col>
              <Col>
                <Button variant="success" className="color_white">Xuất excel</Button>
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
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {
                  data.map((val, index) => (
                    <tr className="last_tr">
                      <th scope="row">{index + 1}</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td href="#" onClick={() => this.handleClick(val)} className="chi_tiet">Chi tiết</td>
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
          {this.state.checkDetail == true ? <DetailElectronicTransfer Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}

        </div>
      )
  }
}
