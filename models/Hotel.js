import mongoose from 'mongoose'



const HotelScheme = new mongoose.Schema({
  tableNo : {
    type:  Number,
    maxLength : 5
  },
  satrt_Time : {
    type:  Date,
    default : (new Date()).getTime()
  },
  close_Time : {
    type:  Date,
    default : (new Date()).getTime()
  },
  closeDay  : {
    type:  Date,
    default : (new Date()).getDay()
  }



}, {timestamps : true})


const Hotel = mongoose.model('Hotel', HotelScheme)

export default Hotel