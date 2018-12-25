import React from 'react';

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // choosedBox: null
        }
        // this.toggleChange = this.toggleChange.bind(this)
    }
    
    // toggleChange(event){
    //     const choosedBox = this.state.choosedBox
    //     let index
    
    //     if (event.target.checked) {
    //       choosedBox = event.target.value
    //     } else {
    //       choosedBox = null
    //     }
    
    //     this.setState({ choosedBox: choosedBox })
    //     console.log(this.state.choosedBox)
    // }
  render() {
    return (
        <div className="container">
            <h2>เลือกขนาดที่คุณต้องการ</h2>
            <br />
            <div className="row">
                {/* {this.state.serviceArray.filter((service,index) => service.name !== 'return' && service.name !== 'pickUp')
                .map((service ,index) =>  */}
                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                  <div class="grid-two imageandtext">
                    <div class="imageandtext image_grid">
                      <label for="box1">
                        <img className="img-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                        &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                      </label>
                        <input id="box1" type="checkbox" value="box1" data-toggle="modal" data-target="#choose-flavor"/>
                      <div class="caption"></div>
                    </div>
                  </div>
                </div>   
   
            </div>

        <div className="modal fade" id="choose-flavor" role="dialog">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
              <p>Order detail</p>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <div class="grid-two imageandtext">
                        <div class="imageandtext image_grid">
                            <label for="box1">
                            <img className="img-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                                &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                            </label>
                            <input id="box1" type="checkbox" value="box1" />
                            <div class="caption"></div>
                        </div>
                    </div>
                </div>   
                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <div class="grid-two imageandtext">
                        <div class="imageandtext image_grid">
                            <label for="box1">
                            <img className="img-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                                &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                            </label>
                            <input id="box1" type="checkbox" value="box1" />
                            <div class="caption"></div>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <div class="grid-two imageandtext">
                        <div class="imageandtext image_grid">
                            <label for="box1">
                            <img className="img-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                                &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                            </label>
                            <input id="box1" type="checkbox" value="box1" />
                            <div class="caption"></div>
                        </div>
                    </div>
                </div> 
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>
          </div>
        </div>

        </div>
        )
    }
  }
  
//   export default Order;