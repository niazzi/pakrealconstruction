// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from "./components/layout/Header";

// import Footer from "./components/layout/Footer";

// import Home from "./components/Home";
// import Product from "./components/product/Product";
// import Display from "./components/product/Display";
// import Video from "./components/video/Video";
// import VideoDetails from "./components/video/VideoDetails";
// import Videodisplay from "./components/video/Videodisplay";
// import ProductDetails from "./components/product/ProductDetails";
// import VehicleDetails from "./components/product/VehicleDetails";
// import Labor from "./components/service/Labor";
// // Package
// import Package from "./components/product/Package";
// import PackageDetails from "./components/product/PackageDetails";
// import VehicleShow from "./components/product/VehicleShow";
// import LaborShow from "./components/product/LaborShow";
// import Vehicle from "./components/service/Vehicle";

// // Complaint
// import Complain from './components/complain/Complain'

// // Project
// import Project1 from './components/project/Project1';
// import Project2 from './components/project/Project2';
// import Project3 from './components/project/Project3';

// //Calculator
// import Calculator from "./components/calculator/Calculator";
// import ServiceProvider from "./components/service/ServiceProvider";
// import Steel from "./components/calculator/Steel";
// import ConstructionCost from "./components/calculator/ConstructionCost";
// import CementConcrete from "./components/calculator/CementConcrete";
// import Plaster from "./components/calculator/Plaster";

// //cart imports
// import Cart from "./components/cart/Cart";
// import Shipping from "./components/cart/Shipping";
// import ConfirmOrder from "./components/cart/ConfirmOrder";
// import Payment from "./components/cart/Payment";
// import  OrderSuccess  from "./components/cart/OrderSuccess";

// //order Imports
// import ListOrders from "./components/order/ListOrders";
// import OrderDetails from "./components/order/OrderDetails";


// // Auth or User imports

// import Login from "./components/user/Login";
// import Register from "./components/user/Register";
// import Profile from "./components/user/Profile";
// import UpdateProfile from "./components/user/UpdateProfile";
// import UpdatePassword from "./components/user/UpdatePassword";
// import ForgotPassword from "./components/user/ForgotPassword";
// import NewPassword from "./components/user/NewPassword";

// // Admin Imports
// import Dashboard from "./components/admin/Dashboard";
// import ProductsList from "./components/admin/ProductsList";
// import NewProduct from "./components/admin/NewProduct";
// import UpdateProduct from "./components/admin/UpdateProduct";
// import UpdateLabor from "./components/admin/UpdateLabor";
// import UpdateVehicle from "./components/admin/UpdateVehicle";
// import UpdatePackage from "./components/admin/UpdatePackage";
// import NewLabor from "./components/admin/NewLabor";
// import NewVehicle from "./components/admin/NewVehicle";
// import NewPackage from "./components/admin/NewPackage";
// import UploadVideo from "./components/admin/UploadVideo";
// import LaborsList from "./components/admin/LaborsList";
// import VehicleList from "./components/admin/VehicleList";
// import PackagesList from "./components/admin/PackagesList";
// import VediosList from "./components/admin/VediosList";
// import NewCoupon from "./components/admin/NewCoupon";
// import UpdateVideo from "./components/admin/UpdateVideo";

// import OrdersList from "./components/admin/OrdersList";
// import ProcessOrder from "./components/admin/ProcessOrder";
// import UsersList from "./components/admin/UsersList";
// import ComplainList from "./components/admin/ComplainList";
// import CouponList from "./components/admin/CouponList";
// import UpdateUser from "./components/admin/UpdateUser";
// import ProductReviews from "./components/admin/ProductReviews";

// import ProtectedRoute from "./components/route/ProtectedRoute";





// import { loadUser } from "./actions/userActions";
// import { useSelector } from "react-redux";




// import store from './store'
// import axios from 'axios'

// // Payment
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'

// function App() {
//   const [stripeApiKey, setStripeApiKey] = useState('');

//   useEffect(() => {
//     store.dispatch(loadUser())

//     async function getStripApiKey() {
//       const { data } = await axios.get('/api/v1/stripeapi');
//       console.log(data.stripeApiKey);
//       setStripeApiKey(data.stripeApiKey)
//     }

//     getStripApiKey();

//   }, [])

//   const { user, isAuthenticated, loading } = useSelector(state => state.auth)


//   return (
//     <Router>
//       <div className="App">
//         <Header />

//         <Route path="/" component={Home} exact />
//         <div className="container container-fluid">
//           <Switch>
//             <Route path="/search/:keyword" component={Display} />
//             <Route path="/display" component={Display} />
//             <Route path="/videodisplay" component={Videodisplay} />

