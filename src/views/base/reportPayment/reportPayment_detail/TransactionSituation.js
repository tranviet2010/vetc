import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import '../stylePayment.css';



export default class transactionSituation extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {date:"Tháng 1"},
        {date:"Tháng 2"},
        {date:"Tháng 3"},
      ],
    };
  }
  handleEdit=()=>{

  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <Col>
          <b>Tình hình giao dịch</b>
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
          <Col>
            <Button variant="success" style={{ color: "#fff" }} className="button_flex">Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white button_flex">Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <p></p>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tháng</th>
              <th scope="col" colSpan="2">Giao dịch xử lý thành công</th>
              <th scope="col" colSpan="2">Giao dịch xử lý không thành công</th>
            </tr>
            </thead>
            <thead className="table-group-bordered">
            <tr className="last_right">
              <td></td>
              <td></td>
              <td>Số lượng</td>
              <td>Giá trị</td>
              <td>Số lượng</td>
              <td>Giá trị</td>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val,index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td>{val.date}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Row>
        <Row>
          <table>
            <tr>
              <td>
                <tr>
                  <th>TOP ĐƠN VỊ CHẤP NHẬN THANH TOÁN CÓ SỐ LƯỢNG GD NHIỀU NHẤT</th>
                </tr>
                <tr>
                  <table className="table table-bordered">
                    <thead className="last_right">
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">ĐVCNTT</th>
                      <th scope="col">Ngành nghề KD</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Giá trị GD</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                      data.map((val,index) => (
                        <tr className="last_tr">
                          <th scope="row">{index + 1}</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
                  <Row>
                    <Col className='d-flex'>
                      <span>Số lượng bản ghi</span>
                      <select className='add_option'>
                        <option selected>10</option>
                        <option value="1">10</option>
                        <option value="2">20</option>
                        <option value="3">50</option>
                        <option value="4">100</option>
                      </select>
                      <span> trên tổng số {data.length} bản ghi</span>
                    </Col>
                  </Row>
                </tr>
              </td>
              <td>
                <tr>
                  <th>TOP ĐƠN VỊ CHẤP NHẬN THANH TOÁN CÓ GIÁ TRỊ GD NHIỀU NHẤT</th>
                </tr>
                <tr>
                  <table className="table table-bordered">
                    <thead className="last_right">
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">ĐVCNTT</th>
                      <th scope="col">Ngành nghề KD</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Giá trị GD</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                      data.map((val,index) => (
                        <tr className="last_tr">
                          <th scope="row">{index + 1}</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
                  <Row>
                    <Col className='d-flex'>
                      <span>Số lượng bản ghi</span>
                      <select className='add_option'>
                        <option selected>10</option>
                        <option value="1">10</option>
                        <option value="2">20</option>
                        <option value="3">50</option>
                        <option value="4">100</option>
                      </select>
                      <span> trên tổng số {data.length} bản ghi</span>
                    </Col>
                  </Row>
                </tr>
              </td>
            </tr>
          </table>
        </Row>
      </div>
    )
  }
}
