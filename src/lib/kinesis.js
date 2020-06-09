import AWS from 'aws-sdk';

const kinesis = new AWS.Kinesis({
  region: 'eu-west-1'
});

export function putRecord(streamName, key, data) {
  if (process.env.NODE_ENV !== 'production') {
    console.debug('Not sending record to Amazon Kinesis because running locally.');
    return;
  }

  return kinesis.putRecord({
    StreamName: streamName,
    Data: data,
    PartitionKey: key
  }).promise();
}
