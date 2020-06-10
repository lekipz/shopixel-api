import {KeyedMessage, KafkaClient, Producer} from 'kafka-node';

let client, producer;

async function getKafkaProducer() {
  if (!producer) {
    client = new KafkaClient({
      kafkaHost: process.env.SHOPIXEL_KAFKA_HOST
    });
    producer = new Producer(client);

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
    })
  });
}
