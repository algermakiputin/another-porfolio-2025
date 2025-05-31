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

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  cssVariables: true,
  colorSchemes: {
    light: true,
    dark: true,
  },
});

theme.typography.h2 = {
  fontSize: '2em',
  fontWeight: 'bold',
  color: theme.palette.background.default
}

 
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className='content-wrapper'>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return ( 
    <ThemeProvider theme={theme}>
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
