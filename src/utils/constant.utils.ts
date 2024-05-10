interface Constant {
    MONGO_URL: any
    ACCESS_KEY: any
}

export const CONSTANT: Constant={
    MONGO_URL : process.env.MONGO_URL,
    ACCESS_KEY: process.env.ACCESS_KEY
}