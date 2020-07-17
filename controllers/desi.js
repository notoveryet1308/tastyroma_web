import DesiItem from '../models/desiItemsModel';
import DesiData from '../Desi'

export const getAllDesiItems = async (req, res) => {
  try {
    const data = await DesiItem.find();
    
    res.status(200).json({
      message: "Success",
      data
    })
  } catch (err) {
    res.status(400).json({
      error: err
    })
  }
}

// export const addDesiItemData = (req, res) => {

//   // DesiData.map(async  data => {
//   //   console.log(data);
//   //   await DesiItem.create(data)
//   // })}
//   for (let i = 0; i < DesiData.length; i++) {
//     console.log(i)
//     DesiItem.create(DesiData[i]);
//   }


//   res.send("Data Added");
// }