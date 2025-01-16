import './App.css'
import Home from './components/home/Home'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', fontFamily: 'Proxima-Nova', color: 'typography.main'}}>
      <Home/>
    </Box>
  )
}

export default App
