# E-Commerce Web Application with Serverless Architecture

This is an e-commerce web application built using a **serverless architecture** with AWS services. It allows users to browse products, add them to their cart, and complete purchases. The frontend is built with **React** and **TypeScript**, while the backend is powered by **AWS Lambda**, **DynamoDB**, and **API Gateway**.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Frontend Development](#frontend-development)
- [Backend Development](#backend-development)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Testing and Monitoring](#testing-and-monitoring)
- [License](#license)

---

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript for adding static types.
- **React Router**: For routing between different pages.
- **Styled-Components**: For CSS-in-JS styling.
  
### Backend:
- **Node.js**: JavaScript runtime for server-side logic.
- **AWS Lambda**: For serverless functions.
- **DynamoDB**: NoSQL database for storing product data and user orders.
- **API Gateway**: For routing HTTP requests to Lambda functions.
- **Apollo Server**: For setting up GraphQL APIs.

### Cloud:
- **AWS S3**: For serving static assets like product images.
- **AWS CloudFront**: CDN for fast content delivery.
- **AWS CodePipeline**: For automated deployment through CI/CD.

---

## Setup and Installation

### Prerequisites:
- **Node.js**: Make sure Node.js and npm are installed on your machine.
- **AWS CLI**: Install and configure AWS CLI with your credentials.
- **Serverless Framework**: Install globally using `npm install -g serverless`.
- **Docker** (optional): For containerized deployments.

### Steps to Set Up the Project:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/ecommerce-serverless.git
   cd ecommerce-serverless
   ```

2. **Frontend Setup**
   - Navigate to the `frontend` directory and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Set up the `.env` file to point to your API Gateway URL (for API calls from React).

3. **Backend Setup (Serverless)**

   - Navigate to the `backend` directory and install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Set up the `serverless.yml` configuration file (you may need to customize it for your AWS region, Lambda functions, etc.).
   
4. **Deploy Backend**:
   Deploy the backend to AWS using the Serverless Framework:
   ```bash
   serverless deploy
   ```

   This command will create the Lambda functions, API Gateway, and DynamoDB table based on the configurations in `serverless.yml`.

5. **Frontend Development**:
   - Build the React app:
     ```bash
     npm run build
     ```
   - Deploy the build folder to AWS S3 (for serving static files):
     ```bash
     aws s3 sync build/ s3://your-bucket-name --acl public-read
     ```

---

## Frontend Development

- The frontend is built with React and TypeScript.
- The app includes multiple pages such as **Home**, **Product Details**, **Cart**, and **Checkout**.
- Routing is handled using **React Router**, and **styled-components** is used for styling.
- **Axios** is used to make API calls to the backend (AWS Lambda).

### Running Locally:
```bash
npm start
```
Visit `http://localhost:3000` to view the app in development mode.

---

## Backend Development

### Key Functions:
1. **getProducts**: Fetches a list of products from DynamoDB.
2. **getProduct**: Fetches a single product’s details from DynamoDB.
3. **addToCart**: Adds a product to the user's shopping cart.
4. **checkout**: Processes the checkout request, typically integrates with a payment service.

#### Lambda Functions:
All backend logic is implemented in **AWS Lambda** functions, which are triggered via **API Gateway**.

### Running Locally:
You can test the Lambda functions locally using the `serverless-offline` plugin:
```bash
serverless offline start
```

---

## Deployment

### Frontend Deployment
The frontend is built and served using **AWS S3** and **CloudFront**. You can deploy the static build files to an S3 bucket and set up CloudFront for fast delivery.

### Backend Deployment
Deploy the backend (Lambda functions) using the **Serverless Framework**. Simply run:
```bash
serverless deploy
```

This will automatically set up the necessary infrastructure on AWS, including:
- **Lambda functions**
- **API Gateway**
- **DynamoDB tables**

---

## CI/CD Pipeline

### Setting Up CI/CD with GitHub Actions
1. Create a `.github/workflows/deploy.yml` file in your repository.
2. Set up actions to build the frontend, deploy the backend via Serverless, and sync the frontend to S3.

Example GitHub Actions Workflow:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install dependencies
      run: npm install

    - name: Build frontend
      run: npm run build

    - name: Deploy Backend
      run: |
        cd backend
        serverless deploy

    - name: Deploy Frontend to S3
      run: |
        aws s3 sync build/ s3://your-bucket-name --acl public-read
```

---

## Testing and Monitoring

1. **Testing Locally**: You can test the backend locally using the `serverless-offline` plugin.
2. **CloudWatch Logs**: Use AWS CloudWatch to monitor Lambda function executions and debug any issues.
3. **X-Ray**: Use AWS X-Ray to trace and debug performance issues within Lambda.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.