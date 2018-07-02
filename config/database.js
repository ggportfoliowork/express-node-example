import mongoose from 'mongoose'

/**
 * Default db state
 * @type {{db: null}}
 */
let state = {
    db: null,
}

/**
 * Initiate Mongo connection
 * @param url
 * @param done
 * @returns {*}
 */
exports.connect = function(url, done) {
    if (state.db) return done()
    mongoose.connect(url, function(err, db) {
        if (err) return done(err)
        state.db = db
        done()
    })
}

/**
 * Return Mongo state
 * @returns {null}
 */
exports.get = function() {
    return state.db
}

/**
 * Kill Mongo connection
 * @param done
 */
exports.close = function(done) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}