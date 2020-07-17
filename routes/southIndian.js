import express from 'express';
import {getSouthIndianMenu} from '../controllers/southIndian';
const Router = express.Router();

Router.get('/south-indian', getSouthIndianMenu);

export default Router;