import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import '../RegisterCustom/style.css';

export default class suspiciousTransaction extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {},
        {},
        {},
      ],
      numberAccountOfWallet: "",
      checkDetailWithdraw:false,
      dataCheckDetailWithdraw:[],

    };
  }

  handleClickDetailWithdraw=(t)=>{
    this.setState({
      checkDetailWithdraw:true,
      dataCheckDetailWithdraw:t
    })
  }
  checkCloseModal=()=>{
    this.setState({
      checkDetailWithdraw:false
    })
  }


  componentDidMount(){

  }
  render() {
    const { data, dataCheckDetailWithdraw } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch rút tiền</b>
            </Col>

          </Row>
        </div>
        <Row>
          <Col>
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Từ ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Đến ngày" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Mã GD" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Hình thức</option>
              <option value="1">Chặn</option>
              <option value="2">Cảnh báo</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Loại rủi ro</option>
              <option value="1">a</option>
              <option value="2">b</option>
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
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Số TK ví</th>
              <th scope="col">Mã GD</th>
              <th scope="col">Mã GD tham chiếu</th>
              <th scope="col">Loại rủi ro</th>
              <th scope="col">Loại giao dịch</th>
              <th scope="col">Hình thức</th>
              <th scope="col">Số tiền</th>
              <th scope="col">Ngày GD</th>
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
                  <td></td>
                  <td></td>
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
        {this.state.checkDetailWithdraw==true?<DetailWithdrawMoney Data={dataCheckDetailWithdraw} checkCloseModal={this.checkCloseModal}/>:''}
      </div>
    )
  }
}
