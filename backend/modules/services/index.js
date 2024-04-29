const repo = require('../repo')


const getAllUsers = async ( column_name, column_value ) => {
    const data = await repo.getAllUsers(column_name, column_value);
    return data
}

module.exports.getAllUsers = getAllUsers