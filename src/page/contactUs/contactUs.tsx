import {
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { contactActions } from "../../store/contact/contact.slice";
import { RootState } from "../../store/store";
import { ContactUsForm } from "./styled.contactUs";

export const ContactUs = () => {
  const name = useSelector((state: RootState) => state.contact.name);
  const email = useSelector((state: RootState) => state.contact.email);
  const message = useSelector((state: RootState) => state.contact.message);
  const dispatch = useDispatch();

  const nameHandler = (e: any) => {
    dispatch(contactActions.setName(e.target.value));
  };

  const emailHandler = (e: any) => {
    dispatch(contactActions.setEmail(e.target.value));
  };

  const messageHandler = (e: any) => {
    dispatch(contactActions.setMessage(e.target.value));
  };

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
                  value={name}
                  onChange={nameHandler}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  name="email"
                  margin="normal"
                  value={email}
                  onChange={emailHandler}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id="message"
                  label="Message"
                  name="message"
                  margin="normal"
                  multiline
                  value={message}
                  onChange={messageHandler}
                />
              </Grid>
              <Grid container direction="row" style={{ marginTop: 10 }}>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      console.log(
                        `name: ${name}, email: ${email}, message: ${message}`
                      )
                    }
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </CssBaseline>
    </ContactUsForm>
  );
};
