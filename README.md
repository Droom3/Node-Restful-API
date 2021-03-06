# **API User Guide**

|**Table of Contents:**|
|-|
|[Authentication Routes](#Authentication-Routes)|
|[User Routes](#User-Routes)|
|[Company Routes](#Company-Routes)|
|[Match Routes](#Match-Routes)|

### **Authentication Routes**

Server located at: https://dry-mesa-00229.herokuapp.com/

###  **User Registration**:

#### POST */api/register/user*

Creates a new user (who is a jobseeker) account.
Returns an object with user info.

Request:
```javascript
{
  username: "testinguser1", // string (required), must be unique
  password: "testing123!", // string (required) [ 8-20 total characters | min. 1 special character | min. 1 digit | min. 1 letter]
  user_type: 1, // boolean (required) [ must be a valid role id, 1 for job users or 0 for company]
  name: "Test User", // string (required)
  experience: "", // string (optional)
  industry: "", //string (optional)
  imgUrl: "" // string (optional)
}
```
Response:

```javascript
{
    id: 6,
    username: "testinguser5",
    user_type: true, // Boolean of 1
    name: "Test User",
    experience: "",
    industry: "",
    imgUrl: ""
}
```

###  **Company Registration**:

#### POST */api/register/company*

Creates a new company account.
Returns an object with company info.

Request:
```javascript
{
  username: "somecompany", // string (required), must be unique
  password: "testing123!", // string (required) [ 8-20 total characters | min. 1 special character | min. 1 digit | min. 1 letter]
  user_type: 0, // boolean (required) [ must be a valid role id, 1 for job users or 0 for company]
  company_name: "Some Company", // string (required), must be unique
  description: "This is a placeholding company" // string (required)
  industry: "", // string (optional)
  mission_statement: "", //string (optional)
  imgUrl: "" // string (optional),
  openPositions: "" // string (optional)
}
```
Response:

```javascript
{
    id: 12,
    username: "somecompany",
    user_type: false, // Boolean of 0
    company_name: "Some Company",
    description: "This is a placeholding company",
    industry: "",
    mission_statement: "",
    imgUrl: "",
    openPositions: ""
}
```

### **User/Company Login** 
[back to top](#api-user-guide)
#### POST */api/login*

Validates user's or company's credentials.
Returns an object with user info and a JSON web token.

Request:
```javascript
{
  username: "firstnamelastname", // string (required)
  password: "testing123!", // string (required)
}
```

Response:
```javascript
{
    "user": {
        "id": 1,
        "username": "jonathanchen",
        "password": "$2a$10$YPwUvaR8euT0fxQDCXPKBerk8YFLZWj.y.cuFB4UAFI3ZxCdKJiqW",
        "user_type": true,
        "name": "Jonathan Chen",
        "experience": "Buidling some terminal game from Java",
        "industry": "Technology",
        "imgUrl": ""
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb25hdGhhbmNoZW4iLCJ1c2VyX3R5cGUiOnRydWUsImlhdCI6MTU4MDgzODEwOCwiZXhwIjoxNTgwODQxNzA4fQ.9OM5MC6Ekel0H3ibvQs6ceX-SgUEPqs7IbFScrZ9q-M"
}
```

## **User Routes**
[back to top](#api-user-guide)

#### GET *api/users*

Returns an array of users(jobseekers). Available to all users.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "id": 1,
        "username": "jonathanchen",
        "user_type": true,
        "name": "Jonathan Chen",
        "experience": "Buidling some terminal game from Java",
        "industry": "Technology",
        "imgUrl": ""
    },
    {
        "id": 2,
        "username": "jonahaitchison",
        "user_type": true,
        "name": "Jonah Aitchison",
        "experience": "Sleep in the day away, coding and building things",
        "industry": "Technology",
        "imgUrl": ""
    },
    {
        "id": 3,
        "username": "devindias",
        "user_type": true,
        "name": "Devin Dias",
        "experience": "Building lots of servers",
        "industry": "Technology",
        "imgUrl": ""
    }
]
```

#### GET *api/users/:id*

Return a user object at the specified id.

Request:
```javascript
// No input needed
```
Response:
```javascript
    {
        "id": 1,
        "username": "jonathanchen",
        "user_type": true,
        "name": "Jonathan Chen",
        "experience": "Buidling some terminal game from Java",
        "industry": "Technology",
        "imgUrl": ""
    },
```
#### PUT *api/users/:id*

Updating an user profile. You must be logged in as owner of the user account. You cannot modify id, username, password, or user_type. Only required field is name. Other fields are optional.

Request:
```javascript
{
	"name": "Jonathan Chen" // required
}
```
Response:
```javascript
{
    "id": 1,
    "username": "jonathanchen",
    "user_type": true,
    "name": "Jonathan Chen",
    "experience": "Buidling some terminal game from Java",
    "industry": "Technology",
    "imgUrl": ""
}
```

## **Company Routes**
[back to top](#api-user-guide)

#### GET *api/companies*

Returns an array of companies. Available to all users.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "id": 1,
        "username": "lambdaschool",
        "user_type": false,
        "company_name": "Lambda School",
        "description": "Testing a random description here",
        "industry": "Education",
        "mission_statement": "Revolutionazing education. Your new career starts here.",
        "imgUrl": "",
        "openPositions": "Teachers, Developers"
    },
    {
        "id": 2,
        "username": "apple",
        "user_type": false,
        "company_name": "Apple Inc",
        "description": "Creating the best products for you",
        "industry": "Technology",
        "mission_statement": "Make your wallet bleed.",
        "imgUrl": "",
        "openPositions": "Developers, Desginers"
    },
    {
        "id": 3,
        "username": "google",
        "user_type": false,
        "company_name": "Google Inc",
        "description": "Testing a random description here, another one",
        "industry": "Technology",
        "mission_statement": "Organize the world's information.",
        "imgUrl": "",
        "openPositions": "Engineers"
    }
]
```

#### GET *api/companies/:id*

Return a company object at the specified id

Request:
```javascript
// No input needed
```
Response:
```javascript
{
    "id": 1,
    "username": "lambdaschool",
    "user_type": false,
    "company_name": "Lambda School",
    "description": "Testing a random description here",
    "industry": "Education",
    "mission_statement": "Revolutionazing education. Your new career starts here.",
    "imgUrl": "",
    "openPositions": "Teachers, Developers"
}
```

#### PUT *api/companies/:id*

Updating a company profile. You must be logged in as owner of the company. Only company_name and description are required, other fields are optional. You cannot modify id, username, password, or user_type

Request:

```javascript
{
    company_name: "Test Company", // required
    description: "Just another company for edit testing", // required
}
```
Response:
```javascript
{
    company_name: "Test Company", 
    description: "Just another company for edit testing", 
    industry: "Education", 
    mission_statement: "Revolutionazing education. Your new career starts here.", 
    imgUrl: "", 
    openPositions: "Teachers, Developers" 
```

## **Match Routes**
[back to top](#api-user-guide)

#### GET *api/matches*

Return all liked users or companies associated with the logged in account, identified by the token.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "company_id": 2,
        "company_name": "Apple Inc",
        "company_description": "Creating the best products for you"
    },
    {
        "company_id": 3,
        "company_name": "Google Inc",
        "company_description": "Testing a random description here, another one"
    }
]
```

#### POST *api/matches/:id*

Token will first identify the user or company making this request. This request will add the company or user specified by the id in the URL to the liked list of the logged in user or company. For example, User with id=1 submits a POST request to api/matches/1 will add company with id=1 to their liked list. The request will return a list of all liked users/companies after the adding finishes.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "company_id": 1,
        "company_name": "Lambda School",
        "company_description": "Redefining education"
    },
    {
        "company_id": 2,
        "company_name": "Apple Inc",
        "company_description": "Creating the best products for you"
    },
    {
        "company_id": 3,
        "company_name": "Google Inc",
        "company_description": "Testing a random description here, another one"
    }
]
```

#### DELETE *api/matches/:id*

Delete a user/company from liked list.

Request:
```javascript
// No input needed
```
Response:
```javascript
// Will return an integer 1
```