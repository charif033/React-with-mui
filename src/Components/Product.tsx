import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { products } from '../data/data';

type idProps = { id: number }

export function ProductCard({ id }: idProps) {
    const product = products.find(item => item.id === id);
    return (
        <Card sx={{ minWidth: 345, padding: '20px 0' }}>
            <CardMedia
                component="img"
                sx={{
                    height: 240,
                    objectFit: 'contain'
                }}
                image={product.image}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                    {product.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign='center'>
                    {product.price.toLocaleString()} THB
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '15px',
            }}>
                <Button variant="outlined" size="small" href={'/product/' + product.id}>View Detail</Button>
                <Button variant="contained" size="small">Ad to Cart</Button>
            </CardActions>
        </Card>
    )
}
