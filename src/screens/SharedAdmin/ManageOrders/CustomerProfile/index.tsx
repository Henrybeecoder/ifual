import { CustomerProfile as ProfileTemp } from "@components/Profile";
import image from "../../../../assets/image/profile2Lg.png";

const CustomerProfile = () => {
  return (
    <>
      <ProfileTemp profileImg={image} />
    </>
  );
};

export default CustomerProfile;
