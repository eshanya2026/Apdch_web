import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Admissions from '@/pages/Admissions'
import Academics from '@/pages/Academics'
import DepartmentDetail from '@/pages/DepartmentDetail'
import Hospital from '@/pages/Hospital'
import Faculty from '@/pages/Faculty'
import Research from '@/pages/Research'
import CampusLife from '@/pages/CampusLife'
import Governance from '@/pages/Governance'
import Committees from '@/pages/Committees'
import HrPolicy from '@/pages/HrPolicy'
import Nirf from '@/pages/Nirf'
import Iqac from '@/pages/Iqac'
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
        <Route path="/governance" element={<Governance />} />
        <Route path="/governance/committees" element={<Committees />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/governance/hr-policy" element={<HrPolicy />} />
        <Route path="/hr-policy" element={<HrPolicy />} />
        <Route path="/nirf" element={<Nirf />} />
        <Route path="/about/nirf" element={<Nirf />} />
        <Route path="/iqac" element={<Iqac />} />
        <Route path="/about/iqac" element={<Iqac />} />
        <Route path="/about/governance" element={<Governance />} />
        <Route path="/about/campus-life" element={<CampusLife />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Navigate to="/departments/oral-medicine" replace />} />
        <Route path="/departments/:departmentId" element={<DepartmentDetail />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/faculty" element={<Faculty activeTab="faculty" />} />
        <Route path="/faculty/pg-students" element={<Faculty activeTab="pg-students" />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  )
}
