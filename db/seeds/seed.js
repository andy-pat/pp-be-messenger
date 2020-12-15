const { userData } = require('../data/users')
const { userMessages } = require('../data/messages.js')

exports.seed = function (knex) {
    return knex.migrate
    .rollback()
    .then(() => {
        return knex.migrate.latest();
    }).then (() => {
        return knex
        .insert(userData)
        .into('users')
        .returning('*')
    }).then((userRows) => {
        return knex
        .insert(userMessages)
        .into('messages')
        .returning('*')
    })
}