//             <Route path="/product/:id" component={ProductDetails} exact />
//             <Route path="/labor" component={Labor} />
//             <Route path="/package" component={Package} />
//             <Route path="/pack/:id" component={PackageDetails} exact />
//             <Route path="/labors" component={LaborShow} />
//             <Route path="/vehicles" component={VehicleShow} />
//             <Route path="/complain" component={Complain} />
//             <Route path="/video" component={Video} />
//             {/* <Route path="/video/:id" component={VideoDetails} exact /> */}
//             <Route path="/videos/:id" component={VideoDetails} exact />
//             <Route path="/vehicle" component={Vehicle} />
//             {/* //Vehicle and Labor Details */}
//             <Route path="/vehicled/:id" component={VehicleDetails} exact />
//             {/* <Route path="/labord/:id" component={LaborDetails} exact /> */}
//             <Route path="/project1" component={Project1} exact />
//             <Route path="/project2" component={Project2} exact />
//             <Route path="/project3" component={Project3} exact />
//             <Route path="/calculator" component={Calculator} exact />
//             <Route
//               path="/constructioncost"
//               component={ConstructionCost}
//               exact
//             />
//             <Route path="/cementconcrete" component={CementConcrete} exact />
//             <Route path="/plaster" component={Plaster} exact />
            
//             <Route path="/steel" component={Steel} exact />

//             <Route path="/serviceprovider" component={ServiceProvider} exact />

//             {/* // auth */}
//              <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//              <Route path="/password/forgot" component={ForgotPassword} exact />
//             <Route
//               path="/password/reset/newpassword"
//               component={NewPassword}
//               exact
//             />
           
//             <ProtectedRoute path="/me" component={Profile} exact />
//             <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
//             <ProtectedRoute
//               path="/password/update"
//               component={UpdatePassword}
//               exact
//             />
            
//             <ProtectedRoute path="/orders/me" component={ListOrders} exact />
//           <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
        

//             {/* // cart */}
//           <Route path="/cart" component={Cart} exact />
//           <ProtectedRoute path="/shipping" component={Shipping} />
//           <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
//           <ProtectedRoute path="/success" component={OrderSuccess} />
//           {stripeApiKey &&
//             <Elements stripe={loadStripe(stripeApiKey)}>
//               <ProtectedRoute path="/payment" component={Payment} />
//             </Elements>
//           } 

            
           
            
            
            
           
          
         
        
            
          
//           </Switch>
//         </div>
//         <ProtectedRoute
//           path="/dashboard"
//           isAdmin={true}
//           component={Dashboard}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/products"
//           isAdmin={true}
//           component={ProductsList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/product"
//           isAdmin={true}
//           component={NewProduct}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/product/:id"
//           isAdmin={true}
//           component={UpdateProduct}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatelabor/:id"
//           isAdmin={true}
//           component={UpdateLabor}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatevehicle/:id"
//           isAdmin={true}
//           component={UpdateVehicle}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/pack/:id"
//           isAdmin={true}
//           component={UpdatePackage}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatevideo"
//           isAdmin={true}
//           component={UpdateVideo}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/orders"
//           isAdmin={true}
//           component={OrdersList}
//           exact
//         />

//         <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
//         <ProtectedRoute
//           path="/admin/complains"
//           isAdmin={true}
//           component={ComplainList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/coupons"
//           isAdmin={true}
//           component={CouponList}
//           exact
//         />
//         {/* <ProtectedRoute
//           path="/admin/order/process"
//           isAdmin={true}
//           component={ProcessOrder}
//           exact
//         /> */}
//         <ProtectedRoute
//           path="/admin/users"
//           isAdmin={true}
//           component={UsersList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/user/:id"
//           isAdmin={true}
//           component={UpdateUser}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/reviews"
//           isAdmin={true}
//           component={ProductReviews}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newlabor"
//           isAdmin={true}
//           component={NewLabor}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/labors"
//           isAdmin={true}
//           component={LaborsList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newvehicle"
//           isAdmin={true}
//           component={NewVehicle}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/vehicles"
//           isAdmin={true}
//           component={VehicleList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newpackage"
//           isAdmin={true}
//           component={NewPackage}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newcoupon"
//           isAdmin={true}
//           component={NewCoupon}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/packs"
//           isAdmin={true}
//           component={PackagesList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/uploadvideo"
//           isAdmin={true}
//           component={UploadVideo}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/vedeos"
//           isAdmin={true}
//           component={VediosList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/uploadvideo"
//           isAdmin={true}
//           component={UploadVideo}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatevideo"
//           isAdmin={true}
//           component={UpdateVideo}
//           exact
//         />

//         {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
//       </div>
//     </Router>
//   );
// }

