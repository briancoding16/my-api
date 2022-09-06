const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp);

const url = 'http://localhost:3000'




describe('update the days of country with id 1: ',()=>{
  it('should update the number of days', (done) => {
  chai.request(url)
  .patch('/api/v1/products/20')
  .end( function(err,res){
  console.log(res.body)
  expect(res.body).to.have.property('price').to.be.equal(20);
  expect(res).to.have.status(200);
  done();
  });
  });
 });







// describe('Inserte el nombre y el precio', ()=>{
//   it('Esperamos un name y un price', (done)=>{
//     chai.request(url)
//     .post('/api/v1/products')
//     .send({name:'Teclado', price:200})
//     .end((err, res)=>{
//       console.log(res.body)
//       expect(res).to.have.status(200)
//       done()
//     })
//   })
// })








// describe('Suite de pruebas e2e para el curos', ()=>{
//   it('esperamos un hola mundo', (done)=>{
//     chai.request('http://localhost:3000')
//         .get('/')
//         .end((err, res)=>{
//           console.log('A')
//           chai.assert.equal(res.status(), 200)
//           done()
//         })
//     console.log('B')
//   })
// })


