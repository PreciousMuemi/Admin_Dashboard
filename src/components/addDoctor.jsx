import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus } from 'lucide-react'

const AddDoctorForm = ({ addDoctor }) => {
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '' });

  const handleSubmit = () => {
    if (newDoctor.name && newDoctor.specialty) {
      addDoctor(newDoctor);
      setNewDoctor({ name: '', specialty: '' });
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <Input 
        placeholder="Doctor's Name" 
        value={newDoctor.name}
        onChange={(e) => setNewDoctor({...newDoctor, name: e.target.value})}
        className="bg-white bg-opacity-50"
      />
      <Input 
        placeholder="Specialty" 
        value={newDoctor.specialty}
        onChange={(e) => setNewDoctor({...newDoctor, specialty: e.target.value})}
        className="bg-white bg-opacity-50"
      />
      <Button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white">
        <UserPlus className="mr-2 h-4 w-4" /> Add Doctor
      </Button>
    </div>
  );
};

export default AddDoctor;