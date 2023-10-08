import { useState } from "react";
import { Dialog, Portal, Text } from "react-native-paper";

export const Alert = ({ message, show }) => {
  const [visible, setVisible] = useState(show);

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Content>
          <Text variant="bodyMedium">{message}</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};
