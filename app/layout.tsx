import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* on importe notre police depuis fonts et on ajoute antialiased de tailwind pour lisser la police  */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
