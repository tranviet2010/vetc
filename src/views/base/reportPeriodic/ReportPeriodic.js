import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';


import CIcon from "@coreui/icons-react";
import {cilDataTransferDown, cilSearch} from "@coreui/icons";

export default class reportPeriodic extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [
        {
          LOAIGD: "NapTien",
          NGAY: "07/12/2022",
          SUM_SLGD: 47,
          SUM_ST: 701200
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/12/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/12/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Thanh toán",
          NGAY: "07/12/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/12/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/13/2022",
          SUM_SLGD: 1,
          SUM_ST: 23000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/13/2022",
          SUM_SLGD: 3,
          SUM_ST: 69000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/13/2022",
          SUM_SLGD: 21,
          SUM_ST: 1383005
         },
         {
          LOAIGD: "Thanh toán",
          NGAY: "07/13/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/13/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/14/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/14/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/14/2022",
          SUM_SLGD: 27,
          SUM_ST: 200002002050849
         },
         {
          LOAIGD: "Thanh toán",
          NGAY: "07/14/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/14/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/15/2022",
          SUM_SLGD: 0,
          SUM_ST: 2000000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/15/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/15/2022",
          SUM_SLGD: 9,
          SUM_ST: 52011954
         },
         {
          LOAIGD: "Thanh toán",
          NGAY: "07/15/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/15/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/18/2022",
          SUM_SLGD: 1,
          SUM_ST: 23000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/18/2022",
          SUM_SLGD: 2,
          SUM_ST: 1000000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/18/2022",
          SUM_SLGD: 1,
          SUM_ST: 1000
         },
         {
          LOAIGD: "Thanh toán",
          NGAY: "07/18/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/18/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/20/2022",
          SUM_SLGD: 28,
          SUM_ST: 644000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/20/2022",
          SUM_SLGD: 1,
          SUM_ST: 10000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/20/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Thanh toán",
          NGAY: "07/20/2022",
          SUM_SLGD: 1,
          SUM_ST: 20000
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/20/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "ThanhToan",
          NGAY: "07/21/2022",
          SUM_SLGD: 7,
          SUM_ST: 2800000
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/21/2022",
          SUM_SLGD: 30,
          SUM_ST: 1252246000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/21/2022",
          SUM_SLGD: 26,
          SUM_ST: 4063000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/21/2022",
          SUM_SLGD: 1,
          SUM_ST: 70000
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/21/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/22/2022",
          SUM_SLGD: 20,
          SUM_ST: 1143961000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/22/2022",
          SUM_SLGD: 8,
          SUM_ST: 440000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/22/2022",
          SUM_SLGD: 36,
          SUM_ST: 57870000
         },
         {
          LOAIGD: "ThanhToan",
          NGAY: "07/22/2022",
          SUM_SLGD: 20,
          SUM_ST: 8000000
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/22/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/23/2022",
          SUM_SLGD: 5,
          SUM_ST: 15040000
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/23/2022",
          SUM_SLGD: 1,
          SUM_ST: 23000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/23/2022",
          SUM_SLGD: 1,
          SUM_ST: 10000
         },
         {
          LOAIGD: "Thanhtoan",
          NGAY: "07/23/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/23/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/24/2022",
          SUM_SLGD: 1,
          SUM_ST: 5000000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/24/2022",
          SUM_SLGD: 2,
          SUM_ST: 10000000
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/24/2022",
          SUM_SLGD: 3,
          SUM_ST: 5000000
         },
         {
          LOAIGD: "Thanhtoan",
          NGAY: "07/24/2022",
          SUM_SLGD: 1,
          SUM_ST: 1000000
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/24/2022",
          SUM_SLGD: 1,
          SUM_ST: 2000000
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/25/2022",
          SUM_SLGD: 10,
          SUM_ST: 423000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/25/2022",
          SUM_SLGD: 8,
          SUM_ST: 770000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/25/2022",
          SUM_SLGD: 13,
          SUM_ST: 1070000
         },
         {
          LOAIGD: "ThanhToan",
          NGAY: "07/25/2022",
          SUM_SLGD: 26,
          SUM_ST: 8411000
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/25/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/26/2022",
          SUM_SLGD: 12,
          SUM_ST: 1500100
         },
         {
          LOAIGD: "ThanhToan",
          NGAY: "07/26/2022",
          SUM_SLGD: 17,
          SUM_ST: 3608000
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/26/2022",
          SUM_SLGD: 12,
          SUM_ST: 202222
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/26/2022",
          SUM_SLGD: 9,
          SUM_ST: 405000
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/26/2022",
          SUM_SLGD: 4,
          SUM_ST: 7000000
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/27/2022",
          SUM_SLGD: 1,
          SUM_ST: 11000
         },
         {
          LOAIGD: "ThanhToan",
          NGAY: "07/27/2022",
          SUM_SLGD: 27,
          SUM_ST: 8684000
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/27/2022",
          SUM_SLGD: 25,
          SUM_ST: 5957224
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/27/2022",
          SUM_SLGD: 26,
          SUM_ST: 307180000
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/27/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "RutTien",
          NGAY: "07/28/2022",
          SUM_SLGD: 1,
          SUM_ST: 190009
         },
         {
          LOAIGD: "NapTien",
          NGAY: "07/28/2022",
          SUM_SLGD: 16,
          SUM_ST: 734363
         },
         {
          LOAIGD: "ChuyenTien",
          NGAY: "07/28/2022",
          SUM_SLGD: 4,
          SUM_ST: 1760000
         },
         {
          LOAIGD: "Thanhtoan",
          NGAY: "07/28/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         },
         {
          LOAIGD: "Giao dịch khác",
          NGAY: "07/28/2022",
          SUM_SLGD: 0,
          SUM_ST: 0
         }
        ],
      slgd_2ben: false,
    };
  }

  handlerClick =()=>{
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]:value
    })
  }

  handleEdit=()=>{

  }
  render() {

    const {data, dataCheck, val} = this.state;




    const out = Object.values(data.reduce((acc, c) => {
      const { NGAY } = c;
      acc[NGAY] = (acc[NGAY] || []).concat(c);
      return acc;
    }, {}));
    

    function groupByKey(array, key) {
      return array
        .reduce((hash, obj) => {
          if(obj[key] === undefined) return hash;
          return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
        }, {})
   }
   var result = groupByKey(data, 'NGAY');
   console.log("result==",result)

   
    return (
      <div className='backGround_main'>
        <Col>
          <b>Báo cáo Ví theo kỳ</b>
        </Col>
        <br/>
        <Row>
          <Col xs = "2" style={{width:"10%"}}>Loại báo cáo:</Col>
          <Col xs = "4">
            <select className="form-select" aria-label="Default select example">
              <option selected>Số lượng và giá trị Ví theo kỳ thống kê</option>
              <option value="1" onChange={this.handleClick}>Số lượng và giá trị giao dịch 2 bên</option>

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
            <Button variant="success" style={{ color: "#fff",float:"right"}} >
              <CIcon icon={cilSearch} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Tìm kiếm</Button>
          </Col>
          <Col>
            <Button variant="success" className="color_white" style={{float:"right"}}>
              <CIcon icon={cilDataTransferDown} customClassName="nav-icon" style={{width:"20px", height:"20px"}} /> Xuất excel</Button>
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
                  <th></th>
                  <td></td>
                  <td align={"right"}></td>
                  <td></td>
                  <td align={"right"}></td>
                  <td></td>
                  <td align={"right"}></td>
                  <td></td>
                  <td align={"right"}></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            }
            </tbody>
            <tbody className="table-group-divider">
            <tr className="last_tr" >
              <th>Tổng</th>
              <td>164</td>
              <td align={"right"}>2.399.194.563</td>
              <td>124</td>
              <td align={"right"}>95.760.333</td>
              <td>119</td>
              <td align={"right"}>2.00002E+14</td>
              <td>97</td>
              <td align={"right"}>31.503.000</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>

        </Row>

        {/*{this.state.checkDetail==true?<ReportTwoParty Data={dataCheck} checkClose={this.checkClose} />:''}*/}

      </div>
    )
  }
}
