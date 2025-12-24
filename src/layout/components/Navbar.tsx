import Box from '@mui/material/Box'
import LoginButton from '../../common/components/LoginButton'

const Navbar = () => {
  return (
    <Box display='flex' justifyContent="flex-end" alignItems="center" height="64px">
      <LoginButton/>
    </Box>
  )
}

export default Navbar