import mongoose from 'mongoose'
import config from './app/config'
import app from './app'
import express from 'express'
import cors from 'cors'

// parser
app.use(express.json())
app.use(cors())

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`server is running on  :  ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()
