import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { EmployeeTitle } from "./EmployeeTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="employees"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <TextInput label="xsdaxsza" source="xsdaxsza" />
        <TextInput label="xcsxd" source="xcsxd" />
        <TextInput label="xsszxsx" source="xsszxsx" />
        <TextInput label="rfuihriuhfi" source="rfuihriuhfi" />
        <TextInput label="hfelrhbflrohfrg" source="hfelrhbflrohfrg" />
        <TextInput label=";krenmk;vr" source="krenmkVr" />
        <TextInput label="mjfr;ekjmgr;g" source="mjfrEkjmgrG" />
        <TextInput label="jmf;lejm;lfem" source="jmfLejmLfem" />
        <TextInput label=";llvg;relkmv'" source="llvgRelkmv" />
        <TextInput label="m;lkremvg;lrem" source="mLkremvgLrem" />
        <TextInput label="vklrgemnv;fer" source="vklrgemnvFer" />
        <TextInput label="nklren;k" source="nklrenK" />
        <TextInput label="nlkvnrg;k" source="nlkvnrgK" />
        <TextInput label="fgiuewh" source="fgiuewh" />
        <TextInput label="hfljrebfl" source="hfljrebfl" />
        <TextInput label="nlfrnlr" source="nlfrnlr" />
        <TextInput label="vcvcbcbc" source="vcvcbcbc" />
        <TextInput label="ncncnc" source="ncncnc" />
        <TextInput label="kc,k,c" source="kcKC" />
      </SimpleForm>
    </Edit>
  );
};
