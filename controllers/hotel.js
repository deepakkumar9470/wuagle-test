import Hotel from "../models/Hotel.js";


export const addTable= async(req,res) =>{

    const {tableNo,
        satrt_Time
        ,close_Time
        ,closeDay} = req.body
    try {

        const table = new Hotel({
            tableNo,
            satrt_Time,
            close_Time,
            closeDay,
        })

        await table.save()
        res.status(201).json({
            status:  true,
            table
        })
        
    } catch (error) {
        console.log(error)
    }
}


export const getTable =async  (req,res) =>{
    const hrsago = new Date()
    const hrsahead = new Date()
    hrsago.setHours(hrsago.getHours() - 8 );
    hrsahead.setHours(hrsahead.getHours()  + 8 );

    const holiday = new Date().getDay()

    if(holiday === 6 || holiday === 0) return true;

  try {
    const table = await Hotel.findOne({
         $gt : hrsago(satrt_Time),
         $lt : hrsahead(close_Time),
         closeDay : holiday
    })
     console.log(hrsago)

     res.status(200).json({
        status :  true,
        table
     })
  } catch (error) {
     console.log(error)
  }
}
