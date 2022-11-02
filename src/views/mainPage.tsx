import { AboutUsBanner } from "../components/aboutUsBanner";
import { ManagementPhotoGalleryBanner } from "../components/managementPhotoGalleryBanner";
import { OurOfferBanner } from "../components/ourOfferBanner";
import { SpotifyPlaylistBanner } from "../components/spotifyPlaylistBanner";
import { WelcomeBanner } from "../components/welcomeBanner";

const managementMembers = {
  president: { title: "Kajetan Skolmowski", subtitle: "Prezes" },
  otherMembers: [
    { title: "Kajetan Skolmowski", subtitle: "Prezes" },
    { title: "Kajetan Skolmowski", subtitle: "Prezes" },
    { title: "Kajetan Skolmowski", subtitle: "Prezes" },
    { title: "Kajetan Skolmowski", subtitle: "Prezes" },
  ],
};

export function MainPage() {
  return (
    <>
      <WelcomeBanner />
      <AboutUsBanner />
      <ManagementPhotoGalleryBanner {...managementMembers} />
      <SpotifyPlaylistBanner />
      <OurOfferBanner />
    </>
  );
}
