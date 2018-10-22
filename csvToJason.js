const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')


const convertCsvToJson = (csvFilePath = './customer-data.csv', jsonFilePath = 'customer-data.json') => {
  console.log('Converting file ', csvFilePath)
  const newJson =
    csv()
    .on('done', () => console.log('Finished converting file.')) 
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      fs.writeFileSync(path.join(__dirname, jsonFilePath), JSON.stringify(jsonObj,null,2))
    })


  
}

convertCsvToJson(process.argv[2], process.argv[3]);