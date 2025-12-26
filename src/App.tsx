import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ReactGA from 'react-ga4'
import Home from './pages/Home'
import Club2026 from './pages/Club2026'
import About from './pages/About'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects'
import AppsIntegrations from './pages/AppsIntegrations'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
// Products
import GolfBox from './pages/products/GolfBox'
import Signage from './pages/products/Signage'
import Workspace from './pages/products/Workspace'
import WorkspaceNonprofit from './pages/products/WorkspaceNonprofit'
import WorkspaceTools from './pages/products/WorkspaceTools'
import WorkspaceMigration from './pages/products/WorkspaceMigration'
import ClubsiteCMS from './pages/products/ClubsiteCMS'
import APIAutomation from './pages/products/APIAutomation'
import DigitalSignage from './pages/products/DigitalSignage'
// Apps
import Soknadsportalen from './pages/apps/Soknadsportalen'
import GolfTeamTime from './pages/apps/GolfTeamTime'
import GolfChart from './pages/apps/GolfChart'
import SponsorDugnad from './pages/apps/SponsorDugnad'
import FrivilligKalender from './pages/apps/FrivilligKalender'
import AIFileAnalyzer from './pages/apps/AIFileAnalyzer'
import Golfbilkontroll from './pages/apps/Golfbilkontroll'
import BookingKalender from './pages/apps/BookingKalender'
// Integrations
import ScangolfIntegration from './pages/integrations/Scangolf'
import VippsIntegration from './pages/integrations/Vipps'
import NetsIntegration from './pages/integrations/Nets'
import GolfBoxModulesIntegration from './pages/integrations/GolfBoxModules'
import SpleisIntegration from './pages/integrations/Spleis'
import GrasrotandelenIntegration from './pages/integrations/Grasrotandelen'
import './App.css'

// Initialize GA4 - Replace with your actual Measurement ID
ReactGA.initialize('G-XXXXXXXXXX')

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
        <Route path="/2026" element={<Club2026 />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apps" element={<AppsIntegrations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        
        {/* Product Routes */}
        <Route path="/products/golfbox" element={<GolfBox />} />
        <Route path="/products/signage" element={<Signage />} />
        <Route path="/products/workspace" element={<Workspace />} />
        <Route path="/products/workspace-nonprofit" element={<WorkspaceNonprofit />} />
        <Route path="/products/workspace-tools" element={<WorkspaceTools />} />
        <Route path="/products/workspace-migration" element={<WorkspaceMigration />} />
        <Route path="/products/clubsitecms" element={<ClubsiteCMS />} />
        <Route path="/products/clubsite" element={<ClubsiteCMS />} />
        <Route path="/products/api-automation" element={<APIAutomation />} />
        <Route path="/products/digital-signage" element={<DigitalSignage />} />
        
        {/* App Routes */}
        <Route path="/apps/soknadsportalen" element={<Soknadsportalen />} />
        <Route path="/apps/golfteam-time" element={<GolfTeamTime />} />
        <Route path="/apps/golfchart" element={<GolfChart />} />
        <Route path="/apps/sponsor-dugnad" element={<SponsorDugnad />} />
        <Route path="/apps/frivillig-kalender" element={<FrivilligKalender />} />
        <Route path="/apps/ai-file-analyzer" element={<AIFileAnalyzer />} />
        <Route path="/apps/golfbilkontroll" element={<Golfbilkontroll />} />
        <Route path="/apps/booking-kalender" element={<BookingKalender />} />
        
        {/* Integration Routes */}
        <Route path="/integrations/scangolf" element={<ScangolfIntegration />} />
        <Route path="/integrations/vipps" element={<VippsIntegration />} />
        <Route path="/integrations/nets" element={<NetsIntegration />} />
        <Route path="/integrations/golfbox-modules" element={<GolfBoxModulesIntegration />} />
        <Route path="/integrations/spleis" element={<SpleisIntegration />} />
        <Route path="/integrations/grasrotandelen" element={<GrasrotandelenIntegration />} />
      </Routes>
    </Router>
    </HelmetProvider>
  )
}

export default App
