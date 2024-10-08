import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, LogOut, Home, Calendar, Users, FileText, Settings } from 'lucide-react';

const generateAppointmentData = () => [...Array(7)].map((_, i) => ({
  day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
  appointments: Math.floor(Math.random() * 20) + 5
}));

const MetricCard = ({ title, value, icon: Icon }) => (
  <Card>
    <CardContent className="flex items-center p-4">
      <Icon className="mr-4 text-blue-500" size={24} />
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </CardContent>
  </Card>
);

const NavBar = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-xl font-bold">Endocare Admin</div>
      <div className="flex items-center">
        <Button variant="ghost" className="text-white mr-4">
          <User className="mr-2" size={20} />
          Profile
        </Button>
        <Button variant="ghost" className="text-white">
          <LogOut className="mr-2" size={20} />
          Logout
        </Button>
      </div>
    </div>
  </nav>
);

const Sidebar = () => (
  <div className="bg-gray-800 text-white w-64 p-4 h-screen">
    <div className="mb-8">
      <h2 className="text-2xl font-bold">Endocare</h2>
      <p className="text-gray-400">Admin Dashboard</p>
    </div>
    <nav>
      <Button variant="ghost" className="w-full justify-start mb-2">
        <Home className="mr-2" size={20} />
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start mb-2">
        <Calendar className="mr-2" size={20} />
        Appointments
      </Button>
      <Button variant="ghost" className="w-full justify-start mb-2">
        <Users className="mr-2" size={20} />
        Patients
      </Button>
      <Button variant="ghost" className="w-full justify-start mb-2">
        <FileText className="mr-2" size={20} />
        Reports
      </Button>
      <Button variant="ghost" className="w-full justify-start mb-2">
        <Settings className="mr-2" size={20} />
        Settings
      </Button>
    </nav>
  </div>
);

const Dashboard = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  
  useEffect(() => {
    setAppointmentData(generateAppointmentData());
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <NavBar />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <MetricCard title="Total Patients" value="1,234" icon={Users} />
            <MetricCard title="Appointments Today" value="28" icon={Calendar} />
            <MetricCard title="New Patients (This Week)" value="45" icon={User} />
            <MetricCard title="Completed Appointments" value="156" icon={FileText} />
          </div>
          <Card>
            <CardHeader>Appointments This Week</CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={appointmentData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="appointments" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;