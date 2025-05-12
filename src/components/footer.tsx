import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-between gap-y-4 border-t border-gray-200 py-6">
          <div className="flex flex-col gap-1">
            <Typography className="text-center font-normal !text-gray-700">
              © {CURRENT_YEAR} Mysa Massaggi
            </Typography>
            <Typography className="text-sm !text-gray-500">
              P.IVA: 01278190317
            </Typography>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-[#CB997E] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
