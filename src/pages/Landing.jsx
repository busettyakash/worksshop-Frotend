import { Link } from 'react-router-dom'
import { Receipt, Package, Users, BarChart3, ShieldCheck, Zap, Search, ChevronDown } from 'lucide-react'
import WorkshopLogo from '../components/WorkshopLogo'
import './Landing.css'

const FEATURES = [
  { icon: <Receipt size={17} />, title: 'GST-Compliant Billing', desc: 'Generate professional invoices with automatic GST calculations. Every bill is tax-ready in seconds.' },
  { icon: <Package size={17} />, title: 'Inventory Management', desc: 'Track stock levels in real-time, set low-stock alerts, and manage thousands of products effortlessly.' },
  { icon: <Users size={17} />, title: 'Customer Registry', desc: 'Maintain complete customer records — purchase history, contact info, and loyalty insights all in one place.' },
  { icon: <BarChart3 size={17} />, title: 'Live Reports', desc: 'Real-time dashboards showing daily sales, top products, revenue trends, and GST summaries.' },
  { icon: <ShieldCheck size={17} />, title: 'GSTIN Verified', desc: 'Every shop is tied to a verified GST Identification Number ensuring compliance from day one.' },
  { icon: <Zap size={17} />, title: 'Instant Setup', desc: 'Go live in minutes. Register your shop, add products, and start billing — no months of setup required.' },
]

const TABLE_DATA = [
  { name: 'Samsung 65" QLED TV', cat: 'Electronics', status: 'In Stock', price: '₹84,990', sc: 'g' },
  { name: 'Apple AirPods Pro', cat: 'Electronics', status: 'Low Stock', price: '₹24,900', sc: 'o' },
  { name: 'Levi\'s 511 Slim Jeans', cat: 'Apparel', status: 'In Stock', price: '₹3,999', sc: 'g' },
  { name: 'Nescafé Gold 200g', cat: 'Grocery', status: 'Out of Stock', price: '₹850', sc: 'r' },
]

const SB_ITEMS = ['Quick actions', 'Notifications', 'Tasks', 'Notes', 'Emails', 'Reports', 'Automations']