// export default App;







// // import React, { useEffect, useState } from 'react'
// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// // import Header from "./components/layout/Header";

// // import Footer from "./components/layout/Footer";

// // import Home from "./components/Home";
// // import Product from "./components/product/Product";
// // import Video from "./components/video/Video";
// // import VideoDetails from "./components/video/VideoDetails";
// // import UploadVideo from "./components/admin/UploadVideo";

// // import ProductDetails from "./components/product/ProductDetails";
// // import VehicleDetails from "./components/product/VehicleDetails";
// // import LaborDetails from "./components/product/LaborDetails";
// // import Cart from "./components/cart/Cart";
// // import Shipping from "./components/cart/Shipping";
// // import ConfirmOrder from "./components/cart/ConfirmOrder";
// // import Payment from "./components/cart/Payment";

// // import Profile from "./components/user/Profile";
// // import Labor from "./components/service/Labor";
// // // Package
// // import Package from "./components/product/Package";
// // import PackageDetails from "./components/product/PackageDetails";
// // import VehicleShow from "./components/product/VehicleShow";
// // import LaborShow from "./components/product/LaborShow";
// // import Vehicle from "./components/service/Vehicle";
// // import Login from "./components/user/Login";
// // import Register from "./components/user/Register";
// // import ProtectedRoute from "./components/route/ProtectedRoute";
// // import UpdateProfile from "./components/user/UpdateProfile";
// // import UpdatePassword from "./components/user/UpdatePassword";
// // import ForgotPassword from "./components/user/ForgotPassword";
// // import NewPassword from "./components/user/NewPassword";

// // import ListOrders from "./components/order/ListOrders";
// // import OrderDetails from "./components/order/OrderDetails";
// // // import Complain from "./components/complain/Complain";

// // // Complaint
// // import Complain from './components/complain/Complain'

// // //Calculator
// // import Calculator from "./components/calculator/Calculator";
// // import ServiceProvider from "./components/service/ServiceProvider";

// // import ConstructionCost from "./components/calculator/ConstructionCost";
// // import CementConcrete from "./components/calculator/CementConcrete";
// // import Plaster from "./components/calculator/Plaster";
// // // import Brick from "./components/calculator/Brick";
// // // import ConcreteBlock from "./components/calculator/ConcreteBlock";
// // // import Flooring from "./components/calculator/Flooring";
// // // import Paint from "./components/calculator/Paint";
// // // import RoundColumn from "./components/calculator/RoundColumn";
// // // import Stair from "./components/calculator/Stair";
// // // import ConcreteTube from "./components/calculator/ConcreteTube";
// // import Steel from "./components/calculator/Steel";

// // // Admin Imports
// // import Dashboard from "./components/admin/Dashboard";
// // import ProductsList from "./components/admin/ProductsList";
// // import NewProduct from "./components/admin/NewProduct";
// // import UpdateProduct from "./components/admin/UpdateProduct";
// // import UpdateLabor from "./components/admin/UpdateLabor";
// // import UpdateVehicle from "./components/admin/UpdateVehicle";
// // import UpdatePackage from "./components/admin/UpdatePackage";

// // import OrdersList from "./components/admin/OrdersList";
// // import ProcessOrder from "./components/admin/ProcessOrder";
// // import UsersList from "./components/admin/UsersList";
// // import ComplainList from "./components/admin/ComplainList";
// // import CouponList from "./components/admin/CouponList";
// // import UpdateUser from "./components/admin/UpdateUser";

// // import ProductReviews from "./components/admin/ProductReviews";
// // // import ProductReviews from "./components/admin/ProductReviews";

// // import NewLabor from "./components/admin/NewLabor";
// // import NewVehicle from "./components/admin/NewVehicle";
// // import NewPackage from "./components/admin/NewPackage";
// // import LaborsList from "./components/admin/LaborsList";
// // import VehicleList from "./components/admin/VehicleList";
// // import PackagesList from "./components/admin/PackagesList";
// // import VediosList from "./components/admin/VediosList";
// // import NewCoupon from "./components/admin/NewCoupon";
// // import UpdateVideo from "./components/admin/UpdateVideo";
// // import Videodisplay from "./components/video/Videodisplay";

// // import { loadUser } from "./actions/userActions";
// // import { useSelector } from "react-redux";


// // import  OrderSuccess  from "./components/cart/OrderSuccess";

// // import Display from "./components/product/Display";



// // import store from './store'
// // import axios from 'axios'

// // // Payment
// // import { Elements } from '@stripe/react-stripe-js'
// // import { loadStripe } from '@stripe/stripe-js'

// // function App() {
// //   const [stripeApiKey, setStripeApiKey] = useState('');

