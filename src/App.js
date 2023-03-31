import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddManager from './components/Admin/AddManager'
import EmployeeEditpage from './components/Employee/EmployeeEditpage'
import EmployeeHomePage from './components/Employee/EmployeeHomePage'
import EmployeeRegistration from './components/Admin/AddEmployeeRegistration'
import HomePage from './components/HomePage'
import LoginAdmin from './components/Admin/LoginAdmin'
import LoginEmployee from './components/Employee/LoginEmployee'
import LoginManager from './components/Manager/LoginManager'
import ManagerHomepage from './components/Manager/ManagerHomepage'
// import AutoLogoutPage from './components/AutoLogoutPage'
// import Header from './components/Header'
import AdminHomepage from './components/Admin/AdminHomepage'
import UpdateManager from './components/Admin/UpdateManager'
import ApplyAddLeave from './components/Employee/ApplyAddLeave'
import CheckLeaveStatus from './components/Employee/CheckLeaveStatus'
import CheckTasks from './components/Employee/CheckTasks'
import UpdateTasks from './components/Employee/UpdateTasks'
import AcceptRejectLeave from './components/Manager/AcceptRejectLeave'
import AssignTasks from './components/Manager/AssignTasks'
import CheckTasksProgress from './components/Manager/CheckTasksProgress'
import EditProfileManager from './components/Manager/EditProfileManager'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Header/> */}
    
        {window.localStorage.getItem('jwt') ?
          <Routes>
            <Route path='/addmanager' element={<AddManager />} />
            <Route path='/addemployee' element={<EmployeeRegistration />} />
            <Route path='/editemployee' element={<EmployeeEditpage />} />
            <Route path='/employeehome' element={<EmployeeHomePage />} />
            <Route path='/managerhome' element={<ManagerHomepage />} />
            <Route path='/adminhome' element={<AdminHomepage />} />
            <Route path='/updatemanager/:email' element={<UpdateManager />} />
            <Route path='/applyleave' element={<ApplyAddLeave />} />
            <Route path='/CheckLeaveStatus' element={<CheckLeaveStatus />} />
            <Route path='/checktasks' element={<CheckTasks />} />
            <Route path='/updatetasks/:id' element={<UpdateTasks />} />
            
            <Route path='/AcceptReject' element={<AcceptRejectLeave />} />
            <Route path='/AssignTasks' element={<AssignTasks />} />
            <Route path='/CheckTaskProgress' element={<CheckTasksProgress />} />
            <Route path='/EditProfileManager' element={<EditProfileManager />} />
          </Routes>
          :
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/loginadmin' element={<LoginAdmin />} />
          <Route path='/loginemployee' element={<LoginEmployee />} />
          <Route path='/loginmanager' element={<LoginManager/>} />
        </Routes>
        }
        
      </BrowserRouter>

    </div>
  )
}

export default App