import { useState } from 'react';
import './App.css';
import { Tabs, Tab, Box, Button, Card, CardContent, CardHeader, Typography, TextField } from '@mui/material';
import { FaUserPlus, FaTrashAlt } from 'react-icons/fa';

// DoctorManagement component
const DoctorManagement = ({ doctors, addDoctor, deleteDoctor }) => {
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '' });

  const handleSubmit = () => {
    if (newDoctor.name && newDoctor.specialty) {
      addDoctor(newDoctor);
      setNewDoctor({ name: '', specialty: '' });
    }
  };

  return (
    <Card sx={{ background: 'linear-gradient(to bottom right, #98FB98, #FFEB99)', boxShadow: 3, borderRadius: 2 }}>
      <CardHeader title="Manage Doctors" subheader="Add or remove doctors from the system" sx={{ color: '#006400' }} />
      <CardContent>
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <TextField
            label="Doctor's Name"
            value={newDoctor.name}
            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Specialty"
            value={newDoctor.specialty}
            onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
            fullWidth
          />
          <Button onClick={handleSubmit} variant="contained" startIcon={<FaUserPlus />} sx={{ bgcolor: '#32CD32', color: '#fff' }}>
            Add Doctor
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {doctors.map((doctor) => (
            <Box key={doctor.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'rgba(255, 255, 255, 0.6)', borderRadius: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#006400' }}>
                {doctor.name} - {doctor.specialty}
              </Typography>
              <Button variant="contained" color="error" onClick={() => deleteDoctor(doctor.id)} startIcon={<FaTrashAlt />}>
                Delete
              </Button>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

// UserFeedback component
const UserFeedback = ({ feedback }) => {
  return (
    <Card sx={{ background: 'linear-gradient(to bottom right, #FFEB99, #98FB98)', boxShadow: 3, borderRadius: 2 }}>
      <CardHeader title="User Feedback" subheader="View feedback from Endocare users" sx={{ color: '#006400' }} />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {feedback.map((item) => (
            <Box key={item.id} sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.6)', borderRadius: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#006400' }}>{item.user}</Typography>
              <Typography variant="body2" sx={{ color: '#006400' }}>{item.message}</Typography>
              <Typography variant="caption" sx={{ color: '#32CD32' }}>{item.date}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurology' },
  ]);
  const [feedback, setFeedback] = useState([
    { id: 1, user: 'Patient A', message: 'Great service!', date: '2024-10-05' },
    { id: 2, user: 'Patient B', message: 'Could improve wait times', date: '2024-10-06' },
  ]);

  const addDoctor = (newDoctor) => {
    setDoctors([...doctors, { id: doctors.length + 1, ...newDoctor }]);
  };

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  return (
    <div className="App">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#006400', fontWeight: 'bold' }}>
          Endocare Admin Dashboard
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={0}>
            <Tab label="Manage Doctors" />
            <Tab label="User Feedback" />
          </Tabs>
        </Box>
        <Box sx={{ mt: 2 }}>
          <DoctorManagement doctors={doctors} addDoctor={addDoctor} deleteDoctor={deleteDoctor} />
          <UserFeedback feedback={feedback} />
        </Box>
        <Box mt={4}>
          <Typography>You clicked {count} times</Typography>
          <Button variant="contained" onClick={() => setCount(count + 1)} sx={{ mt: 2 }}>
            Click me
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
