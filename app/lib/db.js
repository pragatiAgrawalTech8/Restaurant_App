const {username,password} = process.env
const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.ujrhjed.mongodb.net/restroDB?compressors=zlib"
export { connectionStr }