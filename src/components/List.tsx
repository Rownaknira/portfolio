import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";

type Props = {
  text: string;
};

export const FeatureList = (props: Props) => {
  return (
    <ListItem>
      <ListItemIcon>
        <BeenhereIcon sx={{ color: "#ea484a" }} />
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
};
