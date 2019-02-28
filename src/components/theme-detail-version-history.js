/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

class ThemeDetailVersionHistory extends Component {

componentDidMount() {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
}
  render() {

    return (
      <div className="e-body">

        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/overview"><span>Overview</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/stockweight"><span>Stocks & Weights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/news"><span>News & Insights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/versions"><span>Version History</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="e-p-bottom-100 e-p-top-20" >
          <div className="container">
            <div className="row">
              <div className="col-12 e-m-bottom-20 ">
                <div className="d-flex justify-content-between e-td-vh-item-wrap e-p-bottom-20 e-p-top-20">
                  <div className="">
                    <p className="e-f-weight-500 e-m-0">MSCI’s new methodology may trigger 850 mn outlfow from equities</p>
                    <span className="e-s-txt">Jan 04, 2019</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="/" className="e-c-primary text-uppercase e-f-weight-600" data-toggle="modal" data-target="#vHistoryModal"><u>VIEW CHANGE</u></a>
                  </div>
                </div>
                <div className="d-flex justify-content-between e-td-vh-item-wrap e-p-bottom-20 e-p-top-20">
                  <div className="">
                    <p className="e-f-weight-500 e-m-0">MSCI’s new methodology may trigger 850 mn outlfow from equities</p>
                    <span className="e-s-txt">Jan 04, 2019</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="/" className="e-c-primary text-uppercase e-f-weight-600" data-toggle="modal" data-target="#vHistoryModal"><u>VIEW CHANGE</u></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* View History modal*/}
        <div className="modal fade" id="vHistoryModal" role="dialog" aria-labelledby="vHistoryModal Label" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div>
                <button type="button" className="close e-modal-close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body e-td-vh-poup">
                <div className="row">
                  <div className="col-7 e-p-bottom-50">
                    <div className="e-c-black e-p-bottom-20 e-font-18">Weightage changed in ‘Fertilizers & Agro Chemicals’ for performance</div>
                    <div className="e-c-grey e-s-txt e-f-weight-500 e-p-bottom-20">Updated on <span className="e-c-black">Jan 04,2019</span></div>

                    <div className="e-td-sw-table-head d-flex justify-content-between e-m-bottom-10">
                      <div className="e-c-black">Stocks & Segments</div>
                      <div className="e-c-black">Weightage( % )</div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Cement</div>
                      <div className="e-c-black e-f-weight-600">15.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Ambuja Cements Ltd</div>
                        <div className="e-c-black e-f-weight-500">15.00</div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Fertilizers & Agro Chemicals</div>
                      <div className="e-c-black e-f-weight-600">25.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Coromandel International Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Rallis India Pvt Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Cement</div>
                      <div className="e-c-black e-f-weight-600">15.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Ambuja Cements Ltd</div>
                        <div className="e-c-black e-f-weight-500">15.00</div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Fertilizers & Agro Chemicals</div>
                      <div className="e-c-black e-f-weight-600">25.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Coromandel International Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Rallis India Pvt Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 e-p-top-50 e-p-bottom-50">
                    <h5 className="e-sec-head e-c-black e-p-bottom-30">SEGMENT <span className="e-c-grey">COMPOSITION</span></h5>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> 
    ); 
  } 
}

export default ThemeDetailVersionHistory;
