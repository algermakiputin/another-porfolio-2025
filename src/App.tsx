import './App.css';
import Header from './components/template/header/Header';
import HomePage from './pages/home/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes, Outlet, useLocation } from "react-router";
import PortfolioPage from './pages/portfolio/PortfolioPage';
import PortfolioSinglePage from './pages/portfolio/singlePage/PortfolioSinglePage';
import Footer from './components/template/footer/Footer';
import BlogPage from './pages/blog/BlogPage';
import ContactPage from './pages/contact/ContactPage';
import ScrollToTop from './components/scroll/ScrollToTop';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import { Box } from '@mui/material';
import { useGetDarkTheme } from './theme/useGetDarkTheme';
import useGetLightTheme from './theme/useGetLightTheme';
import { useThemeContext } from './context/ThemeContext';
import Webchat from './components/webchat/Webchat';

const AnimatedOutlet = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Outlet />
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <BackToTop />
      <Header />
      <Box sx={{background: '--mui-palette-background-default'}}>
        <div className='content-wrapper'>
          <AnimatedOutlet />
          <Footer />
        </div>
      </Box>
    </>
  )
}

function App() {
  const { darkMode } = useThemeContext();
  const { darkTheme } = useGetDarkTheme();
  const { lightTheme } = useGetLightTheme();

  return ( 
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Webchat />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/project/:slug' element={<PortfolioSinglePage />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
