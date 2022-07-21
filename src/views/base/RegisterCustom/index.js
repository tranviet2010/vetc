import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import Add_custom from './Add_custom';
import Detail_custom from './Detail_custom';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';
import callApi from 'src/api/config';


export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      phone: "",
      giay_to: "",
      checkDetail: false,
      selected: "",
      addCus: false,
      dataCheck: [],

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
  onSelectModal = () => {
    this.setState({
      addCus: false,
      checkDetail: false,
    })
  }
  handleInputChange = () => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  searchParam = () => {
    const { phone, giay_to } = this.state;
    callApi(`customer-views?mobiNumber=${phone}&idNo=${giay_to}`).then((res) => {
      this.setState({
        data: res.data.data
      })
    })
  }

  componentDidMount() {
    callApi(`customer-views?limit=180`).then((res) => {
      this.setState({
        data: res.data.data
      })
    })
  }

  render() {
    const { data, dataCheck, selected } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách khách hàng đăng ký ví</b>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button variant="success" className='button_right color_white' onClick={this.addCustom}>Thêm mới</Button>
              <Button variant="success" className="color_white">Xuất excel</Button>
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
              <input type="phone" className="form-control" placeholder="Điện thoại" name="phone" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Giấy tờ tùy thân" name="giay_to" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example" value={selected} defaultValue="">
              <option value="DEFAULT">Trạng thái</option>
              <option value="1">Hoạt động</option>
              <option value="2">Chưa xác thực</option>
              <option value="3">Khóa</option>
              <option value="4">Đóng</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff" }} onClick={this.searchParam}>Tìm kiếm</Button>
          </Col>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã GD</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">CMND</th>
                <th scope="col">Loại ví</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Ngày tạo</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                data.map((val, index) => (
                  <tr className="last_tr" key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{val.custId}</td>
                    <td>{val.custName}</td>
                    <td>{val.mobiNumber}</td>
                    <td>{val.email}</td>
                    <td>{val.idNo}</td>
                    <td>{val.walletType}</td>
                    <td>{val.state}</td>
                    <td>{val.datecreate}</td>
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
        {this.state.checkDetail == true ? <Detail_custom Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}
        {this.state.addCus == true ? <Add_custom onSelectModal={this.onSelectModal} /> : ""}

      </div>
    )
  }
}
