function validateCompanyChanges(req, res, next) {
    const { id, username, password, company_name, description } = req.body;
    if(username || password || id || 'user_type' in req.body ) {
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

module.exports = validateCompanyChanges;