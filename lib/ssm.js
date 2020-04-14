import {SSMConfigClient} from '@corentind/aws-ssm-config';

const SSM_CONFIG_BASE_PATH = `/shopixel/${process.env.STAGE}/api`;

const LOCAL_CONFIG = {
  dbUrl: 'mongodb://localhost:27017/test'
};

const isLocal = process.env.STAGE === 'local';

const ssmConfigClient = new SSMConfigClient({
  basePath: SSM_CONFIG_BASE_PATH,
  ...(isLocal && {
    config: LOCAL_CONFIG
  })
});

export default ssmConfigClient;
