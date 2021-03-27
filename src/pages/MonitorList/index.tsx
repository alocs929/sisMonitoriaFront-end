import React, { useState, FormEvent } from  'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function MonitorList(){
  const [teachers, setTeachers] = useState([]);

  return(
    <>
      <div id="page-teacher-list" className="container">
        
        <PageHeader title="Estes são os monitores disponíveis">
          
        </PageHeader>

        <main>
          {teachers.map((teacher: Teacher) =>{
            return(
              <TeacherItem key={teacher.id} teacher={teacher}/>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default MonitorList;