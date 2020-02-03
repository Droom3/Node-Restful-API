# **API User Guide**

|**Table of Contents:**|
|-|
|[Authentication Routes](#Authentication-Routes)|

### **Authentication Routes**

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