// //   useEffect(() => {
// //     store.dispatch(loadUser())

// //     async function getStripApiKey() {
// //       const { data } = await axios.get('/api/v1/stripeapi');

// //       setStripeApiKey(data.stripeApiKey)
// //     }

// //     getStripApiKey();

// //   }, [])

// //   const { user, isAuthenticated, loading } = useSelector(state => state.auth)

// // // function App() {
// // //   useEffect(() => {
// // //     store.dispatch(loadUser);
// // //   }, []);

// // //   const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Header />

// //         <Route path="/" component={Home} exact />
// //         <div className="container container-fluid">
// //           <Switch>
// //             <Route path="/search/:keyword" component={Display} />
// //             <Route path="/display" component={Display} />
// //             <Route path="/videodisplay" component={Videodisplay} />

// //             <Route path="/product/:id" component={ProductDetails} exact />
// //             <Route path="/cart" component={Cart} exact />
           
// //             <ProtectedRoute path="/me" component={Profile} exact />
// //             <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
// //             <ProtectedRoute
// //               path="/password/update"
// //               component={UpdatePassword}
// //               exact
// //             />
// //             <Route path="/password/forgot" component={ForgotPassword} exact />
// //             <Route
// //               path="/password/reset/newpassword"
// //               component={NewPassword}
// //               exact
// //             />
// //             <Route path="/labor" component={Labor} />
// //             <Route path="/package" component={Package} />
// //             <Route path="/pack/:id" component={PackageDetails} exact />
// //             <Route path="/labors" component={LaborShow} />
// //             <Route path="/vehicles" component={VehicleShow} />
// //             <Route path="/complain" component={Complain} />
// //             <Route path="/video" component={Video} />
// //             {/* <Route path="/video/:id" component={VideoDetails} exact /> */}
// //             <Route path="/videos/:id" component={VideoDetails} exact />
// //             <Route path="/vehicle" component={Vehicle} />
// //             {/* //Vehicle and Labor Details */}
// //             <Route path="/vehicled/:id" component={VehicleDetails} exact />
// //             <Route path="/labord/:id" component={LaborDetails} exact />
// //             <Route path="/calculator" component={Calculator} exact />
// //             <Route
// //               path="/constructioncost"
// //               component={ConstructionCost}
// //               exact
// //             />
// //             <Route path="/cementconcrete" component={CementConcrete} exact />
// //             <Route path="/plaster" component={Plaster} exact />
            
// //             <Route path="/steel" component={Steel} exact />

// //             <Route path="/serviceprovider" component={ServiceProvider} exact />
// //             <Route path="/login" component={Login} />
// //             <Route path="/register" component={Register} />
// //             <ProtectedRoute path="/shipping" component={Shipping} />
// //             <ProtectedRoute path="/ordersuccess" component={OrderSuccess} />
           
// //             <Route path="/order/confirm" component={ConfirmOrder}  />
// //             {stripeApiKey &&
// //             <Elements stripe={loadStripe(stripeApiKey)}>
// //               <ProtectedRoute path="/payment" component={Payment} />
             
// //             </Elements>
// //           }
         
           
// //             <Route path="/success" component={OrderSuccess} />
// //             <ProtectedRoute path="/orders/me" component={ListOrders} exact />

// //             <ProtectedRoute
// //               path="/order/detail"
// //               component={OrderDetails}
// //               exact
// //             />
// //           </Switch>
// //         </div>
// //         <ProtectedRoute
// //           path="/dashboard"
// //           isAdmin={true}
// //           component={Dashboard}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/products"
// //           isAdmin={true}
// //           component={ProductsList}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/product"
// //           isAdmin={true}
// //           component={NewProduct}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/product/:id"
// //           isAdmin={true}
// //           component={UpdateProduct}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/updatelabor/:id"
// //           isAdmin={true}
// //           component={UpdateLabor}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/updatevehicle/:id"
// //           isAdmin={true}
// //           component={UpdateVehicle}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/pack/:id"
// //           isAdmin={true}
// //           component={UpdatePackage}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/updatevideo"
// //           isAdmin={true}
// //           component={UpdateVideo}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/orders"
// //           isAdmin={true}
// //           component={OrdersList}
// //           exact
// //         />

