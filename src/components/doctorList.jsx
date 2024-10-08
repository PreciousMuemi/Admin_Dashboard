import React from 'react';
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'

const DoctorList = ({ doctors, deleteDoctor }) => {
  // Check if doctors is undefined or not an array
  if (!doctors || !Array.isArray(doctors)) {
    return <div>No doctors available.</div>;
  }

  return (
    <div className="space-y-2">
      {doctors.length === 0 ? (
        <div>No doctors found.</div>
      ) : (
        doctors.map((doctor) => (
          <div key={doctor.id} className="flex justify-between items-center p-3 bg-white bg-opacity-60 rounded-lg shadow">
            <div>
              <span className="font-bold text-green-800">{doctor.name}</span>
              <span className="text-green-600"> - {doctor.specialty}</span>
            </div>
            <Button variant="destructive" onClick={() => deleteDoctor(doctor.id)} className="bg-red-500 hover:bg-red-600">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default DoctorList;