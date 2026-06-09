export default function Footer() {
  return (
    <footer className="bg-[#D7EEDD] pb-20">

      <div className="mx-auto max-w-7xl">

        <div className="border-t border-black/40 pt-20" />

        <div className="grid grid-cols-4 gap-35">

          {/* Company */}
          <div>
            <h3 className="font-gerbil mb-10 text-[20px]">
              Company
            </h3>

            <ul className="space-y-6 text-[16px]">
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-gerbil mb-10 text-[20px]">
              Terms & Policies
            </h3>

            <ul className="space-y-6 text-[16px]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-gerbil mb-10 text-[20px]">
              Follow Us
            </h3>

            <ul className="space-y-6 text-[16px]">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-gerbil mb-10 text-[20px]">
              Contact
            </h3>

            <div className="space-y-8 text-[16px]">
              <p>
                1498w Fluton ste, STE 2D
                <br />
                Chicago, IL 63867
              </p>

              <p>(123) 456789000</p>

              <p>info@elementum.com</p>
            </div>
          </div>

        </div>

        <p className="mt-32 text-center text-[15px]">
          ©2023 Elementum. All rights reserved
        </p>

      </div>
    </footer>
  );
}