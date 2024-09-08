import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import { Website } from "./components";

import { Inbox } from "./components/admin";
import { Login } from "./components/login";

import { Layout } from "./components/admin/layout";
import { ListProjects } from "./components/admin/projects/list";
import { CreateProject } from "./components/admin/projects/create";
import { Provider } from "react-redux";
import store from "./store";
import { EditProject } from "./components/admin/projects/edit";
import { ShowProject } from "./components/admin/projects/show";


const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#063970',
    },
    secondary: {
      main: '#fdb73e', 
    },
    background: {
      default: '#FFFFFF', 
      paper: '#F5F5F5',
    },
    text: {
      primary: '#000000', 
      secondary: '#fdb73e',
    },
  },
  typography: {
    fontFamily: 'Monospace, Roboto, Montserrat, sans-serif',
    h1: {
      color: '#fdb73e'
    },
    h2: {
      color: '#fdb73e'
    },
    body1: {
      fontSize: '1rem',
      color: '#000000',
    },
  },
  shape: {
    borderRadius: 8
  },
};

const theme = createTheme(themeOptions)

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={'admin'} element={<Layout />} >
              <Route index path={''} element={<Inbox />} />
              <Route path={'projects'}>
                <Route index path={''} element={<ListProjects />} />
                <Route path={'create'} element={<CreateProject />} />
                <Route path={'edit'} element={<EditProject />} />
                <Route path={'show'} element={<ShowProject />} />
              </Route>
            </Route>
            <Route path={'login'} element={<Login />} />
            <Route path={''} element={<Website />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
