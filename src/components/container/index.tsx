// Import dependencies
import { ReactNode } from 'react';

// Define props
type Props = {
  children: ReactNode;
};

// Export Container component
export const Container = ({ children }: Props) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};
