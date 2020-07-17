import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import desiRoute from './routes/desi';
import userRoute from './routes/user';
import southIndianRoute from './routes/southIndian';
import italianRoute from './routes/italian';



const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(desiRoute);
app.use(userRoute);
app.use(southIndianRoute);
app.use(italianRoute);

const URI = "mongodb+srv://rahulraj:1308@cluster0-gghk7.mongodb.net/tastyroma-db?retryWrites=true&w=majority"

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then((con, err) => {
  if (con) {
    console.log('Connected to DB')
  } else {
    console.log(err)
  }
});



// const addDesiItemData = (req, res) => {

//   // DesiData.map(async  data => {
//   //   console.log(data);
//   //   await DesiItem.create(data)
//   // })}
//   for (let i = 0; i < DesiData.length; i++) {
//     console.log(i)
//     DesiItems.create(DesiData[i]);
//   }

// }
// addDesiItemData()



app.listen(4001, (err, res) => {
  if (!err) {
    console.log('server is ON !!');
  }
})