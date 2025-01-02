import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface BasicCardProps {
  title?: string;
  description?: string;
  IconComponent?: React.FC;
  createButtonIcon?: React.FC;
  UserDataForm?: React.FC<{ closeModal: (value: boolean) => void }>; // Add type for UserDataForm
  onButtonClick?: () => void;
}

const BasicCard: React.FC<BasicCardProps> = ({
  title,
  description,
  IconComponent,
  createButtonIcon,
  UserDataForm,
  onButtonClick,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          maxWidth: "250px",
          backgroundColor: "white",
          height: "150px",
          mt: 14,
          position: "relative",
          overflow: "visible",
        }}
      >
        {IconComponent && (
          <Box
            sx={{
              position: "absolute",
              top: -35,
              left: 8,
              zIndex: 1,
              width: "auto",
              height: "auto",
            }}
          >
            <IconComponent />
          </Box>
        )}
        <CardContent>
          <Typography variant="h5" component="div" textAlign="end">
            {title}
          </Typography>
          <Typography variant="body2" textAlign="end">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onButtonClick}>
            View
          </Button>
        </CardActions>
        {createButtonIcon && (
          <Box
            sx={{
              position: "absolute",
              top: 100,
              left: 195,
              zIndex: 1,
              width: "auto",
              height: "auto",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            {React.createElement(createButtonIcon)}
          </Box>
        )}
      </Card>

      {/* Modal Component */}
      <Modal open={open} onClose={handleClose}>
        
          {UserDataForm ? (
            <UserDataForm closeModal={setOpen} />
          ) : (
            <Typography variant="h6">Form Component is Missing</Typography>
          )}
       
      </Modal>
    </>
  );
};

export default BasicCard;
