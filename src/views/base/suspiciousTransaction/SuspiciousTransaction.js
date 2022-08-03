import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";

import Pagination from "react-bootstrap/Pagination";
import '../RegisterCustom/style.css';
import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";
import "./style.css";

export default class suspiciousTransaction extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          SOTKVI: "30072022010004",
          MAGD: 200,
          MAGDTC: "VE938000201212",
          LOAIRUIRO: "Chặn số thẻ ",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "20.200.000",
          NGAYGD: "31/07/2022 9:00"
        },
        {
          SOTKVI: "30072022010003",
          MAGD: 218,
          MAGDTC: "VE938000201213",
          LOAIRUIRO: "Chặn số thẻ ",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Chặn",
          SOTIEN: "100.000",
          NGAYGD: "31/07/2022 8:57"
        },
        {
          SOTKVI: "30072022010002",
          MAGD: 236,
          MAGDTC: "VE938000201215",
          LOAIRUIRO: "Chặn số thẻ ",
          LOAIGD: "Rút tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "300.000",
          NGAYGD: "31/07/2022 8:57"
        },
        {
          SOTKVI: "30072022010001",
          MAGD: 254,
          MAGDTC: "VE938000201221",
          LOAIRUIRO: "Chặn tài khoản",
          LOAIGD: "Rút tiền ",
          HINHTHUC: "Chặn",
          SOTIEN: "420.000",
          NGAYGD: "31/07/2022 8:55"
        },
        {
          SOTKVI: "30072022010000",
          MAGD: 272,
          MAGDTC: "VE938000201224",
          LOAIRUIRO: "Chặn tài khoản",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "400.293",
          NGAYGD: "29/07/2022 8:00"
        },
        {
          SOTKVI: "29072022010020",
          MAGD: 290,
          MAGDTC: "VE938000201227",
          LOAIRUIRO: "Chặn tài khoản",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "100.000",
          NGAYGD: "29/07/2022 7:08"
        },
        {
          SOTKVI: "29072022010019",
          MAGD: 308,
          MAGDTC: "VE900000201212",
          LOAIRUIRO: "Chặn số thẻ ",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "500.000",
          NGAYGD: "29/07/2022 7:00"
        },
        {
          SOTKVI: "29072022010018",
          MAGD: 326,
          MAGDTC: "VE980002012131",
          LOAIRUIRO: "Chặn tài khoản",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "200.000",
          NGAYGD: "29/07/2022 6:00"
        },
        {
          SOTKVI: "29072022010017",
          MAGD: 344,
          MAGDTC: "VE980002012132",
          LOAIRUIRO: "Chặn tài khoản",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "-100.000",
          NGAYGD: "29/07/2022 6:00"
        },
        {
          SOTKVI: "29072022010016",
          MAGD: 362,
          MAGDTC: "VE980002012134",
          LOAIRUIRO: "Chặn số thẻ ",
          LOAIGD: "Rút tiền ",
          HINHTHUC: "Chặn",
          SOTIEN: "-400.000",
          NGAYGD: "28/07/2022 10:00"
        },
        {
          SOTKVI: "29072022010015",
          MAGD: 380,
          MAGDTC: "VE980002012136",
          LOAIRUIRO: "Chặn tài khoản",
          LOAIGD: "Nạp tiền ",
          HINHTHUC: "Cảnh báo ",
          SOTIEN: "-700.000",
          NGAYGD: "28/07/2022 09:00"
        }
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
              <b>Danh sách giao dịch nghi ngờ</b>
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
              <option selected disabled="disabled">Hình thức</option>
              <option value="1">Chặn</option>
              <option value="2">Cảnh báo</option>
            </select>
          </Col>
          <Col>
            <select className="form-select" aria-label="Default select example">
              <option selected disabled="disabled">Loại rủi ro</option>
              <option value="1">a</option>
              <option value="2">b</option>
            </select>
          </Col>

          <Col>
            <Button variant="success" style={{ color: "#fff", float:"right", marginRight:"-30px"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
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
                  <td>{val.SOTKVI}</td>
                  <td>{val.MAGD}</td>
                  <td>{val.MAGDTC}</td>
                  <td>{val.LOAIRUIRO}</td>
                  <td>{val.LOAIGD}</td>
                  <td>{val.HINHTHUC}</td>
                  <td align={"right"}>{val.SOTIEN}</td>
                  <td>{val.NGAYGD}</td>
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
              <option value="1">20</option>
              <option value="2">30</option>
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
