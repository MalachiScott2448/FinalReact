const daoCommon = require('../common/daoCommon')

const usersDao = {
...daoCommon,
...require('../api/usersDao')
}

const menuDao = {
...daoCommon,
...require('../api/menuDao')
}

module.exports = {
usersDao, 
menuDao
}