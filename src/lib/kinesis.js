import AWS from 'aws-sdk';

let kinesis;

function getKinesis() {
  if (!kinesis) {
    if (process.env.NODE_ENV === 'production') {
      kinesis = new AWS.Kinesis({
        region: 'eu-west-1'
      });
    }

    kinesis = {
      putRecord() {
      }
    };
  }
  return kinesis;
}

export function putRecord(streamName, key, data) {
  return getKinesis().putRecord({
    StreamName: streamName,
    Data: data,
    PartitionKey: key
  }).promise();
}
