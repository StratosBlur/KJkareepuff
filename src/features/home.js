import React from 'react';
import DSCF3024 from '../assets/img/DSCF3024.jpg';
import menuchicken from '../assets/img/kareepuff-menu-chicken.jpg'
import menubanana from '../assets/img/kareepuff-menu-banana.jpg'
import menugingo from '../assets/img/kareepuff-menu-gingo.jpg'
import menuavocado from '../assets/img/kareepuff-menu-avocado.jpg'
import menupumpkin from '../assets/img/kareepuff-menu-pumpkin.jpg'
import menusesame from '../assets/img/kareepuff-menu-sesame.jpg'
import story_1 from '../assets/img/0001.jpg'
import story_2 from '../assets/img/0002.jpg'
import story_3 from '../assets/img/0003.jpg'

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
              <div class="carousel slide carousel-fade" data-interval="2000" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={story_1} 
                      className="img-fluid" alt="story-image1"/>
                  </div>
                  <div class="carousel-item">
                    <img src={story_2} 
                      className="img-fluid" alt="story-image2"/>
                  </div>
                  <div class="carousel-item">
                    <img src={story_3} 
                      className="img-fluid" alt="story-image3"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-lg-pull-6 col-md-6 col-md-pull-6 col-sm-12 col-sm-pull-12 text-content ">
            <h4>เรื่องราว</h4>
                <p>คนหนึ่งคน ก็สามารถเปลี่ยนแปลงบางสิ่งที่คาดไม่ถึงได้” เป็นแนวคิดหลักของเรา ว่าเราต้องเป็นผู้ที่เปลี่ยนแปลงภาพลักษณ์ “กะหรี่ปั๊บ” จากที่เป็นของฝาก ขนมทอดมันเยิ้ม ให้กลายเป็นขนมกินเล่นที่เป็นมิตรต่อสุขภาพ</p>
                <br/>
                <a href="/เรื่องราว" className="btn btn-info" >เพิ่มเติม</a>
            </div>

          </div>

          <div className="row about-content">
            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menuchicken} 
                  className="img-fluid" alt="karee-img"/>
              <div class="carousel-caption product-caption">
                <h1 class="text-dark">อกไก่</h1>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menubanana}
                  className="img-fluid" alt="karee-img"/>
              <div class="carousel-caption product-caption">
                <h1 class="text-dark">กล้วย</h1>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menugingo}
                  className="img-fluid" alt="karee-img"/>
              <div class="carousel-caption product-caption">
                <h1 class="text-dark">แปะก๊วย</h1>
              </div>
            </div>
          </div>

          <div className="row about-content">
            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menuavocado} 
                  className="img-fluid" alt="karee-img"/>
              <div class="carousel-caption product-caption">
                <h1 class="text-dark">อะโวคาโด</h1>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menupumpkin}
                  className="img-fluid" alt="karee-img"/>
              <div class="carousel-caption product-caption">
                <h1 class="text-dark">ฟักทอง</h1>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
              <img src={menusesame}
                  className="img-fluid" alt="karee-img"/>
            <div class="carousel-caption product-caption">
                <h1 class="text-dark">งาดำ</h1>
              </div>
            </div>
          </div>

      </div>
    )
  }
}

export default Home;


