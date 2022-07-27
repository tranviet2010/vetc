import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";
import DetailWallet from "./DetailWallet";
import DetailTransaction from "./DetailTransaction";
import Pagination from "react-bootstrap/Pagination";
import './styleWallet.css';
import CIcon from "@coreui/icons-react";
import {cilApple} from '@coreui/icons';


export default class walletLink extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { fullName: "Trần văn huy", phone: "0987654321", identification: "", type: "Liên kết", bank: "Vietcombank", numberAccountOfBank: "123456xxxxxx1234",status:"", time: "20/10/2019" },
        { fullName: "", phone: "", identification: "", type: "Hủy liên kết", bank: "", numberAccountOfBank: "",status:"", time: "" },
      ],
      phone: "",
      checkDetail:false,
      dataCheck:[],
      checkDetailTransaction:false,
      dataCheckDetailTransaction:[],

    };
  }
  handleClick=(t)=>{
    this.setState({
      checkDetail:true,
      dataCheck:t
    })
  }
  checkClose=()=>{
    this.setState({
      checkDetail:false
    })
  }

  handleClickDetailTransaction=(t)=>{
    this.setState({
      checkDetailTransaction:true,
      dataCheckDetailTransaction:t
    })
  }
  checkCloseModal=()=>{
    this.setState({
      checkDetailTransaction:false
    })
  }


  componentDidMount(){

  }
  render() {
    const { data, dataCheck, dataCheckDetailTransaction } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách giao dịch liên kết ví</b>
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
              <input type="text" className="form-control" placeholder="Số tài khoản ví" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Giấy tờ tùy thân" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Ngân hàng liên kết</option>
              <option value="1">Vietcombank</option>
              <option value="2">BIDV</option>
              <option value="3">MB Bank</option>
              <option value="4">Viettinbank</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Trạng thái</option>
              <option value="1">Thành công</option>
              <option value="2">Thất bại</option>
              <option value="3">Đang xử lý</option>
              <option value="4">Timeout</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected>Loại liên kết</option>
              <option value="1">Tất cả</option>
              <option value="2">Liên kết</option>
              <option value="3">Hủy liên kết</option>
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
              <th scope="col">Họ tên</th>
              <th scope="col">Điện thoại</th>
              <th scope="col">Giấy tờ tùy thân</th>
              <th scope="col">Loại</th>
              <th scope="col">Ngân hàng</th>
              <th scope="col">Số TK/Thẻ</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Hành động</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            {
              data.map((val, index) => (
                <tr className="last_tr">
                  <th scope="row">{index + 1}</th>
                  <td onClick={()=>this.handleClick(val)}>{val.fullName}</td>
                  <td>{val.phone}</td>
                  <td>{val.identification}</td>
                  <td>{val.type}</td>
                  <td>{val.bank}</td>
                  <td>{val.numberAccountOfBank}</td>
                  <td>{val.status}</td>
                  <td>{val.time}</td>
                  <td onClick={()=>this.handleClickDetailTransaction(val)}>
                     <CIcon icon={cilApple} customClassName="nav-icon" height={25} width={25}/>
                  </td>
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
        {this.state.checkDetail==true?<DetailWallet Data={dataCheck} checkClose={this.checkClose} />:''}
        {this.state.checkDetailTransaction==true?<DetailTransaction Data={dataCheckDetailTransaction} checkCloseModal={this.checkCloseModal}/>:''}
      </div>
    )
  }
}
