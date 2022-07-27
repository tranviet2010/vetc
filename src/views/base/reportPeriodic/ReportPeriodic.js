import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import DetailWallet from "../wallet-link/DetailWallet";
import ReportTwoParty from "../reportPeriodic/reportTwoParty/ReportTwoParty";

export default class reportPeriodic extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {date:"1/9/2021"},
        {date:"2/9/2021"},
        {date:"3/9/2021"},
      ],
      // checkDetail:false,
      // dataCheck:[],
    };
  }

  // handleClick=(t)=>{
  //   this.setState({
  //     checkDetail:true,
  //     dataCheck:t
  //   })
  // }
  // checkClose=()=>{
  //   this.setState({
  //     checkDetail:false
  //   })
  // }

  handleEdit=()=>{

  }
  render() {
    const {data, dataCheck, val} = this.state;
    return (
      <div>
        <Col>
          <b>Báo cáo Ví theo kỳ</b>
        </Col>
        <Row>
          <Col>Loại báo cáo:</Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Số lượng và giá trị Ví theo kỳ thống kê</option>
              <option value="1" onClick={()=>this.handleClick(val)}>Số lượng và giá trị giao dịch 2 bên</option>

            </select>
          </Col>
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
            <Button variant="success" style={{ color: "#fff", marginLeft:"10px"}}  >Tìm kiếm</Button>

            <Button variant="success" className="color_white" style={{marginLeft:"10px"}}>Xuất excel</Button>
          </Col>
        </Row>
        <Row>
          <p></p>
          <table className="table table-bordered">
            <thead className="last_right">
            <tr>
              <th scope="col">Ngày</th>
              <th scope="col" colSpan="2">Nạp tiền</th>
              <th scope="col" colSpan="2">Rút tiền</th>
              <th scope="col" colSpan="2">Chuyển tiền</th>
              <th scope="col" colSpan="2">Thanh toán</th>
              <th scope="col" colSpan="2">Giao dịch khác</th>
            </tr>
            </thead>
            <thead className="table-group-bordered">
            <tr className="last_right">
              <td></td>
              <td>Số lượng</td>
              <td>Tổng giá trị</td>
              <td>Số lượng</td>
              <td>Tổng giá trị</td>
              <td>Số lượng</td>
              <td>Tổng giá trị</td>
              <td>Số lượng</td>
              <td>Tổng giá trị</td>
              <td>Số lượng</td>
              <td>Tổng giá trị</td>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val) => (
                <tr className="last_tr">
                  <th>{val.date}</th>
                  <td></td>
                  <td></td>
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

        {/*{this.state.checkDetail==true?<ReportTwoParty Data={dataCheck} checkClose={this.checkClose} />:''}*/}

      </div>
    )
  }
}
