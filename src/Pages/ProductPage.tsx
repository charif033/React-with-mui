import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material"
import { useParams } from "react-router-dom"
import { products } from "../data/data";
import ReviewCard from "../Components/ReviewCard";
import { ReviewInput } from "../Components/ReviewCard";


function ProductPage() {
    const { id } = useParams();
    const product = products.find(item => item.id === Number(id));
    const product_description = product.description.split(" / ");

    return (
        <>
            <Container maxWidth='lg' style={{ margin: '50px auto' }}>
                <Grid container spacing={5} >
                    <Grid item xs={6} textAlign={'center'}>
                        <img src={'.' + product.image} alt={product.name} style={{ height: '500px' }} />
                    </Grid>
                    <Grid item xs={6}>
                        <h1 style={{ textAlign: 'center' }}>{product.name}</h1>
                        <Card sx={{ minWidth: 275, marginBottom: '25px' }}>
                            <CardContent>
                                <Typography variant="body2">
                                    <ul style={{ padding: '0' }}>
                                        {product_description.map((item: any, i: any) => (
                                            <li key={i} style={{ marginBottom: '10px', padding: '5px', borderBottom: '1px solid lightgray', listStyle: 'none' }}>{item}</li>
                                        ))}
                                    </ul>
                                    <p style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold', marginBottom: '0' }}>{product.price.toLocaleString()} THB</p>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Container sx={{ marginBottom: '25px', display: 'flex', justifyContent: 'center', gap: '25px' }}>
                            <Button variant="outlined" size="small" href={'/product/' + product.id}>Ad to Cart</Button>
                            <Button variant="contained" size="small" href="/checkout">Purchase</Button>
                        </Container>
                    </Grid>
                    <Grid item xs={12} style={{ paddingLeft: '0' }}>
                        <ReviewInput></ReviewInput>
                    </Grid>
                    <Grid item xs={4} style={{ paddingLeft: '0', display: 'flex', justifyContent: 'center' }}>
                        <ReviewCard></ReviewCard>
                    </Grid>
                    <Grid item xs={4} style={{ paddingLeft: '0', display: 'flex', justifyContent: 'center' }}>
                        <ReviewCard></ReviewCard>
                    </Grid>
                    <Grid item xs={4} style={{ paddingLeft: '0', display: 'flex', justifyContent: 'center' }}>
                        <ReviewCard></ReviewCard>
                    </Grid>
                </Grid>



            </Container >
        </>
    )
}

export default ProductPage