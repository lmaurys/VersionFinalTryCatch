import React from 'react';

export default function EmailSignature() {
  return (
    <div className="p-8 max-w-2xl bg-white">
      <div className="flex items-center gap-6 border-l-4 border-primary p-4">
        <div>
          <div className="text-2xl font-bold text-dark mb-1">
            <span className="font-mono">try</span>
            <span className="text-primary">{`{`}</span>
            catch
            <span className="text-primary">{`}`}</span>
          </div>
          <div className="text-gray-600 space-y-1">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">felipegranadosgiron@trycatch.com.co</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">+57 3025162433</span>
            </div>
          </div>
        </div>
        <div className="h-16 w-px bg-gray-200"></div>
        <div className="text-sm text-gray-600">
          <div className="font-semibold text-dark mb-1">Soluciones Tecnológicas</div>
          <div>• Software a Medida</div>
          <div>• Cloud Solutions</div>
          <div>• SaaS Platforms</div>
        </div>
      </div>
    </div>
  );
}