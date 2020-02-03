# **API User Guide**

|**Table of Contents:**|
|-|
|[Authentication Routes](#Authentication-Routes)|
|[Jobseeker Routes](#Jobseeker-Routes)|
|[Company Routes](#Company-Routes)|
|[Job Routes](#Job-Routes)|

### **Authentication Routes**

Server located at: https://shrouded-taiga-50423.herokuapp.com/

###  **User Registration**:

#### POST */api/register*

Creates a new user account.
Returns an object with user info.

Request:
```javascript
{
  username: "testinguser1", // string (required) 
  password: "testing123!", // string (required) [ 8-20 total characters | min. 1 special character | min. 1 digit | min. 1 letter]
  user_type: 1 // integer (required) [ must be a valid role id, 1 for jobseeker or 2 for company]
}
```
Response:

```javascript
{
    "id": 9,
    "username": "testinguser1",
    "user_type": 1
}
```

### **User Login** 
[back to top](#api-user-guide)
#### POST */api/login*

Validates user's credentials.
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
        "password": "$2a$10$TAfh8Lz3i8HiSCdmwA0bCuWhxKy4qxQbBE.AsyTF8aqdlmWEpyXb.",
        "user_type": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb25hdGhhbmNoZW4iLCJ1c2VyX3R5cGUiOjEsImlhdCI6MTU4MDczOTA5MiwiZXhwIjoxNTgwNzQyNjkyfQ.ytsHPvIFDlC0DxpZBY1meYnAEzvlwf1ml6VquV5dNRk"
}
```

## **Jobseeker Routes**
[back to top](#api-user-guide)

#### GET *api/jobseekers*

Returns an array of jobseekers. Available to all users.

Request:
```javascript
// No input needed
```
Response:
```javascript
// N/A
```

#### POST *api/jobseekers*

Creates a new jobseeker profile.
Returns the newly created profile

Request:
```javascript
// N/A
```
Response:
```javascript
// N/A
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
// N/A
```

#### POST *api/companies*

Creates a new company profile.
Returns the newly created profile

Request:
```javascript
// N/A
```
Response:
```javascript
// N/A
```

## **Job Routes**
[back to top](#api-user-guide)

#### GET *api/jobs*

Returns an array of jobs across the system. Available to all users.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
    {
        "id": 1,
        "title": "Assistant Instructor",
        "description": "Helps students with web dev materials",
        "salary": "65000 usd/year",
        "company_id": 4
    },
    {
        "id": 2,
        "title": "Software Engineer I",
        "description": "You will be using Python to work on projects",
        "salary": "135000 usd/year",
        "company_id": 5
    },
    {
        "id": 3,
        "title": "Tech Lead",
        "description": "A typical tech lead",
        "salary": "247000 usd/year",
        "company_id": 5
    },
    {
        "id": 4,
        "title": "UI Designer",
        "description": "Designing awesome features",
        "salary": "97500 usd/year",
        "company_id": 5
    },
    {
        "id": 5,
        "title": "Data Scientist",
        "description": "Design statistical models to bring data to life",
        "salary": "217500 usd/year",
        "company_id": 6
    },
    {
        "id": 6,
        "title": "Machine Learning Engineer",
        "description": "Using big data to change lives",
        "salary": "177500 usd/year",
        "company_id": 6
    }
]
```