// //         <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
// //         <ProtectedRoute
// //           path="/admin/complains"
// //           isAdmin={true}
// //           component={ComplainList}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/coupons"
// //           isAdmin={true}
// //           component={CouponList}
// //           exact
// //         />
// //         {/* <ProtectedRoute
// //           path="/admin/order/process"
// //           isAdmin={true}
// //           component={ProcessOrder}
// //           exact
// //         /> */}
// //         <ProtectedRoute
// //           path="/admin/users"
// //           isAdmin={true}
// //           component={UsersList}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/user/:id"
// //           isAdmin={true}
// //           component={UpdateUser}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/reviews"
// //           isAdmin={true}
// //           component={ProductReviews}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/newlabor"
// //           isAdmin={true}
// //           component={NewLabor}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/labors"
// //           isAdmin={true}
// //           component={LaborsList}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/newvehicle"
// //           isAdmin={true}
// //           component={NewVehicle}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/vehicles"
// //           isAdmin={true}
// //           component={VehicleList}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/newpackage"
// //           isAdmin={true}
// //           component={NewPackage}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/newcoupon"
// //           isAdmin={true}
// //           component={NewCoupon}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/packs"
// //           isAdmin={true}
// //           component={PackagesList}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/uploadvideo"
// //           isAdmin={true}
// //           component={UploadVideo}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/vedeos"
// //           isAdmin={true}
// //           component={VediosList}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/uploadvideo"
// //           isAdmin={true}
// //           component={UploadVideo}
// //           exact
// //         />
// //         <ProtectedRoute
// //           path="/admin/updatevideo"
// //           isAdmin={true}
// //           component={UpdateVideo}
// //           exact
// //         />

// //         {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from "./components/layout/Header";

// import Footer from "./components/layout/Footer";

// import Home from "./components/Home";
// import Product from "./components/product/Product";
// import Video from "./components/video/Video";
// import VideoDetails from "./components/video/VideoDetails";
// import UploadVideo from "./components/admin/UploadVideo";

// import ProductDetails from "./components/product/ProductDetails";
// import VehicleDetails from "./components/product/VehicleDetails";
// import LaborDetails from "./components/product/LaborDetails";
// import Cart from "./components/cart/Cart";
// import Shipping from "./components/cart/Shipping";
// import ConfirmOrder from "./components/cart/ConfirmOrder";
// import Payment from "./components/cart/Payment";

// import Profile from "./components/user/Profile";
// import Labor from "./components/service/Labor";
// // Package
// import Package from "./components/product/Package";
// import PackageDetails from "./components/product/PackageDetails";
// import VehicleShow from "./components/product/VehicleShow";
// import LaborShow from "./components/product/LaborShow";
// import Vehicle from "./components/service/Vehicle";
// import Login from "./components/user/Login";
// import Register from "./components/user/Register";
// import ProtectedRoute from "./components/route/ProtectedRoute";
// import UpdateProfile from "./components/user/UpdateProfile";
// import UpdatePassword from "./components/user/UpdatePassword";
// import ForgotPassword from "./components/user/ForgotPassword";
// import NewPassword from "./components/user/NewPassword";

// import ListOrders from "./components/order/ListOrders";
// import OrderDetails from "./components/order/OrderDetails";
// // import Complain from "./components/complain/Complain";

// // Complaint
// import Complain from './components/complain/Complain'

// //Calculator
// import Calculator from "./components/calculator/Calculator";
// import ServiceProvider from "./components/service/ServiceProvider";

// import ConstructionCost from "./components/calculator/ConstructionCost";
// import CementConcrete from "./components/calculator/CementConcrete";
// import Plaster from "./components/calculator/Plaster";
// // import Brick from "./components/calculator/Brick";
// // import ConcreteBlock from "./components/calculator/ConcreteBlock";
// // import Flooring from "./components/calculator/Flooring";
// // import Paint from "./components/calculator/Paint";
// // import RoundColumn from "./components/calculator/RoundColumn";
// // import Stair from "./components/calculator/Stair";
// // import ConcreteTube from "./components/calculator/ConcreteTube";
// import Steel from "./components/calculator/Steel";

// // Admin Imports
// import Dashboard from "./components/admin/Dashboard";
// import ProductsList from "./components/admin/ProductsList";
// import NewProduct from "./components/admin/NewProduct";
// import UpdateProduct from "./components/admin/UpdateProduct";
// import UpdateLabor from "./components/admin/UpdateLabor";
// import UpdateVehicle from "./components/admin/UpdateVehicle";
// import UpdatePackage from "./components/admin/UpdatePackage";

// import OrdersList from "./components/admin/OrdersList";
// import ProcessOrder from "./components/admin/ProcessOrder";
// import UsersList from "./components/admin/UsersList";
// import ComplainList from "./components/admin/ComplainList";
// import CouponList from "./components/admin/CouponList";
// import UpdateUser from "./components/admin/UpdateUser";

// import ProductReviews from "./components/admin/ProductReviews";
// // import ProductReviews from "./components/admin/ProductReviews";

