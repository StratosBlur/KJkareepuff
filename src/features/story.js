import React from 'react';
import image1 from '../assets/img/story1.jpg';
import image2 from '../assets/img/story3.jpg';

class Story extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="card col-lg-5 col-md-5 col-sm-5 story-text-content">
						<h3>ขวัญใจกะหรี่ปั๊ป</h3>
						<hr />
						<h4>เรื่องราว</h4>

						<p>“คนหนึ่งคน ก็สามารถเปลี่ยนแปลงบางสิ่งที่คาดไม่ถึงได้” เป็นแนวคิดหลักของเรา ว่าเราต้องเป็นผู้ที่เปลี่ยนแปลงภาพลักษณ์ “กะหรี่ปั๊บ” จากที่เป็นของฝาก ขนมทอดมันเยิ้ม ให้กลายเป็นขนมกินเล่นที่เป็นมิตรต่อสุขภาพ</p>
						<p>การผลิตของเราจะเป็นกระบวนการผลิตที่จะรักษาคุณค่าทางโภชนาการจากวัตถุดิบให้มากที่สุดและคำนึงถึงสารอาหารที่ส่งผลเสียต่อร่างกายหากได้รับมากเกินไป เช่น ไขมันจากน้ำมัน น้ำตาล</p>
						<p>นอกจากนี้สูตรแป้งและไส้ของเราก็คิดค้นมาเพื่อเป็นกะหรี่ปั๊ปที่ดีต่อสุขภาพโดยเฉพาะ</p>
						<p> - แป้ง : ข้าวกล้องงอก</p>
						<p> - ไส้ : อกไก่ ฟักทอง อะโวคาโด้ แปะก๊วย งาดำ กล้วยหอม ผสมกันกับซอสสูตรพิเศษเพื่อเพิ่มรสชาติความอร่อยไม่รู้ลืม</p>
						<p> ซึ่งวัตถุดิบในการผลิตไส้ของเรา มาจากกลุ่มเกษตรกรที่เราคัดสรรแล้วว่าได้มาตรฐานความสด สะอาด ปลอดสารพิษ เพื่อกระจายรายได้สู่ชุมชน ตามนโยบายของเราในการส่งเสริมความเป็นท้องถิ่น</p>


					</div>

					<div className="card col-lg-7 col-md-7 col-sm-7 story-image-content">
						<img src={image2}
							className="img-fluid img-story" alt="Storyimage" />
						<img src={image1}
							className="img-fluid img-story" alt="Storyimage" />
					</div>
				</div>
			</div>
		)
	}
}

export default Story;


