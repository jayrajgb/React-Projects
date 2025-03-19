const passwords = require('../models/passwords')

async function fetchAll(req, res) {
    try {
        const result = await passwords.find({})
        return res.json({ success: true, message: "Password Added!", response: result })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

async function addInfo(req, res) {
    try {
        const body = req.body
        if (!body.url || !body.username || !body.password) {
            console.log(body)
            return res.json({ success: false, message: "Details Incomplete!" })
        }
        if (body.password.length < 4) {
            return res.json({ success: false, message: "Please enter a strong password!" })
        }

        const createPassword = await passwords.create({
            url: body.url,
            username: body.username,
            password: body.password
        });

        return res.json({ success: true, message: "Password Added!", response: createPassword })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

async function updateInfo(req, res) {
    try {
        const body = req.body
        const data = await passwords.updateOne({ username: body.username }, body)
        return res.json({ success: true, message: "Password Updated!", response: data })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

async function deleteInfo(req, res) {
    try {
        const deleted = await passwords.deleteOne({ url: req.body.url })
        return res.json({ success: true, message: "Password Deleted!", response: deleted })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

async function deleteAll(req, res) {
    try {
        const deleted = await passwords.deleteMany({})
        return res.json({ success: true, message: "All Passwords Deleted!", response: deleted })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

module.exports = {
    addInfo,
    updateInfo,
    deleteInfo,
    deleteAll,
    fetchAll
}