const con = require('../../config/dbconfig')

const dao = {
    findAll: (req, res)=> {
        con.execute(
            `select * from menu;`, 
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    }
                    else {
                        res.json(rows)
                    }
                }
                else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    findById: (req, res, id)=> {
        con.execute(
            `select * from menu where menu_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    }
                    else {
                        res.json(rows)
                    }
                }
                else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    sort: (req, res)=> {
        con.execute(
            `select * from menu order by item_name ASC;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    }
                    else {
                        res.json(rows)
                    }
                }
                else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    create: (req, res)=> {
        console.log(req.body)
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        }
        else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `insert into menu set ${fields.join(' = ?, ')} =?;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.json({
                            Last_id: dbres.insertId
                        })
                    }
                    else {
                        console.log ('DAO ERROR ', error)
                    }
                }
            )
        }
    }
}

module.exports = dao