// import NewLabor from "./components/admin/NewLabor";
// import NewVehicle from "./components/admin/NewVehicle";
// import NewPackage from "./components/admin/NewPackage";
// import LaborsList from "./components/admin/LaborsList";
// import VehicleList from "./components/admin/VehicleList";
// import PackagesList from "./components/admin/PackagesList";
// import VediosList from "./components/admin/VediosList";
// import NewCoupon from "./components/admin/NewCoupon";
// import UpdateVideo from "./components/admin/UpdateVideo";
// import Videodisplay from "./components/video/Videodisplay";

// import { loadUser } from "./actions/userActions";
// import { useSelector } from "react-redux";


// import  OrderSuccess  from "./components/cart/OrderSuccess";

// import Display from "./components/product/Display";



// import store from './store'
// import axios from 'axios'

// // Payment
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'

// function App() {
//   const [stripeApiKey, setStripeApiKey] = useState('');

//   useEffect(() => {
//     store.dispatch(loadUser())

//     async function getStripApiKey() {
//       const { data } = await axios.get('/api/v1/stripeapi');

//       setStripeApiKey(data.stripeApiKey)
//     }

//     getStripApiKey();

//   }, [])

//   const { user, isAuthenticated, loading } = useSelector(state => state.auth)

// // function App() {
// //   useEffect(() => {
// //     store.dispatch(loadUser);
// //   }, []);

// //   const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
//   return (
//     <Router>
//       <div className="App">
//         <Header />

//         <Route path="/" component={Home} exact />
//         <div className="container container-fluid">
//           <Switch>
//             <Route path="/search/:keyword" component={Display} />
//             <Route path="/display" component={Display} />
//             <Route path="/videodisplay" component={Videodisplay} />

//             <Route path="/product/:id" component={ProductDetails} exact />
//             <Route path="/cart" component={Cart} exact />
           
//             <ProtectedRoute path="/me" component={Profile} exact />
//             <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
//             <ProtectedRoute
//               path="/password/update"
//               component={UpdatePassword}
//               exact
//             />
//             <Route path="/password/forgot" component={ForgotPassword} exact />
//             <Route
//               path="/password/reset/newpassword"
//               component={NewPassword}
//               exact
//             />
//             <Route path="/labor" component={Labor} />
//             <Route path="/package" component={Package} />
//             <Route path="/pack/:id" component={PackageDetails} exact />
//             <Route path="/labors" component={LaborShow} />
//             <Route path="/vehicles" component={VehicleShow} />
//             <Route path="/complain" component={Complain} />
//             <Route path="/video" component={Video} />
//             {/* <Route path="/video/:id" component={VideoDetails} exact /> */}
//             <Route path="/videos/:id" component={VideoDetails} exact />
//             <Route path="/vehicle" component={Vehicle} />
//             {/* //Vehicle and Labor Details */}
//             <Route path="/vehicled/:id" component={VehicleDetails} exact />
//             <Route path="/labord/:id" component={LaborDetails} exact />
//             <Route path="/calculator" component={Calculator} exact />
//             <Route
//               path="/constructioncost"
//               component={ConstructionCost}
//               exact
//             />
//             <Route path="/cementconcrete" component={CementConcrete} exact />
//             <Route path="/plaster" component={Plaster} exact />
            
//             <Route path="/steel" component={Steel} exact />

//             <Route path="/serviceprovider" component={ServiceProvider} exact />
//             <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//             <ProtectedRoute path="/orders/me" component={ListOrders} exact />

//             <ProtectedRoute
//               path="/order/detail"
//               component={OrderDetails}
//               exact
//             />
//             <ProtectedRoute path="/shipping" component={Shipping} />
//             <ProtectedRoute path="/ordersuccess" component={OrderSuccess} />
           
//             <Route path="/order/confirm" component={ConfirmOrder}  />
//             {stripeApiKey &&
//             <Elements stripe={loadStripe(stripeApiKey)}>
//               <ProtectedRoute path="/payment" component={Payment} />
             
//             </Elements>
//           }
         
           
//             <Route path="/success" component={OrderSuccess} />
            
//           </Switch>
//         </div>
//         <ProtectedRoute
//           path="/dashboard"
//           isAdmin={true}
//           component={Dashboard}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/products"
//           isAdmin={true}
//           component={ProductsList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/product"
//           isAdmin={true}
//           component={NewProduct}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/product/:id"
//           isAdmin={true}
//           component={UpdateProduct}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatelabor/:id"
//           isAdmin={true}
//           component={UpdateLabor}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatevehicle/:id"
//           isAdmin={true}
//           component={UpdateVehicle}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/pack/:id"
//           isAdmin={true}
//           component={UpdatePackage}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatevideo"
//           isAdmin={true}
//           component={UpdateVideo}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/orders"
//           isAdmin={true}
//           component={OrdersList}
//           exact
//         />

