const {DB_USER,DB_PASSWORD} = process.env
console.log("MongoDB Username:", DB_USER);
console.log("MongoDB Password:", DB_PASSWORD);
const connectionStr = "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@cluster0.ujrhjed.mongodb.net/restroDB?compressors=zlib"
export { connectionStr }