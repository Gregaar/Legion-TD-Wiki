import mongoose from "mongoose";

const connect = (url: string) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

export default connect;