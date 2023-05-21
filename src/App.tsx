import qrCodeImage from './assets/image-qr-code.png'
import Card from '@mui/material/Card'
import './App.css'
import { CardContent, CardMedia, Typography } from '@mui/material'

function App() {
  return (
    <>
    <Card sx={{ maxWidth: 300, borderRadius: 4 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <CardMedia
          component="img"
          image={qrCodeImage}
          alt="Qr Code"
          sx={{
            width: '100%',
            marginBottom: 3,
            borderRadius: 2 
          }}
        />
        <Typography
          variant="h5"
          component="div"
          fontSize={20}
          fontWeight={600}
          gutterBottom
          > Improve your front-end skills by building projects
        </Typography>
        <Typography variant="subtitle2">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default App
