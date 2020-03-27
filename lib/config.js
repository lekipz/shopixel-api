import {SSMConfigClient} from '@corentind/aws-ssm-config';

const SSM_CONFIG_BASE_PATH = `/shopixel/${process.env.STAGE}/api`;

const LOCAL_CONFIG = {
};

export default new SSMConfigClient({
  basePath: SSM_CONFIG_BASE_PATH,
  ...(process.env.IS_OFFLINE && {
    config: LOCAL_CONFIG
  })
});
