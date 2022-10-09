import React from 'react';

import {
  ViewWrapper,
  Pagination,
  Title,
  Text,
  RecoveryKeysContainer,
  RecoveryKey,
  Button,
} from './styles';

const MFAView = () => {
  const [recoveryKeys, setRevoveryKeys] = React.useState([
    '90210-DF6F1',
    '09078-WYSHD',
    '75527-1WHSN',
    '95739-XNF3K',
    '37539-I7OPS',
    '43927-X9POE',
    '07923-ARK0S',
    '19433-M1XMA',
    '88831-FLUCO',
    '52348-JPQYR',
  ]);

  return (
    <ViewWrapper>
      <Pagination>step 4 of 4</Pagination>
      <Title>Save recovery keys</Title>
      <Text>
        In case you lose access to your authenticator app, you can still sign in
        to WAve with a recovery key. Print, copy, or save them somewhere safe.
      </Text>

      <RecoveryKeysContainer>
        {recoveryKeys.map((recoveryKey) => (
          <RecoveryKey key={recoveryKey}>{recoveryKey}</RecoveryKey>
        ))}
      </RecoveryKeysContainer>

      <Text>Seriously, save these keys!</Text>

      <Button>Done</Button>
    </ViewWrapper>
  );
};

export default MFAView;
