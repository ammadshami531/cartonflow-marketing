import { SITE } from '../content';

export default function Footer() {
  return (
    <footer className="bg-[#080c14] border-t border-[#1c2642] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-bold text-xl">CartonFlow</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://cartonflow.io/privacy" className="text-[#7c8fad] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://cartonflow.io/terms" className="text-[#7c8fad] hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="https://cartonflow.io/cancellation" className="text-[#7c8fad] hover:text-white transition-colors">
              Cancellation
            </a>
            <a href="https://cartonflow.io/support" className="text-[#7c8fad] hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[#7c8fad] text-sm">
            © 2026 CartonFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
