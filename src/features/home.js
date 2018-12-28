import React from 'react';
import DSCF3024 from '../assets/img/DSCF3024.jpg';
import menuchicken from '../assets/img/kareepuff-menu-chicken.jpg'
import menubanana from '../assets/img/kareepuff-menu-banana.jpg'
import menugingo from '../assets/img/kareepuff-menu-gingo.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img src={DSCF3024}  
              className="img-fluid" alt="Responsive" />
            </div>
          </div>

          <div className="row about-content">
            <div className="col-lg-6 col-lg-pull-6 col-md-6 col-md-pull-6 col-sm-12 col-sm-push-12 text-content">
            <img src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48966391_217629225839244_6526544312006606848_n.png?_nc_cat=111
                  &_nc_ht=scontent.fbkk7-2.fna&oh=f60686b8b5b505acb8b081d493947aa2&oe=5CCCA4A4" 
                  className="img-fluid" alt="Aboutimage"/>
            </div>

            <div className="col-lg-6 col-lg-pull-6 col-md-6 col-md-pull-6 col-sm-12 col-sm-pull-12 text-content ">
            <h4>โปรโมชั่น</h4>
                <p>คนหนึ่งคน ก็สามารถเปลี่ยนแปลงบางสิ่งที่คาดไม่ถึงได้” เป็นแนวคิดหลักของเรา ว่าเราต้องเป็นผู้ที่เปลี่ยนแปลงภาพลักษณ์ “กะหรี่ปั๊บ” จากที่เป็นของฝาก ขนมทอดมันเยิ้ม ให้กลายเป็นขนมกินเล่นที่เป็นมิตรต่อสุขภาพ</p>
                <br/>
                <a href="/เรื่องราว" className="btn btn-info" >เพิ่มเติม</a>
            </div>

          </div>

          <div className="row about-content">
            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menuchicken} 
                  className="img-fluid" alt="karee-img"/>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menubanana}
                  className="img-fluid" alt="karee-img"/>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menugingo}
                  className="img-fluid" alt="karee-img"/>
            </div>
          </div>
      </div>
    )
  }
}

export default Home;


