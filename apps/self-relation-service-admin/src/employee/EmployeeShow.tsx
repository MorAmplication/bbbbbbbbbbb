import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="xsdaxsza" source="xsdaxsza" />
        <TextField label="xcsxd" source="xcsxd" />
        <TextField label="xsszxsx" source="xsszxsx" />
        <TextField label="rfuihriuhfi" source="rfuihriuhfi" />
        <TextField label="hfelrhbflrohfrg" source="hfelrhbflrohfrg" />
        <TextField label=";krenmk;vr" source="krenmkVr" />
        <TextField label="mjfr;ekjmgr;g" source="mjfrEkjmgrG" />
        <TextField label="jmf;lejm;lfem" source="jmfLejmLfem" />
        <TextField label=";llvg;relkmv'" source="llvgRelkmv" />
        <TextField label="m;lkremvg;lrem" source="mLkremvgLrem" />
        <TextField label="vklrgemnv;fer" source="vklrgemnvFer" />
        <TextField label="nklren;k" source="nklrenK" />
        <TextField label="nlkvnrg;k" source="nlkvnrgK" />
        <TextField label="fgiuewh" source="fgiuewh" />
        <TextField label="hfljrebfl" source="hfljrebfl" />
        <TextField label="nlfrnlr" source="nlfrnlr" />
        <TextField label="vcvcbcbc" source="vcvcbcbc" />
        <TextField label="ncncnc" source="ncncnc" />
        <TextField label="kc,k,c" source="kcKC" />
        <ReferenceManyField
          reference="Employee"
          target="EmployeeId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="xsdaxsza" source="xsdaxsza" />
            <TextField label="xcsxd" source="xcsxd" />
            <TextField label="xsszxsx" source="xsszxsx" />
            <TextField label="rfuihriuhfi" source="rfuihriuhfi" />
            <TextField label="hfelrhbflrohfrg" source="hfelrhbflrohfrg" />
            <TextField label=";krenmk;vr" source="krenmkVr" />
            <TextField label="mjfr;ekjmgr;g" source="mjfrEkjmgrG" />
            <TextField label="jmf;lejm;lfem" source="jmfLejmLfem" />
            <TextField label=";llvg;relkmv'" source="llvgRelkmv" />
            <TextField label="m;lkremvg;lrem" source="mLkremvgLrem" />
            <TextField label="vklrgemnv;fer" source="vklrgemnvFer" />
            <TextField label="nklren;k" source="nklrenK" />
            <TextField label="nlkvnrg;k" source="nlkvnrgK" />
            <TextField label="fgiuewh" source="fgiuewh" />
            <TextField label="hfljrebfl" source="hfljrebfl" />
            <TextField label="nlfrnlr" source="nlfrnlr" />
            <TextField label="vcvcbcbc" source="vcvcbcbc" />
            <TextField label="ncncnc" source="ncncnc" />
            <TextField label="kc,k,c" source="kcKC" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
