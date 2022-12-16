import { useRouter } from 'next/router';
import BackgroundHacker from '../components/BackgroundHacker';
import Caption from '../components/Caption';
import CardItem from '../components/CardItem';
import CardProfile from '../components/CardProfile';
import CardWater from '../components/CardWater';
import HeaderItem from '../components/HeaderItem';
import ItemGlass from '../components/ItemGlass';
import LoadingCustomize from '../components/Loading';
import LogoSlider from '../components/LogoSlider';
import CitiesSlider from '../components/Slide';

export default function Home() {
  const router = useRouter();

  const handleLanguage = (l) => {
    router.push('/', undefined, { locale: l });
  };
  return (
    <div
    // style={{ display: 'flex', flexDirection: 'column', gap: '0px 0' }}
    >
      <p>{router.locale}</p>

      {/* <CardWater />
      <CardItem />
      <CardProfile /> */}
      {/* <LoadingCustomize size={7} /> */}
      {/* <LogoSlider/> */}
      {/* <BackgroundHacker /> */}
      {/* <Caption /> */}
      {/* <HeaderItem /> */}
      {/* <ItemGlass /> */}
      {/* <CitiesSlider /> */}
    </div>
  );
}
