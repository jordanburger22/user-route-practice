const express = require('express')
const authRouter = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')



// Callbacks

authRouter.post('/signup', (req, res, next) => {
    // 1. Use the User model to find a user with the provided username (case-insensitive).
        // 2. Handle any error that might occur during the database query.
        // 3. Check if a user with the provided username already exists.
            // 4. If the user exists, set the HTTP status to 403 (Forbidden).
            //    Create a new error and send it to the error handler.

        // 5. If the user does not exist:
            //    - Proceed to create a new user instance using the provided request body.
    
            // 6. Save the new user to the database.
                // 7. Handle any error that might occur during the save operation.
    
                // 8. Generate a token for the new user using the 'jsonwebtoken' library and the user's data.
              
                // 9. Send a response:
                //    - Set status to 201 (Created).
                //    - Send a response containing the generated token and user information (excluding the password).
});

authRouter.post('/login', (req, res, next) => {
    // 1. Use the User model to find a user with the provided username (case-insensitive).
        // 2. Handle any error that might occur during the database query.
        // 3. Check if the user is not found:
            //    - Set the HTTP status to 403 (Forbidden).
            //    - Create a new error for incorrect username or password and send it to the error handler.

        // 4. If the user is found:
            //    - Check the provided password using the 'checkPassword' method on the user model.
            // 5. If there is an error during password checking:
                //    - Set the HTTP status to 403 (Forbidden).
                //    - Create a new error for incorrect username or password and send it to the error handler.
            // 6. If the password does not match:
                //    - Set the HTTP status to 403 (Forbidden).
                //    - Create a new error for incorrect username or password and send it to the error handler.

            // 7. If the password is correct:
                //    - Generate a token for the authenticated user using the 'jsonwebtoken' library and the user's data.
                // 8. Send a response:
                //    - Set status to 200 (OK).
                //    - Send a response containing the generated token and user information (excluding the password).
});



// Async/Await

authRouter.post('/async/signup', async (req, res, next) => {
    try {
        // 1. Check if user already exists in the database.
        //    - Use the User model to query the database.
        //    - If found, set status and create an error for duplicate username.
        
        // 2. If user doesn't exist:
        //    - Proceed to create a new user instance using the provided request body.
        
        // 3. Save the new user to the database.
        
        // 4. Generate a token for the user:
        //    - Utilize the 'jsonwebtoken' library and the user's data (excluding the password).
        
        // 5. Send a response:
        //    - Set status to 201 (Created).
        //    - Send a response containing the generated token and user information (excluding the password).
        
    } catch (err) {
        // 6. Handle errors:
        //    - Set status to 500 (Internal Server Error).
        //    - Send the error to the error handler for further processing.
    }
})


userRouter.post('/async/login', async (req, res, next) => {
    try {
        // 1. Find the user in the database:
        //    - Query the User model based on the provided username (case-insensitive).
        //    - If the user is not found, set status and create an error for incorrect username or password.
        
        // 2. Check the provided password:
        //    - Use the 'checkPassword' method on the user model.
        //    - If there is an error during password checking, set status and create an error for incorrect username or password.
        //    - If the password does not match, set status and create an error for incorrect username or password.
        
        // 3. Generate a token for the authenticated user:
        //    - Utilize the 'jsonwebtoken' library and the user's data (excluding the password).
        
        // 4. Send a response:
        //    - Set status to 200 (OK).
        //    - Send a response containing the generated token and user information (excluding the password).

    } catch (err) {
        // 5. Handle errors:
        //    - Set status to 500 (Internal Server Error).
        //    - Send the error to the error handler for further processing.
    }
})


module.exports = authRouter