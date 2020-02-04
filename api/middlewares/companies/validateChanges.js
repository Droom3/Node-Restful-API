function validateChanges(req, res, next) {
    const { id, username, user_type, password, company_name, description } = req.body;
    if(Object.entries(id) || Object.entries(username) || Object.entries(user_type) || Object.entries(password)) {
        res.status(400).json({ message: 'you cannot modify id, username, user_type, or password' })
    }
    if(!Object.entries(company_name) || !Object.entries(description)) {
        res.status(400).json({ message: 'company name and description are needed' })
    }
    if(!company_name.length || !description) {
        res.status(400).json({ message: 'company name description must not be blank' })
    }
    next();
}

module.exports = validateChanges;