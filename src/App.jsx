import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import './index.css'

// Protected route wrapper
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('ws_token')
  return token ? children : <Navigate to="/login" replace />
}

// Placeholder pages (replace when backend is ready)
const PlaceholderPage = ({ title }) => {
  const userData = (() => {
    try { return JSON.parse(localStorage.getItem('ws_user') || '{}') } catch { return {} }
  })()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div style={{ width: 240, borderRight: '1px solid #e8eaed', background: '#fff' }} />
      <div style={{ flex: 1, padding: '48px 32px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.04em', color: '#111' }}>{title}</div>
        <p style={{ color: '#9ca3af', marginTop: 8, fontSize: '0.9rem' }}>This section will be connected to your backend. Share your Node.js backend repo path to complete it.</p>
        <a href="/dashboard" style={{ display: 'inline-block', marginTop: 20, fontSize: '0.87rem', fontWeight: 600, color: '#3761dd', textDecoration: 'none' }}>← Back to Dashboard</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/products"  element={<PrivateRoute><PlaceholderPage title="Products" /></PrivateRoute>} />
        <Route path="/billing"   element={<PrivateRoute><PlaceholderPage title="Billing" /></PrivateRoute>} />
        <Route path="/customers" element={<PrivateRoute><PlaceholderPage title="Customers" /></PrivateRoute>} />
        <Route path="/categories" element={<PrivateRoute><PlaceholderPage title="Categories" /></PrivateRoute>} />
        <Route path="/history"   element={<PrivateRoute><PlaceholderPage title="Bill History" /></PrivateRoute>} />
        <Route path="/reports"   element={<PrivateRoute><PlaceholderPage title="Reports" /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute><PlaceholderPage title="Notifications" /></PrivateRoute>} />
        <Route path="/settings"  element={<PrivateRoute><PlaceholderPage title="Settings" /></PrivateRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
