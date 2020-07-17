import Italian from '../models/italianMenuModel';

export const getIntalianMenuList = async (req, res)=>{
  try{
    const menus = await Italian.find();
    res.status(200).json({
      "message": "Success",
      data: menus
    })
  }catch(err){
    res.status(400).json({
      message: "Failure",
      errors: err
    })
  }
}

export const addItalianMenu = async (req, res)=>{
  const newMenu = await Italian.create(req.body);
  res.status(200).json({
    newMenu
  });
}