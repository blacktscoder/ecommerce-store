### Updated `README.md`

```markdown
# Ecommerce Backend

This repository contains the backend for the Ecommerce Store built using Serverless Framework and AWS Lambda. The backend provides several API endpoints for managing products in the store. It is deployed using AWS API Gateway, Lambda, and other AWS services.

## Prerequisites

Before running or deploying the backend, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [Serverless Framework](https://www.serverless.com/)
- [AWS CLI](https://aws.amazon.com/cli/) and configured with your AWS credentials
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing dependencies

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Setting Up AWS

Ensure your AWS credentials are configured:

```bash
aws configure
```

You will need to enter your AWS Access Key ID, Secret Access Key, and the default region.

## Configuration

All the configurations for the backend service are located in `serverless.yml`.

### Serverless Configuration

- **service**: ecommerce-backend
- **provider**: AWS (using Node.js 16.x runtime)
- **functions**:
  - `getProducts`: Fetches all products.
  - `getProductById`: Fetches a specific product by its ID.
  - `createProduct`: Creates a new product.

### Environment Variables

If you're connecting to a database (e.g., DynamoDB) or other services, be sure to set up environment variables or configure the resources in `serverless.yml`.

## API Endpoints

The following endpoints are available:

### 1. **GET /products**
Fetches a list of all products in the store.

- **Response**: A JSON array of products.

### 2. **GET /products/{id}**
Fetches a product by its ID.

- **Path Parameter**: `id` (integer) - The ID of the product.
- **Response**: A JSON object of the product.

### 3. **POST /products**
Creates a new product.

- **Request Body**: A JSON object representing the new product.

Example JSON body:

```json
{
  "name": "New Product",
  "price": 100,
  "image": "https://example.com/product-image.jpg"
}
```

- **Response**: A JSON object of the created product with the assigned ID.

## Deployment

To deploy the backend to AWS, run the following command:

```bash
serverless deploy
```

This will deploy the service to AWS and provide you with the API endpoint URLs.

## Local Development

For local testing, you can use the `serverless-offline` plugin to simulate AWS API Gateway and Lambda locally.

1. Install the `serverless-offline` plugin:

   ```bash
   npm install serverless-offline --save-dev
   ```

2. Add the plugin to the `serverless.yml` file:

   ```yaml
   plugins:
     - serverless-offline
   ```

3. Start the local development server:

   ```bash
   serverless offline start
   ```

This will run the API locally at `http://localhost:3000`.

## Logs and Monitoring

To view logs for your deployed functions, you can use the following command:

```bash
serverless logs -f <function-name> -t
```

For example, to view logs for the `getProducts` function:

```bash
serverless logs -f getProducts -t
```

## Cleanup

To remove the deployed service from AWS:

```bash
serverless remove
```

## Contributing

We welcome contributions to the Ecommerce Backend! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Updates:
1. **New API Endpoints**: The README now includes the new `GET /products/{id}` and `POST /products` endpoints, including examples of request and response formats.
2. **Local Development**: Instructions for using `serverless-offline` for local testing.
3. **Deployment Instructions**: Clear instructions on how to deploy the service using Serverless.
4. **Logs and Monitoring**: Added a section for viewing logs after deployment.