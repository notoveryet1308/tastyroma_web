import SouthIndianModel from '../models/southIndianModel';

export const getSouthIndianMenu = async (req, res) => {
   try{
       const menus = await SouthIndianModel.find();
       res.status(200).json({
         message:"Success",
         data: menus
       })
   }catch(err){
     res.status(400).json({
       error: err
     })
   }
}