import React, { Component } from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import InformationCustomer from "../reportTransfer/reportTransfer_detail/InformationCustomer";
import TransactionSituation from "../reportTransfer/reportTransfer_detail/TransactionSituation";


export default class reportTransfer extends Component {
  render() {
    return (
      <div style={{marginTop:"20px"}} className='backGround_main'>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Thông tin đối tác">
            <InformationCustomer />
          </Tab>
          <Tab eventKey="profit" title="Tình hình giao dịch">
            <TransactionSituation />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
