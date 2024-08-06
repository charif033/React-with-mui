import { Container, Grid } from "@mui/material"
import '../Css/Form.css'
import CombineForm from "../Components/CombineForm"

function CheckoutPage() {
    return (
        <>
            <Container maxWidth="lg" style={{ margin: '50px auto' }}>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <h2>Your Cart</h2>
                        <hr />
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'lightgray',
                            borderRadius: '5px',
                            display: 'flex'
                        }}>
                            <p style={{ fontWeight: 'bold', margin: 'auto' }}>Notting in your cart</p>
                        </div>

                    </Grid>
                    <Grid item xs={6}>
                        <CombineForm></CombineForm>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CheckoutPage