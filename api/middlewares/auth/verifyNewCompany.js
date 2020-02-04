async function verifyNewCompany(req, res, next){
    const { username, password, user_type, company_name, description } = req.body;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[`~!@#$%^&*()_=<+>?=.,]).{8,20}$/i;

    if(!Object.entries(req.body).length) {
        return res.status(400).json({ message: 'invalid action, you must provide new user credentials' })
    }
    if(!username || !password || !company_name || !description) {
        return res.status(400).json({ message: 'you must provide username, password, company name, and description' })
    }
    if(!username.length || !password.length || !company_name.length || !description.length) {
        return res.status(400).json({ message: 'username, password, company name, and description must not be blank' })
    }
    if(Boolean(user_type)===true) {
        return res.status(400).json({ message: 'you are not a company user '})
    }
    if(!passwordPattern.test(password)) {
        return res.status(400).json({ message: 'password must include a number, special character, and be between 8 and 20 characters' });
    }
    next();
}

module.exports = verifyNewCompany;