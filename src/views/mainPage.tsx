import { AboutUsBanner } from "../components/aboutUsBanner";
import { ManagementPhotoGalleryBanner } from "../components/managementPhotoGalleryBanner";
import { WelcomeBanner } from "../components/welcomeBanner";

export function MainPage() {
  return (
    <>
      <WelcomeBanner />
      <AboutUsBanner />
      <ManagementPhotoGalleryBanner />
    </>
  );
}
