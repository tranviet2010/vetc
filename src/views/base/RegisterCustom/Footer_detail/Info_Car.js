import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import callApi from 'src/api/config';

export default class Info_Car extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    const {Data}=this.props;
    callApi(`vehicle?customerId=${Data.custId}`).then((res)=>{
      console.log("res==",res)
      this.setState({
        data:res.data
      })
    })
  }
  render() {
    const {data}=this.state;
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
              <tbody className="table-group-divider text-center">
                {
                  data.length==0?"Không có xe nào !":
                  data.map((val,index)=>(
                    <tr className="last_tr" key={index}>
                      <th scope="row">{val.etcVehicleId}</th>
                      <td>Trắng</td>
                    </tr>
                  ))
                }
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
