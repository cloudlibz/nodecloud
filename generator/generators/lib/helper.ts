import * as fs from "fs";

import { groupAWSMethods } from "../lib/aws/awsHelper";
import { groupGCPMethods } from "../lib/googleCloud/gcpHelper";
import { groupAzureMethods } from "../lib/azure/azureHelper";

import { filterAWSMethods } from "../lib/aws/awsHelper";
import { filterGCPMethods } from "../lib/googleCloud/gcpHelper";
import { filterAzureMethods } from "../lib/azure/azureHelper";

const dirMap = {
  appServices: ["PaaS"],
  compute: ["ComputeInstance", "Kubernetes", "Container"],
  database: ["NoSqlIndexed", "RDBMS", "NoSql"],
  management: ["Monitoring", "KeyManagement", "NotificationService"],
  network: ["DNS", "LoadBalancer"],
  security: ["IAM"],
  storage: ["StorageBucket", "BlockStorage", "ArchivalStorage"],
  artificialinteligence: ["Translation"]
};

export function printFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) throw err;
  });
}

const groupers = {
  aws: groupAWSMethods,
  gcp: groupGCPMethods,
  azure: groupAzureMethods
};

const filters = {
  aws: filterAWSMethods,
  gcp: filterGCPMethods,
  azure: filterAzureMethods
};

const getDir = (service: string): string => {
  for (var dir in dirMap) {
    if (dirMap[dir].includes(service)) {
      return dir;
    }
  }
  throw new Error("Not a valid service: " + service);
};

export { groupers, filters, getDir };
