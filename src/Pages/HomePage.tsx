import { Box, Container } from "@mui/material"
import { ProductCard } from "../Components/Product.tsx"
import AdbIcon from '@mui/icons-material/Adb';

function HomePage() {
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '50px 0'
                }}>
                    <Box maxWidth="md" sx={{
                        textAlign: "center",

                    }}>
                        <AdbIcon sx={{ height: 100, width: 100 }} />
                        <h1 style={{ marginTop: 0 }}>ANDROID.store</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis facere consequuntur quaerat, nobis illum harum laboriosam maxime nihil, dolores, nesciunt quis blanditiis ipsa cumque accusantium non tenetur autem! Quas?</p>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px',
                    marginBottom: '50px'
                }}>
                    <ProductCard id={1}></ProductCard>
                    <ProductCard id={2}></ProductCard>
                    <ProductCard id={3}></ProductCard>
                    <ProductCard id={4}></ProductCard>
                    <ProductCard id={5}></ProductCard>
                    <ProductCard id={6}></ProductCard>
                </Box>
            </Container >

        </>
    )
}

export default HomePage