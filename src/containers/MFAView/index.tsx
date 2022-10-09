import React from 'react';
import AuthAPI from '../../apis/auth';

import {
  ViewWrapper,
  Pagination,
  Title,
  Text,
  RecoveryKeysContainer,
  RecoveryKey,
  Button,
  LoadingIndicator,
} from './styles';

const MFAView = () => {
  const [isFetchingKeys, setIsFetchingKeys] = React.useState<boolean>(false);
  const [recoveryKeys, setRecoveryKeys] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchRecoveryKeys = async () => {
      setIsFetchingKeys(true);
      const recoveryKeys: string[] = await AuthAPI.getRecoveryKeys(10);
      setRecoveryKeys(recoveryKeys);
      setIsFetchingKeys(false);
    };
    fetchRecoveryKeys();
  }, []);

  const refetchKeys = async () => {
    setIsFetchingKeys(true);
    const recoveryKeys = await AuthAPI.getRecoveryKeys(10);
    setRecoveryKeys(recoveryKeys);
    setIsFetchingKeys(false);
  };

  return (
    <ViewWrapper>
      <Pagination>step 4 of 4</Pagination>
      <Title>Save recovery keys</Title>
      <Text>
        In case you lose access to your authenticator app, you can still sign in
        to WAve with a recovery key. Print, copy, or save them somewhere safe.
      </Text>

      {!isFetchingKeys && (
        <>
          <RecoveryKeysContainer>
            {recoveryKeys.map((recoveryKey) => (
              <RecoveryKey key={recoveryKey}>{recoveryKey}</RecoveryKey>
            ))}
          </RecoveryKeysContainer>

          <Text>Seriously, save these keys!</Text>
        </>
      )}

      {isFetchingKeys && <LoadingIndicator />}

      <Button onClick={refetchKeys}>Generate new keys</Button>
    </ViewWrapper>
  );
};

export default MFAView;
