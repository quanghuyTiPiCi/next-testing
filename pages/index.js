import BackgroundHacker from '../components/BackgroundHacker';
import Caption from '../components/Caption';
import CardItem from '../components/CardItem';
import CardProfile from '../components/CardProfile';
import CardWater from '../components/CardWater';
import ItemGlass from '../components/ItemGlass';
import LoadingCustomize from '../components/Loading';
import LogoSlider from '../components/LogoSlider';
import { Facebook } from '../facebook';

export default function Home() {
  return (
    <div
    // style={{ display: 'flex', flexDirection: 'column', gap: '0px 0' }}
    >
      <CardWater />
      <CardItem />
      <CardProfile />
      <LoadingCustomize size={7} />
      <LogoSlider />
      <BackgroundHacker />
      <Caption />
      <ItemGlass />
      <Facebook />
    </div>
  );
}
