# Super Hero App

## Introduction

This **Super Hero Generator Application** creates Super Hero names based on your firstname and lastname.
The functionality of this application isn't special at all. But the focus here is more on architecture and security. 

## Architecture

The SPA **Angular Frontend** is running in the Azure cloud while the backend part is running as a serverless function in the
AWS cloud. The **Lambda Backend** makes use of the NoSQL database DynamoDB hosted in the AWS cloud as well.

### Security

tbd.

## Project setup

The frontend application is organised in a classical Angular folder structure.

```
./clientApp
```
Everything related to the backend part can be found here:

```
./server
```

- Deployment: Contains all **bash scripts** to build and deploy Lambda functions via the **AWS CLI**.
- Functions: Contains the actual business logic
- Releases: Packaged and ready to deploy functions are stored here (not pushed).
- Tests: Unit Test implemented with Mocha & Chai and are following the "Should" Guide.

### AWS Configuration

Before you can deploy lambda functions to AWS you need to create a configuration file and configure the _AWS CLI_.

```bash
# File: ./deployment/my.config
ARN="{your-ARN-string}"
functionName="{your-function-name}"
```

## How to use

Check the live demo [here](#).
