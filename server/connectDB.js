const mongoose = require('mongoose');

const connectDB = ()=>{ mongoose.connect('mongodb+srv://ShubhamSaurav:testing1234@cluster0.sajvfjq.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
})
}

module.exports = connectDB;
