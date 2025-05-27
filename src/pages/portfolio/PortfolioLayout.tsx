import React from "react";
import Isotope from "isotope-layout";
import './portfolioLayout.css';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { useNavigate } from "react-router";


const PortfolioLayout = () => {
    const navigate = useNavigate();
    const isotope = React.useRef<Isotope | null>(null);
  // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
    React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows"
    });
    // cleanup
    return () => isotope.current?.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
  const onNavigateHandler = (path: string) => {
    navigate(`/portfolio/${path}`)
  } 
  return (
    <>
      <ul className="portfolio-menu-wrapper">
        <li className={`portfolio-menu ${filterKey === "*" ? 'active' : ''}`} onClick={handleFilterKeyChange("*")}>All</li>
        <li className={`portfolio-menu ${filterKey === "web-app" ? 'active' : ''}`} onClick={handleFilterKeyChange("web-app")}>Web App</li>
        <li className={`portfolio-menu ${filterKey === "mobile-app" ? 'active' : ''}`} onClick={handleFilterKeyChange("mobile-app")}>Mobile App</li>
      </ul>
      <hr style={{borderColor:'#f1f1f1', opacity: 0.1, marginBottom: 35}}/>
      <Box sx={{p: {lg: 7, md: 4, xs: 2}}}>
        <ul className="filter-container"> 
            <div className="filter-item web-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190, borderRadius: 0 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="POSLite Inventory Software"
                        className="card-media"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div" onClick={() => onNavigateHandler('test')}>
                        POSLite Inventory Software
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
            <div className="filter-item web-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="green iguana"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        Trading Journal
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
            <div className="filter-item mobile-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="green iguana"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        Filipino Alamat
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
            <div className="filter-item mobile-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="green iguana"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        Candlestick Patterns
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
            <div className="filter-item mobile-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="green iguana"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        StockApp
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="filter-item mobile-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="green iguana"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        Library Management System
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="filter-item mobile-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="green iguana"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        Payroll & Attendance Monitoring Software with Face Recognition
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="filter-item mobile-app">
                <Card className="portfolio-item" elevation={0}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="green iguana"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        PSE Stocks Prices Api
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </ul>
      </Box>
    </>
  );
}

export default PortfolioLayout;