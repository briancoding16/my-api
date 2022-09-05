const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp);

const app = require('../index').app


describe('Suite de pruebas e2e para el curos', ()=>{
  it('esperamos un hola mundo', (done)=>{
    chai.request(app)
        .get('/')
        .end((err, res)=>{
          console.log('A')
          chai.assert.equal(res.text, 'Hola mundo')
          done()
        })
    console.log('B')
  })
})
