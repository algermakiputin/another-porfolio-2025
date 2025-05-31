import './App.css';
import Header from './components/template/header/Header';
import HomePage from './pages/home/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import PortfolioPage from './pages/portfolio/PortfolioPage';
import PortfolioSinglePage from './pages/portfolio/singlePage/PortfolioSinglePage';
import Footer from './components/template/footer/Footer';
import BlogPage from './pages/blog/BlogPage';
import ContactPage from './pages/contact/ContactPage';
import ScrollToTop from './components/scroll/ScrollToTop';
import { Box, colors } from '@mui/material';

const typography = {
  h2: {
      fontSize: '2em',
      fontWeight: 'bold',
  },
  h3: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  body2: {
    color: "rgba(255,255,255,0.7)"
  },
  body1: {
    color: "rgba(255,255,255,0.7)"
  }
}

const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
      paper: '#fafafa'
    }
  },
  typography: {
    ...typography
  }
});

const darkTheme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark:  true
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#11181D',
      paper: '#151e29',
    },
    primary: {
      main: "#54B689",
    },
    secondary: {
      main: "#4f4f4f"
    },
    common: {
      black: "#1e2a3a"
    }
  },
  typography: {
    ...typography
  }
});

 
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Box sx={{background: '--mui-palette-background-default'}}>
        <div className='content-wrapper'>
          <Outlet />
          <Footer />
        </div>
      </Box>
    </>
  )
}

function App() {
  return ( 
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/project/:slug' element={<PortfolioSinglePage />} />
            <Route path='/blog' element={<></>} />
            <Route path='/contact' element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
