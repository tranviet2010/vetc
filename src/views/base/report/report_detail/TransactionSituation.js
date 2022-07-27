import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

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
      </div>
    )
  }
}
