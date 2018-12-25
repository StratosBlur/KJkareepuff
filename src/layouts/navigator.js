import React from 'react';
class Navigator extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ขวัญใจกะหรี่ปั๊ป</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
          <li className="nav-item active">
            <a className="nav-link" href="#">เรื่องราว <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">สินค้า</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">โปรโมชั่น</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ทำธุรกิจกับเรา</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">เข้าสู่ระบบ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
                  <span class="fa fa-shopping-cart"></span> 
            </a>
        </li>
        </ul>
        </div>
      </nav>
    )
  }
}

export default Navigator