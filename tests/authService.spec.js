const app = require('../app')
const request = require('supertest')(app)

describe('POST /auth/register', () => {
  it('should return 201 when the user is created', async () => {
    const response = await request.post('/auth/register').send({
      email: 'test@test.com',
      confirmPasword: '123456',
      password: '123456'
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.email).toBe('test@test.com')
  })
  it('should return 400 when email is invalid', async () => {
    const response = await request.post('/auth/register').send({
        email: 'test',
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')

  })

  it("should return 400 when passwords doesn't match", async () => {
    const response = await request.post('/auth/register').send({
      email: 'test@test.com',
      confirmPassword: '123456',
      password: '1234567'
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
   })
   it("should return 400 if password has less than 6 characters", async () => {
    const response = await request.post('/auth/register').send({
      email: 'test@test.com',
        confirmPassword: '123456',
        password: '123'
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
    })
})
