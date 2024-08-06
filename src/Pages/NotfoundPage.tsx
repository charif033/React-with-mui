import { Button } from "@mui/material"

function NotfoundPage() {
    return (
        <>
            <div style={{ height: 'calc(100vh - 90px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: '50px', margin: '0' }}>404</h1>
                <p>Page not found</p>
                <Button variant="contained" href="/">Home</Button>
            </div>

        </>
    )
}

export default NotfoundPage