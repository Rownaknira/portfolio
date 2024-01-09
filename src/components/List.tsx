import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";

type Props = {
  text: string;
};

const listStyle = {
  paddingTop: "0.25rem !important",
  paddingBottom: "0 !important",
};

const featureTextStyle = {
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
};

const listItemStyle = {
  minWidth: "2rem !important",
};

export const FeatureList = (props: Props) => {
  return (
    <ListItem sx={listStyle}>
      <ListItemIcon sx={listItemStyle}>
        <BeenhereIcon
          sx={{
            color: "#ea484a",
          }}
        />
      </ListItemIcon>
      <ListItemText primary={props.text} sx={featureTextStyle} />
    </ListItem>
  );
};