//         <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
//         <ProtectedRoute
//           path="/admin/complains"
//           isAdmin={true}
//           component={ComplainList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/coupons"
//           isAdmin={true}
//           component={CouponList}
//           exact
//         />
//         {/* <ProtectedRoute
//           path="/admin/order/process"
//           isAdmin={true}
//           component={ProcessOrder}
//           exact
//         /> */}
//         <ProtectedRoute
//           path="/admin/users"
//           isAdmin={true}
//           component={UsersList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/user/:id"
//           isAdmin={true}
//           component={UpdateUser}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/reviews"
//           isAdmin={true}
//           component={ProductReviews}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newlabor"
//           isAdmin={true}
//           component={NewLabor}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/labors"
//           isAdmin={true}
//           component={LaborsList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newvehicle"
//           isAdmin={true}
//           component={NewVehicle}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/vehicles"
//           isAdmin={true}
//           component={VehicleList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newpackage"
//           isAdmin={true}
//           component={NewPackage}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/newcoupon"
//           isAdmin={true}
//           component={NewCoupon}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/packs"
//           isAdmin={true}
//           component={PackagesList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/uploadvideo"
//           isAdmin={true}
//           component={UploadVideo}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/vedeos"
//           isAdmin={true}
//           component={VediosList}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/uploadvideo"
//           isAdmin={true}
//           component={UploadVideo}
//           exact
//         />
//         <ProtectedRoute
//           path="/admin/updatevideo"
//           isAdmin={true}
//           component={UpdateVideo}
//           exact
//         />

//         {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Footer from "./components/layout/Footer";

import Home from "./components/Home";
import Product from "./components/product/Product";
import Display from "./components/product/Display";
import Video from "./components/video/Video";
import VideoDetails from "./components/video/VideoDetails";
import Videodisplay from "./components/video/Videodisplay";
import ProductDetails from "./components/product/ProductDetails";
import VehicleDetails from "./components/product/VehicleDetails";
import Labor from "./components/service/Labor";
import LaborDetails from "./components/product/LaborDetails";
// Package
import Package from "./components/product/Package";
import PackageDetails from "./components/product/PackageDetails";
import VehicleShow from "./components/product/VehicleShow";
import LaborShow from "./components/product/LaborShow";
import Vehicle from "./components/service/Vehicle";

// Project
 import Project1 from './components/project/Project1';
import Project2 from './components/project/Project2';
import Project3 from './components/project/Project3';

// Complaint
import Complain from './components/complain/Complain'

//Calculator
import Calculator from "./components/calculator/Calculator";
import ServiceProvider from "./components/service/ServiceProvider";
import Steel from "./components/calculator/Steel";
import ConstructionCost from "./components/calculator/ConstructionCost";
import CementConcrete from "./components/calculator/CementConcrete";
import Plaster from "./components/calculator/Plaster";

//cart imports
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import  OrderSuccess  from "./components/cart/OrderSuccess";

//order Imports
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";


// Auth or User imports

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

// Admin Imports
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import UpdateLabor from "./components/admin/UpdateLabor";
import UpdateVehicle from "./components/admin/UpdateVehicle";
import UpdatePackage from "./components/admin/UpdatePackage";
import NewLabor from "./components/admin/NewLabor";
import NewVehicle from "./components/admin/NewVehicle";
import NewPackage from "./components/admin/NewPackage";
import UploadVideo from "./components/admin/UploadVideo";
import LaborsList from "./components/admin/LaborsList";
import VehicleList from "./components/admin/VehicleList";
import PackagesList from "./components/admin/PackagesList";
import VediosList from "./components/admin/VediosList";
import NewCoupon from "./components/admin/NewCoupon";
import UpdateVideo from "./components/admin/UpdateVideo";

import OrdersList from "./components/admin/OrdersList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UsersList";
import ComplainList from "./components/admin/ComplainList";
import CouponList from "./components/admin/CouponList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";

import ProtectedRoute from "./components/route/ProtectedRoute";





import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";




