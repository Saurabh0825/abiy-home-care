import AdditionalDescription from '@/Pages/Home/AdditionalDescription';
import FirstDescription from '@/Pages/Home/FirstDescription';
import HomeCards from '@/Pages/Home/HomeCards';
import SecondContent from '@/Pages/Home/SecondContent';

export default function Home() {
  return (
    <div>
      <FirstDescription />
      <SecondContent />
      <HomeCards />
      <AdditionalDescription />
    </div>
  );
}
