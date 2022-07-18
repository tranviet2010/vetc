import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class Config_positive extends Component {
  render() {
    return (
      <div>
        <Row>
            <table className="table table-bordered">
                    <thead className="last_right">
                        <tr>
                            <th scope="col">Từ số tiền</th>
                            <th scope="col">Tới số tiền</th>
                            <th scope="col">Phương thức xác thực</th>
                            <th scope="col">Tổng hạn mức ngày</th>
                            <th scope="col">Công cụ</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr className="last_tr">
                            <th scope="row">88L1-000.48</th>
                            <td>Trắng</td>
                            <td>Trắng</td>
                            <td>Trắng</td>
                            <td>
                                <p>Sửa</p>
                                <p>Xóa</p>
                            </td>
                        </tr>
                    </tbody>
            </table>
                    
                </Row>
      </div>
    )
  }
}
