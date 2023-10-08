import { useController } from "react-hook-form";
import { Text, TextInput } from "react-native-paper";

export const Input = ({
  label,
  placeholder,
  control,
  name,
  icon,
  keyboardType = "default",
  secureTextEntry = false,
  onPress,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeholder}
        control={control}
        value={field.value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={field.onChange}
        right={<TextInput.Icon icon={icon} />}
        onPress={onPress}
      />

      {error && (
        <Text variant="bodyMedium" style={{ color: "red" }}>
          {error.message}
        </Text>
      )}
    </>
  );
};
