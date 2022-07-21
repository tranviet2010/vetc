import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
// import Add_custom from './Add_custom';
// import Detail_custom from './Detail_custom';
import Pagination from 'react-bootstrap/Pagination';
import '../RegisterCustom/style.css';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { magd: "001", fullname: "Trần văn huy", phone: "0987654321", email: "net@vetc.com.vn", cmnd: "0265895354", typemout: "a", status: "Hoạt động", datecreate: "20/10/2019" },
        { magd: "002", fullname: "Nguyễn quốc C", phone: "0334598568", email: "quocc@vetc.com.vn", cmnd: "5689876566", typemout: "b", status: "Chờ phê duyệt", datecreate: "01/02/2010" },
      ],
      phone: "",
      checkDetail: false,
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
  componentDidMount() {
  }

  render() {
    const { data, dataCheck } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch thu hộ chi hộ</b>
            </Col>
            <Col className='d-flex justify-content-end'>
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
              <input type="phone" className="form-control" placeholder="Mã GD" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Mã KH" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Loại giao dịch</option>
              <option value="1">Thu hộ</option>
              <option value="2">Chi hộ</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Trạng thái</option>
              <option value="1">Hoạt động</option>
              <option value="2">Chưa xác thực</option>
              <option value="3">Khóa</option>
              <option value="4">Đóng</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Nhà cung cấp</option>
              <option value="1">Điện hà nội</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff" }}>Tìm kiếm</Button>
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
                  <tr className="last_tr">
                    <th scope="row">{index + 1}</th>
                    <td>{val.magd}</td>
                    <td>{val.fullname}</td>
                    <td>{val.phone}</td>
                    <td>{val.email}</td>
                    <td>{val.cmnd}</td>
                    <td>{val.typemout}</td>
                    <td>{val.status}</td>
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
        {/* {this.state.checkDetail == true ? <Detail_custom Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}
        {this.state.addCus == true ? <Add_custom onSelectModal={this.onSelectModal} /> : ""} */}

      </div>
    )
  }
}