export default function Landing() {
  return (
    <div>
      {/* ── Navbar ── */}
      <nav className="ws-nav">
        <Link to="/" className="ws-nav-brand">
          <WorkshopLogo size={28} className="ws-nav-logo-icon" />
          <span className="ws-nav-name">workshop</span>
        </Link>

        <div className="ws-nav-links">
          <a href="#features" className="ws-nav-link">Features</a>
          <a href="#billing" className="ws-nav-link">Billing</a>
          <a href="#reports" className="ws-nav-link">Reports</a>
          <a href="#pricing" className="ws-nav-link">Pricing</a>
        </div>

        <div className="ws-nav-right">
          <Link to="/login" className="ws-btn-ghost" id="nav-signin">Sign in</Link>
          <Link to="/signup" className="ws-btn-black" id="nav-signup">Start for free</Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="ws-hero">
        <div className="ws-hero-badge">
          <span className="ws-hero-badge-pill">New</span>
          GST-verified billing is now live&nbsp;🎉
        </div>

        <h1>Retail operations,<br />reimagined.</h1>

        <p className="ws-hero-sub">
          Powerful, focused, and data-driven — Workshop makes it easy to manage
          billing, inventory, customers, and reports in one place.
        </p>

        <div className="ws-hero-cta">
          <Link to="/signup" className="ws-cta-black" id="hero-cta-primary">Start for free</Link>
          <a href="#features" className="ws-cta-outline" id="hero-cta-secondary">See features</a>
        </div>
      </section>

      {/* ── App Screenshot ── */}
      <div className="ws-screenshot-wrap">
        <div className="ws-screenshot-rule-top" />
        <div className="ws-screenshot-cols">
          <div className="ws-screenshot-col-left" />
          <div className="ws-screenshot-center">
            <div className="ws-app-frame">
              {/* Browser chrome */}
              <div className="ws-app-topbar">
                <div className="ws-traffic-dot r" />
                <div className="ws-traffic-dot y" />
                <div className="ws-traffic-dot g" />
                <div className="ws-app-urlbar">app.workshop.in/dashboard</div>
              </div>

              <div className="ws-app-body">
                {/* Sidebar */}
                <div className="ws-app-sidebar">
                  <div className="ws-app-sb-header">
                    <div className="ws-app-sb-workspace">
                      <div className="ws-app-sb-ws-icon">W</div>
                      My Shop
                      <ChevronDown size={12} style={{ marginLeft: 'auto', color: '#9ca3af' }} />
                    </div>
                  </div>
                  <div className="ws-app-sb-search">
                    <div className="ws-app-sb-searchbox">
                      <Search size={11} />
                      Quick actions
                      <span style={{ marginLeft: 'auto', fontSize: '0.65rem', color: '#bcc3cc' }}>⌘K</span>
                    </div>
                  </div>
                  <div className="ws-app-sb-nav">
                    {SB_ITEMS.map((item, i) => (
                      <div key={item} className={`ws-app-sb-item${i === 0 ? ' active' : ''}`}>
                        <div style={{ width: 13, height: 13, borderRadius: 3, background: i === 0 ? '#e5e7eb' : 'transparent', border: i === 0 ? 'none' : 'none' }} />
                        {item}
                      </div>
                    ))}
                    <div className="ws-app-sb-section">Favorites</div>
                    <div className="ws-app-sb-item" style={{ color: '#c0c7d2', fontStyle: 'italic' }}>No favorites</div>
                    <div className="ws-app-sb-section">Records</div>
                    <div className="ws-app-sb-item active">Products</div>
                    <div className="ws-app-sb-item">Customers</div>
                  </div>
                </div>

                {/* Main */}
                <div className="ws-app-main">
                  <div className="ws-app-main-topbar">
                    <span className="ws-app-main-title">Products</span>
                    <div className="ws-app-main-actions">
                      <span className="ws-app-tag">↑↓ Sort</span>
                      <span className="ws-app-tag">⊞ Filter</span>
                      <span className="ws-app-tag">View settings</span>
                      <span className="ws-app-tag">Import / Export</span>
                    </div>
                  </div>

                  <div className="ws-app-main-content">
                    <div className="ws-app-stat-row">
                      <div className="ws-app-stat">
                        <div className="ws-app-stat-lbl">Today's Sales</div>
                        <div className="ws-app-stat-val">₹18,420</div>
                      </div>
                      <div className="ws-app-stat">
                        <div className="ws-app-stat-lbl">Orders</div>
                        <div className="ws-app-stat-val">34</div>
                      </div>
                      <div className="ws-app-stat">
                        <div className="ws-app-stat-lbl">Products</div>
                        <div className="ws-app-stat-val">248</div>
                      </div>
                      <div className="ws-app-stat">
                        <div className="ws-app-stat-lbl">Customers</div>
                        <div className="ws-app-stat-val">1,092</div>
                      </div>
                    </div>

                    <div className="ws-app-table">
                      <div className="ws-app-table-head">
                        <div className="ws-app-th">Product</div>
                        <div className="ws-app-th">Category</div>
                        <div className="ws-app-th">Status</div>
                        <div className="ws-app-th">Price</div>
                      </div>
                      {TABLE_DATA.map(row => (
                        <div className="ws-app-table-row" key={row.name}>
                          <div className="ws-app-td bold">{row.name}</div>
                          <div className="ws-app-td">{row.cat}</div>
                          <div className="ws-app-td"><span className={`ws-app-pill ${row.sc}`}>{row.status}</span></div>
                          <div className="ws-app-td">{row.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ws-screenshot-fade-bottom" />
          </div>
          <div className="ws-screenshot-col-right" />
        </div>
      </div>

      {/* ── Features ── */}
      <section className="ws-features" id="features">
        <p className="ws-section-eyebrow">Everything you need</p>
        <h2 className="ws-section-h2">Built for Indian retail.</h2>
        <p className="ws-section-p">From billing to reports — every feature is designed for how Indian shops actually work.</p>

        <div className="ws-feat-grid">
          {FEATURES.map(f => (
            <div className="ws-feat-card" key={f.title}>
              <div className="ws-feat-icon">{f.icon}</div>
              <div className="ws-feat-title">{f.title}</div>
              <div className="ws-feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats band ── */}
      <div className="ws-stats-band">
        <div className="ws-stats-grid">
          <div><div className="ws-stat-num">2,400+</div><div className="ws-stat-label">Shops registered</div></div>
          <div><div className="ws-stat-num">₹18Cr+</div><div className="ws-stat-label">Billed this month</div></div>
          <div><div className="ws-stat-num">4.9★</div><div className="ws-stat-label">Average rating</div></div>
          <div><div className="ws-stat-num">99.9%</div><div className="ws-stat-label">Uptime SLA</div></div>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <section className="ws-final-cta" id="pricing">
        <h2>Start managing your<br />shop today.</h2>
        <p>Free forever for small shops. No credit card required.</p>
        <div className="ws-hero-cta" style={{ justifyContent: 'center' }}>
          <Link to="/signup" className="ws-cta-black" id="footer-cta">Get started for free</Link>
          <Link to="/login" className="ws-cta-outline">Sign in</Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ws-footer">
        <div className="ws-footer-brand">
          <WorkshopLogo size={18} />
          workshop
        </div>
        <div className="ws-footer-links">
          <a href="#features">Features</a>
          <a href="#billing">Billing</a>
          <a href="#reports">Reports</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="ws-footer-copy">© {new Date().getFullYear()} Workshop. All rights reserved.</div>
      </footer>
    </div>
  )
}
