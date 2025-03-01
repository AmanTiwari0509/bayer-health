#Scope document for Bayer health portal

Technologies Used
Frontend - React JS, Redux-toolkit, Tailwind, material ui , react router dom , validator .js , 
Backend - Node JS, Mongo, mongoose , bcrypt, express, cors , jsonwebtoken, logger.js

Data modeling
1. Collection Name - users
   Purpose - Stores authentication details for all users (Patients & Providers)

2. Collection Name - patients
   Purpose - Stores patient-specific details (health records, assigned provider)
 
3. Collection Name - goals
   Purpose - Stores patient-specific goal tracking (e.g., weight loss, medication adherence)



API Endpoints
 1️⃣ User Authentication APIs (Registration, Login, Logout)
POST
/api/auth/register
Register a new user (Patient/Provider/Admin)

POST
/api/auth/login
Log in a user and get JWT token

POST
/api/auth/logout
Log out user (invalidate session)

GET
/api/auth/me
Get logged-in user details


🩺 Patient APIs
GET
/api/patient/profile
Fetch the patient's profile

PUT
/api/patient/profile
Update the patient's profile (name, age, gender, allergies, medication)

POST
/api/patient/data
Add patient data (age, gender, assigned doctor, allergies, medication, health tracker)

PUT
/api/patient/update-health
Update only allergies & current medication (by patient)

GET
/api/patient/get-health
Fetch allergies & current medication (by patient only)

👨‍⚕️ Provider APIs
POST
/api/provider/assign-patient
Assign a patient to a provider




Code Reusability
1. Component-Based Architecture (React)
2. Custom Hooks(For fetching patient’s data) and sharing them across the components
3. Using Higher Order Components for code reusability (  )
4. Leveraged UI libraries like Material UI toi maintain UI consistency



Scaling
1. Prop drilling using either context API or Redux-toolkit
2. Code Splitting - loading only necessary components using lazy loading ( Individual patient details popup on click of patient row )
3. Cacheing or memoization - Patient’s data can be memoized to avoid unnecessary computations and rerender.
4. Sharding for For Large Datasets and High Write Loads
5. Clustering



Data Security
1. Input Validation (validator.js) - to prevent payload or external code injetcion(cross-site scripting)
2. Using secured network - HTTPS
3. Avoid storing API keys or auth tokens in the frontend.
4. Use webpack to minify and bundle the code hence making the code not readable.
5. Using JWT Tokens for authentication
6. Password Hashing: Hash passwords using bcrypt.
7. Implementing strong passwords
8. Role based access(for health providers, doctors, patients and other users)
9. Using identity provider like Keycloak for authentication
10. Using GraphQL
11. Horizontal scaling



Debugging and Testing
1. Logging (logger.js) - logging to track user activity and debug issues.
2. Error Handling - using try, catch
3. Testing - Using Jasmine
4. Documentation - maintaining up to date documentation



Roles in the project
Frontend
  Login & landing page - Aman
  Patient view - Amit
  Healthcare provider view - Bharath U
Backend - Siddhant
 













