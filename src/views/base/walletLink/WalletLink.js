
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

import DetailTransaction from "./DetailTransaction";
import Pagination from "react-js-pagination";
import './styleWallet.css';

import CIcon from "@coreui/icons-react";
import { cilDataTransferDown, cilSearch } from "@coreui/icons";
import callApi from "src/api/config";
import { convertDate } from "src/views/helper/validate";


export default class walletLink extends Component {
  constructor() {
    super();
    this.state = {
      data: [
      ],
      phone: "",
      checkDetail: false,
      dataCheck: [],
      checkDetailTransaction: false,
      dataCheckDetailTransaction: [],
      totalCount: "",
      toDate: "",
      fromDate: "",
      stk: "",
      giay_to: "",
      activePage:1,
      page:10,

    };
  }
  handleClick = (t) => {
    this.setState({
      checkDetail: true,
      dataCheck: t
    })
  }
  checkClose = () => {
    this.setState({
      checkDetail: false
    })
  }

  handleClickDetailTransaction = (t) => {
    this.setState({
      checkDetailTransaction: true,
      dataCheckDetailTransaction: t
    })
  }
  checkCloseModal = () => {
    this.setState({
      checkDetailTransaction: false
    })
  }
  handleInputChange = () => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  searchParam = () => {
    console.log("cccccc")
    const { giay_to, stk, toDate, fromDate } = this.state;
    callApi(`account_link?idNo=${giay_to}`).then((res) => {
      console.log("data==", res)
      this.setState({
        data: res.data.data,
        totalCount: res.data.totalCount
      })
    })
  }
  panigationHandle=(e)=>{
    let indexPani=e.target.value
    callApi(`account_link?limit=${indexPani}`).then((res) => {
      this.setState({
        data: res.data.data,
        totalCount:res.data.totalCount,
        page:indexPani
      })
    })

  }
  handlePageChange(pageNumber) {
    const {page}=this.state;
    callApi(`account_link?limit=${page}&page=${pageNumber}`).then((res) => {
      this.setState({
        data: res.data.data,
        activePage:pageNumber
      })
    })
  }
  componentDidMount() {
    callApi(`account_link?limit=10`).then((res) => {
      console.log("data==", res)
      this.setState({
        data: res.data.data,
        totalCount: res.data.totalCount
      })
    })
  }
  render() {
    const { data, dataCheck, dataCheckDetailTransaction, totalCount,activePage,page } = this.state;
    return (
      <div className='backGround_main'>
        <div className="main_rege">
          <Row>
            <Col>
              <b>Danh s??ch giao d???ch li??n k???t v??</b>
            </Col>

          </Row>
        </div>
        <Row>
          <Col xs = "2">
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="T??? ng??y" aria-label="Username" aria-describedby="basic-addon1" name="toDate" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col xs = "2">
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="?????n ng??y" aria-label="Username" aria-describedby="basic-addon1" name="formDate" onChange={this.handleInputChange} />
            </div>
          </Col>
          <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="S??? t??i kho???n v??" aria-label="Username" aria-describedby="basic-addon1" name="stk" onChange={this.handleInputChange} />
            </div>
          </Col>
          {/* <Col>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Gi???y t??? t??y th??n" aria-label="Username" aria-describedby="basic-addon1" name="giay_to" onChange={this.handleInputChange} />
            </div>
          </Col> */}

          {/*<Col>*/}
          {/*  <div className="input-group mb-3">*/}
          {/*    <input type="text" className="form-control" placeholder="Gi???y t??? t??y th??n" aria-label="Username" aria-describedby="basic-addon1" />*/}
          {/*  </div>*/}
          {/*</Col>*/}
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Ng??n h??ng</option>
              <option value="1">Vietcombank</option>
              <option value="2">BIDV</option>
              <option value="3">MB Bank</option>
              <option value="4">Viettinbank</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option disabled="disabled" selected >Tr???ng th??i</option>
              <option value="1">Th??nh c??ng</option>
              <option value="2">Th???t b???i</option>
              <option value="3">??ang x??? l??</option>
              <option value="4">Timeout</option>
            </select>
          </Col>

          <Col>

            <Button variant="success" style={{ color: "#fff", float:"left", paddingRight:"20px", marginLeft:"10px"}} onClick={this.searchParam}>
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> T??m ki???m</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"left", paddingRight:"20px"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xu???t excel</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="2">
            <select className="form-select" aria-label="Default select example">
              <option disabled="disabled" selected >Lo???i li??n k???t</option>
              <option value="1">T???t c???</option>
              <option value="2">Li??n k???t</option>
              <option value="3">H???y li??n k???t</option>
            </select>
          </Col>

        </Row>
        <br />
        <Row>
          <table className="table table-bordered">
            <thead className="last_right">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">H??? t??n</th>
                <th scope="col">??i???n tho???i</th>
                <th scope="col">Gi???y t??? t??y th??n</th>
                <th scope="col">Lo???i</th>
                <th scope="col">Ng??n h??ng</th>
                <th scope="col">S??? TK/Th???</th>
                <th scope="col">Tr???ng th??i</th>
                <th scope="col">Th???i gian</th>
                <th scope="col">T??c v???</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                data.length && data.map((val, index) => (
                  <tr key={index} className="last_tr" >
                    <th scope="row">{index + 1}</th>
                    <td className="text">{val.custName}</td>
                    <td>{val.mobiNumber}</td>
                    <td>{val.idNo}</td>
                    <td className="text">{val.linkType}</td>
                    <td className="text">{val.name}</td>
                    <td>{val.cardNumberView}</td>
                    <td className="text">{val.status}</td>
                    <td>{convertDate(val.createdAt)}</td>
                    <td >
                    <button onClick={() => this.handleClickDetailTransaction(val)} className="button_chi_tiet">Xem chi ti???t</button>
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
        {/*{this.state.checkDetail==true?<DetailWallet Data={dataCheck} checkClose={this.checkClose} />:''}*/}
        {this.state.checkDetailTransaction == true ? <DetailTransaction Data={dataCheckDetailTransaction} checkCloseModal={this.checkCloseModal} /> : ''}
      </div>
    )
  }
}
