
import './App.css'
import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import MenuBar from './MenuBar'
import Home from './Home'
import Dashboard from './Dashboard'
import Products from './Products'
import Protected from './Protected'
export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }
  return (
    <div className="container mt-2">
      <h2 className="mb-5 text-center">React Protected Routes Example</h2>
      
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Products />
              </Protected>
            }
          />
        </Routes>
        {isSignedIn ? (
          <div className="d-grid mt-2">
            <button className="btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="d-grid mt-2">
            <button className="btn-dark" onClick={signin}>
              Sign in
            </button>
          </div>
        )}
 
    </div>
  )
}