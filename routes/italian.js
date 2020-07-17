import express from 'express';
import {getIntalianMenuList, addItalianMenu} from './../controllers/italian';
const Router = express.Router();

Router.get('/italian', getIntalianMenuList);
Router.post('/add-italian-menu', addItalianMenu);

export default Router;