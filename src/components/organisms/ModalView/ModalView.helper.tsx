import { Typography } from "../../atoms";
export const itemFormatter = (
  label: string,
  value: string,
  as?: string,
  extraProp?: object
) => {
  return (
    <Typography>
      {label}:{" "}
      <Typography bold as={as || "span"} {...extraProp}>
        {value}
      </Typography>
    </Typography>
  );
};
