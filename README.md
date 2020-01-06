<p align="center">
  <img src="assets/logo.png">
</p>

# NodeCloud

[![npm version](https://badge.fury.io/js/nodecloud.svg)](https://badge.fury.io/js/nodecloud)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b94b1fe2ac724e8083f8237de3473c8a)](https://www.codacy.com/app/rehrumesh/nodecloud?utm_source=github.com&utm_medium=referral&utm_content=cloudlibz/nodecloud&utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/cloudlibz/nodecloud.svg?branch=master)](https://travis-ci.org/cloudlibz/nodecloud)

NodeCloud is a standard library to get a single API on the open cloud with multiple providers.
Making open cloud easily accessible and managed.

## 🚀 Install

```
npm install nodecloud
       or
yarn add nodecloud
```

## 📘 Service Providers

- AliCloud
- Amazon Web Services (AWS)
- Azure
- DigitalOcean
- Google Cloud Platform (GCP)

## 📟 Service Types

- \*yet to be implemented

| Service Category        | Service          | AWS            | GCP                               | Azure                       | DigitalOcean | AliCloud
| ----------------------- | ---------------- | -------------- | --------------------------------- | --------------------------- | ----------------------- | ----------------------- |
| Compute                 | IaaS             | EC2            | Compute Engine                    | Virtual Machine             | Droplets | ECS | 
|                         | Containers       | ECS            | -                                 | -                         | - | - |
|                         | Kubernetes\*     | EKS            | Kubernetes Engine                 | AKS                         | DO Kubernetes* | - |
| Storage                 | Object Storage   | S3             | Cloud Storage                     | Blob, Queue, Table, Files\* | Spaces* | Bucket (OSS) & Table Store* |
|                         | Block Storage    | EBS            | Persistent Disks                  | - | Volumes | - |
| Networking              | Load Balancer    | ELB            | GC Load Balancing\*               | Virtual Networks | DO Load Balancers | SLB |
|                         | Peering          | Direct Connect | Direct Peering*, Carrier Peering* | Azure API   | - | - |
|                         | DNS              | Route53        | Google DNS                        | Azure DNS\* | DO DNS* | Alibaba DNS |
| Databases               | RDBMS            | RDS            | Cloud SQL\*                       | Azure Database              | Managed Postgres* | Apsara RDS |
|                         | NoSQL: key-value | DynamoDB       | Cloud Datastore                   | - | - | Apsara for MongoDB |
|                         | NoSQL: indexed   | -              | Cloud Datastore                   | - | - | - |
| Security/ Authorization | IAM              | AWS IAM        | -                                 | -                           | - | - |
| Utilities               | Apps management  | -              | -                                 | WebApps                     | - | - |

## ✌️ How to setup

Make sure you have `.nc.config.js` file in the project root.

Content of `.nc.config.js` file is assumed as the following structure.
It is an array of supported providers.

1.  `name` : Provider identifier, this can be used to identify the plugin at a glance.
2.  `tag` : Tag name that will be used to load the given provider internally.
3.  `plugin` : Plugin module

This config file can contain array of objects for all providers and all will be loaded.
Supported values for `name` : aws, azure, alicloud, digitalocean, google

```js
const nodeCloudAwsPlugin = require("nodecloud-aws-plugin");

const providers = [
  {
    name: "aws",
    tag: "aws",
    plugin: nodeCloudAwsPlugin
  }
];

module.exports = providers;
```

## [Supported providers](https://github.com/cloudlibz/nodecloud/blob/master/lib/core/providers-list.js)

## 📣 Usage

```js
const nodeCloud = require("nodecloud");
const optionsProvider = {
  overrideProviders: false
};
const ncProviders = nodeCloud.getProviders(optionsProvider);
const options = {
  apiVersion: "2016-11-15"
};

const params = {
  ImageId: "ami-10fd7020", // amzn-ami-2011.09.1.x86_64-ebs
  InstanceType: "t1.micro",
  MinCount: 1,
  MaxCount: 1
};
const instanceParams = {
  Key: "Name",
  Value: "Node Cloud demo"
};

const ec2 = ncProviders.aws.compute(options);
ec2
  .createInstance(params, instanceParams)
  .then(res => {
    console.log(`All done ! ${res}`);
  })
  .catch(err => {
    console.log(`Oops something happened ${err}`);
  });
```

## Override providers

NodeCloud officialy supports AWS, GCP, Azure, DigitalOcean and AliCloud. If you want to use a community driven plugin override the providers list as follows.

```js
const nodeCloud = require("nodecloud");
const options = {
  overrideProviders: true
};
const ncProviders = nodeCloud.getProviders(options);
```

## 💻 Development setup

```
$ git clone https://github.com/cloudlibz/nodecloud
$ cd nodecloud
$ yarn install
```

## ✒️ Run unit tests

```
$ yarn test
```

## 📜 License

MIT
