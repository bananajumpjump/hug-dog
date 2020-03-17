import React from 'react'
import $ from 'jquery'
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../css/member/member-info.scss'
import MemberSidebar from '../../components/member/member-sidebar'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'WTF',
      text: '222',
    }
    console.log('constrctor')
  }

  componentDidMount() {
    //需要搭配箭頭函式才能使用list
    $('.nav-item').click(function() {
      let effect = $(this).data('effect')
      console.log(effect)
      switch (effect) {
        case 'show1':
          $('#content1').fadeIn()
          $('#content2').fadeOut()
          $('#content3').fadeOut()
          break
        case 'show2':
          $('#content1').fadeOut()
          $('#content2').fadeIn()
          $('#content3').fadeOut()
          break
        case 'show3':
          $('#content1').fadeOut()
          $('#content2').fadeOut()
          $('#content3').fadeIn()
          break
      }
      $('.nav-link').removeClass('active')
      $(this)
        .find('a')
        .addClass('active')
    })
  }
  render() {
    return (
      <div className="member-info d-flex">
        <div className="member-content d-flex row container">
          <div className="member-sidebar">
            <Nav>
              <Nav.Link className="member-sidebar-text" href="/member">
                <img
                  src={require('../../images/member/paws-m.png')}
                  alt="Background"
                />
                首頁
              </Nav.Link>
              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-info"
              >
                <img
                  src={require('../../images/member/paws-m.png')}
                  alt="Background"
                />
                個人資訊
              </Nav.Link>

              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-item"
              >
                <img
                  src={require('../../images/member/paws-m.png')}
                  alt="Background"
                />
                商品查詢
              </Nav.Link>
              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-service"
              >
                <img
                  src={require('../../images/member/paws-m.png')}
                  alt="Background"
                />
                服務查詢
              </Nav.Link>
              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-activity"
              >
                <img
                  src={require('../../images/member/paws-m.png')}
                  alt="Background"
                />
                活動查詢
              </Nav.Link>
            </Nav>
          </div>
          <div class=" wrapper">
            <ul class="nav nav-tabs">
              <li class="nav-item" id="pokemon1" data-effect="show1">
                <Link class="nav-link active" to="#">
                  個人資訊
                </Link>
              </li>
              <li class="nav-item" id="pokemon2" data-effect="show2">
                <Link class="nav-link" to="#">
                  狗狗資訊
                </Link>
              </li>
            </ul>
            <div class="tab-content content" id="content1">
              <div>
                <h3>
                  個人資訊
                  <br />
                </h3>
                <div class="row">
                  <div class="col-md-8">
                    <div class="card card-width">
                      <div class="card-body">
                        <form
                          name="myForm"
                          method="POST"
                          action="dog-updateEdit.php"
                          enctype="multipart/form-data"
                        >
                          <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <td class="text-right">個人1</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dId"
                                    value="1"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗姓名</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dName"
                                    value="Sunny"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">主人編號</td>
                                <td>
                                  <input
                                    type="text"
                                    name="mId"
                                    value="m001"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗性別</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dGender"
                                    value="girl"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗年紀</td>
                                <td>
                                  <input
                                    placeholder="歲"
                                    type="text"
                                    name="dYear"
                                    value="6"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    placeholder="月"
                                    type="text"
                                    name="dMonth"
                                    value="2"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗體重</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dWeight"
                                    class="form-control"
                                    value="4"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗資訊</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dInfo"
                                    class="form-control"
                                    value=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td class="" colspan="6">
                                  <button
                                    href="./member-updateEdit.php"
                                    class="btn btn-sm btn-danger"
                                  >
                                    <i class="fa fa-trash"></i> 修改
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div>
                <img src="images/001.png" alt="" />
              </div>
            </div>
            <div class="tab-content content" id="content2">
              <div>
                <h3>
                  狗狗資訊 <br />
                </h3>
                <div class="row">
                  <div class="col-md-8">
                    <div class="card card-width">
                      <div class="card-body">
                        <form
                          name="myForm"
                          method="POST"
                          action="dog-updateEdit.php"
                          enctype="multipart/form-data"
                        >
                          <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <td class="text-right">狗狗編號</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dId"
                                    value="1"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗姓名</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dName"
                                    value="Sunny"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">主人編號</td>
                                <td>
                                  <input
                                    type="text"
                                    name="mId"
                                    value="m001"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗性別</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dGender"
                                    value="girl"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗年紀</td>
                                <td>
                                  <input
                                    placeholder="歲"
                                    type="text"
                                    name="dYear"
                                    value="6"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    placeholder="月"
                                    type="text"
                                    name="dMonth"
                                    value="2"
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗體重</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dWeight"
                                    class="form-control"
                                    value="4"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="text-right">狗狗資訊</td>
                                <td>
                                  <input
                                    type="text"
                                    name="dInfo"
                                    class="form-control"
                                    value=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td class="" colspan="6">
                                  <button
                                    href="./member-updateEdit.php"
                                    class="btn btn-sm btn-danger"
                                  >
                                    <i class="fa fa-trash"></i> 修改
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div>
                <img src="images/004.png" alt="" />
              </div>
            </div>
            <div class="tab-content border content" id="content3">
              <div>
                <h3>
                  小龜寶可夢 <br />
                </h3>
                甲殼的作用不僅是用來保護自己，圓潤的外形和表面的溝槽會減少水的阻力，使牠能夠快速地游泳。
                <br />
                <br />
              </div>
              <div>
                <img src="images/007.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
