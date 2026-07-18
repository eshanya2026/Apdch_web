import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Admissions from '@/pages/Admissions'
import Academics from '@/pages/Academics'
import Departments from '@/pages/Departments'
import DepartmentDetail from '@/pages/DepartmentDetail'
import Hospital from '@/pages/Hospital'
import Faculty from '@/pages/Faculty'
import Research from '@/pages/Research'
import CampusLife from '@/pages/CampusLife'
import ScrollToTop from '@/components/shared/ScrollToTop'
import CustomCursor from '@/components/shared/CustomCursor'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/campus-life" element={<CampusLife />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:departmentId" element={<DepartmentDetail />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  )
}
