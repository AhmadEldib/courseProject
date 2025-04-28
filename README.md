# CourseProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


#=============================
#Pacakges:
1- ng add @angular/material
2- npm i ngx-toastr
3- npm i @ngx-translate/core
4- npm i @ngx-translate/http-loader
5- npm i ngx-translate-messageformat-compiler
6- npm i bootstrap

#Project Structure:
## CORE FOLDER:
1- Account
2- Cart
3- Favourite
4- Home
5- Products
6- Orders
7- Profile
8- Notifications

## ADMIN FOLDER:
1- Products
2- Categoreis
3- Feedback
4- Notifications

## SHARED FOLDER:
1- Components
2- Models --> Classess, Interfaces
3- Enums
4- Services
5- Modules --> Translation, etc

## ASSETS:
1- Images
2- i10n
    1- ar.json
    2- en.json

#Project Layouts (modules):S
1- Admin Layout
2- User Layout
3- Public Layout --> Main Page

### tsConfig Important Notes:
1- "strictPropertyInitialization": true
Deafult value is true, set to false to shut down the null check

2- "noUnusedLocals": false
Deafult value is false, set to ture to strict the app to crash if there is a non-used value

### Firebase Setup:
1. Initial Setup:
   - Install Firebase: `npm install firebase @angular/fire`
   - Create a new Firebase project at https://console.firebase.google.com/
   - Enable Authentication and Firestore in the Firebase Console

2. Environment Configuration:
   ```typescript
   export const environment = {
     production: false,
     firebase: {
       apiKey: 'your-api-key',
       authDomain: 'your-project.firebaseapp.com',
       projectId: 'your-project-id',
       storageBucket: 'your-project.appspot.com',
       messagingSenderId: 'your-sender-id',
       appId: 'your-app-id'
     }
   };
   ```

3. Core Services Structure:
   - Created `firebase.service.ts` as the main service wrapper
   - Created `api-urls.service.ts` for managing API endpoints
   - Implemented `dialog.service.ts` for handling modal dialogs

4. Authentication Implementation:
   - Login with email/password
   - Google Sign-in integration
   - Password reset functionality
   - User registration with email verification
   - Auth state persistence

5. Firebase Service Methods:
   ```typescript
   // Key methods in firebase.service.ts
   - signIn(email: string, password: string)
   - signUp(email: string, password: string)
   - googleSignIn()
   - resetPassword(email: string)
   - signOut()
   - getCurrentUser()
   - updateUserProfile(data: any)
   ```

6. Security Rules:
   - Implemented Firestore security rules for data protection
   - Set up proper user role-based access
   - Added validation rules for data integrity

7. Data Structure:
   Collections:
   - users
   - categories
   - products
   - orders
   - cart

8. Error Handling:
   - Implemented comprehensive error handling
   - Added error messages translation support
   - Integrated with MatSnackBar for notifications

9. Important Guards:
   ```typescript
   - AuthGuard - Protection for authenticated routes
   - AdminGuard - Protection for admin routes
   - PublicGuard - For non-authenticated routes
   ```

10. Interceptors:
    - TokenInterceptor for handling authentication headers
    - ErrorInterceptor for global error handling

11. Best Practices:
    - Used environment variables for configuration
    - Implemented proper data caching
    - Added offline persistence
    - Followed security best practices
    - Implemented proper error handling
    - Used proper typing for all Firebase responses

12. Testing:
    - Unit tests for Firebase services
    - Integration tests for authentication
    - Mock services for testing

13. Performance Optimizations:
    - Implemented lazy loading for Firebase modules
    - Used proper indexing for Firestore queries
    - Implemented data pagination
    - Used proper caching strategies

Remember to:
- Never commit Firebase credentials to version control
- Always use environment variables for sensitive data
- Regularly backup Firestore data
- Monitor Firebase usage and costs
- Keep Firebase SDK updated
- Regularly review security rules