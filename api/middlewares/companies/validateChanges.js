function validateChanges(req, res, next) {
    const { id, username, password, user_type, company_name, description } = req.body;
    if(username || password || id || user_type) {
        return res.status(400).json({ message: 'you cannot modify id, username, user_type, or password' })
    }
    if(!Object.entries(company_name) || !Object.entries(description)) {
        return res.status(400).json({ message: 'company name and description are needed' })
    }
    if(!company_name.length || !description) {
        return res.status(400).json({ message: 'company name description must not be blank' })
    }
    else {
        next();
    }
}

module.exports = validateChanges;