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
  scrollFunction?: () => void;
  description?: string;
  IconComponent?: React.FC;
  createButtonIcon?: React.FC;
  UserDataForm?: React.FC<{ closeModal: () => void }>;
  TasksForm?: React.FC<{ closeModal: () => void }>;
  onButtonClick?: () => void;
}

const FeaturesCard: React.FC<BasicCardProps> = ({
  title,
  description,
  IconComponent,
  createButtonIcon,
  UserDataForm,
  TasksForm,
  scrollFunction,
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
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
        }}
      >
        {IconComponent && (
          <Box
            sx={{
              position: "absolute",
              top: -30, // Adjusted to place the icon above the card
              left: "20%", // Center horizontally
              transform: "translateX(-50%)", // Centering
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
          <Button size="small" onClick={scrollFunction}>
            View
          </Button>
          {createButtonIcon && (
            <Box
            sx={{
              position: "absolute",
              right: 15,
              bottom: 5,
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)",
                color: "primary.main", 
              }}}
              onClick={handleOpen}
            >
              {React.createElement(createButtonIcon)}
            </Box>
          )}
        </CardActions>
      </Card>

      {/* Modal Component */}
      <Modal open={open} onClose={handleClose}>
        <Box>
          {UserDataForm ? (
            <UserDataForm closeModal={handleClose} />
          ) : TasksForm ? (
            <TasksForm closeModal={handleClose} titleProp="" descriptionProp="" formTitle="Add" />
          ) : (
            <Typography variant="h6">Form Component is Missing</Typography>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default FeaturesCard;

/*
 titleProp:string,
  descriptionProp: string;
  stageProp: string;
  flagProp: string;
*/

