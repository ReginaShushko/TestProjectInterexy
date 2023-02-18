import {
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ContactUsForm } from "./styled.contactUs";

export const ContactUs = () => {
  return (
    <ContactUsForm>
      <CssBaseline>
        <Grid container direction="column" alignItems="center">
        <Typography variant="h6" align="center" component="h1" gutterBottom>
          {"Contact Form".toUpperCase()}
        </Typography>
        <Grid item>
          <form id="contact-form">
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="userName"
                margin="normal"
              />
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  name="email"
                  margin="normal"
                />
                <Grid item>
                  <TextField
                    fullWidth
                    required
                    id="message"
                    label="Message"
                    name="message"
                    margin="normal"
                    multiline
                  />
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    style={{ marginTop: 20 }}
                  ></Grid>
                  <Grid item>
                    <Button type="submit"  variant="contained"  color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
        </Grid>
      </CssBaseline>
    </ContactUsForm>
  );
};