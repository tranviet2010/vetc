import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class Info_Car extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <table className="table table-bordered">
              <thead className="last_right">
                <tr>
                  <th scope="col">Biển số xe</th>
                  <th scope="col">Màu biển</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr className="last_tr">
                  <th scope="row">88L1-000.48</th>
                  <td>Trắng</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col>

          </Col>
        </Row>
      </div>
    )
  }
}
