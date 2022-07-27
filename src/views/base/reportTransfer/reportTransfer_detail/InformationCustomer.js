import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class informationCustomer extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {bank: "Ngân hàng ACB", date: "Quý 1- 2021"},
        {bank: "", date: ""},
        {bank: "", date: ""},
      ],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Col>
          <b>Thông tin đối tác</b>
        </Col>
        <Row>
          <Col>Quý:</Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Quý 1</option>
              <option value="1">Quý 2</option>
              <option value="2">Quý 3</option>
              <option value="3">Quý 4</option>

            </select>
          </Col>
          <Col>Năm:</Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>2021</option>
              <option value="1">2022</option>
            </select>
          </Col>
          <Col>Loại báo cáo:</Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Loại báo cáo</option>
              <option value="1">Ngân hàng hợp tác</option>
              <option value="2">ĐVCNTT</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff" }} className="button_flex">Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white button_flex">Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <th>1. NGÂN HÀNG HỢP TÁC</th>
          <Col>
            <table className="table table-bordered">
              <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Ngân hàng</th>
                <th scope="col">Quý</th>
              </tr>
              </thead>
              <tbody className="table-group-divider">
              {
                data.map((val,index) => (
                <tr className="last_tr">
                <th scope="row">{index + 1}</th>
                <td>{val.bank}</td>
                <td>{val.date}</td>
                </tr>
                ))
              }
              </tbody>
            </table>
          </Col>
          <th>2. ĐƠN VỊ CHẤP NHẬN THANH TOÁN</th>
          <Col>
            <table className="table table-bordered">
              <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Số lượng ĐVCNTT</th>
                <th scope="col">Quý</th>
              </tr>
              </thead>
              <tbody className="table-group-divider">
              {
                data.map((val,index) => (
                  <tr className="last_tr">
                    <th scope="row">{index + 1}</th>
                    <td></td>
                    <td>{val.date}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    )
  }
}
