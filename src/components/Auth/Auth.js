import React, {useState} from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
//import { signin, signup } from '../../actions/auth';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (isSignup) {
    //   dispatch(signup(formData, history));
    // } else {
    //   dispatch(signin(formData, history));
    // }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const switchMode = () => {
    setIsSignUp(!isSignup);
    setShowPassword(false);
  }

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h6">
          {isSignup ? "Регистрация" : "Вход"}
        </Typography>
        <form className={classes.form} onSubmit={{handleSubmit}}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="Имя"
                    handleChange={handleChange}
                    autoFocus
                    half />
                  <Input
                    name="lastName"
                    label="Фамилия"
                    handleChange={handleChange}
                    autoFocus
                    half />
                </>
              )
            }
            <Input name="email" label="Email" handleChange={handleChange} type="email" />
            <Input
              name="password"
              label="Пароль"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword} />
            { isSignup ?
              <Input
                name="confirmPassword"
                label="Повторите пароль"
                handleChange={handleChange}
                type="password"
              /> : null}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup? "Регистрация" : "Вход"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;