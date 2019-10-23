module.exports.controller = (app) => {
    // get users page
    app.get('/users', (req, res) => {
        res.render('users', {title: 'Users', description: 'This is the description to all the users', extra: 'Thank you for being an esteemed user', king: 'Node is king!' });
    })
}