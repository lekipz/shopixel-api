import {subscribeTopic} from '../../lib/kafka';
import Recommendation from './model';

let subscribed = false;

export default function subscribeRecommendations() {
  if (process.env.NODE_ENV !== 'production') {
    console.debug('Not subscribing to Kafka output topic because running locally.');
    return;
  }
  if (subscribed) {
    console.warn('Subscription already started. Skipping.');
    return;
  }
  subscribed = true;
  subscribeTopic(process.env.SHOPIXEL_RECOMMENDATIONS_OUTPUT_KAFKA_TOPIC, message => {
    const parsedMessage = JSON.parse(message.value);
    const recommendation = new Recommendation(parsedMessage);
    recommendation.save();
  });
}
