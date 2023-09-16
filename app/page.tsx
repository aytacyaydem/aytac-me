'use client';
import ThemeSwitchButton from '@/components/ThemeSwitchButton';
import { Flex, Text } from '@radix-ui/themes';

export default function Home() {
  // const users = await getAllUsers();

  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <ThemeSwitchButton />
    </Flex>
  );
}
