import Image from 'next/image';
export default function Logo() {
  return (
    <div>
      <Image
        src="/logos/shba-logo.png" // Path to your logo image
        alt="Logo"
        layout="intrinsic"
        width={100} //Set the width of the logo
        height={25} // Set the height of the logo
        priority // Load the logo with high priority
      />
    </div>
  );
}