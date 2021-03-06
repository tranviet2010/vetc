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
    //     toast("S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng !")
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
              <b>Danh s??ch kh??ch h??ng ????ng k?? v??</b>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button variant="success" className='button_right color_white' onClick={this.addCustom}>Th??m m???i</Button>
              <Button variant="success" className="color_white">Xu???t excel</Button>
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
              <input type="phone" className="form-control" placeholder="??i???n tho???i" name="phone" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Gi???y t??? t??y th??n" name="giay_to" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example" defaultValue="" name="state" onChange={this.handleInputChange}>
              <option value="">T???t c???</option>
              <option value="OPEN">???? x??c th???c</option>
              <option value="NOT_VERIFIED">Ch??a x??c th???c</option>
              <option value="BLOCK_TRANSFER">Kh??a chuy???n ti???n</option>
              <option value="BLOCK">Kh??a</option>
              <option value="">????ng</option>
            </select>
          </Col>
          <Col>
            <Button variant="success" style={{ color: "#fff" }} onClick={this.searchParam}>
              T??m ki???m</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="mb-3">
          <select className="form-select" aria-label="Default select example" name="type_wallet" onChange={this.handleInputChange}>
              <option value="Individual">V?? c?? nh??n</option>
              <option value="Corporate">V?? t??? ch???c</option>
              <option value="">V?? ??VCNTT</option>

            </select>
          </Col>
        </Row>
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">M?? GD</th>
                <th scope="col">H??? t??n</th>
                <th scope="col">??i???n tho???i</th>
                <th scope="col">Email</th>
                <th scope="col">CMND</th>
                <th scope="col">Lo???i v??</th>
                <th scope="col">Tr???ng th??i</th>
                <th scope="col">Ng??y t???o</th>
                <th scope="col">H??nh ?????ng</th>
              </tr>
            </thead>
            {
              data.length==0?<div className="last_tr"><p>Kh??ng c?? d??? li???u hi???n th???</p></div>:
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
            <span> tr??n t???ng s??? {totalCount} b???n ghi</span>
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
