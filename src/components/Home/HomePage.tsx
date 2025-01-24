import { FC } from 'react';
import ReactTypescriptTemplateLogo from '../../assets/images/react-typescript-template.png';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

console.log(i18n, initReactI18next);

export interface BreadcrumbItems {
  label: string;
  href?: string;
  dataTestId?: string;
}

const OverflowedDropdown = ({ items }: { items: BreadcrumbItems[] }) => (
  <DropdownMenu.Root modal={false}>
    <DropdownMenu.Trigger asChild>...</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content asChild sideOffset={10} align="start">
        {items.map((item) => (
          <DropdownMenu.Item asChild key={JSON.stringify(item)}>
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

const HomePage: FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-2">React Typescript Template</h1>
      <img
        src={ReactTypescriptTemplateLogo}
        width={500}
        className="mx-auto"
        alt="React-Typescript-Template"
      />
      <OverflowedDropdown items={[{ label: 'hello' }]} />
    </div>
  );
};

export default HomePage;
