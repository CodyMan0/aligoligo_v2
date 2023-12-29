import { TargetLayout } from '@/components/layouts/targetLayout';
import { Nav } from '@/components/sections/nav';

import StarBg from './startBg';

export const test = {
  name: 'juyoung',
};

const Home = () => {
  return (
    <div className="relative">
      <Nav user={test} />
      <StarBg />
      <TargetLayout />
    </div>
  );
};

export default Home;
