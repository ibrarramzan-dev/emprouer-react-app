import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProjectOverview from "./pages/ProjectOverview"
import Login from "./pages/Login"
import Page404 from "./pages/Page404"
import ThemeProvider from "./components/contextProviders/ThemeProvider"
import LocaleProvider from "./components/contextProviders/LocaleProvider"
import Layout from "./components/Layout"
import Admin from "./pages/Admin"
import Projects from "./pages/Projects"
import Versioning from "./pages/Versioning"
import Users from "./pages/Users"
import UserEdit from "./pages/UserEdit"
import Tags from "./pages/Tags"
import BodyShop from "./pages/BodyShop"
import PaintShop from "./pages/PaintShop"
import Compressor from "./pages/Compressor"

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <ThemeProvider>
          <LocaleProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/versioning" element={<Versioning />} />
                <Route path="/usermanagement" element={<Users />} />
                <Route path="/user/:userId" element={<UserEdit />} />
                <Route path="/tagmanagement" element={<Tags />} />
                <Route
                  path="/project/:id/overview"
                  element={<ProjectOverview />}
                />
                <Route path="/bodyshop" element={<BodyShop />} />
                <Route path="/paintshop" element={<PaintShop />} />
                <Route path="/compressor" element={<Compressor />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Layout>
          </LocaleProvider>
        </ThemeProvider>
        <ToastContainer />
      </Suspense>
    </div>
  )
}

export default App
