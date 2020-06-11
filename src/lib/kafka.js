import {Consumer, KafkaClient, KeyedMessage, Producer} from 'kafka-node';

export function publishMessage(topic, message) {
  if (process.env.NODE_ENV !== 'production') {
    console.debug('Not sending message to Kafka because running locally.');
    return;
  }

  getKafkaProducer().then(producer => {
    const km = new KeyedMessage('data', message);
    producer.send([{
      topic,
      messages: km
    }], err => {
      if (err) {
        console.error(err);
      }
    });
  });
}

export function subscribeTopic(topic, onMessage) {
  const consumer = new Consumer(getKafkaClient(), [
    {topic}
  ], {
    groupId: `shopixel-api-${process.env.NODE_ENV || 'dev'}`
  });
  consumer.on('message', onMessage);
  process.on('exit', () => consumer.close(() => {}));
}

let client, producer;

function getKafkaClient() {
  if (!client) {
    client = new KafkaClient({
      kafkaHost: process.env.SHOPIXEL_KAFKA_HOST
    });
  }
  return client;
}

async function getKafkaProducer() {
  if (!producer) {
    producer = new Producer(getKafkaClient());

    producer.on('error', error => {
      console.error('An error occurred with Kafka producer : ', error);
    });

    return new Promise(resolve => {
      producer.on('ready', () => {
        console.log('Producer ready.');
        resolve(producer);
      });
    });
  }

  return producer;
}
