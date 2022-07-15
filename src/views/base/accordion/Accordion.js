import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { magd: "001", fullname: "trần văn huy", phone: 0987654321, email: "net@vetc.com.vn", cmnd: "0265895354", typemout: "a", status: 1, datecreate: "20/10/2019" },
        { magd: "001", fullname: "trần văn huy", phone: 0987654321, email: "net@vetc.com.vn", cmnd: "0265895354", typemout: "a", status: 1, datecreate: "20/10/2019" }
      ]
    };
  }
  render() {
    const { Data } = this.state.data;
    return (
      <div>
        <Row>
          <Col>
            <div class="input-group">
              <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div class="input-group mb-3">
              <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Điện thoại" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Giấy tờ tùy thân" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <select class="form-select" aria-label="Default select example">
              <option selected>Trạng thái</option>
              <option value="1">Hoạt động</option>
              <option value="2">Chưa xác thực</option>
              <option value="3">Khóa</option>
              <option value="4">Đóng</option>
            </select>
          </Col>
          <Col>
            <Button variant="success">Tìm kiếm</Button>
          </Col>
        </Row>
        <Row>
          <table class="table table-bordered">
            <thead class="last_right">
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
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {
                Data.map((val,index)=>(
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{val.magd}</td>
                    <td>{val.fullname}</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
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
