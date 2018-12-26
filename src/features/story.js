import React from 'react';

class Story extends React.Component {
  render() {
    return (
        <div className="container">
            <div className="row story-content">
                <div className="col-lg-5 col-md-5 col-sm-5 story-text-content">
                    <h2>ขวัญใจกะหรี่ปั๊ป</h2>
                    <hr/>
                    <h3>เรื่องราว</h3>

                    <h5>“คนหนึ่งคน ก็สามารถเปลี่ยนแปลงบางสิ่งที่คาดไม่ถึงได้” เป็นแนวคิดหลักของเรา ว่าเราต้องเป็นผู้ที่เปลี่ยนแปลงภาพลักษณ์ “กะหรี่ปั๊บ” จากที่เป็นของฝาก ขนมทอดมันเยิ้ม ให้กลายเป็นขนมกินเล่นที่เป็นมิตรต่อสุขภาพ</h5>
                    <h5>การผลิตของเราจะเป็นกระบวนการผลิตที่จะรักษาคุณค่าทางโภชนาการจากวัตถุดิบให้มากที่สุดและคำนึงถึงสารอาหารที่ส่งผลเสียต่อร่างกายหากได้รับมากเกินไป เช่น ไขมันจากน้ำมัน น้ำตาล</h5>
                    <h5>นอกจากนี้สูตรแป้งและไส้ของเราก็คิดค้นมาเพื่อเป็นกะหรี่ปั๊ปที่ดีต่อสุขภาพโดยเฉพาะ</h5>
                    <h5> - แป้ง : ข้าวกล้องงอก</h5>
                    <h5> - ไส้ : อกไก่ ฟักทอง อะโวคาโด้ แปะก๊วย งาดำ กล้วยหอม ผสมกันกับซอสสูตรพิเศษเพื่อเพิ่มรสชาติความอร่อยไม่รู้ลืม</h5>
                    <h5> ซึ่งวัตถุดิบในการผลิตไส้ของเรา มาจากกลุ่มเกษตรกรที่เราคัดสรรแล้วว่าได้มาตรฐานความสด สะอาด ปลอดสารพิษ เพื่อกระจายรายได้สู่ชุมชน ตามนโยบายของเราในการส่งเสริมความเป็นท้องถิ่น</h5>


                </div>
                
                <div className="col-lg-7 col-md-7 col-sm-7 story-image-content">
  
                        <img src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48966391_217629225839244_6526544312006606848_n.png?_nc_cat=111
                        &_nc_ht=scontent.fbkk7-2.fna&oh=f60686b8b5b505acb8b081d493947aa2&oe=5CCCA4A4" 
                        className="img-fluid img-story" alt="Story image"/>

                        <img src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48966391_217629225839244_6526544312006606848_n.png?_nc_cat=111
                        &_nc_ht=scontent.fbkk7-2.fna&oh=f60686b8b5b505acb8b081d493947aa2&oe=5CCCA4A4" 
                        className="img-fluid img-story" alt="Story image"/>

                </div>
            </div>
        </div>
    )
  }
}

export default Story;


