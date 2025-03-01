
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HealingIcon from '@mui/icons-material/Healing';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HotelIcon from '@mui/icons-material/Hotel';

export default function HealthcareProviderView() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ providererName, setProvider ] = React.useState('Provider name')
  const [open, setOpen] = React.useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const date = new Date()

  /** List of patients **/
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'age', label: 'Age', minWidth: 100 },
    { id: 'healthissues', label: 'Health issues', minWidth: 100 },
    { id: 'goals', label: 'Goals', minWidth: 100 },
    { id: 'doctorassigned', label: 'DoctorAssigned', minWidth: 100 }
  ];
  
  function createData(name, age, healthissues, goals, doctorassigned) {
    return { name, age, healthissues, goals, doctorassigned };
  }
  
  const rows = [
    createData('Jane Smith', '45', 'Hypertension', 'Improve cardiovascular health', 'Dr. Johnson'),
    createData('David Lee', '67', 'Diabetes', 'Manage blood sugar levels', 'Dr. Williams'),
    createData('Emily Chen', '32', 'Migraines', 'Reduce frequency of headaches', 'Dr. Brown'),
    createData('Michael Brown', '58', 'Arthritis', 'Improve joint mobility', 'Dr. Davis'),
    createData('Sarah Wilson', '28', 'Hypertension', 'Increase energy levels', 'Dr. Miller'),
    createData('Jane Smith', '45', 'Hypertension', 'Improve cardiovascular health', 'Dr. Johnson'),
    createData('Jane Smith', '45', 'Hypertension', 'Improve cardiovascular health', 'Dr. Johnson'),
    createData('Jane Smith', '45', 'Hypertension', 'Improve cardiovascular health', 'Dr. Johnson'),
    createData('Jane Smith', '45', 'Hypertension', 'Improve cardiovascular health', 'Dr. Johnson'),
  ];

/** Patient dialog box slide **/


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Healthcare Provider
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>{providererName}</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Typography sx={{marginLeft: '15px'}} variant="h6" component="div">Hello, Provider!</Typography>

      <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
        padding: '15px'
      }}
    >
        <Card>
            <CardContent sx={{ height: '100%' }}>
            <HealthAndSafetyIcon />
              <Typography variant="h6" component="div">70% Goal success rate</Typography>
              <Typography variant="body2" color="text.secondary">Patients with successful goal outcomes</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent sx={{ height: '100%' }}>
            <HealingIcon />
              <Typography variant="h6" component="div">92 Overdue checkup</Typography>
              <Typography variant="body2" color="text.secondary">Patients who missed prevention checkup</Typography>
            </CardContent>
        </Card>
    </Box>

      <Box sx={{padding: '15px'}}>
      <Typography variant="h6" component="div">Patients detailed data</Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead  sx={{ backgroundColor: 'lightblue' }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                        <Button variant="contained" onClick={handleClickOpen}>View details</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </Box>


      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Patient details - ${date.getDay()}`}</DialogTitle>
        <DialogContent>
          <Box>
          <Card>
            <CardContent sx={{ height: '100%', display:'flex'}}>
            <DirectionsRunIcon />
            <Typography variant="subtitle1" component="div" sx={{marginLeft: "10px"}}>9200 Total steps</Typography>
            </CardContent>
        </Card>
        <Card sx={{margin: '5px 0'}}>
            <CardContent sx={{ height: '100%', display:'flex'}}>
            <FitnessCenterIcon />
            <Typography variant="subtitle1" component="div" sx={{marginLeft: "10px"}}>2192 Calories</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent sx={{ height: '100%', display:'flex'}}>
            <HotelIcon />
            <Typography variant="subtitle1" component="div" sx={{marginLeft: "10px"}}>8hrs 30 mins Sleep</Typography>
            </CardContent>
        </Card>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

    </Box>

    
  );
}