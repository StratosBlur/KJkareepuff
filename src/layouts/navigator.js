import React from 'react';
import Login from '../features/login'
class Navigator extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">ขวัญใจกะหรี่ปั๊ป</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
          <li className="nav-item active">
            <a className="nav-link" href="/เรื่องราว">เรื่องราว <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/สินค้า">สินค้า</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ร่วมธุรกิจกับเรา">ทำธุรกิจกับเรา</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="modal" data-target="#loginModal">เข้าสู่ระบบ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                  <span className="fa fa-shopping-cart"></span> 
            </a>
        </li>
        </ul>
        </div>
        {/* Modal */}
        <Login/>
      </nav>
    )
  }
}

export default Navigator