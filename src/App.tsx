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

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Layout = () => {
  return (
    <>
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
  );
}

export default App;