import store from './store'
import axios from 'axios'

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function App() {
  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');
      console.log(data.stripeApiKey);
      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();

  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)


  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/" component={Home} exact />
        <div className="container container-fluid">
          <Switch>
            <Route path="/search/:keyword" component={Display} />
            <Route path="/productdisplay" component={Display} />
            <Route path="/videodisplay" component={Videodisplay} />

            <Route path="/product/:id" component={ProductDetails} exact />
            <Route path="/labor" component={Labor} />
            <Route path="/package" component={Package} />
            <Route path="/pack/:id" component={PackageDetails} exact />
            <Route path="/labors" component={LaborShow} />
            <Route path="/vehicles" component={VehicleShow} />
            <Route path="/complain" component={Complain} />
            <Route path="/video" component={Video} />
            {/* <Route path="/video/:id" component={VideoDetails} exact /> */}
            <Route path="/videos/:id" component={VideoDetails} exact />
            <Route path="/vehicle" component={Vehicle} />
            {/* //Vehicle and Labor Details */}
            <Route path="/vehicled/:id" component={VehicleDetails} exact />
            <Route path="/labord/:id" component={LaborDetails} exact />
            <Route path="/project1" component={Project1} exact />
            <Route path="/project2" component={Project2} exact />
         <Route path="/project3" component={Project3} exact />
            <Route path="/calculator" component={Calculator} exact />
            <Route
              path="/constructioncost"
              component={ConstructionCost}
              exact
            />
            <Route path="/cementconcrete" component={CementConcrete} exact />
            <Route path="/plaster" component={Plaster} exact />
            
            <Route path="/steel" component={Steel} exact />

            <Route path="/serviceprovider" component={ServiceProvider} exact />

            {/* // auth */}
             <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
             <Route path="/password/forgot" component={ForgotPassword} exact />
            <Route
              path="/password/reset/newpassword"
              component={NewPassword}
              exact
            />
           
            <ProtectedRoute path="/me" component={Profile} exact />
            <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
            <ProtectedRoute
              path="/password/update"
              component={UpdatePassword}
              exact
            />
            
            <ProtectedRoute path="/orders/me" component={ListOrders} exact />
          <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
        

            {/* // cart */}
          <Route path="/cart" component={Cart} exact />
          <ProtectedRoute path="/shipping" component={Shipping} />
          <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
          <ProtectedRoute path="/success" component={OrderSuccess} />
          {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute path="/payment" component={Payment} />
            </Elements>
          } 
         
            
          
          </Switch>
        </div>
        <ProtectedRoute
          path="/dashboard"
          isAdmin={true}
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />
        <ProtectedRoute
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/updatelabor/:id"
          isAdmin={true}
          component={UpdateLabor}
          exact
        />
        <ProtectedRoute
          path="/admin/updatevehicle/:id"
          isAdmin={true}
          component={UpdateVehicle}
          exact
        />
        <ProtectedRoute
          path="/admin/pack/:id"
          isAdmin={true}
          component={UpdatePackage}
          exact
        />
        <ProtectedRoute
          path="/admin/updatevideo"
          isAdmin={true}
          component={UpdateVideo}
          exact
        />
        <ProtectedRoute
          path="/admin/orders"
          isAdmin={true}
          component={OrdersList}
          exact
        />

        <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
        <ProtectedRoute
          path="/admin/complains"
          isAdmin={true}
          component={ComplainList}
          exact
        />
        <ProtectedRoute
          path="/admin/coupons"
          isAdmin={true}
          component={CouponList}
          exact
        />
        {/* <ProtectedRoute
          path="/admin/order/process"
          isAdmin={true}
          component={ProcessOrder}
          exact
        /> */}
        <ProtectedRoute
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
          exact
        />
        <ProtectedRoute
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          exact
        />
        <ProtectedRoute
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
          exact
        />
        <ProtectedRoute
          path="/admin/newlabor"
          isAdmin={true}
          component={NewLabor}
          exact
        />
        <ProtectedRoute
          path="/admin/labors"
          isAdmin={true}
          component={LaborsList}
          exact
        />
        <ProtectedRoute
          path="/admin/newvehicle"
          isAdmin={true}
          component={NewVehicle}
          exact
        />
        <ProtectedRoute
          path="/admin/vehicles"
          isAdmin={true}
          component={VehicleList}
          exact
        />
        <ProtectedRoute
          path="/admin/newpackage"
          isAdmin={true}
          component={NewPackage}
          exact
        />
        <ProtectedRoute
          path="/admin/newcoupon"
          isAdmin={true}
          component={NewCoupon}
          exact
        />
        <ProtectedRoute
          path="/admin/packs"
          isAdmin={true}
          component={PackagesList}
          exact
        />
        <ProtectedRoute
          path="/admin/uploadvideo"
          isAdmin={true}
          component={UploadVideo}
          exact
        />
        <ProtectedRoute
          path="/admin/vedeos"
          isAdmin={true}
          component={VediosList}
          exact
        />
        <ProtectedRoute
          path="/admin/uploadvideo"
          isAdmin={true}
          component={UploadVideo}
          exact
        />
        <ProtectedRoute
          path="/admin/updatevideo"
          isAdmin={true}
          component={UpdateVideo}
          exact
        />

        {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
      </div>
    </Router>
  );
}

export default App;