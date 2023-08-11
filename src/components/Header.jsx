import { AuthButtons } from './AuthButtons';
import { Navigation } from './Navigation';
// import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <header className="navbar bg-base-200 shadow-lg">
      <Navigation className="flex-1" />
      {/* <UserMenu className="flex-none" /> */}
      <AuthButtons className="flex-none" />
    </header>
  );
};
