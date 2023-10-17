const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../JSONdata/userData.js')

describe('Post Request example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })
})