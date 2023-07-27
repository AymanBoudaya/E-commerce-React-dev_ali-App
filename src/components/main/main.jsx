import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';

export default function Main() {
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (
        event, newAlignment,
    ) => {
        setAlignment(newAlignment);
    };

    const theme = useTheme();
    const [value, setValue] = useState(2);

    return (
        <Container sx={{ py:9}}>
            <Stack direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={3}
            >

                <Box>
                    <Typography variant='h6'>
                        Selected Products
                    </Typography>
                    <Typography fontWeight={300} variant='body1'>
                        All our new arrivals in an exclusive brand selection
                    </Typography>
                </Box>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px soolid rgba(233,69,96,0.5) !important",
                            color: "#e94560",
                            // backgroundColor:"initial",
                        }
                    }}
                >
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className='myButton' value="left" aria-label="left aligned"
                        color='error'>
                        All Products
                    </ToggleButton>
                    <ToggleButton
                        sx={{
                            mx: "16px !important",
                            color: theme.palette.text.primary
                        }}
                        className='myButton'
                        value="center"
                        aria-label="centered">
                        MEN CATEGORY
                    </ToggleButton>
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className='myButton' value="right" aria-label="right aligned">
                        WOMEN CATEGORY
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {["aaa","bbb"].map((item) => { 
                    return( 
                <Card key={item} sx={{ maxWidth: 333,mt: 6, ":hover .MuiCardMedia-root":{rotate: "1deg", scale: "1.1", transition :"0.35s"} }}>
                    <CardMedia
                        sx={{ height: 277 }}
                        image="https://mui.com//static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                T-shirt
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                $12.99
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            Une montre connectée qui vous permet de visualiser votre taux d'oxygène battement de coeur,
                            caluler vos pas et vos heures de sommeil.
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "space-between" }}>
                        <Button sx={{ textTransform: "capitalize" }} size="small">
                            <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize='large' />
                            Add to cart</Button>
                        <Rating name="read-only" value={value} readOnly precision={0.5} />
                    </CardActions>
                </Card>
                    )
                 })}

            </Stack>
        </Container>
    )
}
