const userController  = require('../modules/controller')
const simpleInterest = require('../modules/controller/simpleInterest')

const setupRoutes = (app) => {
    app.use('/api/v1/users', userController)
    app.use('/api/v1/simple-interest', simpleInterest)
}

module.exports.setupRoutes = setupRoutes