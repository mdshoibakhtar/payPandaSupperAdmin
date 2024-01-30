
import './assets/css/style.css'
import PayPanda from './common/payPanda/PayPanda';
import { Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/custom.css'
import BankMasterP from './pages/topNavigationPages/Master/bankMaster';
// import Header from './common/header/Header';
// import DistributerPage from './pages/distributer';
// import CreateUserDistributerPage from './pages/distributer/createUserDistributer/CreateUserDistributer';
// import RetailerPage from './pages/retailer';
// import CreateUserRetailerPage from './pages/retailer/createUserRetailer';
// import SuspendedUserPage from './pages/suspendedUsers';
// import NotWorkingUserPage from './pages/notWorkingUser';
// import Footer from './common/footer/Footer';
// import Dashboardpage from './pages/dashboard';
// import AlltransportationReportsPage from './pages/alltransportationReports';
// import PanCardReportPages from './pages/panCardReport';
// import PendingTransactionReport from './components/reportMaster/pendingTransactionReport/PendingTransactionReport';
// import OperatorWiseSalePage from './pages/operatorWiseSale';
// import LedgerReportPage from './pages/LedgerReport';
// import BalanceTransferPage from './pages/balanceTransfer';
// import BalanceReturnRequestPage from './pages/balanceReturnRequest';
// import PaymentRequestViewPage from './pages/paymentRequestView';
// import PaymentRequestPage from './pages/PaymentRequest';
// import PendingDisputPage from './pages/pendingDisput';
// import SolveDisputePage from './pages/solveDispute';
// import DistributerIncomePage from './pages/distributerIncome';
// import RetailerIncomePage from './pages/retailerIncome';
// import MyIncomePage from './pages/myIncome';
// import DebitReportPage from './pages/debitReport';
// import CreditReportPage from './pages/creditReport';
// import PageNotFound from './common/pageNotFound/PageNotFound';
// import MyCommissionRechargePage from './pages/profile/myCommisionRecharge';
import MasterPages from './pages/topNavigationPages/Master';
// import CompanyStaffPages from './pages/topNavigationPages/companyStaff/CompanyStaffPages';
import BoardcastPage from './pages/boardcast';
// import Provider from './components/topNavigationComp/apimaster/provider/Provider';
// import AddproviderLogo from './components/topNavigationComp/apimaster/provider/providerForm/addproviderLogo/AddproviderLogo';
import AddBank from './components/topNavigationComp/masters/bankMaster/addBank/AddBank';
import EditAddBank from './components/topNavigationComp/masters/bankMaster/editAddBank/EditAddbank';
import EditRoleMaster from './components/topNavigationComp/masters/roleMaster/editRoleMaster/EditRoleMaster';
import RoleMasterPage from './pages/topNavigationPages/Master/roleMaster';
import StatusMasterPage from './pages/topNavigationPages/Master/statusMaster';
import EditStatusMaster from './components/topNavigationComp/masters/statusMaster/editStatusMaster/EditStatusMaster';
import ServiceMasterPage from './pages/topNavigationPages/Master/serviceMaster';
import EditServiceMaster from './components/topNavigationComp/masters/serviceMaster/serviceMasterEdit/ServiceMasterEdit';

function App() {
  return (
    <>
    <PayPanda/>
      <Routes>
        <Route>
          <Route path="/bank-master" element={<BankMasterP />} />
          <Route path="add-bank" element={<AddBank />} />
          <Route path="edit-add-bank" element={<EditAddBank />} />
          <Route path="role-master" element={<RoleMasterPage />} />
          <Route path="edit-role-master" element={<EditRoleMaster />} />
          {/* <Route path="company-staff-" element={<CompanyStaffPages />} /> */}
          <Route path="company-staff-permission" element={<MasterPages />} />
          <Route path="status-master" element={<StatusMasterPage />} />
          <Route path="edit-status-master" element={<EditStatusMaster />} />
          <Route path="service-master" element={<ServiceMasterPage />} />
          <Route path="edit-service-master" element={<EditServiceMaster />} />
          <Route path="boardcast" element={<BoardcastPage />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
