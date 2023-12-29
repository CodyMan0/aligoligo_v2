import { BottomSheet, Button } from '@/components/common';
import { User } from '@/components/sections/nav/Nav';
import { navItemswithLoggedIn, navItemswithLoggedOut } from '@/lib/constants/nav';

export interface NavItem {
  name: string;
  id: number;
}

interface NavItemsProps {
  items: NavItem[];
}

interface NavBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
  user?: User;
}

const NavBottomSheet = ({ open, onClose, user }: NavBottomSheetProps) => {
  const navItemAsUserExsisted = user ? navItemswithLoggedIn : navItemswithLoggedOut;
  return (
    <>
      <BottomSheet open={open} onDismiss={onClose} fixedMaxHeight={500}>
        <Content items={navItemAsUserExsisted} />
      </BottomSheet>
    </>
  );
};

const Content = ({ items }: NavItemsProps) => (
  <div className="p-xs flex flex-wrap gap-4">
    {items.map(({ name, id }) => (
      <Button variant={'green'} key={id} className="p-2xs" height={'h60'}>
        {name}
      </Button>
    ))}
  </div>
);

export default NavBottomSheet;
