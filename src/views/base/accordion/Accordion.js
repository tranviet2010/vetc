import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class Accordion extends Component {
  render() {
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
        </Row>
      </div>
    )
  }
}
