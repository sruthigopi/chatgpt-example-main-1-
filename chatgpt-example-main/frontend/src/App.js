import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import COLORS from "./utils/colors";
import { PageLayout } from './components/pageLayout';
import { useEffect } from "react";
import Push from 'react-push-notification';
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
// import { loginRequest } from "./config.ts";
// import { ProfileData } from "./components/profileData";
// import { callMsGraph } from "./graph";
import { AuthenticatedTemplate, UnauthenticatedTemplate,useMsal } from "@azure/msal-react";

function App() {

// push notification

useEffect(() => {
  // Set up a listener for incoming push notifications
  addNotification({
    title: 'Warning',
    native:true         
  })

  // Push.create('Approval status changed', {
  //   body: 'Your request has been approved!',
  //   onClick: function () {
  //     console.log('Notification clicked');
  //   },
  // });
}, []);


  return (

    <PageLayout>
    <AuthenticatedTemplate>

    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLORS.primary,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>

    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
               <p className="notauth">You are not signed in! Please sign in.</p>
            </UnauthenticatedTemplate>
   </PageLayout>

  );
}

export default App;
