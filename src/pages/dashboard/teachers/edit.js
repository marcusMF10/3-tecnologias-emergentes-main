// project imports
import { useState, useEffect } from 'react';
import TeacherFrom from './components/TeacherFrom';

const Edit = () => {
  const teachers = {
    name: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '1234567890',
    address: '123 Main Street',
    age: 20,
    gender: 'male',
    typeDocument: 'passport',
    typeSubject: 'machine_learning',
    numberDocument: '328d32099203',
    dateBirth: '2023-05-18'
  };

  return <TeacherFrom teacher={teachers} isEdit />;
};

export default Edit;
