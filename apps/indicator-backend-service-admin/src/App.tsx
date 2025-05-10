import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { OrganizationsList } from "./organizations/OrganizationsList";
import { OrganizationsCreate } from "./organizations/OrganizationsCreate";
import { OrganizationsEdit } from "./organizations/OrganizationsEdit";
import { OrganizationsShow } from "./organizations/OrganizationsShow";
import { TaskRecipientsList } from "./taskRecipients/TaskRecipientsList";
import { TaskRecipientsCreate } from "./taskRecipients/TaskRecipientsCreate";
import { TaskRecipientsEdit } from "./taskRecipients/TaskRecipientsEdit";
import { TaskRecipientsShow } from "./taskRecipients/TaskRecipientsShow";
import { DocumentTypesList } from "./documentTypes/DocumentTypesList";
import { DocumentTypesCreate } from "./documentTypes/DocumentTypesCreate";
import { DocumentTypesEdit } from "./documentTypes/DocumentTypesEdit";
import { DocumentTypesShow } from "./documentTypes/DocumentTypesShow";
import { DocumentsList } from "./documents/DocumentsList";
import { DocumentsCreate } from "./documents/DocumentsCreate";
import { DocumentsEdit } from "./documents/DocumentsEdit";
import { DocumentsShow } from "./documents/DocumentsShow";
import { TaskSendList } from "./taskSend/TaskSendList";
import { TaskSendCreate } from "./taskSend/TaskSendCreate";
import { TaskSendEdit } from "./taskSend/TaskSendEdit";
import { TaskSendShow } from "./taskSend/TaskSendShow";
import { TaskRequestsList } from "./taskRequests/TaskRequestsList";
import { TaskRequestsCreate } from "./taskRequests/TaskRequestsCreate";
import { TaskRequestsEdit } from "./taskRequests/TaskRequestsEdit";
import { TaskRequestsShow } from "./taskRequests/TaskRequestsShow";
import { TasksList } from "./tasks/TasksList";
import { TasksCreate } from "./tasks/TasksCreate";
import { TasksEdit } from "./tasks/TasksEdit";
import { TasksShow } from "./tasks/TasksShow";
import { RegionsList } from "./regions/RegionsList";
import { RegionsCreate } from "./regions/RegionsCreate";
import { RegionsEdit } from "./regions/RegionsEdit";
import { RegionsShow } from "./regions/RegionsShow";
import { IndicatorList } from "./indicator/IndicatorList";
import { IndicatorCreate } from "./indicator/IndicatorCreate";
import { IndicatorEdit } from "./indicator/IndicatorEdit";
import { IndicatorShow } from "./indicator/IndicatorShow";
import { KpiList } from "./kpi/KpiList";
import { KpiCreate } from "./kpi/KpiCreate";
import { KpiEdit } from "./kpi/KpiEdit";
import { KpiShow } from "./kpi/KpiShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"IndicatorBackendService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="Organizations"
          list={OrganizationsList}
          edit={OrganizationsEdit}
          create={OrganizationsCreate}
          show={OrganizationsShow}
        />
        <Resource
          name="TaskRecipients"
          list={TaskRecipientsList}
          edit={TaskRecipientsEdit}
          create={TaskRecipientsCreate}
          show={TaskRecipientsShow}
        />
        <Resource
          name="DocumentTypes"
          list={DocumentTypesList}
          edit={DocumentTypesEdit}
          create={DocumentTypesCreate}
          show={DocumentTypesShow}
        />
        <Resource
          name="Documents"
          list={DocumentsList}
          edit={DocumentsEdit}
          create={DocumentsCreate}
          show={DocumentsShow}
        />
        <Resource
          name="TaskSend"
          list={TaskSendList}
          edit={TaskSendEdit}
          create={TaskSendCreate}
          show={TaskSendShow}
        />
        <Resource
          name="TaskRequests"
          list={TaskRequestsList}
          edit={TaskRequestsEdit}
          create={TaskRequestsCreate}
          show={TaskRequestsShow}
        />
        <Resource
          name="Tasks"
          list={TasksList}
          edit={TasksEdit}
          create={TasksCreate}
          show={TasksShow}
        />
        <Resource
          name="Regions"
          list={RegionsList}
          edit={RegionsEdit}
          create={RegionsCreate}
          show={RegionsShow}
        />
        <Resource
          name="Indicator"
          list={IndicatorList}
          edit={IndicatorEdit}
          create={IndicatorCreate}
          show={IndicatorShow}
        />
        <Resource
          name="Kpi"
          list={KpiList}
          edit={KpiEdit}
          create={KpiCreate}
          show={KpiShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
