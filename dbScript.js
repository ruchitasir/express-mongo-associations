let db = require('./models')

db.Book.create({
    title: 'The Windup Bird Chronicle ',
    pages: 400,
    writer: '5ebc696b2337d765212f0f0f'
})
.then(()=>{
    console.log('created successfully')
   
})
.catch(err=>{
    console.log('error',err)
 })
.finally(()=>{
    process.exit()
})


/* db.Author.create({
    firstname: 'Theodore',
    lastname: 'Seuss',
    genre: 'Children',
    address:{
        street: '5678 Fake lane',
        city: 'Seattle',
        state: 'WA',
        zip: 98102
    }
}).then(()=>{
    process.exit()
})
.catch(err=>{
    console.log('error',err)
    process.exit()
}) */

