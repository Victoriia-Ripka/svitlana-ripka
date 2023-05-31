import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("./Home/Home"));
const AboutPage = React.lazy(() => import("./About/About"));
const ConsultationsPage = React.lazy(() =>
  import("./Consultations/Consultation")
);
const ProgramPage = React.lazy(() => import("./Program/Program"));
const ArticlesPage = React.lazy(() => import("./Articles/Articles"));
const NotFoundPage = React.lazy(() => import("./NotFound/NotFound"));
const Layout = React.lazy(() => import("../components/Layout"));

function App() {
  return (
    // Loading
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="consultations" element={<ConsultationsPage />} />
          <Route path="program-for-parents" element={<ProgramPage />} />
          <Route path="articles" element={<ArticlesPage />}>
            {/* id article */}
            <Route path="articles/{id}" element={""} />
          </Route>
        </Route>
        {/* <NotFound /> */}
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
