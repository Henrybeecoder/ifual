import { InputTemp, SelectTemp, TextareaTemp } from "@components/InputTemp";
import PageHeader from "@components/PageHeader";
import Layout from "src/containers/LayoutVendor";

const New = () => {
  return (
    <Layout>
      <PageHeader pageTitle='Send a Report' backBtn />
      <div className='input-flex-btwn'>
        <InputTemp label='TITLE' placeholder='Enter Title' marginRight />
        <SelectTemp label='CATEGORY' placeholder='Select Category' marginLeft />
      </div>
      <div className='w-50-lg'>
        <InputTemp
          label='REFERENCE NUMBER'
          placeholder='RE0000001'
          marginRight
        />
      </div>
      <TextareaTemp
        label='DESCRIPTION'
        placeholder='Body of the report'
        rows={6}
      />
    </Layout>
  );
};

export default New;
