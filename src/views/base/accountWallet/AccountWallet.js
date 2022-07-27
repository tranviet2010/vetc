import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';
import {color} from "chart.js/helpers";
import AddWallet from "./AddWallet";
import UpdateWallet from "./UpdateWallet";

export default class AccountWallet extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { },
        { },
        { },
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
            <Col className='d-flex justify-content-end'>
              <Button variant="success" className='button_right color_white' onClick={this.addWallet}>Thêm mới</Button>
              <Button variant="success" className="color_white">Xuất excel</Button>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Số tài khoản ví" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Tổ chức phát hành" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
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
            <select className="form-select" aria-label="Default select example">
              <option selected>Hình thức xử lý</option>
              <option value="1">Chặn giao dịch</option>
              <option value="2">Cảnh báo rủi ro</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Trạng thái</option>
              <option value="1">Hiệu lực</option>
              <option value="2">Không hiệu lực</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff", marginLeft: "40px" }}>Tìm kiếm</Button>
          </Col>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Số tài khoản/ví</th>
              <th scope="col">Tổ chức phát hành</th>
              <th scope="col">Ngày áp dụng</th>
              <th scope="col">Đối tượng xác thực</th>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><td className="status">Hiệu lực</td></td>
                  <td href="#" onClick={() => this.updateClick(val)}>...</td>
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
        {this.state.checkDetail == true ? <UpdateWallet Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}
        {this.state.addWallet == true ? <AddWallet onSelectModal={this.onSelectModal} /> : ""}

      </div>
    )
  }
}
