import * as fs from "fs";

import { groupAWSMethods } from "../lib/aws/awsHelper";
import { groupGCPMethods } from "../lib/googleCloud/gcpHelper";
import { groupAzureMethods } from "../lib/azure/azureHelper";
import { groupDOMethods } from "../lib/do/doHelper";

import { filterAWSMethods } from "../lib/aws/awsHelper";
import { filterGCPMethods } from "../lib/googleCloud/gcpHelper";
import { filterAzureMethods } from "../lib/azure/azureHelper";
import { filterDOMethods } from "../lib/do/doHelper";

export function printFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) throw err;
  });
}

const groupers = {
  aws: groupAWSMethods,
  gcp: groupGCPMethods,
  azure: groupAzureMethods,
  do:groupDOMethods,
};

const filters = {
  aws: filterAWSMethods,
  gcp: filterGCPMethods,
  azure: filterAzureMethods,
  do:filterDOMethods,
};

export { groupers, filters };
