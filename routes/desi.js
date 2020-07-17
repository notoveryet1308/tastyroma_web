import express from 'express';
import {
  getAllDesiItems,
  addDesiItemData
} from '../controllers/desi';
const Route = express.Router();

Route.get('/desi', getAllDesiItems);
// Route.get('/add-data', addDesiItemData)

export default Route;