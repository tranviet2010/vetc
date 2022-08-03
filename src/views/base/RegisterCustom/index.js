import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import Add_custom from './AddCustom';
import Detail_custom from './DetailCustom';
import './style.css';
import callApi from 'src/api/config';
import { BiInfoCircle } from "react-icons/bi";
import { PhoneNumber, ValidateDate } from 'src/views/helper/validate';
import Pagination from "react-js-pagination";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      phone: "",
      giay_to: "",
      state:"",
      checkDetail: false,
      selected: "",
      addCus: false,
      dataCheck: [],
      totalCount:"",
      toDate:"",
      fromDate:"",
      type_wallet:"",
      activePage: 1,
      page:10

    };
  }
  handleClick = (t) => {
    this.setState({
      checkDetail: true,
      dataCheck: t
    })
  }
  addCustom = () => {
    this.setState({
      addCus: true
    })
  }
  handlePageChange(pageNumber) {
    const {page}=this.state;
    callApi(`customer-views?limit=${page}&page=${pageNumber}`).then((res) => {
      this.setState({
        data: res.data.data,
        activePage:pageNumber
      })
    })
  }
  onSelectModal = () => {
    this.setState({
      addCus: false,
      checkDetail: false,
    })
    this.componentDidMount();
  }
  handleInputChange = () => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  panigationHandle=(e)=>{
    let indexPani=e.target.value

   callApi(`customer-views?limit=${indexPani}`).then((res) => {
      this.setState({
        data: res.data.data,
        totalCount: res.data.totalCount,
        page: indexPani
      })
    })

  }
  searchParam = () => {
    const { phone,page, giay_to,state,toDate, fromDate,type_wallet } = this.state;
    // if(phone.length!=0&&!PhoneNumber(phone)){
    //     toast("Số điện thoại không đúng định dạng !")
    //     return
    // }
    // &createdDate=gt:${ValidateDate(toDate)}&createdDate=lt<${ValidateDate(fromDate)
    callApi(`customer-views?mobiNumber=${phone}&idNo=${giay_to}&state=${state}&walletType=${type_wallet}&limit=${page}`).then((res) => {
      this.setState({
        data: res.data.data,
        totalCount:res.data.totalCount
      })
    })
  }
  componentDidMount() {
    callApi(`customer-views?limit=10`).then((res) => {
      this.setState({
        data: res.data.data,
        totalCount:res.data.totalCount
      })
    })
  }

  render() {
    const { data, dataCheck,totalCount,page } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh sách khách hàng đăng ký ví</b>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button variant="success" className='button_right color_white' onClick={this.addCustom}>Thêm mới</Button>
              <Button variant="success" className="color_white">Xuất excel</Button>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div className="input-group">
              <input type="date" className="form-control" name="toDate" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange}/>
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="date" className="form-control" name='fromDate' placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange}/>
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="phone" className="form-control" placeholder="Điện thoại" name="phone" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Giấy tờ tùy thân" name="giay_to" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example" defaultValue="" name="state" onChange={this.handleInputChange}>
              <option value="">Tất cả</option>
              <option value="OPEN">Đã xác thực</option>
              <option value="NOT_VERIFIED">Chưa xác thực</option>
              <option value="BLOCK_TRANSFER">Khóa chuyển tiền</option>
              <option value="BLOCK">Khóa</option>
              <option value="">Đóng</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff" }} onClick={this.searchParam}>
              Tìm kiếm</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="mb-3">
          <select className="form-select" aria-label="Default select example" name="type_wallet" onChange={this.handleInputChange}>
              <option value="Individual">Ví cá nhân</option>
              <option value="Corporate">Ví tổ chức</option>
              <option value="">Ví ĐVCNTT</option>

            </select>
          </Col>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
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
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            {
              data.length==0?<div className="last_tr"><p>Không có dữ liệu hiển thị</p></div>:
              <tbody className="table-group-divider text-center">
              {
                data.map((val, index) => (
                  <tr className="last_tr text-center" key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{val.custId}</td>
                    <td>{val.custName}</td>
                    <td>{val.mobiNumber}</td>
                    <td>{val.email}</td>
                    <td>{val.idNo}</td>
                    <td>{val.walletType}</td>
                    <td>{val.state}</td>
                    <td>{new Date(val.createdDate).toLocaleDateString("vi-VN")}</td>
                    <td href="#" onClick={() => this.handleClick(val)} className="chi_tiet"><BiInfoCircle /></td>
                  </tr>
                ))
              }
            </tbody>
            }
            
          </table>
        </Row>
        <Row>
          <Col className='d-flex'>
            <span>Xem</span>
            <select className='add_option' onChange={this.panigationHandle}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span> trên tổng số {totalCount} bản ghi</span>
          </Col>
          <Col className='d-flex justify-content-end'>
          <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={page}
              totalItemsCount={Number(totalCount)}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </Col>
        </Row>
        {this.state.checkDetail == true ? <Detail_custom Data={dataCheck} onSelectModal={this.onSelectModal} /> : ''}
        {this.state.addCus == true ? <Add_custom onSelectModal={this.onSelectModal} /> : ""}
      </div>
    )
  }
}
