const mongoose = require('mongoose');

const connectDB = ()=>{ mongoose.connect('mongodb://localhost:27017/lostfound')
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
})
}

module.exports = connectDB;
// mongodb+srv://ShubhamSaurav:testing1234@cluster0.sajvfjq.mongodb.net/?retryWrites=true&w=majority