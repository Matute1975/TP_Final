import dotenv from 'dotenv'
dotenv.config()

export default{
    PORT:process.env.PORT || 3030,
    //DB:process.env.ATLAS_URL,
    DB:process.env.LOCAL_URL
}