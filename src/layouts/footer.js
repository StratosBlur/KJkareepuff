import React from 'react';
class Footer extends React.Component {
  render() {
    return (
        <footer className="footer-content"> 
            <div class="text-center center-block ">
                <a href="https://www.facebook.com/KJkareepuff"><i class="fa fa-facebook-square fa-3x social"></i></a>
                <a href="#"><i class="fa fa-twitter-square fa-3x social"></i></a>
                <a href="#"><i class="fa fa-google-plus-square fa-3x social"></i></a>
                <a href="ติดต่อ@ขวัญใจกะหรี่ปั๊บ.ไทย"><i class="fa fa-envelope-square fa-3x social"></i></a>
            </div>

            <div class="footer-copyright text-center py-3">© 2018 สงวนลิขสิทธิ์:
                <a href="https://mdbootstrap.com/education/bootstrap/"> ขวัญใจกะหรี่ปั้บ.ไทย</a>
            </div>
        </footer>
        )
    }
}

export default Footer